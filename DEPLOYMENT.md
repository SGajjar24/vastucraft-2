# 🚀 VastuCraft AI Studio - Production Deployment Guide

## ✅ Pre-Deployment Checklist

### 1. Build Verification
- [x] Production build completes successfully (`npm run build`)
- [x] No TypeScript errors
- [x] All routes are working
- [x] All navigation links verified

### 2. Content Verification
- [ ] All images loading correctly
- [ ] Contact information accurate in `src/constants.ts`
- [ ] Social media links working
- [ ] Phone numbers and email addresses correct
- [ ] WhatsApp link functional

### 3. Navigation & Routing
All routes tested and functional:
- [x] `/` - Home
- [x] `/about` - About Us
- [x] `/services` - Services
- [x] `/vastu` - Vastu Consulting
- [x] `/ai-construction` - AI Technology
- [x] `/portfolio` - Portfolio
- [x] `/pricing` - Pricing
- [x] `/contact` - Contact Form
- [x] `/connect` - Digital Visiting Card
- [x] `/blog` - Blog
- [x] `/privacy` - Privacy Policy
- [x] `/terms` - Terms of Service

### 4. Interactive Features
- [ ] Contact form submitting to Web3Forms
- [ ] Cookie consent banner working
- [ ] Testimonials carousel auto-rotating
- [ ] Pricing FAQ accordion functioning
- [ ] Digital Card vCard download working
- [ ] Digital Card share functionality tested

### 5. SEO & Performance
- [x] Meta tags present on all pages
- [x] Proper heading hierarchy (H1, H2, H3)
- [x] Images optimized
- [x] Code splitting implemented
- [x] Security headers configured in `vercel.json`

---

## 🔧 Vercel Deployment Steps

### Step 1: Push to GitHub

```bash
git add .
git commit -m "Production ready: VastuCraft AI Studio"
git push origin main
```

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Select `vastucraft-ai` (or your repo name)

### Step 3: Configure Build Settings

Vercel should auto-detect these settings:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

### Step 4: Add Environment Variables

Add these in Vercel Dashboard → Project Settings → Environment Variables:

```env
# Web3Forms API Key (for contact form)
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_key_here
```

*Optional (if using Gemini chatbot):*
```env
API_KEY=your_gemini_api_key_here
```

### Step 5: Deploy

Click "Deploy" and wait for the build to complete.

### Step 6: Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain (e.g., `vastucraftai.com`)
3. Update DNS records as instructed by Vercel

---

## 🔗 Navigation Link Map

### Header Navigation (Navbar)
- **About** → `/about`
- **Services** → `/services`
- **Vastu** → `/vastu`
- **AI Tech** → `/ai-construction`
- **Portfolio** → `/portfolio`
- **Pricing** → `/pricing`
- **Connect** → `/connect`
- **Book Consultation** → `tel:+919104518311`

### Footer Links

**Explore Section:**
- About Us → `/about`
- Services → `/services`
- Portfolio → `/portfolio`
- Blog → `/blog`
- Contact → `/contact`
- Digital Card → `/connect`

**Expertise Section:**
- Architecture → `/services#architecture`
- Interior Design → `/services#interiors`
- Vastu Consulting → `/services#vastu`
- AI Monitoring → `/services#ai-tech`
- Facade Design → `/services#exterior`

**Legal Links:**
- Privacy Policy → `/privacy`
- Terms of Service → `/terms`

### Digital Visiting Card (`/connect`)
- **Call** → `tel:+919104518311`
- **Chat** → WhatsApp link from `constants.ts`
- **Email** → `mailto:contact@vastucraftai.com`
- **Visit** → Google Maps link
- **Instagram** → Social link from `constants.ts`
- **LinkedIn** → Social link from `constants.ts`
- **Website** → `https://vastucraftai.com`
- **Back to Website** → `/`

---

## 📝 Content Management

All dynamic content is managed in **`src/constants.ts`**:

### Contact Information
```typescript
export const CONTACT_INFO = {
  PHONE: '+919104518311',
  PHONE_DISPLAY: '+91 91045 18311',
  EMAIL: 'contact@vastucraftai.com',
  // ... etc
}
```

### Social Media Links
```typescript
export const SOCIAL_LINKS = {
  INSTAGRAM: 'https://instagram.com/vastucraftai',
  LINKEDIN: 'https://linkedin.com/company/vastucraftai',
  TWITTER: 'https://twitter.com/vastucraftai'
}
```

See [`CONTENT_MANAGEMENT.md`](../brain/8315c486-5648-42e5-a5ad-cc93128cfd8e/CONTENT_MANAGEMENT.md) for detailed instructions.

---

## 🔍 Post-Deployment Testing

After deployment, test these critical paths:

1. **Homepage** → Click "Explore Services" → Should land on `/services`
2. **Services Page** → Click any service card → Should scroll to section
3. **Portfolio** → Filter projects → Should update grid
4. **Contact Form** → Submit test form → Should receive email
5. **Digital Card** → Download vCard → Should download `.vcf` file
6. **Mobile Navigation** → Open hamburger menu → All links working

---

## 🛡️ Security Features

✅ **Configured in `vercel.json`:**
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `X-XSS-Protection: 1; mode=block`
- `Strict-Transport-Security` (HSTS)
- `Referrer-Policy: strict-origin-when-cross-origin`

✅ **HTTPS Only** (enforced by Vercel)

✅ **No API Keys Exposed** (contact form uses Web3Forms backend)

---

## 📊 Performance Optimization

✅ **Code Splitting**: Routes lazy-loaded via React Router  
✅ **Image Optimization**: Vite image optimizer plugin  
✅ **CSS Minification**: Tailwind purge in production  
✅ **Chunk Splitting**: Manual chunks for vendor code  

**Expected Lighthouse Scores:**
- Performance: 90+
- Accessibility: 95+
- Best Practices: 100
- SEO: 100

---

## 🐛 Troubleshooting

### Build Fails on Vercel
- Check TypeScript errors: `npm run build` locally
- Verify all imports use correct casing
- Ensure all dependencies are in `package.json`

### Contact Form Not Working
- Verify `VITE_WEB3FORMS_ACCESS_KEY` is set in Vercel
- Check Web3Forms dashboard for submissions
- Test with a real email address

### Digital Card Share Not Working
- Web Share API only works on HTTPS (production)
- Fallback copies link to clipboard on desktop

### Routes Return 404
- Ensure `vercel.json` has SPA rewrite rules
- Check that `dist/index.html` exists after build

---

## 📞 Support

For deployment issues, contact the development team or refer to:
- [Vercel Documentation](https://vercel.com/docs)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)

---

**Last Updated**: 2024-11-26  
**Version**: 1.0.0
