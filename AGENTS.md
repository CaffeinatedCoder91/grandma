# AGENTS.md

## Project
Build a dignified memorial and RSVP page for Joanna's grandmother, based on the Claude design handoff in:

- `/Users/joanna.joseph/Downloads/design_handoff_memorial_rsvp/Memorial & RSVP.html`
- `/Users/joanna.joseph/Downloads/design_handoff_memorial_rsvp/README.md`
- `/Users/joanna.joseph/Downloads/design_handoff_memorial_rsvp/screenshots/`

This is a sensitive family project. Prioritize care, accessibility, clarity, and visual restraint.

## Preferred Stack
- Next.js App Router
- TypeScript
- styled-components
- React component state for the RSVP form
- A small submit adapter that can later be wired to email, Google Sheets, Airtable, Supabase, or a Next.js API route

## Design Direction
- Recreate the Claude handoff at high fidelity.
- Use the screenshot set as visual references and the handoff README as the source of truth for tokens, spacing, and behavior.
- Keep the page warm, peaceful, and letter-like.
- Do not ship the prototype-only tooling: `image-slot`, tweaks panel, Babel scripts, React CDN scripts, or drag-and-drop design helpers.
- Replace portrait placeholders with a normal image component.
- Keep decorative florals as CSS unless real family artwork is provided.

## Content Rules
- All current names, dates, addresses, and copy are placeholders.
- Do not invent personal family details.
- Keep content editable through a single data/config file where practical.
- Make it easy to swap in:
  - grandmother's name
  - birth and death years
  - portrait image
  - tribute line
  - service details
  - reception details
  - reply-by date
  - footer quote

## Accessibility
- Use semantic sections: header, main, section, form, footer.
- Use real labels for all form fields.
- Use a real radiogroup or accessible button/radio pattern for attendance choices.
- Preserve keyboard operation for all controls.
- Focus the first invalid field on submit.
- Use `aria-live="polite"` for the attendee count.
- Respect reduced motion preferences.
- Keep contrast readable against cream backgrounds.

## RSVP Behavior
- Required fields: first name, last name, attendance choice.
- Attendance options:
  - funeral
  - reception
  - both
  - none
- Show the attendee count only for attending responses.
- Count defaults to 1 and stays between 1 and 12.
- On valid submit, show a thank-you state.
- Do not silently persist RSVP data without an explicit integration decision.

## Coding Style
- Keep components small and named by purpose, not by visual shape.
- Prefer typed data objects over repeated hard-coded copy.
- Keep styling close to components when using styled-components.
- Avoid unrelated refactors.
- Add comments only when they clarify non-obvious behavior.
- Validate with lint/build and a browser check before calling the page done.

