# Competitor Gap Analysis Matrix

*Generated: 2025-11-25*

## Executive Summary

Analysis of **5 key competitors** across **12 critical features** reveals VastuCraft AI Studio has strong foundations but is missing 5 high-impact features that could increase market competitiveness.

---

## Feature Comparison Matrix

| Feature | AppliedVastu | VastuGPT | AstroVastu | VastuScanner | BuildifyAI | **Our Status** | Impact | Effort | Score |
|---------|:------------:|:--------:|:----------:|:------------:|:----------:|:--------------:|:------:|:------:|:-----:|
| **AI Floor-plan Analysis** | ✖ | ✔ | ✖ | ½ | ✔ | ✔ (via Gemini) | 5 | 1 | ✅ **5.0** |
| **3D Viewer** | ✖ | ✔ | ✖ | ½ | ✔ | ✖ | 4 | 5 | 0.8 |
| **Vastu Score Calculator** | ✔ | ✔ | ✔ | ✔ | ✔ | ✖ | 5 | 2 | ✅ **2.5** |
| **Pricing Page** | ✔ | ✔ | ✔ | ✔ | ✔ | ✖ | 5 | 1 | ✅ **5.0** |
| **Blog / Content Hub** | ✔ | ✔ | ✔ | ½ | ✔ | ✔ | 3 | 1 | 3.0 |
| **Geo-localisation** | ✖ | ½ | ✖ | ✔ | ✔ | ✖ | 4 | 2 | ✅ **2.0** |
| **Dark Mode** | ✖ | ✔ | ✖ | ✔ | ½ | ✖ | 3 | 1 | 3.0 |
| **PWA (Offline)** | ✖ | ✖ | ✖ | ✔ | ½ | ✖ | 4 | 4 | 1.0 |
| **Testimonials Section** | ✔ | ½ | ✔ | ½ | ✔ | ✖ | 4 | 1 | ✅ **4.0** |
| **Free Tier / Freemium** | ✖ | ✔ | ✖ | ✔ | ✖ | ½ (limited) | 5 | 2 | 2.5 |
| **Gujarati Language** | ✖ | ✔ | ✖ | ½ | ✖ | ✖ | 5 | 3 | ✅ **1.7** |
| **GDPR Cookie Banner** | ½ | ✔ | ✖ | ✔ | ✔ | ✖ | 5 | 1 | ✅ **5.0** |

**Legend:**  
✔ = Fully implemented | ½ = Partially implemented | ✖ = Not present

---

## Impact vs Effort Calculation

**Formula**: `Score = Impact / Effort` (where Impact & Effort are 1-5 scale)

- **Impact**: Business value (user acquisition, retention, revenue)
- **Effort**: Development complexity (LOC, dependencies, testing)

---

## 🎯 Top 5 High-Impact, Low-Effort Gaps

### 1. **Pricing Page** ⭐⭐⭐⭐⭐
- **Impact**: 5/5 (Critical for conversion)
- **Effort**: 1/5 (Single page component)
- **Score**: 5.0
- **Why**: All 5 competitors have this. Essential for trust & transparency
- **Files to touch**:
  - `src/pages/Pricing.tsx` (new)
  - `src/constants.ts` (add pricing data)
  - `src/App.tsx` (add route)

---

### 2. **GDPR Cookie Banner** ⭐⭐⭐⭐⭐
- **Impact**: 5/5 (Legal compliance, especially for EU users)
- **Effort**: 1/5 (Small component + localStorage)
- **Score**: 5.0
- **Why**: 4/5 competitors have this. GDPR is mandatory for EU traffic
- **Files to touch**:
  - `src/components/CookieBanner.tsx` (new)
  - `src/App.tsx` (integrate)

---

### 3. **Testimonials Carousel** ⭐⭐⭐⭐
- **Impact**: 4/5 (Social proof drives conversions)
- **Effort**: 1/5 (Existing `Reveal` component + swipe library)
- **Score**: 4.0
- **Why**: 4/5 competitors showcase testimonials prominently
- **Files to touch**:
  - `src/components/TestimonialsCarousel.tsx` (new)
  - `src/pages/Home.tsx` (add section)
  - `src/constants.ts` (add testimonials data)

---

### 4. **Vastu Score Calculator** ⭐⭐⭐
- **Impact**: 5/5 (Core feature differentiation)
- **Effort**: 2/5 (Algorithm + UI)
- **Score**: 2.5
- **Why**: ALL 5 competitors offer scoring. We need parity
- **Files to touch**:
  - `src/utils/vastuScore.ts` (new algorithm)
  - `src/pages/VastuScoreCalculator.tsx` (new page)
  - `src/components/ScoreGauge.tsx` (chart component)

---

### 5. **Geo-localisation (Ahmedabad)** ⭐⭐
- **Impact**: 4/5 (Personalization for local market)
- **Effort**: 2/5 (Geolocation API + city data)
- **Score**: 2.0
- **Why**: 3/5 competitors localise content; improves relevance
- **Files to touch**:
  - `src/utils/geo.ts` (new)
  - `src/pages/Contact.tsx` (add location detection)
  - `src/constants.ts` (add Ahmedabad data)

---

### Honorable Mention: **Gujarati i18n**
- **Impact**: 5/5 (Massive for Gujarat/India market)
- **Effort**: 3/5 (i18n setup + translations)
- **Score**: 1.7
- **Why**: VastuGPT offers 4 languages; strong regional play
- *Recommended for Sprint 2 due to translation workload*

---

## Competitor Performance Analysis

### Lighthouse Scores (Average)

```
AppliedVastu:    Performance 92 | A11y 88 | Best Practices 95 | SEO 94
VastuGPT:        Performance 85 | A11y 91 | Best Practices 87 | SEO 96
AstroVastu:      Performance 78 | A11y 82 | Best Practices 81 | SEO 89
VastuScanner:    Performance 94 | A11y 95 | Best Practices 92 | SEO 91
BuildifyAI:      Performance 88 | A11y 93 | Best Practices 90 | SEO 97
---
OUR TARGET:      Performance 95 | A11y 95 | Best Practices 92 | SEO 97
```

**Insight**: VastuScanner and BuildifyAI lead in performance. Our target is to match best-in-class.

---

## Design Token Insights

| Competitor | Primary Color | Font Family |
|------------|---------------|-------------|
| AppliedVastu | `#2c4a3c` (Forest green) | Inter |
| VastuGPT | `#6366f1` (Indigo) | Poppins |
| AstroVastu | `#8b5cf6` (Purple) | Lora (serif) |
| VastuScanner | `#10b981` (Emerald) | Roboto |
| BuildifyAI | `#f59e0b` (Amber) | Inter |
| **VastuCraft** | `#D4AF37` (Gold) | font-serif/font-sans |

**Insight**: We're the only gold-themed brand. Strong differentiation.

---

## Tech Stack Comparison

| Tech | Competitors Using |
|------|-------------------|
| Next.js | VastuGPT, BuildifyAI |
| React | All (5/5) |
| TailwindCSS | VastuGPT, BuildifyAI |
| PWA | VastuScanner |
| Intercom/Chat | AppliedVastu, BuildifyAI |
| Google Analytics | All (5/5) |

**Our Stack**: React + Vite + TailwindCSS + TypeScript ✅

---

## Pricing Model Analysis

| Competitor | Model | Price Range |
|------------|-------|-------------|
| AppliedVastu | Subscription | $29/mo - $199/yr |
| VastuGPT | Freemium | Free - $49/mo |
| AstroVastu | Pay-per-session | $149/session |
| VastuScanner | Freemium Mobile | Free - $4.99/mo |
| BuildifyAI | Enterprise | $999+/project |

**Recommendation**: Adopt **freemium model** like VastuGPT to maximize top-of-funnel.

---

## Next Steps: Implementation Priority

### **Sprint 1** (Current - Top 5 Gaps)
1. ✅ Pricing Page (Ticket #001)
2. ✅ GDPR Cookie Banner (Ticket #005)
3. ✅ Testimonials Carousel (Ticket #004)
4. ⚠️ Geo-localisation Ahmedabad (Ticket #002)
5. ⚠️ Vastu Score Calculator (New ticket #006)

### **Sprint 2** (Future)
- Gujarati i18n (Ticket #003)
- Dark Mode
- PWA capabilities

### **Sprint 3** (Long-term)
- 3D Viewer (high effort)
- Mobile app (React Native)

---

## Rollback Strategy

All tickets will include:
- Unit test coverage ≥ 90%
- Feature flags for instant rollback
- Lighthouse CI gating (no score drop > 3 points)

---

**Generated by**: VastuCraft AI Studio Research Team  
**Data Source**: `competitive-research/raw-data.json`  
**Methodology**: Manual feature extraction + automated scoring algorithm
