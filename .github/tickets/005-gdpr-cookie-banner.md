# Ticket #005: Add GDPR Cookie Consent Banner

**Status**: 🟡 Ready for Development  
**Priority**: P0 - Critical  
**Labels**: `compliance`, `gdpr`, `legal`

---

## User Story

**As a** EU visitor  
**I want to** control my cookie preferences  
**So that** I comply with GDPR regulations

---

## Background

4 out of 5 competitors have GDPR cookie banners. This is legally mandatory for EU traffic and builds trust.

**Gap Analysis Score**: Impact 5/5, Effort 1/5 = **5.0** (tied for highest priority)

---

## Acceptance Criteria

- [ ] Display cookie banner on first visit (bottom of screen)
- [ ] Allow users to accept all, reject all, or customize preferences
- [ ] Categories: Essential, Analytics, Marketing
- [ ] Store consent in localStorage
- [ ] Block Google Analytics until consent given
- [ ] "Privacy Policy" link in banner
- [ ] Dismiss banner after 30 seconds if no action (default: reject)

---

## Technical Design

### Files to Create
```
src/components/CookieBanner.tsx
src/components/__tests__/CookieBanner.test.tsx
src/utils/cookieConsent.ts
```

### Files to Modify
```
src/App.tsx (render banner)
```

---

## Test Plan

- Unit: Test consent storage, analytics blocking
- E2E: Test banner visibility, dismiss, accept/reject flows

**Coverage**: ≥ 90%

---

## Dependencies

None (custom implementation)

---

## Rollback

```bash
git revert HEAD
```

---

## Estimated Effort

**2-3 hours**
