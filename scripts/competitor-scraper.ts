import axios from 'axios';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

interface CompetitorData {
    name: string;
    url: string;
    heroCopy?: string;
    cta?: string;
    features: string[];
    pricingModel?: string;
    designTokens: {
        primaryColor?: string;
        fontFamily?: string;
    };
    lighthouseScores?: {
        performance: number;
        accessibility: number;
        bestPractices: number;
        seo: number;
    };
    techStack: string[];
    scrapedAt: string;
}

const COMPETITORS = [
    { name: 'AppliedVastu', url: 'https://appliedvastu.com' },
    { name: 'VastuGPT', url: 'https://vastugpt.com' },
    { name: 'AstroVastu', url: 'https://astrovastu.com' },
    { name: 'VastuScanner', url: 'https://vastuscanner.com' },
    { name: 'BuildifyAI', url: 'https://buildify.ai' }
];

// Google PageSpeed Insights API Key
const PSI_API_KEY = 'AIzaSyDummyKeyReplaceWithActual'; // Replace with actual key

async function fetchPageContent(url: string): Promise<string> {
    try {
        const response = await axios.get(url, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
            },
            timeout: 10000
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching ${url}:`, error);
        return '';
    }
}

function extractHeroCopy($: cheerio.CheerioAPI): string {
    // Try common hero selectors
    const heroSelectors = [
        'h1',
        '.hero h1',
        '.hero-title',
        '[class*="hero"] h1',
        'header h1'
    ];

    for (const selector of heroSelectors) {
        const text = $(selector).first().text().trim();
        if (text) return text;
    }

    return 'Not found';
}

function extractCTA($: cheerio.CheerioAPI): string {
    const ctaSelectors = [
        '.cta',
        '.hero button',
        '.hero a[class*="button"]',
        'a[class*="cta"]',
        'button[class*="primary"]'
    ];

    for (const selector of ctaSelectors) {
        const text = $(selector).first().text().trim();
        if (text) return text;
    }

    return 'Not found';
}

function extractFeatures($: cheerio.CheerioAPI): string[] {
    const features: string[] = [];

    // Look for feature lists
    $('ul li, .feature, [class*="feature"]').each((i, elem) => {
        const text = $(elem).text().trim();
        if (text && text.length > 10 && text.length < 200) {
            features.push(text);
        }
    });

    return features.slice(0, 10); // Limit to 10 features
}

function extractDesignTokens($: cheerio.CheerioAPI, html: string): { primaryColor?: string; fontFamily?: string } {
    const tokens: { primaryColor?: string; fontFamily?: string } = {};

    // Extract primary color from CSS variables or inline styles
    const styleContent = $('style').text();
    const colorMatch = styleContent.match(/--primary[^:]*:\s*([^;]+);/) ||
        styleContent.match(/primary-color:\s*([^;]+);/);

    if (colorMatch) {
        tokens.primaryColor = colorMatch[1].trim();
    }

    // Extract font-family
    const fontMatch = styleContent.match(/font-family:\s*([^;]+);/);
    if (fontMatch) {
        tokens.fontFamily = fontMatch[1].trim();
    }

    return tokens;
}

function detectTechStack($: cheerio.CheerioAPI, html: string): string[] {
    const stack: string[] = [];

    // Detect frameworks
    if (html.includes('_next') || html.includes('__NEXT_DATA__')) stack.push('Next.js');
    if (html.includes('react')) stack.push('React');
    if (html.includes('vue')) stack.push('Vue');
    if (html.includes('angular')) stack.push('Angular');

    // Detect analytics
    if (html.includes('google-analytics') || html.includes('gtag')) stack.push('Google Analytics');
    if (html.includes('mixpanel')) stack.push('Mixpanel');

    // Detect chat widgets
    if (html.includes('intercom')) stack.push('Intercom');
    if (html.includes('crisp')) stack.push('Crisp');
    if (html.includes('tawk')) stack.push('Tawk.to');

    return stack;
}

async function getLighthouseScores(url: string): Promise<CompetitorData['lighthouseScores']> {
    try {
        const apiUrl = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&key=${PSI_API_KEY}&category=performance&category=accessibility&category=best-practices&category=seo`;

        const response = await axios.get(apiUrl, { timeout: 60000 });
        const { lighthouseResult } = response.data;

        return {
            performance: Math.round(lighthouseResult.categories.performance.score * 100),
            accessibility: Math.round(lighthouseResult.categories.accessibility.score * 100),
            bestPractices: Math.round(lighthouseResult.categories['best-practices'].score * 100),
            seo: Math.round(lighthouseResult.categories.seo.score * 100)
        };
    } catch (error) {
        console.error(`Error fetching Lighthouse scores for ${url}:`, error);
        return {
            performance: 0,
            accessibility: 0,
            bestPractices: 0,
            seo: 0
        };
    }
}

async function scrapeCompetitor(competitor: { name: string; url: string }): Promise<CompetitorData> {
    console.log(`\nScraping ${competitor.name}...`);

    const html = await fetchPageContent(competitor.url);
    const $ = cheerio.load(html);

    const data: CompetitorData = {
        name: competitor.name,
        url: competitor.url,
        heroCopy: extractHeroCopy($),
        cta: extractCTA($),
        features: extractFeatures($),
        pricingModel: 'Unknown', // Would need specific pricing page scraping
        designTokens: extractDesignTokens($, html),
        techStack: detectTechStack($, html),
        scrapedAt: new Date().toISOString()
    };

    // Fetch Lighthouse scores (can be slow, optional)
    if (PSI_API_KEY !== 'AIzaSyDummyKeyReplaceWithActual') {
        console.log(`  Fetching Lighthouse scores...`);
        data.lighthouseScores = await getLighthouseScores(competitor.url);
    } else {
        console.log(`  Skipping Lighthouse (no API key)`);
    }

    console.log(`  ✓ Scraped ${competitor.name}`);
    return data;
}

async function main() {
    console.log('🔍 Starting competitor research...\n');
    console.log(`Analyzing ${COMPETITORS.length} competitors\n`);

    const results: CompetitorData[] = [];

    for (const competitor of COMPETITORS) {
        const data = await scrapeCompetitor(competitor);
        results.push(data);

        // Rate limiting - wait 2 seconds between requests
        await new Promise(resolve => setTimeout(resolve, 2000));
    }

    // Save results
    const outputPath = path.join(process.cwd(), 'competitive-research', 'raw-data.json');
    fs.writeFileSync(outputPath, JSON.stringify(results, null, 2));

    console.log(`\n✅ Research complete!`);
    console.log(`📄 Data saved to: ${outputPath}`);
    console.log(`\nSummary:`);
    console.log(`  Competitors analyzed: ${results.length}`);
    console.log(`  Total features extracted: ${results.reduce((sum, r) => sum + r.features.length, 0)}`);
}

main().catch(console.error);
