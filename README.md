# Personal Website
Welcome to my personal website repository! This repository contains the source code and assets for my personal website, adapted from the Dimension theme by HTML5 UP by [ajlkn](https://github.com/ajlkn). It showcases my work, skills, and provides information about me.

## Preview
You can see a live preview of my website [here](https://mhmdaskari.github.io/).

## Technologies Used
- HTML
- CSS
- JavaScript

## APIs Used
- Adobe PDF Embed
- Google Analytics
- FormSubmit

## Design System
The site's visual language is centralized as a small, **build-free** design system (native CSS custom properties — no npm or Sass build required).

- **Tokens — the source of truth.** All design values (color, typography, spacing, radius, motion, z-index) are defined as CSS custom properties in [`assets/css/tokens.css`](assets/css/tokens.css), loaded before every other stylesheet. Edit values there and reload. Naming follows `--{category}-{name}-{modifier}` (e.g. `--color-fg-light`, `--text-h2`, `--duration-transition`).
- **Living style guide.** [`styleguide.html`](styleguide.html) renders every token and component (buttons, forms, tables, lists, icons, images, box, the opened article window, plus the custom CV and blog components) on one page, each labeled with its class names. View it at [`/styleguide.html`](https://mhmdaskari.github.io/styleguide.html).
- **Where styles live.** `assets/css/main.css` is the compiled Dimension template, retrofitted so its brand color / font / radius literals read from the tokens via `var(--token, fallback)` (the fallback keeps the original look if `tokens.css` is missing). `assets/css/styles.css` holds the custom opened-window, CV, and blog components and also consumes the tokens.
- **SCSS is legacy/reference only.** The SCSS in `assets/sass/` is no longer compiled — do **not** edit `assets/sass/libs/_vars.scss` expecting changes to apply; edit `tokens.css` instead.
- **Adding a component.** Add its markup to `styleguide.html` with a class-name caption, style it in `styles.css` reusing existing tokens, and add a new token only when a value is genuinely reused.

> Note: `--color-line-blog` (`#ccc`) and `--color-fg-faint` (`#999`) are light grays inherited from the original blog styling and sit slightly off the dark palette; they can be aligned to `--color-border-bg-alt` / `--color-fg-light` later if desired.

## Modifications from HTML5 UP Dimension
Compared with the original Dimension theme by HTML5 UP, this site adds:

- Personal academic content, navigation, profile imagery, favicon, footer credits, and social / academic links.
- A build-free design system in `assets/css/tokens.css`, with the compiled Dimension CSS updated to read from CSS custom properties.
- A living component reference in `styleguide.html`, including tokens, base Dimension elements, the opened article window, CV components, and blog cards.
- Custom `assets/css/styles.css` rules for the opened article popup, hover / scroll / touch-aware article scrollbar, mobile scroll containment, CV layout, and blog layout.
- JavaScript enhancements in `assets/js/main.js` for body-level article scrollbars, smooth scrollbar fading, hash-driven popup updates, and mobile-friendly scroll behavior.
- A fetched CV partial (`cv/cv.html`) with custom timeline, badges, publication, row, and skill styles.
- JSON-driven blog rendering through `assets/js/blog.js` and `blog/blog-posts.json`.
- Contact delivery through FormSubmit, analytics through Google Analytics, and academic icons through Academicons.
- A static, GitHub Pages-friendly workflow with no npm, bundler, or Sass build step required.

## Credits
- Theme: [Dimension theme by HTML5 UP](https://html5up.net/dimension)
- Background Image: [Unsplash.com](https://unsplash.com)
- Fonts: [Font Awesome v4](https://fontawesome.io)
- Other:
	- [jQuery](jquery.com)
	- [Responsive Tools](github.com/ajlkn/responsive-tools)

