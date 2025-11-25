# Ticket #003: Add Gujarati Language Support (i18n)

**Status**: 🟡 Ready for Development  
**Priority**: P1 - High  
**Labels**: `feature`, `i18n`, `regional`, `gujarati`

---

## User Story

**As a** Gujarati-speaking user  
**I want to** view the website in my native language  
**So that** I can better understand the Vastu concepts

---

## Background

VastuGPT offers 4 languages (Hindi, Gujarati, Tamil, English). This is a strong regional play for the Gujarat market.

**Gap Analysis Score**: Impact 5/5, Effort 3/5 = **1.7**

---

## Acceptance Criteria

- [ ] Support 2 locales: `en` & `gu`
- [ ] Language switcher in Navbar (flag icons or dropdown)
- [ ] Translate all UI strings (Home, About, Services, Contact, Pricing)
- [ ] Auto-detect `Accept-Language` header; fallback to `en`
- [ ] Store language preference in localStorage

---

## Technical Design

### Files to Create
```
src/i18n/routing.ts
messages/en.json
messages/gu.json
src/components/LanguageSwitcher.tsx
```

### Files to Modify
```
src/components/Navbar.tsx
src/App.tsx (or _app.tsx)
package.json (add next-intl or react-i18next)
```

---

## Test Plan

- Unit: Test language switching logic
- E2E: Test with `Accept-Language: gu` header

**Coverage**: ≥ 85% (translations not counted)

---

## Dependencies

```bash
npm install next-intl
```

---

## Rollback

```bash
npm uninstall next-intl
git revert HEAD
```

---

## Estimated Effort

**8-10 hours** (2 hours setup + 6-8 hours translation)
