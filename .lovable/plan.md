

## Summary

Replace the placeholder social media icons in the footer with proper Lucide icons (Facebook, Instagram, TikTok) linked to the actual social profiles. Remove the Twitter link since there's no Twitter account.

## Changes

### File: `src/components/Footer.tsx` (lines 81-87)

Replace the generic `.map()` social icons loop with three explicit social links:

- **Facebook** → `https://www.facebook.com/share/1EHErXSVSK/?mibextid=wwXIfr` — use Lucide `Facebook` icon
- **Instagram** → `https://www.instagram.com/tatooshop436?igsh=NHVscmVzbmM1cHRp&utm_source=qr` — use Lucide `Instagram` icon
- **TikTok** → `https://www.tiktok.com/@juniorcarlhenry?_r=1&_t=ZT-95DLbc5CfEL` — use inline SVG TikTok icon (Lucide doesn't have TikTok)

Each link opens in a new tab (`target="_blank" rel="noopener noreferrer"`), uses the same circular button styling, and replaces the current letter-based placeholders with proper icons.

