// Pricing case index note:
// This file is a lightweight index layer for sorting, previewing, and
// automation support across pricing cases.
// Future case records may optionally include:
// strategic_logic_summary
// bill_examples_summary
// boundary_crossing_summary
// decision_priority_summary
//
// However:
// - canonical strategic_logic belongs inside each case JSON
// - canonical bill_examples, boundary_crossing_map, and decision_priority
//   belong inside each case JSON and CASE_SCHEMA.md
// - strategic_logic is not an index-level rendering component
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
