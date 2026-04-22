// Public-page note:
// The case pages should stay concise and should not render every field below.
// Use this file as the structured data layer for sorting, archive summaries,
// and future automation support.
//
// Field rule:
// - Core page-copy fields: title, company, industry, market, reviewed_at,
//   mechanism_type, pricing_page_url, screenshot_url, mechanism_summary,
//   target_buyer_inference, decision_friction, exposure_logic, logic_flaw,
//   strategic_opportunity, source_urls, page_path.
// - Metadata-only fields: framework_tags, scoring fields, verdict,
//   transferable_principle.
// - Metadata-only fields may stay in the record for automation and review,
//   but they do not need to appear on the public page.
window.pricingCaseRecords = [
  {
    // Identity
    slug: "webflow-workspace-site-pricing-split",
    title: "Webflow and the workspace-site split in web platform pricing",
    company: "Webflow",
    industry: "Website experience platform SaaS",
    market: "In-house marketing teams, web operations teams, freelancers, and agencies managing published sites with collaborative workflows",
    reviewed_at: "2026-04-22",

    // Public page inputs
    mechanism_type: "Per-site publishing plan + workspace collaboration layer + role-based seats",
    pricing_page_url: "https://webflow.com/pricing",
    screenshot_url: "https://image.thum.io/get/width/1400/noanimate/https://webflow.com/pricing",
    pricing_surface: "Webflow makes the buyer pay along three separate surfaces: a Site plan is required to publish each site, Workspace plans expand staging and collaboration controls across a portfolio, and seat types determine what each collaborator can do inside the Workspace.",
    mechanism_summary: "Webflow does not bundle build, publish, and collaborate into one software seat. It monetizes the live site at the asset level, monetizes staging and governance at the Workspace level, and monetizes role intensity again through full, limited, and free reviewer seats.",
    target_buyer_inference: "The structure targets buyers who manage websites as operating assets rather than one-off projects: in-house marketing and web teams with multiple stakeholders, plus agencies and freelancers who need client collaboration without giving every participant full design access.",
    decision_friction: "The buyer has to solve three separate commercial questions before the bill feels intelligible: which Site plan each published property needs, whether the Workspace needs higher collaboration controls, and which collaborators deserve full, limited, or free reviewer access.",
    exposure_logic: "Webflow gains multiple expansion surfaces, but it also takes on packaging-complexity risk. The model works only if buyers keep accepting that publishing, collaboration, and permission depth are distinct jobs worth paying for separately rather than one fragmented website bill.",
    logic_flaw: "The main weakness is that the package boundary can follow Webflow's internal product architecture more closely than the buyer's outcome. Many customers experience \"get the site live and keep the team aligned\" as one job, so separate Site, Workspace, and seat decisions can feel administratively clean for Webflow but commercially noisy for the customer.",
    strategic_opportunity: "A competitor could attack with outcome-based bundles such as one published site plus a collaborator allowance, or agency packages that include client access by default. The opening is not just lower price. It is lower layer-crossing friction and a pricing story that maps more directly to the project the buyer thinks they are purchasing.",
    page_path: "webflow-workspace-site-pricing-split.html",
    source_urls: [
      "https://webflow.com/pricing",
      "https://help.webflow.com/hc/en-us/articles/33961232582419-Choose-a-Site-plan",
      "https://help.webflow.com/hc/en-us/articles/33961218263059-Choose-a-Workspace-plan",
      "https://help.webflow.com/hc/en-us/articles/33961273067411-Roles-and-permissions-overview"
    ],

    // Metadata only
    framework_tags: ["EVAC 2.0", "Marketing"],
    counterintuitive_score: 5,
    teaching_value_score: 5,
    strategic_gap_score: 4,
    portability_score: 5,
    evidence_strength_score: 5,
    verdict: "Accept",
    transferable_principle: "When value is created by both asset deployment and team coordination, separate the pricing surfaces only if buyers can clearly map each paid layer to a distinct job-to-be-done."
  },
  {
    // Identity
    slug: "figma-role-based-seat-segmentation",
    title: "Figma and role-based seat segmentation across the workflow",
    company: "Figma",
    industry: "Design and product collaboration SaaS",
    market: "Global product teams spanning design, engineering, product, and cross-functional collaborators",
    reviewed_at: "2026-04-22",

    // Public page inputs
    mechanism_type: "Role-based seat segmentation by workflow intensity",
    pricing_page_url: "https://www.figma.com/pricing/",
    screenshot_url: "https://image.thum.io/get/width/1400/noanimate/https://www.figma.com/pricing/",
    pricing_surface: "Figma publicly separates paid access into Full, Dev, and Collab seats, alongside free View access. Each seat type is tied to a different point in the design-to-build workflow rather than simple per-user uniformity.",
    mechanism_summary: "Figma monetizes workflow position, not just headcount. Full seats pay for creation and system ownership, Dev seats pay for advanced handoff and implementation inspection, Collab seats pay for lighter workshop and collaboration access, and View access stays free to widen network participation.",
    target_buyer_inference: "The structure targets organizations where many people touch product work but not all of them create design assets. It is especially well suited to teams that need broad visibility but want to reserve expensive seats for design owners and higher-intensity builders.",
    decision_friction: "The buying friction shifts from list price to seat classification. The buyer must decide who is really a creator, who is a builder, who only collaborates occasionally, and when a lower-cost seat starts to feel artificially restrictive.",
    exposure_logic: "Figma lowers adoption resistance by keeping viewer access free and offering lower-cost role seats, but it takes on packaging complexity risk. The model depends on admins being willing to manage seat taxonomy and on the product maintaining meaningful boundaries between workflow roles.",
    logic_flaw: "The main weakness is boundary ambiguity. Cross-functional users often move between collaboration, inspection, and creation, which can make seat assignment feel political or administratively heavy. If the role boundaries blur too much, the structure creates friction instead of clarity.",
    strategic_opportunity: "A competitor could attack with a simpler progression model, temporary workflow passes, or pricing that adapts more cleanly when one person crosses between design, product, and engineering tasks. The opportunity is not simply lower price. It is lower seat-governance friction.",
    page_path: "figma-role-based-seat-segmentation.html",
    source_urls: [
      "https://www.figma.com/pricing/",
      "https://help.figma.com/hc/en-us/articles/29717597009431-Guide-to-billing-at-Figma",
      "https://help.figma.com/hc/en-us/articles/19813618057623-Dev-Mode-for-admins",
      "https://help.figma.com/hc/en-us/articles/360039960434-Manage-seats-in-Figma"
    ],

    // Metadata only
    framework_tags: ["EVAC 2.0", "Marketing"],
    counterintuitive_score: 4,
    teaching_value_score: 5,
    strategic_gap_score: 4,
    portability_score: 5,
    evidence_strength_score: 5,
    verdict: "Accept",
    transferable_principle: "When usage intensity differs by role, charge for decision-critical workflow access rather than for raw presence in the collaboration network."
  },
  {
    // Identity
    slug: "basecamp-flat-organization-pricing",
    title: "Basecamp and the flat organization price cap",
    company: "Basecamp / 37signals",
    industry: "Project management SaaS",
    market: "Global SMB, agency, and growing team software buyers",
    reviewed_at: "2026-04-22",

    // Public page inputs
    mechanism_type: "Flat organization cap + employee-only seat billing",
    pricing_page_url: "https://basecamp.com/pricing/",
    screenshot_url: "https://image.thum.io/get/width/1400/noanimate/https://basecamp.com/pricing/",
    pricing_surface: "Basecamp presents three price surfaces: a free one-project tier, a Plus plan at $15 per employee per month with free guests and contractors, and a Pro Unlimited plan at $299 per month billed annually or $349 month-to-month for unlimited users plus bundled upgrades.",
    mechanism_summary: "The offer deliberately splits between per-employee pricing for smaller teams and a capped organizational price for fast-growing buyers, while still protecting monetization with flat add-ons and annual billing on the capped plan.",
    target_buyer_inference: "The capped plan is aimed at buyers whose coordination costs rise faster than their willingness to manage seat-count debates: agencies, client-facing teams, and growing organizations with many occasional users or external collaborators.",
    decision_friction: "The biggest friction is not feature comprehension but package crossover: buyers have to judge when flat pricing beats pay-per-user, whether annual prepayment is acceptable, and whether bundled upgrades are worth paying for before usage is fully proven.",
    exposure_logic: "Basecamp absorbs more adoption and seat-expansion risk on Pro Unlimited, so the logic only works if marginal user cost stays low, support remains operationally disciplined, and the bundle keeps customers inside one account instead of fragmenting into multiple tools.",
    logic_flaw: "The model can underprice large but light-usage accounts, and it can also leave narrow-use buyers overpaying for bundled extras they do not need. The transition between Plus and Pro is strategically powerful, but it also creates a threshold where some buyers hesitate.",
    strategic_opportunity: "A competitor could attack from the opposite direction by offering a finance-friendly ramp between seat-based pricing and a full account cap, or by unbundling admin and reporting needs for buyers who want organization-level control without the full Basecamp bundle.",
    page_path: "basecamp-flat-organization-pricing.html",
    source_urls: [
      "https://basecamp.com/pricing/",
      "https://basecamp.com/try-basecamp/",
      "https://basecamp.com/new/"
    ],

    // Metadata only
    framework_tags: ["EVAC 1.0", "EVAC 2.0"],
    counterintuitive_score: 5,
    teaching_value_score: 5,
    strategic_gap_score: 4,
    portability_score: 4,
    evidence_strength_score: 4,
    verdict: "Accept",
    transferable_principle: "When incremental user cost is low and collaboration breadth drives adoption, cap organizational price to remove headcount anxiety and monetize account-wide rollout."
  }
];
