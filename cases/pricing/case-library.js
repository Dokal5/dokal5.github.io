// Pricing case index note:
// This file is a lightweight index layer for sorting, previewing, and
// automation support across pricing cases.
// Future case records may optionally include lightweight preview summaries:
// strategic_logic_summary
// decision_alternatives_summary
// bill_examples_summary
// boundary_crossing_summary
// decision_priority_summary
// reasoning_error_summary
//
// However:
// - canonical strategic_logic, decision_alternatives, bill_examples,
//   boundary_crossing_map, decision_priority, and reasoning_error_check
//   belong inside each case page hidden JSON and CASE_SCHEMA.md
// - case-library.js is not the system of record for case analysis
// - index summaries must not override the hidden JSON contract
window.pricingCaseRecords = [
  {
    slug: "ikea-nl-delivery-fulfillment-pricing",
    title: "IKEA Netherlands delivery fulfillment pricing",
    company: "IKEA Netherlands",
    industry: "Home furnishing retail",
    market: "Netherlands retail customers choosing between self-transport, collection, parcel delivery, truck delivery, and room delivery",
    reviewed_at: "2026-05-01",
    mechanism_summary: "IKEA Netherlands separates product price from fulfillment service fees. The case turns on basket fulfillment difficulty: weight, size, service mode, handling location, and membership status change the service fee layered onto product price.",
    transferable_principle: "When fulfillment effort varies sharply by basket, separate product price from service price only if the buyer can understand why heavier, bulkier, or more convenient-to-receive baskets cost more to fulfill.",
    strategic_logic_summary: "Hypothesis: visible fulfillment effort makes separate service charges feel more acceptable while preserving low product-price perception.",
    page_path: "ikea-nl-delivery-fulfillment-pricing.html"
  }
];
