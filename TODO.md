# TODO — Modern minimalist homepage (WCM Ghana)

## Plan
- [ ] Inspect existing homepage/section components and styling tokens (navy/gold/typography).
- [ ] Map required official document images to existing `src/assets/*` files.
- [ ] Update `src/styles.css` to load Montserrat (headings) and Raleway (body), and adjust color tokens to match #0B2D5C and #D4AF37.
- [ ] Redesign `src/routes/index.tsx` to include the required sections:
  - [ ] About (Mahama + Naana photos + foreword excerpt)
  - [ ] Policy Framework (initiative grid + panel discussion visuals)
  - [ ] Leadership (circular portraits)
  - [ ] Events (inaugural programme outline + panel images)
  - [ ] Partners (logo grid)
  - [ ] Contact (address/email/phone + embedded Google Map)
- [ ] Replace/update favicon to the navy-blue striped Ghana map sphere (wire to `public/` / manifest if needed).
- [ ] Ensure consistent rounded corners + subtle shadows for images.
- [ ] Build/test: run `npm`/`vite` preview and verify layout responsiveness.
