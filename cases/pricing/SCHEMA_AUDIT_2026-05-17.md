# Pricing Case Schema Audit (2026-05-17)

## Scope

Audited the 8 published pricing cases listed in `case-library.js` against the current `CASE_SCHEMA.md` and `CASE_TEMPLATE.html`.

Cases checked:

- AWS Reserved Instances / Savings Plans pricing
- Airbnb service-fee incidence pricing
- HP Instant Ink page-count subscription pricing
- Peloton hardware-to-membership pricing
- Amazon FBA fulfillment and storage pricing
- IKEA Netherlands delivery fulfillment pricing
- Shopify transaction platform pricing
- monday.com seat-based work management pricing

## Issues Found

- monday.com used a legacy compact hidden JSON object instead of the full canonical schema.
- monday.com included an extra hidden `hidden-json-schema` production section outside the template section contract.
- Several older canonical JSON objects used combined driver labels in `formula.variables[*].maps_to_driver` or `bill_examples[*].pricing_driver` that did not map exactly to declared `drivers`.
- monday.com decision training content needed an explicit `no_trade_off` reasoning check because the case includes decision alternatives.

## Remediation

- Expanded monday.com's hidden JSON and Layer 1 Case JSON to the full canonical schema shape.
- Removed the monday.com legacy hidden section so its visible section contract matches `CASE_TEMPLATE.html`.
- Normalized combined driver labels in Airbnb, HP Instant Ink, Peloton, and Amazon FBA so formula variables and bill examples map to declared drivers.
- Added a visible monday.com `no_trade_off` reasoning row and matching canonical JSON entry.

## Result

The local audit now passes for all published pricing cases:

- matching HTML page exists
- matching Layer 1 sidecar exists
- hidden JSON parses
- required top-level schema fields are present
- `primary_component` values are canonical
- `visualization.primary_component` matches top-level `primary_component`
- formula, bill example, boundary, and decision priority references map to declared schema objects
- template `data-case-section` values and labels match the 01-13 section contract

## Remaining Observations

No blocking schema or template consistency issues remain from this audit. A reusable audit script may be worth adding in a separate issue if pricing case production continues to grow.
