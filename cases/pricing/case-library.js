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
    slug: "hp-instant-ink-page-count-subscription-pricing",
    title: "HP Instant Ink page-count subscription pricing",
    company: "HP Instant Ink",
    industry: "Printer hardware and consumables subscription",
    market: "Home and small-office printer users choosing monthly page allowances for ink or toner replenishment",
    reviewed_at: "2026-05-04",
    mechanism_summary: "HP Instant Ink turns consumables into a page-count subscription. The customer bill changes when printed pages consume the monthly allowance, use rollover pages, and then trigger additional page blocks or upgrade pressure.",
    transferable_principle: "When usage is variable but customers want predictability, pricing can anchor on a monthly allowance while using rollover and overage thresholds to manage spikes.",
    strategic_logic_summary: "Hypothesis: customers accept page-count pricing when automatic replenishment lowers consumables friction; the model weakens when page counting feels disconnected from ink or toner use.",
    page_path: "hp-instant-ink-page-count-subscription-pricing.html"
  },
  {
    slug: "peloton-hardware-membership-pricing",
    title: "Peloton hardware-to-membership pricing",
    company: "Peloton",
    industry: "Connected fitness hardware",
    market: "Connected home fitness customers",
    reviewed_at: "2026-05-03",
    mechanism_summary: "Peloton connected equipment creates a trigger path from app-only access into recurring All-Access Membership economics. The customer bill changes when equipment ownership, hardware model choice, financing, or membership dependency changes total cost exposure.",
    transferable_principle: "When hardware is designed around a connected experience, the product purchase can become a boundary that triggers recurring subscription value capture.",
    strategic_logic_summary: "Hypothesis: customers accept recurring membership when the integrated equipment, content, metrics, and software experience keep delivering value; if usage drops, the same membership can feel like lock-in.",
    page_path: "peloton-hardware-membership-pricing.html"
  },
  {
    slug: "amazon-fba-fulfillment-storage-pricing",
    title: "Amazon FBA fulfillment and storage pricing",
    company: "Amazon FBA",
    industry: "Ecommerce logistics",
    market: "Third-party sellers using Amazon fulfillment and storage infrastructure",
    reviewed_at: "2026-05-03",
    mechanism_summary: "Amazon FBA translates product size, shipping weight, category, storage volume, season, and inventory age into fulfillment and storage fee states. The seller bill changes when products cross operational burden boundaries.",
    transferable_principle: "When cost-to-serve varies by physical handling and capacity burden, pricing can use a matrix to push sellers toward better packaging, inventory planning, and margin discipline.",
    strategic_logic_summary: "Hypothesis: sellers accept operationally driven FBA fees because Amazon reduces fulfillment complexity, but fee boundaries can create margin surprise when products become bulky, slow-moving, or peak-season inventory.",
    page_path: "amazon-fba-fulfillment-storage-pricing.html"
  },
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
  },
  {
    slug: "shopify-transaction-platform-pricing",
    title: "Shopify transaction platform pricing",
    company: "Shopify",
    industry: "Commerce platform software",
    market: "Merchants choosing ecommerce plans, payment processing, third-party payment providers, and enterprise commerce capabilities",
    reviewed_at: "2026-05-02",
    mechanism_summary: "Shopify combines visible subscription access with payment and transaction-related economics. The merchant bill changes with commerce scale, payment setup, plan level, third-party payment provider usage, and enterprise requirements.",
    transferable_principle: "When a platform creates value through transaction infrastructure, the visible subscription fee is only part of the price architecture; the real bill depends on how much commerce activity flows through the platform.",
    strategic_logic_summary: "Hypothesis: merchants tolerate layered platform and payment economics when Shopify reduces commerce operating complexity and scales with merchant growth.",
    page_path: "shopify-transaction-platform-pricing.html"
  }
];
