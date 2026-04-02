

## Summary

Update the website with inclusive imagery featuring Black professionals, simplify service card designs, and add "Call Now" buttons throughout that trigger a phone call to (321) 209-5447. The secondary number (772) 318-9232 will be displayed in the footer and contact page for reference only.

## Changes

### 1. Generate new hero images with Black cleaning professionals
**File: `src/assets/` (3 new images via AI generation)**

Generate 3 new hero slider images featuring Black cleaning professionals at work in homes and offices. Replace the current hero slide imports in `HeroSlider.tsx`.

### 2. Update all Unsplash image URLs across the site to feature Black professionals
**Files: `Home.tsx`, `About.tsx`, `Services.tsx`, `Contact.tsx`**

Replace all existing Unsplash image URLs with ones featuring Black professionals in cleaning/professional settings:
- Home "Why Choose Us" section image
- About page team photo and guarantee section photo
- Services page header background
- Contact page header background

### 3. Simplify service cards and add "Call Now" buttons
**File: `src/pages/Services.tsx`**

- Make each service card cleaner/simpler with shorter descriptions
- Add a "Call Now" button (`<a href="tel:3212095447">`) under each service card that triggers a phone call to (321) 209-5447

### 4. Add "Call Now" buttons on Home page service cards
**File: `src/pages/Home.tsx`**

- Add a "Call Now" phone button under each of the 3 service preview cards
- Update CTA buttons throughout (hero, bottom CTA) to also use `tel:3212095447` as the primary action

### 5. Update HeroSlider CTA to call
**File: `src/components/HeroSlider.tsx`**

- Change "Get Free Estimate" button from `Link to="/contact"` to `<a href="tel:3212095447">` so it triggers a call

### 6. Update phone numbers across the site
**Files: `Footer.tsx`, `Contact.tsx`**

- Footer: Display primary number (321) 209-5447 and secondary number (772) 318-9232
- Contact page: Update phone info to show both numbers, primary as clickable call link, secondary as alternate contact

### 7. Update CTA sections site-wide
**Files: `Home.tsx`, `Services.tsx`, `About.tsx`**

- Change "Get Your Free Quote" / "Contact Us Today" CTA buttons to "Call Now" buttons using `<a href="tel:3212095447">`

## Technical Details

- Phone call buttons use standard HTML `<a href="tel:3212095447">` which works on mobile (opens dialer) and desktop (opens calling app)
- Primary number for all call buttons: (321) 209-5447
- Secondary number (772) 318-9232 shown in footer and contact page only, not on buttons
- New hero images generated via AI image generation tool, saved to `src/assets/`
- Unsplash URLs updated to feature diverse/inclusive professional imagery

