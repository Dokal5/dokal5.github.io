# dokal5.github.io Progress Review (2026-05-16)

## Current Status

The local repository and live GitHub Pages site were checked for consistency on 2026-05-16. Local `main` matched `origin/main`, the working tree was clean before this maintenance pass, and sampled live files matched local files.

Live site:

```text
https://dokal5.github.io/
```

Latest verified commit before this pass:

```text
e57ab5c Fix monday pricing case review feedback
```

## Content Inventory

- Home: active overview page with dynamic pricing case count.
- Thoughts: 2 essays.
- Courses: 15 course pages across Marketing and Effective Value Capturing.
- Case Library: 1 active library.
- Pricing Cases: 7 published cases.

Published pricing cases:

- Airbnb service-fee incidence pricing.
- HP Instant Ink page-count subscription pricing.
- Peloton hardware-to-membership pricing.
- Amazon FBA fulfillment and storage pricing.
- IKEA Netherlands delivery fulfillment pricing.
- Shopify transaction platform pricing.
- monday.com seat-based work management pricing.

## Production System

The pricing case system now has a repeatable production structure:

- `case-library.js` remains the lightweight index for sorting, previews, dynamic counts, and filters.
- Each public case page keeps its detailed public analysis and hidden JSON schema.
- Layer 1 briefs live beside pricing case pages as production support artifacts.
- `cognition/` provides upstream reasoning prompts and constitution checks before case rendering.

## Recent Work

The latest work focused on the monday.com pricing case:

- Upgraded the case page to the standard case structure.
- Repaired styling and page-shell dependencies.
- Captured and committed the monday.com pricing page screenshot artifact.
- Fixed review feedback around boundary logic and pricing mechanism presentation.

## Next Priorities

1. Keep README and progress documentation current with the live site.
2. Keep every production pricing case paired with a Layer 1 brief.
3. Improve Pricing Cases discoverability with simple client-side filters.
4. Maintain the static-site constraint: no build step, no framework, and no JavaScript dependency for basic navigation.
5. Run local and online consistency checks after each publishing pass.
