# Ticket #004: Add Testimonials Carousel

**Status**: 🟡 Ready for Development  
**Priority**: P0 - Critical  
**Labels**: `feature`, `social-proof`, `conversion`

---

## User Story

**As a** potential customer  
**I want to** see reviews from satisfied clients  
**So that** I trust VastuCraft's services

---

## Background

4 out of 5 competitors showcase testimonials prominently. Social proof is critical for conversion.

**Gap Analysis Score**: Impact 4/5, Effort 1/5 = **4.0**

---

## Acceptance Criteria

- [ ] Add testimonials section on Home page (below About)
- [ ] Display 6 testimonials in a swipeable carousel
- [ ] Include client photo, name, location, rating (5 stars), and quote
- [ ] Auto-play with 5-second intervals (pause on hover)
- [ ] Mobile-responsive (1 card on mobile, 3 on desktop)

---

## Technical Design

### Files to Create
```
src/components/TestimonialsCarousel.tsx
src/components/__tests__/TestimonialsCarousel.test.tsx
```

### Files to Modify
```
src/pages/Home.tsx (integrate carousel)
src/constants.ts (add testimonials data)
```

### Data Model
```typescript
export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rajesh Patel',
    location: 'Ahmedabad, Gujarat',
    photo: '/images/testimonials/rajesh.jpg',
    rating: 5,
    quote: 'VastuCraft helped us design our dream home with perfect Vastu compliance. Highly recommended!'
  },
  // ... 5 more
];
```

---

## Test Plan

- Unit: Test carousel navigation, auto-play, pause
- E2E: Test swipe gestures on mobile

**Coverage**: ≥ 90%

---

## Dependencies

```bash
npm install embla-carousel-react
```

---

## Rollback

```bash
npm uninstall embla-carousel-react
git revert HEAD
```

---

## Estimated Effort

**3-4 hours**
