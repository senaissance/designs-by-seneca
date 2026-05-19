# Seneca Rubianes — Portfolio Website Design Brief
*Comprehensive implementation prompt for Claude or any design tool*

---

## 1. WHO THIS IS FOR

**Client:** Seneca Rubianes
**Business:** Solo web design and digital design services
**Location:** California
**Tagline:** "Let's make this simple" / subheadline: "Websites and design for people who just want it to work."

**Ideal clients:**
- Small business owners, local shops, nonprofits
- Creative freelancers and independent professionals
- Startups that have been established for a bit
- People aged roughly Gen Z to Boomer who feel intimidated by tech and want simplicity and trust

---

## 2. BRAND VOICE & PERSONALITY

This is the most critical design constraint. Everything — copy, layout, interaction — should feel like:

> "I've got you, I'll walk you through it, we'll make it simple."

**Personality adjectives:** calm, friendly, patient, clear, creative but not loud, modern but not cold, warm but not overly cute, confident but never arrogant, grounded and practical.

**Voice rules (strictly enforced):**
- Short clear sentences mixed with slightly longer reflective ones
- Casual but intentional language
- No jargon unless immediately explained in plain terms
- No hype language ("revolutionary," "cutting-edge," "disrupting")
- No corporate phrasing
- No "this, not that" sentence structures
- No AI-sounding construction
- Natural reassurances woven in: "We'll keep this simple." / "You don't need to figure everything out before we start." / "I'll guide you through it."
- The voice is confident but never distant

**Emotional outcome for the client:**
After visiting this site, a client should feel relieved, clearer, more confident, like tech is no longer something they avoid, like they finally "have someone" who gets it.

**Brand essence (one sentence):**
Helping people turn confusing ideas about design and websites into something simple, clear, and genuinely easy to use — without the overwhelm.

---

## 3. SERVICES (exact names and framing)

### New Website
Most popular service. For people who don't have a site or have one that doesn't represent them. Built from scratch, designed around what their customers need to see. Best for: small businesses and local shops, creative freelancers and independent professionals, nonprofits and community organizations, startups ready to show up online.

### Website Redesign
For people who already have a site but something's off — it looks dated, doesn't reflect who they are, or is hard to use. Frame it as: "revamping an existing site." Not a rebuild, a fresh start.

### Digital Extras
The lighter, more playful tier. Digital business cards, branded shareable graphics, simple one-page leave-behinds, custom digital invitations and cards. This is the low-stakes entry point. Position it as dessert, not the main course — listed last, described briefly and warmly. Do NOT position it as competing with the main services.

---

## 4. SITE STRUCTURE (all 10 sections, in order)

1. **Navigation** — sticky, hides on scroll down, returns on scroll up
2. **Hero** — name, tagline, photo of Seneca, two CTAs
3. **Problem Strip** — a single powerful sentence acknowledging the client's pain: "Having a website shouldn't feel like a second job. If you've been putting it off, avoiding it, or just feeling stuck — that's exactly where I come in."
4. **Services** — 3 cards: New Website, Website Redesign, Digital Extras
5. **How It Works** — 4 steps: We talk → I design → We refine → You launch
6. **Pricing** — 3 tiers with honest ranges, featured center card (New Website starting at $800, Redesign starting at $500, Digital Extras starting at $75). Note: every quote is free, nothing gets added without sign-off.
7. **Before & After** — placeholder for future client work; 3 placeholder cards labeled "Project coming soon"
8. **Testimonials** — placeholder; styled star rating + coming-soon message
9. **About** — short personal section with Seneca's photo; voice: warm, first-person, approachable
10. **Contact / Quote Form** — fields: name, email, service type (dropdown), message. Action connects to Formspree. Include a floating "Get a quote" button that appears after scrolling past the hero.
11. **Footer** — name, tagline ("Design that makes sense."), nav links, social placeholders (Instagram, LinkedIn)

**What to leave out:** blog, portfolio case studies, chat widgets, login/booking integrations, testimonials section body (placeholder only for now)

---

## 5. VISUAL DIRECTION — DICHROIC GLASS SCULPTURE

This is the core aesthetic direction. Reference: dichroic art glass (think Dale Chihuly), not soap bubble cartoons, not frosted glass UI, not neon glow blobs.

### The concept
The site should feel like being immersed in a dichroic glass sculpture at golden hour — warm amber sunset light moving across a collection of vibrantly colored glass objects. The glass catches, bends, and refracts that light, giving each piece a new shade depending on where the light hits.

### What dichroic glass actually does (build to this)
- Shows different colors depending on viewing angle (e.g., reflects blue-green, transmits gold-red)
- Has a metallic, slightly reflective quality
- Colors are jewel-toned and rich: deep ruby, cobalt, amber, emerald, amethyst
- The iridescence is FLEETING — you catch it for a moment as the light moves, like the colors changing in a bubble just before it pops
- It is NOT a rainbow. It is NOT neon. It is NOT a full spectrum sweep.
- The color shift happens in the overlap of transparent forms — where two tinted glass surfaces overlap, the colors blend because they are both translucent

### What to avoid (explicitly)
- No rainbow color cycling
- No garish neon blobs
- No frosted/blurred glass (backdrop-filter blur defeats the purpose — real glass is transparent)
- No flat cartoon bubble shapes with colored outlines
- No sharp-edged geometric shapes
- No fog or smoke aesthetic
- No "elementary glow blob" look

### Background
- Near-void darkness: `#04030C` — essentially black with a faint purple tinge
- A warm golden-hour ambient glow from below center, like a setting sun just below the frame — creates the "sunset" feeling without being literal
- Deep cool shadow at top (indigo), warm amber low on the page

### Glass sculpture elements (background hero objects)
Three large, organic, amorphous glass forms sit in the hero background. They are NOT blurred circles. Each is a layered radial gradient that simulates:
1. The glass body's jewel tint (very transparent — 15–30% opacity max)
2. A back-hemisphere shadow that gives the object volume
3. A cursor-driven specular highlight — a warm gold ellipse that appears on the face of the object when the cursor is near, exactly where real light would hit
4. A secondary micro-specular — a tiny pure-white pinpoint near the primary specular
5. Rim lighting from the ambient sunset (warm amber crescent on the edges)
6. A faint outer glow of the transmitted color

Glass object colors:
- Object 1 (upper right, largest): deep ruby — `rgba(160,20,60,0.28)` tint
- Object 2 (lower left): cobalt blue — `rgba(20,50,180,0.32)` tint
- Object 3 (center, smaller): amber/gold — `rgba(200,120,10,0.30)` tint

### Glass spheres (floating)
Six glass balls of varying sizes float in the hero. These are NOT colored circles with borders. They are rendered as physically accurate glass spheres:

Each sphere has these layers (using CSS radial-gradient stacking):
1. Primary specular highlight — warm gold ellipse, position driven by cursor via JS (`--spec-x`, `--spec-y` CSS vars)
2. Secondary micro-specular — smaller pure white dot offset from primary
3. Body tint — very faint jewel color (amethyst, cobalt, ruby, teal, amber, violet)
4. Back-hemisphere shadow — a dark radial gradient at 60–65% from center, creates the sphere volume
5. Rim lighting — inset box-shadow simulating ambient light catching the glass edge
6. Transmitted light below — a soft colored glow cast beneath the sphere

Sphere sizes and colors:
- Ball 1: 130px, amethyst/violet
- Ball 2: 70px, cobalt blue (smaller, lower left)
- Ball 3: 180px, ruby red (largest, upper right)
- Ball 4: 45px, teal/emerald (tiny)
- Ball 5: 95px, amber/gold
- Ball 6: 55px, deep violet

Spheres float with gentle, slightly different animation rhythms (18–30s each, slight rotation drift).

### Iridescent text
Used sparingly — only for key accent words (e.g., "simple" in the hero headline). NOT a full rainbow. THREE tones only, cycling very slowly (9–11s):
- Soft violet: `#e0c8ff`
- Aqua: `#80e4ff`
- Pale rose: `#ffb8d8`
Back to violet — loops. Background-size at 260%, animation ease-in-out.

### Glass panels (cards for services, pricing, testimonials)
These are THIN GLASS PANELS, not frosted tiles.

Rules:
- Background: `rgba(255,255,255,0.025)` — barely there
- NO `backdrop-filter: blur` — real glass doesn't frost
- Border: `1px solid rgba(255,255,255,0.10)`
- One bright thin line across the top edge — like catching a glass pane at an angle. Gradient: transparent → warm amber → white → soft violet → transparent
- A subtle diagonal face sheen (top-left to bottom-right, `rgba(255,255,255,0.045)` to transparent) — simulates the angle of the glass face
- On hover: `border-color` brightens to `rgba(255,255,255,0.18)`, card lifts `translateY(-5px)`, top edge line becomes fully visible
- Cursor-driven specular wash: a broad, soft gold radial gradient centered at `var(--spec-x)` / `var(--spec-y)`, opacity proportional to `var(--intensity)` (0–1)
- 3D tilt on hover: `perspective(900px) rotateX()` and `rotateY()` based on cursor position within the card (max ±8 degrees)

---

## 6. CURSOR LIGHT SYSTEM

This is the signature interactive feature.

### The cursor
- Hide the default OS cursor: `cursor: none` on `body`
- Replace with two elements:
  1. **Cursor dot** — 8px circle, warm gold, with a soft glow: `rgba(255,220,120,0.9)`, box-shadow glow. Follows cursor with minimal lag (direct position).
  2. **Cursor light** — 700px radial gradient div, `mix-blend-mode: screen`, centered on cursor. Warm gold in center fading to magenta/transparent. Follows with 8% lerp (smooth lag for elegance).

### Per-element lighting (the key system)
Every glass element has `data-glass` attribute. JavaScript calculates:

```
For each [data-glass] element:
  1. Get element bounding rect and center point
  2. Calculate vector from element center → cursor position (using the smoothed light position, not raw cursor)
  3. Distance: sqrt(dx² + dy²)
  4. Intensity: max(0, 1 - dist/700)² — quadratic falloff
  5. Normalized direction: (dx/dist, dy/dist)
  6. Specular X = 50 + normDx × 32 (% on element surface)
  7. Specular Y = 50 + normDy × 32
  8. Set CSS vars: --spec-x, --spec-y, --intensity on the element
```

The CSS then uses `var(--spec-x)`, `var(--spec-y)`, and `calc(var(--intensity) * n)` to position and scale the specular highlight gradient.

For flat panels: specRange = 22 (wider, softer wash)
For spheres/objects: specRange = 32 (more directional, tighter)

### Cursor dot state
Grows from 8px to 16px and becomes 50% opacity when hovering interactive elements (links, buttons, cards). This signals interactivity without a cursor label.

### Mobile
On screens ≤ 900px: disable the cursor system entirely (`cursor: auto` on body, hide `.cursor-light` and `.cursor-dot`). The glass elements still look beautiful without the interaction.

---

## 7. TYPOGRAPHY

**Fonts:** Google Fonts
- Body + UI: `DM Sans` (weights: 300, 400, 500, 600, 700)
- Display / italic accents: `DM Serif Display` (used for step numbers in the "How it works" section, and optionally large italic display moments)

**Scale:**
- h1: `clamp(2.8rem, 6.5vw, 5rem)`
- h2: `clamp(2rem, 4vw, 3rem)`
- h3: `clamp(1.1rem, 2vw, 1.35rem)`
- Body: 0.93–1rem
- Labels/tags: 0.7rem, 600 weight, 0.16em letter-spacing, uppercase

**Colors:**
- Headings: `#FFFFFF`
- Body text: `rgba(242,238,255,0.75)` (off-white with a slight violet cast — reads as warm white on dark)
- Muted text: `rgba(242,238,255,0.5)`
- Subtle text: `rgba(242,238,255,0.28)`

---

## 8. ANIMATIONS

**Scroll reveal:** All sections fade up (`translateY(32px)` → 0, `opacity: 0` → 1) using IntersectionObserver at `threshold: 0.1`. Cards within sections stagger with `transition-delay` of 0.1s, 0.22s, 0.34s, 0.46s.

**Hero float:** The photo wrap gently rises and falls (`translateY -14px`) over 9 seconds, ease-in-out, infinite.

**Photo morphing:** The photo border-radius animates between 3 organic states over 17 seconds — never a hard geometric shape, always an organic blob.

**Photo iris ring:** A conic gradient ring (3 dichroic tones: warm gold, violet, aqua, pale rose) that:
- Morphs its border-radius between 4 organic shapes over 18s (alternate)
- Spins slowly — full rotation over 35s (linear)
Creates the effect of turning a piece of glass and watching the color change.

**Photo glow:** Three overlapping colored radial pools (violet, cyan, rose) using `mix-blend-mode: screen` drift independently (9–13s alternate cycles). Where they overlap, colors add together like light.

**Glass objects:** Each drifts with a slow, slightly rotating animation (18–28s, alternate). They should feel like they're suspended in water or slowly tumbling in space.

**Sphere float:** 3 distinct float keyframes with slightly different timing (16–30s), slight rotation, alternating in different phases so they don't all move together.

**Step numbers:** Animate in with a spring bounce (`cubic-bezier(0.34,1.56,0.64,1)`) when scrolled into view. Normally rendered as outlined/ghost text (`-webkit-text-stroke`). On hover, the stroke color fills toward visible.

**Nav scroll behavior:** Hides on scroll down (past 500px), reappears on scroll up. Adds `backdrop-filter: blur(28px)` and dark background when scrolled past 60px.

**Section tags:** A shimmer light sweep travels across them every 5s (`left: -120%` → `left: 160%`).

**Buttons:** A light sweep (`rgba(255,255,255,0.25)`) travels left-to-right on hover (0.6s ease).

**Glass object animations:** 
- Objects drift with slow rotation and scale changes (1.04–1.15× scale)
- Animation durations: 18–28s, ease-in-out, alternate direction (not looping — gives a more organic feel)

---

## 9. COLOR SYSTEM (complete)

```
Background:           #04030C
Background alt:       rgba(255,255,255,0.015) over base
Sunset ambient:       radial-gradient(ellipse 100% 50% at 50% 85%, rgba(210,100,30,0.18), transparent 70%)
                      — sits as a fixed body::before layer

White:                #FFFFFF
Off-white:            #F2EEFF (very slight violet cast)
Muted:                rgba(242,238,255,0.50)
Subtle:               rgba(242,238,255,0.28)

Glass surface:        rgba(255,255,255,0.025)
Glass border:         rgba(255,255,255,0.10)
Glass border hover:   rgba(255,255,255,0.18)

Iris violet (text):   #e0c8ff
Iris aqua (text):     #80e4ff
Iris rose (text):     #ffb8d8

Specular gold:        rgba(255,240,180,0.9) — the cursor light color on glass
Cursor dot:           rgba(255,220,120,0.9)

Service accent 1:     rgba(200,155,255,0.9) — violet
Service accent 2:     rgba(70,205,240,0.9)  — aqua
Service accent 3:     rgba(155,230,145,0.9) — green

Checkmark:            rgba(130,225,195,0.8) — teal-green
Star rating:          gradient(rgba(255,210,100,0.9) → rgba(255,175,110,0.8))
```

---

## 10. PHOTO OF SENECA

- Subject: A young woman (Seneca) with dark hair, warm smile, wearing a blue floral off-shoulder dress, photographed outdoors near water at what appears to be golden hour
- Crop: Portrait, cropped to remove black letterbox bars on sides. Subject centered.
- In the hero: displayed with a morphing organic border-radius (not circular, not rectangular — somewhere between the two, constantly shifting organically)
- Surrounded by: a rotating iridescent conic gradient ring + three overlapping color pools (`mix-blend-mode: screen`) that create a subtle aura
- Three tiny glass bead elements float around the photo (amethyst, cyan, rose — 8–18px spheres)
- File path expected at: `images/seneca.jpg`
- Fallback if image missing: a styled "SR" monogram in the same organic shape

---

## 11. COPY SAMPLES (use as tone reference, not necessarily verbatim)

**Hero:**
- Eyebrow: "Hi, I'm Seneca"
- H1: "Let's make this [iridescent]simple[/iridescent]"
- Subhead: "Websites and design for people who just want it to work."
- CTA 1: "Get a free quote" (primary)
- CTA 2: "See what I do" (ghost)

**Problem strip:**
"Having a website shouldn't feel like a second job. If you've been putting it off, avoiding it, or just feeling stuck — that's exactly where I come in."

**How it works steps:**
1. We talk — "We start with a free, no-pressure conversation. You tell me about your business, what you need, and what's been holding you back."
2. I design — "Once we agree on a direction, I get to work. You'll see the design before anything is built, so you can give feedback and we can adjust."
3. We refine — "This part usually feels more overwhelming than it actually is. We go through a round of revisions together."
4. You launch — "Your site goes live. I'll make sure you know how to use it and feel confident about it before I hand it over."

**Pricing note:**
"Every quote is free. You'll know the exact cost before we begin — nothing gets added without your sign-off."

**About (sample):**
"I'm a designer and web builder based in California. I got into this work because I kept seeing people with really great ideas get stuck — not because they lacked talent or vision, but because they didn't know how to get it online in a way that felt right. I keep things calm, clear, and collaborative — you'll always know where we are and what's coming next."

---

## 12. TECHNICAL SPECS

**Stack:** Pure HTML / CSS / Vanilla JS. Single page. No build tools, no frameworks. All in `/portfolio-site/` folder.
- `index.html` — markup
- `style.css` — all styles
- `script.js` — all interactivity
- `images/seneca.jpg` — photo (user-provided)

**Fonts:** Google Fonts via `<link>` (DM Sans + DM Serif Display)

**Form:** Formspree (`https://formspree.io/f/YOUR_FORM_ID`) — replace with real ID. Until connected, form should show a friendly "Got it — talk soon!" confirmation with green styling.

**Contact email:** `hello@senecarubianes.com` (placeholder — user to update)

**Social links:** Instagram and LinkedIn placeholders in footer

**Copyright:** © 2026 Seneca Rubianes

**Responsive breakpoints:**
- ≤ 900px: single-column layout, hamburger nav, disable cursor system, hide some glass elements
- ≤ 600px: simplified footer, hide additional glass elements

**Performance notes:**
- All glass animations use `will-change: transform` sparingly
- Cursor tracking uses `requestAnimationFrame` with lerp, not `mousemove` → DOM directly
- Glass specular updates happen inside the RAF loop (same frame as cursor movement)
- `IntersectionObserver` for scroll reveals (no scroll event listeners)

---

## 13. WHAT THIS SITE IS NOT

To prevent scope creep or wrong direction:
- Not a portfolio case-study site (no grid of projects as the focus)
- Not a dark techy/brooding site
- Not a pastel cute site
- Not a corporate or agency site
- Not overselling — honest, grounded, warm
- No blog, no testimonial content yet, no booking widget, no user accounts, no logins, no e-commerce
- No frosted/blurred glass — the glass aesthetic relies on transparency, not diffusion
- No full rainbow or neon color palette — the iridescence is controlled, fleeting, jewel-toned

---

## 14. SITES THAT INFORMED THE AESTHETIC (for reference)

These sites were cited as inspiration — the final design synthesizes elements from all of them but is its own thing:
- `stephanie-mae.com` — dark, glowy, warm, techy but not brooding, animations
- `hellodani.co` — good color integration, interactive elements
- `jessicaouyang.com` — fun interactive shapes
- `gabrielhidalgo.design` — polish and animation quality
- `kaityhammerstein.com` — work on display at a glance, easily understandable
- `it-say-ana.com` — big photos/videos, clean

The final direction pulls away from portfolio-style showcases toward a **service site with personality** — the design is the argument for Seneca's taste, not a gallery of her work.

---

*This brief represents the complete design intent as developed through iterative conversation with Seneca Rubianes. The tagline, voice, structure, interactions, and visual direction are all finalized and approved unless otherwise noted.*
