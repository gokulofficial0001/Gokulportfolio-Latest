# Repository Guidelines

## Project Structure & Module Organization

This repository currently contains only `README.md`, which introduces the portfolio project. No application source, package manifest, asset directory, or test suite has been committed yet. Keep root-level documentation limited to repository-wide material. As the site is implemented, use a predictable layout: application code in `src/`, reusable static files in `public/` or `assets/`, and tests beside their modules or in `tests/`. Update `README.md` whenever the setup or directory structure changes.

## Build, Test, and Development Commands

There are no build, development, lint, or test commands configured at present. Do not invent commands or commit generated output. When a toolchain is added, record the exact commands here and in `README.md`, for example:

```sh
npm run dev     # start the local development server
npm run build   # create a production build
npm test        # run automated tests
```

Run the available formatter, linter, build, and tests before opening a pull request.

## Coding Style & Naming Conventions

Follow the conventions supplied by the selected framework and its formatter. Prefer descriptive, lowercase, hyphen-separated filenames for pages and assets (for example, `project-card.tsx` and `profile-photo.webp`). Use PascalCase for component names, camelCase for functions and variables, and semantic HTML with accessible labels and alt text. Keep portfolio content and configuration separate from presentation code where practical.

## Testing Guidelines

No testing framework or coverage target is configured. Add tests with each new behavior once a framework is introduced; name test files after the unit under test, such as `project-card.test.tsx`. At a minimum, verify navigation, responsive layouts, links, and contact actions manually until automated tests exist.

## Commit & Pull Request Guidelines

The history contains only an `Initial commit`, so no established convention exists. Use short, imperative commit subjects such as `Add projects section` or `Fix mobile navigation`. Keep commits focused. Pull requests should explain the user-visible change, list validation performed, link related issues when applicable, and include before/after screenshots for visual changes.

## Security & Configuration

Never commit API keys, tokens, or personal contact credentials. Store local secrets in ignored environment files and document required variable names without their values.
