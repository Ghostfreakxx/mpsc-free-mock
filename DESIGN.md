# Free MPSC Mock design standards

## Identity

Free MPSC Mock is a free educational institution for students in Mizoram. Keep the name, original motto, companion sentence, and existing Tochhawng Teachers identity. Present Zorami as a fictional Mizo digital teacher. Use documented local architectural, landscape, and textile references. Link the reference and identify which details are stylized.

## Visual system

- Use the existing light and dark theme tokens. Warm wood, subdued greens, and warm paper anchor the classroom. Use chalk white for board text and reserve accent colors for actions, focus, and feedback. Use text or icons as well as color for statuses.
- Use Geist for interface text. Reserve a system serif for the rendered classroom title and book typography. Use comfortable line lengths for notes and predictable spacing between controls, content, and feedback.
- Give each page one focal point and a clear first action. Let the study room scene, current lesson, or experiment carry the composition. Avoid stacking interchangeable cards around the focal object.
- Preserve readable HTML for everything shown on a canvas. Use semantic headings, links, buttons, fieldsets, legends, and associated labels. Keep status updates brief. Make every experiment usable by keyboard and preserve focus after major state changes.
- Support 320px screens and text zoom. Avoid horizontal overflow, give touch controls adequate space, and maintain at least 4.5:1 contrast for body text in both themes.

## Scene and component behavior

- Load WebGL on entry. Provide the poster, a usable text lesson, and access to navigation when WebGL is missing. Pause scene updates when hidden. Keep reduced-motion alternatives still or immediate.
- Use camera movement to frame a selected object or teaching step. Avoid motion behind exam questions and notes. Use the same lesson content in 3D, subtitles, and its HTML equivalent.
- Sync narrated lessons to the audio playhead using reviewed cue timestamps where available. Use section navigation when there are no reliable timestamps.
- Simulations need an objective, variable labels and units, reset, an observation and explanation, and a link to relevant practice. Distinguish illustrative data from measured data.
- Label offline downloads by size, scope, and completion status. Keep downloads explicit and preserve existing device progress keys.
- Keep decorative imagery subordinate to lesson controls. Use first-party assets with documented licensing and track payload size.

## Local design workflow

Use upstream guidance as reference material. Review a pinned revision and its license before copying or executing anything. No runtime package or paid service is required by this workflow.

- [Taste Skill and its image-to-code guidance](https://github.com/Leonxlnx/taste-skill) provide layout and visual review prompts. Use the repository's own assets and manual implementation. Skip third-party installers and optional image-generation services.
- [Awesome Design.md](https://github.com/VoltAgent/awesome-design-md) is an MIT-licensed reference collection. Borrow patterns and principles while preserving the site's identity and original assets.
- [Vercel Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines) guide the accessibility and interaction review.
- [Playwright](https://github.com/microsoft/playwright) is available through the locked dev dependency. Use the existing Chromium cache. Capture desktop, tablet and mobile views with a fixed viewport and reduced motion for reproducible comparisons.

Geist is bundled locally under SIL OFL 1.1. The font binary and redistribution terms are in `app/fonts/`. The classroom uses project-authored geometry and procedural materials, plus existing local imagery. No model or font CDN is used. [Geist source and license](https://github.com/google/fonts/tree/main/ofl/geist)
