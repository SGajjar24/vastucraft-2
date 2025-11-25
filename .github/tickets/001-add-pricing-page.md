# Ticket #001: Add Pricing Page

**Status**: 🟡 Ready for Development  
**Priority**: P0 - Critical  
**Labels**: `feature`, `high-impact`, `low-effort`, `conversion`

---

## User Story

**As a** potential VastuCraft customer  
**I want to** see transparent pricing options  
**So that** I can make an informed decision about purchasing services

---

## Background

All 5 major competitors (AppliedVastu, VastuGPT, AstroVastu, VastuScanner, BuildifyAI) feature prominent pricing pages. Currently, VastuCraft lacks pricing transparency, which creates friction in the conversion funnel.

**Gap Analysis Score**: Impact 5/5, Effort 1/5 = **5.0** (highest priority)

---

## Acceptance Criteria

### Functional Requirements
- [ ] New `/pricing` route accessible from navbar
- [ ] Display 3 pricing tiers: **Free**, **Pro** ($29/month), **Enterprise** (Contact)
- [ ] Highlight "Pro" as the popular tier with gradient styling
- [ ] Include feature comparison table (minimum 8 features)
- [ ] Add FAQ accordion with 5 common pricing questions
- [ ] CTA buttons: "Start Free" / "Subscribe Now" / "Contact Sales"
- [ ] Mobile-responsive design (stacked cards on <768px)

### Non-Functional Requirements
- [ ] Page load time < 1.5s
- [ ] Lighthouse Performance ≥ 90
- [ ] Lighthouse Accessibility ≥ 95
- [ ] Zero layout shift (CLS < 0.1)

### SEO Requirements
- [ ] Add JSON-LD structured data for `Product` schema
- [ ] Add JSON-LD structured data for `FAQPage` schema
- [ ] Meta title: "Pricing - VastuCraft AI Studio | Affordable Vastu Plans"
- [ ] Meta description (150-160 chars)

---

## Technical Design

### File Structure
```
src/
├── pages/
│   ├── Pricing.tsx              (NEW - main pricing component)
│   └── __tests__/
│       └── Pricing.test.tsx     (NEW - unit tests)
├── constants.ts                 (MODIFY - add pricingPlans array)
├── App.tsx                      (MODIFY - add /pricing route)
└── components/
    └── Navbar.tsx               (MODIFY - add "Pricing" link)

e2e/
└── pricing.spec.ts              (NEW - Playwright E2E tests)
```

### Data Model

Add to `src/constants.ts`:

```typescript
export const PRICING_PLANS = [
  {
    name: 'Free',
    price: 0,
    interval: 'forever',
    description: 'Perfect for exploring Vastu basics',
    features: [
      'AI chatbot with 10 questions/month',
      'Basic Vastu tips',
      'Blog access',
      'Community forum'
    ],
    cta: 'Start Free',
    ctaLink: '/contact',
    popular: false
  },
  {
    name: 'Pro',
    price: 29,
    interval: 'month',
    description: 'For homeowners & renters',
    features: [
      'Unlimited AI consultations',
      'Floor plan analysis',
      'Personalized Vastu reports',
      'Priority email support',
      'Downloadable PDF reports',
      'Mobile app access'
    ],
    cta: 'Subscribe Now',
    ctaLink: '/contact',
    popular: true
  },
  {
    name: 'Enterprise',
    price: null,
    interval: 'project',
    description: 'For architects & builders',
    features: [
      'All Pro features',
      'On-site consultations',
      'Team collaboration tools',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'RERA compliance dashboard'
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    popular: false
  }
];

export const PRICING_FAQS = [
  {
    question: 'Is there a free trial for the Pro plan?',
    answer: 'Yes! All new users get a 14-day free trial of the Pro plan with no credit card required.'
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee if you're not satisfied with the Pro plan.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, Amex), UPI, and net banking for Indian customers.'
  },
  {
    question: 'Is the pricing in USD or INR?',
    answer: 'Prices are shown in USD but automatically converted to INR (₹) at checkout based on current rates.'
  }
];
```

---

## Test Plan

### Unit Tests (`Pricing.test.tsx`)
```typescript
describe('Pricing Page', () => {
  it('renders all 3 pricing tiers', () => { /*...*/ });
  it('highlights Pro plan as popular', () => { /*...*/ });
  it('displays feature comparison correctly', () => { /*...*/ });
  it('renders FAQ accordion with 5 items', () => { /*...*/ });
  it('all CTA links are valid', () => { /*...*/ });
});
```

**Coverage Target**: ≥ 90%

### E2E Tests (`pricing.spec.ts`)
```typescript
test('desktop: pricing page loads and is interactive', async ({ page }) => {
  await page.goto('/pricing');
  await expect(page).toHaveTitle(/Pricing/);
  await page.click('text=Subscribe Now');
  // ... assertions
});

test('mobile: pricing cards stack vertically', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  // ... assertions
});
```

---

## Lighthouse CI Targets

| Metric | Target | Current Baseline |
|--------|--------|------------------|
| Performance | ≥ 90 | 95 (homepage) |
| Accessibility | ≥ 95 | 95 (homepage) |
| Best Practices | ≥ 92 | 92 (homepage) |
| SEO | ≥ 97 | 97 (homepage) |

**Auto-fail PR if any score drops > 3 points**

---

## Implementation Steps

1. Add pricing data to `src/constants.ts`
2. Create `src/pages/Pricing.tsx` component
3. Add `/pricing` route to `src/App.tsx`
4. Update `Navbar.tsx` to include "Pricing" link
5. Write unit tests (`Pricing.test.tsx`)
6. Write E2E tests (`pricing.spec.ts`)
7. Run Lighthouse CI and save report to `.lighthouse/001.json`
8. Commit: `feat: add pricing page (ticket #001)`

---

## Rollback Command

```bash
git revert HEAD  # if already committed
# OR
git checkout -- src/pages/Pricing.tsx src/constants.ts src/App.tsx
```

---

## Design Reference

**Follow existing design system**:
- Import colors from `tailwind.config.js` (use `primary`, `accent`, `surface`)
- Use `font-serif` for headings
- Use `btn-primary` class for CTAs
- Apply `glass-panel` effect for pricing cards
- Use `Reveal` component for animations

**Gradient for Popular Plan**:
```css
background: linear-gradient(135deg, #D4AF37 0%, #FFD700 100%);
```

---

## Dependencies

None (uses existing components)

---

## Estimated Effort

**4-6 hours** (1-2 hours dev + 2-3 hours testing + 1 hour docs)

---

## Success Metrics

- Pricing page traffic → conversion rate baseline established
- Lighthouse scores maintained
- Zero regressions in existing pages
- 90%+ test coverage achieved
