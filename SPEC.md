# SPEC.md

## Objective

Build a production-ready memorial and RSVP page for Joanna's grandmother using the supplied Claude design handoff as the source of truth.

The page should feel quiet, warm, respectful, and easy for family members to use. It is a small site, but the tone matters: avoid flashy effects, heavy marketing language, or anything that feels transactional.

## Product Scope

Single scrolling page with five sections:

1. Hero memorial introduction
2. Service and gathering details
3. Dress-code note
4. RSVP form
5. Footer remembrance

Out of scope for the first build:

- Account creation
- Admin dashboard
- Guest list management UI
- Payment, donations, or registry flows
- Photo gallery unless requested later

## Technical Recommendation

Use Next.js App Router, TypeScript, and styled-components.

This keeps the project close to Joanna's normal React/Next.js workflow while staying lightweight enough for a single-page family site.

Recommended structure:

```text
src/
  app/
    layout.tsx
    page.tsx
  components/
    FloralOrnament.tsx
    HeroSection.tsx
    ServiceSection.tsx
    DressCodeSection.tsx
    RsvpSection.tsx
    FooterRemembrance.tsx
  content/
    memorial.ts
  lib/
    submitRsvp.ts
  styles/
    theme.ts
    StyledComponentsRegistry.tsx
```

## Content Model

Create one editable content file for family details.

Suggested shape:

```ts
export const memorial = {
  person: {
    fullName: "Eleanor Rosewood",
    displayNameLines: ["Eleanor", "Rosewood"],
    years: { born: "1939", died: "2026" },
    portraitSrc: "/images/grandma.jpg",
    tribute:
      "A gentle soul who filled every room with warmth, laughter, and the scent of fresh roses.",
  },
  service: {
    label: "Funeral Service",
    title: "A Celebration of Her Life",
    date: "Saturday, 27 June 2026",
    time: "11:00 in the morning",
    location: "St. Mary's Chapel",
    address: "14 Willow Lane, Ashford",
  },
  reception: {
    label: "Reception After",
    title: "Tea & Remembrance",
    date: "Saturday, 27 June 2026",
    time: "1:00 in the afternoon",
    location: "The Rosewood Garden Room",
    address: "2 Orchard Close, Ashford",
  },
  dressCode:
    "Soft, comfortable attire in gentle tones. Eleanor adored a touch of colour - please feel free to wear something that brought you both joy.",
  rsvp: {
    replyBy: "20 June 2026",
    maxGuests: 12,
  },
  footer: {
    quote: "To live in the hearts of those we love is never to die.",
  },
};
```

All values above are placeholders until family-approved details are provided.

## Visual Requirements

Match the Claude handoff closely.

Core tokens:

```ts
export const theme = {
  colors: {
    pageBg: "#FBFAF7",
    cream: "#FBF6EE",
    creamDeep: "#F6EEE1",
    ivory: "#F1E7D8",
    ivoryLine: "#E6D8C3",
    surface: "#FFFDF9",
    portraitBorder: "#FFFEFB",
    rose: "#8B1A2F",
    roseBright: "#A8324A",
    rosePressed: "#761225",
    roseMist: "rgba(139, 26, 47, 0.10)",
    sage: "#92A183",
    sageDeep: "#6F7E61",
    ink: "#403930",
    inkSoft: "#6B6155",
    inkFaint: "#908577",
  },
  fonts: {
    serif: "'Playfair Display', Georgia, serif",
    sans: "'Nunito Sans', system-ui, -apple-system, sans-serif",
  },
};
```

Layout:

- Max content width: 760px
- Horizontal padding: 28px
- Section padding: 64px top and bottom
- Mobile section padding: 50px top and bottom
- Mobile breakpoint: 640px
- Service cards: two columns desktop, one column mobile
- RSVP name and choice grids: two columns desktop, one column mobile

Typography:

- Hero name: Playfair Display, `clamp(46px, 11vw, 78px)`, line-height `1.02`
- Section titles: Playfair Display, `clamp(26px, 5vw, 34px)`
- Eyebrows: uppercase Nunito Sans, rose, letter-spaced
- Body: Nunito Sans, 16px to 18px
- Tribute and footer quote: Playfair Display italic

## Components

### FloralOrnament

Small CSS-only decorative motif used in the hero and footer.

It should include:

- Fading left and right rules
- Rose bud dot
- Two sage leaves

No SVG or image is required unless family artwork is later supplied.

### HeroSection

Displays:

- Floral ornament
- "In Loving Memory" eyebrow
- Circular portrait with rings and soft halo
- Name split over two lines
- Years with sage star between them
- Short italic tribute

Use a normal image element or Next.js image component for the portrait. Provide a graceful placeholder style if no portrait is available during development.

### ServiceSection

Displays:

- "Join Us" eyebrow
- "Service & Gathering" heading
- Divider
- Funeral service card
- Reception card

Each card has:

- Kicker
- Card title
- Date row
- Time row
- Location row

### DressCodeSection

Displays:

- "A Gentle Note" eyebrow
- "Dress Code" heading
- Divider
- Centered paragraph

The phrase "gentle tones" should be styled as a rose serif italic accent.

### RsvpSection

Interactive form with:

- First name input
- Last name input
- Attendance radiogroup
- Conditional attendee count stepper
- Optional message textarea
- Submit button
- Reply-by note
- Thank-you state

Validation:

- First name is required.
- Last name is required.
- Attendance choice is required.
- Focus moves to the first invalid field.
- Invalid fields show an error message and rose error ring.

Attendance options:

- `funeral`: The funeral service
- `reception`: The reception
- `both`: Both, gladly
- `none`: Sadly, I can't attend

Stepper:

- Default: 1
- Minimum: 1
- Maximum: content-configured value, default 12
- Hidden when attendance is `none`
- Count has `aria-live="polite"`

Submit:

- Start with a typed `submitRsvp` adapter.
- First implementation can resolve locally and show the thank-you state.
- Later implementation can send to an API route or third-party service without changing the component UI.

Thank-you copy:

- If not attending: "Thank you for letting us know, {first}. You'll be held in our thoughts on the day."
- If attending: "We're so glad you'll be with us at {where}, {first}."
- If attending count is greater than 1, append: "We'll set {count} places."

### FooterRemembrance

Displays:

- Floral ornament
- Italic quote
- Uppercase meta line with name and years

## Accessibility Requirements

- Page has one `h1`.
- Sections use clear headings.
- Decorative elements are hidden from assistive tech.
- Form inputs use labels, not placeholder-only labeling.
- Attendance selection is keyboard-accessible.
- Validation messages are programmatically associated where practical.
- Count changes are announced politely.
- Focus styles are visible.
- Reduced motion media query disables or softens animations.

## Implementation Phases

### Phase 1: Project Setup

- Scaffold Next.js with TypeScript.
- Configure styled-components for App Router SSR.
- Add Google fonts through `next/font/google`.
- Add base theme and global styles.

### Phase 2: Static Page

- Add content config.
- Build hero, service, dress-code, and footer sections.
- Match desktop and mobile layout.
- Add portrait placeholder support.

### Phase 3: RSVP Form

- Implement typed RSVP state.
- Add validation.
- Add accessible attendance choice behavior.
- Add conditional attendee count.
- Add thank-you state.

### Phase 4: Integration

- Decide where responses should go.
- Implement `submitRsvp`.
- Add environment variables if needed.
- Handle submit loading and error states.

### Phase 5: Verification

- Run lint and build.
- Check desktop at 760px-ish width against screenshots.
- Check mobile at 390px width.
- Test keyboard-only RSVP flow.
- Test invalid submit and thank-you submit.
- Test reduced motion preference.

## Open Decisions

- Real grandmother name and dates
- Portrait image
- Actual venue details
- Whether RSVP responses should email someone or store in a sheet/database
- Whether guests can bring additional people and what the maximum should be
- Whether the site will be private, unlisted, password-protected, or public
- Deployment target, likely Vercel if using Next.js

