# Case Insight Brief

Company: Figma
Case ID: figma-role-based-seat-segmentation-v2
Pricing model: Single-seat-per-user role-based pricing across plan tiers
Primary insight: Figma does not mainly monetize raw access to the workspace; it monetizes workflow responsibility by charging different seat prices for creation, developer handoff, and collaboration inside each plan.
What is monetized: Paid workflow roles inside a selected plan, especially Full, Dev, and Collab seats.
How users are segmented: By workflow role first (View, Collab, Dev, Full) and by organizational governance need second (Professional, Organization, Enterprise).
What drives price differences: Not total user count, but the count and mix of paid seat types, plus the plan tier that sets the price of each seat and the level of governance.
Why this pricing works: Figma can widen adoption with free view access while charging more when a user creates assets, operationalizes design in engineering handoff, or needs the governance layer that comes with larger cross-team design systems.
Where friction appears: Admins have to classify users into the right paid role and revisit those assignments as cross-functional work shifts.
Where risk appears: Role boundaries can feel political or arbitrary when one person moves between collaboration, inspection, and creation.
Structural weakness: The billing boundary follows workflow responsibility more closely than stable job titles, so frequent role changes can make pricing feel like seat-governance work.
Student 10-second takeaway: Figma captures value by pricing responsibility in the design workflow, not by charging every visible participant.

## Case JSON

```json
{
  "case_id": "figma-role-based-seat-segmentation-v2",
  "case_type": "saas",
  "evidence_level": "observed",
  "pricing_model": "Single-seat-per-user role-based pricing across plan tiers",
  "value_metric": "Paid seat type within the selected plan",
  "segmentation_type": "Workflow role and governance tier",
  "tiers": [
    {
      "name": "Professional",
      "anchor_price": "Full $16 / Dev $12 / Collab $3 per seat per month",
      "buyer_logic": "Small teams needing unlimited files, advanced prototyping, and easier developer handoff",
      "prices": {
        "view": 0,
        "collab": 3,
        "dev": 12,
        "full": 16
      }
    },
    {
      "name": "Organization",
      "anchor_price": "Full $55 / Dev $25 / Collab $5 per seat per month",
      "buyer_logic": "Businesses coordinating design across teams with shared assets and centralized admin",
      "prices": {
        "view": 0,
        "collab": 5,
        "dev": 25,
        "full": 55
      }
    },
    {
      "name": "Enterprise",
      "anchor_price": "Full $90 / Dev $35 / Collab $5 per seat per month",
      "buyer_logic": "Multi-product or multi-brand organizations needing enterprise security and scalable admin management",
      "prices": {
        "view": 0,
        "collab": 5,
        "dev": 35,
        "full": 90
      }
    }
  ],
  "segments": [
    {
      "segment": "View",
      "basis": "Visibility only",
      "pricing_effect": "Free seat with view and comment access across files"
    },
    {
      "segment": "Collab",
      "basis": "Structured participation",
      "pricing_effect": "Paid seat for FigJam and Figma Slides collaboration with view and comment access in design files"
    },
    {
      "segment": "Dev",
      "basis": "Developer handoff",
      "pricing_effect": "Paid seat for Dev Mode plus FigJam and Figma Slides"
    },
    {
      "segment": "Full",
      "basis": "Creation and system ownership",
      "pricing_effect": "Highest-priced seat with full access to Figma Design, Dev Mode, FigJam, Figma Slides, Figma Make, and Figma Draw"
    }
  ],
  "pricing_logic": "Figma assigns one seat per person. The bill is the selected plan multiplied by the count of Full, Dev, and Collab seats, while View access stays free to widen participation.",
  "key_driver": "The count and mix of paid seat types inside the selected plan.",
  "drivers": [
    {
      "driver": "Selected plan tier",
      "type": "commitment",
      "pricing_role": "multiplier",
      "direction": "enforce_upgrade",
      "effect": "Raises the price of every paid seat while adding governance, admin, and security capabilities.",
      "student_label": "Plan tier multiplies seat cost."
    },
    {
      "driver": "Full seat count",
      "type": "seat",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Captures the highest-value workflow responsibility: design creation and system ownership.",
      "student_label": "Creators cost the most."
    },
    {
      "driver": "Dev seat count",
      "type": "seat",
      "pricing_role": "variable_charge",
      "direction": "segment_users",
      "effect": "Captures technical handoff and implementation inspection without charging the full creator rate.",
      "student_label": "Builders pay for handoff depth."
    },
    {
      "driver": "Collab seat count",
      "type": "seat",
      "pricing_role": "variable_charge",
      "direction": "improve_adoption",
      "effect": "Monetizes lightweight participation at a lower price so workshops and co-creation can expand.",
      "student_label": "Light collaborators still have a paid lane."
    },
    {
      "driver": "View seat access",
      "type": "seat",
      "pricing_role": "discount",
      "direction": "reduce_friction",
      "effect": "Lets stakeholders stay in the product without forcing marginal seat debates.",
      "student_label": "Visibility stays free."
    }
  ],
  "formula": {
    "expression": "Total monthly seat spend = (Collab seats x plan Collab price) + (Dev seats x plan Dev price) + (Full seats x plan Full price)",
    "variables": [
      {
        "symbol": "C",
        "label": "Collab seat count",
        "maps_to_driver": "Collab seat count"
      },
      {
        "symbol": "D",
        "label": "Dev seat count",
        "maps_to_driver": "Dev seat count"
      },
      {
        "symbol": "F",
        "label": "Full seat count",
        "maps_to_driver": "Full seat count"
      },
      {
        "symbol": "Pc/Pd/Pf",
        "label": "Plan seat prices",
        "maps_to_driver": "Selected plan tier"
      }
    ],
    "output_label": "Monthly paid seat spend"
  },
  "upgrade_triggers": [
    {
      "trigger": "A viewer or collaborator needs to create or directly edit design output",
      "from": "View or Collab",
      "to": "Full",
      "why_it_happens": "Workflow responsibility shifts from visibility to ownership.",
      "pricing_effect": "The bill rises to the highest seat level."
    },
    {
      "trigger": "An engineer needs advanced handoff and Dev Mode access",
      "from": "View or Collab",
      "to": "Dev",
      "why_it_happens": "Implementation work requires deeper inspection and translation to code.",
      "pricing_effect": "A lower but still paid workflow role is added."
    },
    {
      "trigger": "A team needs shared libraries, broader admin, or cross-team governance",
      "from": "Professional",
      "to": "Organization",
      "why_it_happens": "The design system becomes an organizational asset instead of a single-team tool.",
      "pricing_effect": "Every paid seat gets more expensive."
    },
    {
      "trigger": "Security, brand complexity, or identity control becomes a buying requirement",
      "from": "Organization",
      "to": "Enterprise",
      "why_it_happens": "IT and procurement enter the decision and value risk reduction more directly.",
      "pricing_effect": "Seat prices rise again in exchange for enterprise governance."
    }
  ],
  "visualization": {
    "primary_component": "Pricing Driver Simulator",
    "supporting_components": [
      "Segmentation Map",
      "Tier Ladder"
    ],
    "interactive_controls": [
      "Plan tier",
      "View seats",
      "Collab seats",
      "Dev seats",
      "Full seats"
    ],
    "default_view": "Organization plan with a viewer-heavy team and a smaller set of paid workflow owners",
    "student_prompt": "Change the seat mix and watch how workflow responsibility, not total headcount, changes the bill."
  },
  "primary_component": "Pricing Driver Simulator",
  "decision_core": {
    "what_is_monetized": "Paid workflow roles inside the design-to-build process.",
    "what_changes_the_bill": "The number and mix of Collab, Dev, and Full seats, plus the selected plan tier.",
    "who_pays_more_and_why": "Teams with more creators, more developer handoff users, and higher governance needs pay more because they own more output and require more control."
  },
  "student_10_second_takeaway": "Figma captures value by pricing responsibility in the workflow, not by charging every participant equally.",
  "friction_points": [
    "Classifying cross-functional users whose work shifts between collaboration, inspection, and creation",
    "Explaining why a growing design system justifies a more expensive plan for every paid seat",
    "Reviewing seat assignments so free viewers do not silently drift into paid work",
    "Managing temporary upgrades when someone needs short bursts of higher-intensity access"
  ],
  "risks": [
    "Monetization risk: free viewers may receive meaningful value without expanding paid seat counts",
    "Operational complexity: admins have to manage seat taxonomy and reassignment over time",
    "Customer behavior risk: teams may compress responsibilities into fewer paid users to control spend"
  ],
  "structural_weakness": "Seat classification can feel like workflow governance overhead when the real-world job boundary is fluid.",
  "strategic_insight": "Role-based pricing works when the workflow boundary is legible and stable enough that users accept paying more for responsibility rather than for mere presence."
}
```

## Render Instruction

```json
{
  "case_id": "figma-role-based-seat-segmentation-v2",
  "render_goal": "Show within 10 seconds that paid seat mix, not raw headcount, changes the bill because Figma charges for workflow responsibility and governance.",
  "primary_component": "Pricing Driver Simulator",
  "secondary_components": [
    "Segmentation Map",
    "Tier Ladder"
  ],
  "first_screen_priority": [
    "View seats can increase without changing paid spend",
    "Each user gets one seat type",
    "Paid seat mix drives the bill more than total headcount",
    "Plan tier raises every paid seat price as governance increases"
  ],
  "interactive_controls": [
    "Plan tier selector",
    "View seat count",
    "Collab seat count",
    "Dev seat count",
    "Full seat count"
  ],
  "avoid": [
    "Turning the page into a product feature matrix",
    "Letting plan copy overshadow the seat-mix logic",
    "Treating job titles as if they were the actual billing unit"
  ],
  "failure_modes": [
    "User cannot tell within 5 seconds that view access is free",
    "User leaves thinking Figma charges simple per-user pricing",
    "Role segmentation overwhelms the plan tier relationship or vice versa",
    "Simulator behaves like a generic user-count calculator instead of a role-mix pricing explanation"
  ],
  "data_dependencies": [
    "tiers",
    "segments",
    "drivers",
    "formula",
    "upgrade_triggers",
    "decision_core",
    "visualization"
  ]
}
```
