

## Problem

The hero section background images are completely hidden by two fully opaque overlay divs stacked on top:

1. **`gradient-hero`** div — this is a **solid opaque gradient** (`linear-gradient(135deg, hsl(navy) 0%, hsl(navy-light) 50%, hsl(navy) 100%)`) that completely covers the background image
2. A second gradient overlay from navy to navy

The background image div only reaches 0.45 opacity, but even at full opacity it would be invisible under these solid overlays.

## Fix

**File: `src/components/HeroSlider.tsx`**

- Remove the `gradient-hero` overlay div entirely (line 53) — it serves no purpose when there's already a gradient overlay on line 54
- Change the second overlay to be semi-transparent so the image shows through: replace `from-navy via-transparent to-navy/80` with `from-navy/70 via-navy/30 to-navy/70`
- Increase the background image animate opacity from `0.45` to `0.7` so the images are clearly visible behind the tinted overlay

This keeps the dark cinematic look with readable text while actually showing the hero images.

