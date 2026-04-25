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
    slug: "zapier-action-step-task-meter",
    title: "Zapier and the action-step task meter inside automation pricing",
    company: "Zapier",
    industry: "Workflow automation SaaS",
    market: "B2B operations, RevOps, marketing ops, IT, and cross-functional teams orchestrating workflows across many SaaS tools",
    reviewed_at: "2026-04-25",

    // Public page inputs
    mechanism_type: "Tier ladder + action-step metering + automatic overage billing",
    pricing_page_url: "https://zapier.com/pricing",
    screenshot_url: "https://image.thum.io/get/width/1400/noanimate/https://zapier.com/pricing",
    pricing_surface: "Zapier publicly presents Free, Professional, Team, and Enterprise plans with a task selector that ranges from 100 tasks per month to custom volume bands. The visible plan ladder matters, but the real billing boundary sits underneath it: successful action steps consume tasks, Free limits users to two-step Zaps, certain built-in tools do not consume tasks, and pay-per-task billing can keep workflows running after the included allowance is exhausted.",
    mechanism_summary: "Zapier does not primarily monetize users, integrations, or the number of automations created. It monetizes successful action steps inside live workflows, then uses plan packaging to control what kinds of workflows buyers can build and how safely they can operate them at scale.",
    target_buyer_inference: "The structure is best suited to teams that want broad workflow design freedom and many app connections, but can tolerate budgeting by execution volume rather than by seats or static software access.",
    decision_friction: "The buyer has to forecast workflow architecture and downstream action volume, not just count Zaps or users. Two automations that solve the same business problem can have different costs if one requires more successful action steps, and some internal tools sit outside the meter altogether.",
    exposure_logic: "Zapier reduces adoption resistance by leaving triggers, filters, paths, Tables, Forms, and several built-in tools outside the task meter, then protects continuity with automatic pay-per-task billing. That means Zapier only captures value when successful action steps fire, even though customers may derive substantial value from designing, governing, and monitoring automations that are partly non-billable.",
    logic_flaw: "The weakness is that the meter tracks workflow architecture more directly than business outcome. Buyers can get the same commercial result with different step counts, which makes the price feel sensitive to implementation design rather than to the importance of the job being done.",
    strategic_opportunity: "A competitor could attack with run-based automation bundles, capped workflow packages, or continuity-oriented pricing that monetizes completed business processes more directly than raw action volume. The opening is strongest where buyers fear unpredictable step growth or learn how to compress billable action count by redesigning workflows.",
    page_path: "zapier-action-step-task-meter.html",
    source_urls: [
      "https://zapier.com/pricing",
      "https://help.zapier.com/hc/en-us/articles/8496196837261-How-is-task-usage-measured-in-Zapier",
      "https://help.zapier.com/hc/en-us/articles/15279018245901-How-pay-per-task-billing-works-in-Zapier"
    ],

    // Metadata only
    framework_tags: ["EVAC 2.0"],
    counterintuitive_score: 5,
    teaching_value_score: 5,
    strategic_gap_score: 4,
    portability_score: 5,
    evidence_strength_score: 5,
    verdict: "Accept",
    transferable_principle: "When value is created by completed workflow actions rather than by simple access, meter successful completions instead of seats or automation count, but keep the billing boundary legible enough that architecture choices do not turn into pricing traps."
  },
  {
    // Identity
    slug: "coda-doc-maker-billing",
    title: "Coda and Doc Maker billing across a free collaboration surface",
    company: "Coda",
    industry: "Collaborative document and workflow SaaS",
    market: "B2B teams with a small builder group and a much larger collaborator base",
    reviewed_at: "2026-04-24",

    // Public page inputs
    mechanism_type: "Tier ladder + maker billing + free editor/viewer collaboration",
    pricing_page_url: "https://coda.io/pricing",
    screenshot_url: "https://image.thum.io/get/width/1400/noanimate/https://coda.io/pricing",
    pricing_surface: "Coda presents a Free, Pro, Team, and Enterprise ladder, but the real monetization boundary sits inside the paid tiers: only Doc Makers are billed, while editors and viewers remain free even when they contribute meaningfully inside existing docs.",
    mechanism_summary: "Coda does not primarily monetize broad collaboration. It monetizes the right to originate structure, administer the workspace, and access the full paid Doc Maker surface, while keeping downstream participation free to widen adoption.",
    target_buyer_inference: "The structure is best suited to organizations where a small number of builders create systems, templates, and operating docs for a wider population that mainly updates, comments, and collaborates inside those systems.",
    decision_friction: "The buyer has to decide where collaboration ends and creation rights begin: who truly needs to create docs or pages, who can stay a free editor, and when AI use or workspace administration forces a person across the paid boundary.",
    exposure_logic: "Coda gives up broad per-seat monetization to reduce adoption resistance. The model works only if the builder layer stays scarce and valuable enough that accounts accept paying for Doc Makers while a larger free collaborator base operates inside the system.",
    logic_flaw: "The weakness is that Coda's free layer can still capture a large share of operational value. If many teams can run substantial workflows inside maker-built docs without expanding the Doc Maker count, the billing boundary can undercapture the value created by heavy editors and repeat contributors.",
    strategic_opportunity: "A competitor could attack with a hybrid model that still subsidizes broad collaboration but charges more explicitly for workflow scale, automation intensity, or temporary creation rights. The opening is a cleaner match between monetization and operational contribution, not just a lower list price.",
    page_path: "coda-doc-maker-billing.html",
    source_urls: [
      "https://coda.io/pricing",
      "https://coda.io/product/collaboration-costs-less-with-coda",
      "https://coda.io/compare/airtable",
      "https://help.coda.io/hc/en-us/articles/39555725230989-Billing-and-pricing-basics",
      "https://help.coda.io/hc/en-us/articles/39556004184077-Roles-in-Coda-Doc-Makers-Admins-and-Editors",
      "https://help.coda.io/hc/en-us/articles/39555796209165-Upgrade-your-Coda-workspace",
      "https://help.coda.io/hc/en-us/articles/39555859321357-Coda-AI-credits"
    ],

    // Metadata only
    framework_tags: ["EVAC 2.0", "Marketing"],
    counterintuitive_score: 5,
    teaching_value_score: 5,
    strategic_gap_score: 5,
    portability_score: 5,
    evidence_strength_score: 5,
    verdict: "Accept",
    transferable_principle: "When a few people define the system and many people participate inside it, charge for creation rights and administrative control instead of every collaborator, but only if the free layer does not end up performing too much of the value-creating work."
  },
  {
    // Identity
    slug: "intercom-seat-plus-outcome-pricing",
    title: "Intercom and the seat-plus-outcome AI meter",
    company: "Intercom",
    industry: "Customer service and support SaaS",
    market: "Global B2B support teams buying helpdesk software and AI-assisted service operations",
    reviewed_at: "2026-04-24",

    // Public page inputs
    mechanism_type: "Seat-tier platform pricing + AI outcome meter",
    pricing_page_url: "https://www.intercom.com/pricing",
    screenshot_url: "../../assets/images/cases/intercom-pricing-page.svg",
    pricing_surface: "Intercom publicly presents Essential, Advanced, and Expert helpdesk plans priced per seat, plus a standalone Fin AI Agent offer for existing helpdesks. Across those offers, Fin is priced separately from seats on a per-outcome basis.",
    mechanism_summary: "Intercom sells the helpdesk on seat tiers, then overlays a second meter for successful AI outcomes. The buyer therefore pays for human operating capacity and for AI-delivered results in parallel rather than choosing one pricing grammar or the other.",
    target_buyer_inference: "The structure targets support organizations that still budget for human teams but want AI to scale independently of seat count. It also targets companies that want Intercom's AI layer without changing their existing helpdesk stack.",
    decision_friction: "The main friction is forecasting and governance. Buyers must estimate seat count, outcome volume, and which AI actions will be billed, while also accepting that usage limits are managed operationally rather than converted into a perfectly fixed spend line.",
    exposure_logic: "Intercom lowers monetization risk by charging separately when AI produces a billable result, but it takes on trust risk because the outcome boundary has to remain legible enough that customers accept a second usage meter on top of seat spend.",
    logic_flaw: "The outcome label is cleaner than the billing boundary underneath it. Official documentation says billable outcomes can include resolutions, configured Procedure handoffs, disqualifications, and qualifications, which makes the meter broader than the intuitive promise of paying only when AI solves a support problem.",
    strategic_opportunity: "A competitor could attack with cleaner packaging: bundle a committed block of AI outcomes into the seat price, separate workflow handoffs from true resolutions, or provide harder spend caps that buyers can trust more easily in procurement and finance reviews.",
    page_path: "intercom-seat-plus-outcome-pricing.html",
    source_urls: [
      "https://www.intercom.com/pricing",
      "https://www.intercom.com/help/en/articles/9061614-intercom-plans-explained",
      "https://www.intercom.com/help/en/articles/8205718-fin-ai-agent-outcomes",
      "https://www.intercom.com/help/en/articles/8991894-how-to-see-and-manage-your-usage"
    ],

    // Metadata only
    framework_tags: ["EVAC 2.0", "Marketing"],
    counterintuitive_score: 5,
    teaching_value_score: 5,
    strategic_gap_score: 5,
    portability_score: 5,
    evidence_strength_score: 5,
    verdict: "Accept",
    transferable_principle: "When automation is layered onto a human service workflow, separate platform access from billable successful outcomes only if the outcome boundary stays legible enough that buyers can forecast, govern, and defend the second meter internally."
  },
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
    screenshot_url: "../../assets/images/cases/webflow-pricing-page.png",
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
    screenshot_url: "../../assets/images/cases/figma-pricing-page.png",
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
    screenshot_url: "../../assets/images/cases/basecamp-pricing-page.png",
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
