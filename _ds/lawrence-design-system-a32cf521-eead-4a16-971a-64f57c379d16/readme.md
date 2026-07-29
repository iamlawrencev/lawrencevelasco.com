# Lawrence Design System

Personal design system for Lawrence's work: portfolio sites (including "Lawrence Builds Apps"), responsive web applications, and consumer React Native mobile apps. One visual language, expressed with platform-appropriate structure and interaction — not identical layouts everywhere.

**Sources:** none attached — no codebase, Figma file, or existing brand assets were provided for this project. Everything here (palette, type scale, components, screens) was authored from scratch against the written brief, not extracted from an existing product. There is no existing logo; the wordmark is set in type (Inter, 700) wherever a mark would go. If a codebase, Figma link, or logo file exists, attach it and this system can be reconciled against it.

## Design direction
Metro UI supplies the structural spine — typography-led hierarchy, generous negative space, flat content, confident alignment, direct navigation, minimal containment. iOS/Liquid Glass supplies behavior and polish — fluid spring motion, refined detail, and *selective* translucent depth confined to navigation, overlays, and floating controls. The two are fused, not juxtaposed: Metro decides what the layout looks like at rest, iOS decides how it moves and responds.

Non-negotiables: no card-heavy Material layouts, no glass on ordinary content, no sub-16px body text, no decorative orange, no color-only meaning. Hierarchy comes from type, whitespace, alignment, proximity, and occasional hairlines — not containers.

## Content fundamentals
- **Voice:** first person for Lawrence's own portfolio copy ("I build native-feeling apps"), second person ("you") when addressing a user inside a product UI. Never royal "we" for a solo portfolio.
- **Casing:** sentence case everywhere — headings, buttons, nav labels. All-caps reserved for short eyebrow labels and metadata tags (e.g. "SELECTED WORK"), always at a reduced size + letter-spacing, never for a full sentence.
- **Tone:** calm, direct, confident without being salesy. Short declarative sentences over long compound ones. Technical precision welcome in case studies (name the stack, name the constraint) — this is a portfolio for an engineer-designer, not ad copy.
- **Emoji:** not used. Iconography carries visual warmth instead.
- **Errors/empty states:** always state what happened and what to do next ("Enter a valid email address," not "Invalid input"). Never blame the user.
- **Example headline:** "Build things people actually use." **Example body:** "I design and ship products end-to-end — from the first sketch to the App Store." **Example error:** "That email doesn't look right — check for typos and try again."

## Visual foundations
- **Color:** soft off-white canvas in light mode (`--neutral-25` #FCFBF9), near-black canvas in dark mode (`--neutral-950` #17140F) — never pure white/black. One signature orange (`#F28500` seed) used only for primary actions, selection, focus, and progress; never a decorative fill. Status colors (success/warning/error/info) are distinct hues from the brand orange so state is never confused with brand accent.
- **Type:** Inter throughout, at every weight. Hierarchy is carried by scale + weight + spacing, not decoration. Display sizes are fluid (`clamp()`), not desktop headings shrunk down.
- **Spacing:** 4-unit scale (4/8/12/16/24/32/48/64/96). Generous space between sections, efficient space inside controls. Default control height 40–48px, minimum touch target 44px.
- **Backgrounds:** flat color only — no gradients, no repeating textures, no illustration patterns on content surfaces. The one exception is a subtle diagonal gradient used behind glass specimens to demonstrate translucency.
- **Animation:** purposeful, spring-based. `ease-standard` for simple state/press changes, `ease-spring-soft` for sheets, toggles, and selection indicators. Nothing animates without a reason (causality, continuity, or feedback). Reduced-motion collapses duration to 0 without losing the state change.
- **Hover:** subtle surface-tint background shift (`--color-bg-surface-secondary`) or a color shift one step up the action scale — never a full color inversion.
- **Press:** primary buttons scale to 0.97 plus a darker fill step; no shrink on quiet/text actions (they only shift color).
- **Borders:** hairline only (`--color-border-hairline`, ~8–10% opacity), used sparingly to separate list rows and section edges — never a border-as-decoration around every block.
- **Shadow:** none on ordinary content. Soft floating shadows (`--shadow-float-sm/md/lg`) reserved for FABs, menus, sheets, dialogs, toasts — anything that visually floats above the page.
- **Glass/transparency:** translucent blur is reserved for navigation surfaces, overlays, and floating controls (`WebHeader`, `BottomTabBar`, `Sheet`, `Dialog`, `Toast`, `Menu`, `Popover`, `CommandPalette`). Never applied to a plain content card. Includes a `prefers-reduced-transparency` fallback to a solid surface color (see `.ds-glass` rule in `tokens/base.css`).
- **Imagery vibe:** warm, natural light, minimal color grading, no heavy grain or black-and-white treatment — product screenshots and photography should feel approachable, not clinical. (Placeholders are used throughout since no real imagery was supplied — see `image_slot` usage in UI kits.)
- **Corner radius:** moderately rounded, 10–14px on standard controls (`--radius-control` 12px), up to 20–24px on sheets/overlays, full pill reserved for search fields, segmented controls, tags, and the floating action button.
- **Cards:** used deliberately, not by default. When used (e.g. a project preview tile), no border, a very subtle surface-secondary tint or none at all, `--radius-md`, and shadow only if the card is meant to feel liftable/interactive.
- **Layout:** content max-width ~1200px on web, measure capped around 68–70ch for body copy, fixed headers use the glass treatment, fixed bottom tab bars on mobile only.

## Iconography
No icon codebase or SVG set was supplied, so this system uses **Lucide** (rounded, 1.5–2px stroke, MIT-licensed, loaded via CDN — see `guidelines/icons-set.html`) as the closest match to the desired rounded/minimal outline language, filled for selected states. Substitution flagged: if Lawrence has a preferred icon set already in use in an app or site, share it and this can be swapped in directly. No emoji, no unicode-glyph icons except a few inline glyphs (chevrons, close ✕) used as text-scale micro-icons in components like Accordion/Toast where a full icon would be oversized.

## Index
- `styles.css` — root stylesheet; imports everything below
- `tokens/` — colors, typography, spacing, shape (radius/shadow/glass), motion
- `guidelines/` — 15 foundation specimen cards (Colors, Type, Spacing, Shape, Motion, Icons groups)
- `components/actions` — Button, IconButton, TextLink, FloatingAction
- `components/forms` — TextField, TextArea, SearchField, Select, Checkbox, Radio, Switch, Slider, SegmentedControl, FormGroup
- `components/navigation` — WebHeader, SideNav, MobileHeader, BottomTabBar, Tabs, Breadcrumbs, Pagination
- `components/content` — SectionHeading, ListRow, DescriptionList, DataTable, Accordion, Avatar, Tag, EmptyState, CodeBlock
- `components/feedback` — InlineStatus, Banner, Toast, ProgressBar, Spinner, Skeleton
- `components/overlays` — Dialog, Sheet, Popover, Menu, Tooltip, CommandPalette
- `ui_kits/portfolio` — "Lawrence Builds Apps" portfolio site
- `ui_kits/webapp` — responsive web application shell
- `ui_kits/mobile` — React Native consumer app (browse/detail/create flow)
- `SKILL.md` — portable skill file for use in Claude Code

### Intentional additions
None of the standard component set was supplied by a source — this whole inventory (42 components) was authored from scratch per the brief's §12 list, so nothing here counts as an "addition" beyond that list.

## Caveats / open questions
- No codebase, Figma file, or logo was attached — flag if one exists so this system can be reconciled against real product surfaces and a real mark.
- Inter is loaded from Google's CDN (`fonts.gstatic.com`), not self-hosted binaries — fine for prototyping; for production, self-host the variable woff2 for reliability and offline support.
- Icons are Lucide via CDN as a substitution (see Iconography above) — swap in Lawrence's own icon set if one exists.
- Contrast ratios documented in `guidelines/colors-orange-contrast.html` are estimated from token values, not lab-measured — worth a final pass with a contrast checker before shipping.
