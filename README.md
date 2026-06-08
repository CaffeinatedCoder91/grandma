# Memorial RSVP Page

A warm, dignified single-page memorial and RSVP site for Joanna's grandmother, based on a Claude design handoff.

The goal is to rebuild the supplied HTML prototype as production-quality React/Next.js code while preserving the gentle visual style: cream paper tones, rose and sage accents, a circular portrait, service details, dress-code note, RSVP form, and closing remembrance.

## Source Design

Claude handoff files:

- `/Users/joanna.joseph/Downloads/design_handoff_memorial_rsvp/Memorial & RSVP.html`
- `/Users/joanna.joseph/Downloads/design_handoff_memorial_rsvp/README.md`
- `/Users/joanna.joseph/Downloads/design_handoff_memorial_rsvp/screenshots/`

The prototype is a design reference, not production code. The production build should not include `image-slot`, the tweaks panel, React CDN scripts, Babel scripts, or any drag-and-drop prototype helpers.

## Recommended Stack

- Next.js App Router
- TypeScript
- styled-components
- Static page rendering where possible
- Local React state for RSVP interactions
- Optional API route or third-party form integration for real RSVP delivery

## Build Plan

1. Scaffold a Next.js app with TypeScript and styled-components.
2. Create a single editable memorial data file for names, dates, addresses, copy, and RSVP settings.
3. Build reusable components:
   - `MemorialPage`
   - `FloralOrnament`
   - `HeroSection`
   - `ServiceSection`
   - `DressCodeSection`
   - `RsvpSection`
   - `FooterRemembrance`
4. Recreate the design tokens in a theme file.
5. Implement RSVP validation, attendee stepper, conditional count visibility, and thank-you state.
6. Add a submit adapter that starts as a no-op/local success and can later connect to a real backend.
7. Verify desktop and mobile screenshots against the handoff.
8. Replace placeholder content with family-approved details and portrait.

## Content Needed

Before publishing, gather:

- Grandmother's full name
- Birth and death years
- Portrait photo
- Short tribute line
- Funeral service date, time, venue, and address
- Reception date, time, venue, and address
- Dress-code wording
- Reply-by date
- Where RSVP responses should be sent or stored

## Local Development

Once the app is scaffolded:

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## RSVP Integration Options

The first version can show an on-page thank-you without sending data. For a real RSVP flow, choose one:

- Next.js API route sending email
- Google Forms or Google Sheets webhook
- Airtable form endpoint
- Supabase table
- Formspree, Basin, or Netlify Forms

The UI should not need to change when the submit adapter is swapped.

## Visual Fidelity Checklist

- Hero portrait is circular with concentric rings and soft halo.
- Page width is constrained to 760px with 28px side padding.
- Section spacing matches the handoff.
- Typography uses Playfair Display for headings and Nunito Sans for body text.
- Rose, sage, ivory, and ink colors match the design tokens.
- Service cards collapse from two columns to one column on mobile.
- RSVP choices are accessible, keyboard-friendly, and visibly selected.
- Thank-you state appears after valid submit.
- Reduced motion users are not forced through entrance animation.

