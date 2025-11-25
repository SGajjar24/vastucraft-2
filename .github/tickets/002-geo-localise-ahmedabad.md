# Ticket #002: Add Geo-localisation for Ahmedabad

**Status**: 🟡 Ready for Development  
**Priority**: P1 - High  
**Labels**: `feature`, `personalization`, `location`

---

## User Story

**As a** user from Ahmedabad or Gujarat  
**I want to** see localized content and recommendations  
**So that** I get relevant Vastu advice for my region

---

## Background

3 out of 5 competitors (VastuScanner, BuildifyAI, VastuGPT-partial) offer geo-localization features. This personalizes the experience and increases local market relevance.

**Gap Analysis Score**: Impact 4/5, Effort 2/5 = **2.0**

---

## Acceptance Criteria

- [ ] Detect user's city via Geolocation API (with permission)
- [ ] Show "Serving Ahmedabad" badge if user is in Gujarat
- [ ] Fallback: IP-based location detection (without permission)
- [ ] Add Ahmedabad-specific content on Contact page (office address, local phone)
- [ ] Store location preference in localStorage (GDPR-compliant)

---

## Technical Design

### Files to Touch
```
src/utils/geo.ts                    (NEW)
src/utils/__tests__/geo.test.ts     (NEW)
src/pages/Contact.tsx               (MODIFY)
src/constants.ts                    (MODIFY - add location data)
```

### Data Model (`constants.ts`)
```typescript
export const AHMEDABAD_OFFICE = {
  address: 'Swastik Cross Roads, C.G. Road, Ahmedabad - 380009, Gujarat',
  phone: '+91 91045 18311',
  email: 'ahmedabad@vastucraftai.com',
  coordinates: { lat: 23.0225, lng: 72.5714 }
};
```

---

## Test Plan

- Unit: Mock geolocation API
- E2E: Test with `page.context().setGeolocation({ latitude: 23.0225, longitude: 72.5714 })`

**Coverage**: ≥ 90%

---

## Lighthouse Target

Performance: ≥ 90 (no impact expected)

---

## Rollback

```bash
git revert HEAD
```

---

## Estimated Effort

**3-4 hours**
