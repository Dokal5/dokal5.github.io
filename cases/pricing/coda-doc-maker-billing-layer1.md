# Case Insight Brief

Company: Coda
Case ID: coda-doc-maker-billing
Pricing model: Maker-billed collaboration pricing with free editors and viewers
Primary insight: Coda monetizes maker rights rather than broad collaboration, so the bill rises when more people need to create structure or the workspace needs a higher governance tier.
What is monetized: Creation rights, maker-level AI access, and workspace administration capacity inside the workspace
How users are segmented: Users are segmented into free collaborators versus paid Doc Makers, then into Free, Pro, Team, and Enterprise workspace tiers
What drives price differences: The main driver is the number of paid Doc Makers, with tier upgrades adding higher governance, automation, and enterprise controls
Why this pricing works: The model widens adoption by keeping editors and viewers free while charging the smaller builder group that originates and governs the workspace structure
Where friction appears: Buyers have to decide who truly needs maker rights versus who can remain a free editor or viewer
Where risk appears: Free collaborators can still capture substantial operational value without increasing the paid Doc Maker count
Structural weakness: The paid boundary can undercapture value when repeated operational contribution stays in the free collaborator layer
Student 10-second takeaway: The bill changes when more people need to become Doc Makers or when the team needs a higher governance tier.

## Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "coda-doc-maker-billing",
  "case_type": "saas",
  "evidence_level": "observed",
  "pricing_model": "Maker-billed collaboration pricing with free editors and viewers",
  "value_metric": "Paid Doc Maker rights per workspace",
  "segmentation_type": "Role-based builder versus collaborator segmentation inside a tiered workspace ladder",
  "tiers": [
    {
      "name": "Free",
      "price": "$0",
      "structural_role": "Entry layer for evaluation and light collaboration with no paid Doc Maker charge"
    },
    {
      "name": "Pro",
      "price": "$12 per Doc Maker per month",
      "structural_role": "Paid maker layer for smaller teams that need more building rights and paid AI capacity"
    },
    {
      "name": "Team",
      "price": "$36 per Doc Maker per month",
      "structural_role": "Governance tier that expands maker productivity with stronger automation, controls, and workspace administration"
    },
    {
      "name": "Enterprise",
      "price": "Custom",
      "structural_role": "Custom governance and scale tier for broader rollouts with enterprise administration needs"
    }
  ],
  "segments": [
    {
      "name": "Editors and viewers",
      "structural_treatment": "Collaborate inside existing docs without a paid Doc Maker charge"
    },
    {
      "name": "Doc Makers",
      "structural_treatment": "Paid role that can create docs, create pages, use maker-level AI, and expand workspace structure"
    },
    {
      "name": "Admins and governed teams",
      "structural_treatment": "Move into higher workspace tiers when governance, controls, or enterprise administration is required"
    }
  ],
  "pricing_logic": "Coda sells a visible workspace ladder, but the main billing boundary sits at the maker role. Editors and viewers can keep participating for free, while paid spend rises when more people need to create structure or when the workspace requires a higher governance tier.",
  "key_driver": "Number of paid Doc Makers",
  "drivers": [
    {
      "driver": "Paid Doc Maker count",
      "type": "seat",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Each additional Doc Maker expands the paid builder layer that creates and administers workspace structure.",
      "student_label": "More makers means a bigger bill."
    },
    {
      "driver": "Workspace tier",
      "type": "commitment",
      "pricing_role": "multiplier",
      "direction": "enforce_upgrade",
      "effect": "Moving from Pro to Team or Enterprise raises the price attached to each maker when the account needs stronger governance or scale.",
      "student_label": "Higher governance tiers raise the per-maker rate."
    },
    {
      "driver": "Free collaborator access",
      "type": "access",
      "pricing_role": "zero_price_layer",
      "direction": "reduce_friction",
      "effect": "Editors and viewers stay outside the paid boundary, which widens adoption without directly expanding billed seats.",
      "student_label": "Collaboration stays free until someone needs maker rights."
    }
  ],
  "formula": {
    "expression": "Workspace bill = maker_count x tier_rate + enterprise add-ons if applicable",
    "variables": [
      {
        "symbol": "M",
        "label": "Paid Doc Makers",
        "maps_to_driver": "Paid Doc Maker count"
      },
      {
        "symbol": "R_tier",
        "label": "Per-maker rate for the selected workspace tier",
        "maps_to_driver": "Workspace tier"
      }
    ],
    "output_label": "Workspace subscription bill",
    "explanation": "The direct bill scales with the number of paid Doc Makers, while the selected workspace tier sets the rate and governance level attached to each maker."
  },
  "upgrade_triggers": [
    {
      "trigger": "Another user needs to create docs or pages",
      "from": "Free collaborator or lower paid maker count",
      "to": "Higher paid Doc Maker count",
      "why_it_happens": "Creation rights sit inside the paid maker boundary rather than the free collaboration layer.",
      "pricing_effect": "Adds another paid Doc Maker charge."
    },
    {
      "trigger": "A user needs workspace administration or maker-level AI access",
      "from": "Editor or viewer",
      "to": "Doc Maker or higher governance tier",
      "why_it_happens": "Administration and maker-level productive control are tied to paid maker status and richer paid tiers.",
      "pricing_effect": "Converts a free collaborator into a paid maker or raises the per-maker tier rate."
    },
    {
      "trigger": "The team needs stronger governance or larger workspace scale",
      "from": "Pro",
      "to": "Team or Enterprise",
      "why_it_happens": "The account needs more controls, automation capacity, or enterprise administration than the current tier provides.",
      "pricing_effect": "Raises the price attached to each paid maker and may move the account to custom pricing."
    }
  ],
  "visualization": {
    "primary_component": "driver_logic",
    "supporting_components": [
      "tier_ladder"
    ],
    "interactive_controls": [
      "maker_count",
      "workspace_tier"
    ],
    "default_view": "Show the free collaborator layer feeding into the paid Doc Maker meter across Free, Pro, Team, and Enterprise tiers.",
    "student_prompt": "See how the bill changes when collaboration stays free but more people need maker rights."
  },
  "primary_component": "driver_logic",
  "decision_core": {
    "what_is_monetized": "Creation rights, maker-level AI access, and workspace administration capacity inside the workspace.",
    "what_changes_the_bill": "The bill changes when more users need Doc Maker rights or when the workspace moves to a higher governance tier.",
    "who_pays_more_and_why": "Teams with more system builders and more governance needs pay more because more users originate and administer the structure."
  },
  "student_10_second_takeaway": "The bill changes when more people need to become Doc Makers or when the team needs a higher governance tier.",
  "friction_points": [
    "Buyers have to classify who truly needs Doc Maker rights versus who can stay a free editor or viewer.",
    "Teams must decide when AI access or workspace administration is important enough to justify moving someone into the paid maker layer.",
    "The account has to forecast whether a governance need requires a higher tier before broad rollout."
  ],
  "risks": [
    "Free editors and viewers can still capture substantial operational value without increasing the paid Doc Maker count.",
    "Heavy contribution can remain outside the paid boundary if workflows keep operating inside maker-built docs.",
    "The monetization boundary can feel too narrow if customers equate operational contribution with value creation rather than document origination."
  ],
  "structural_weakness": "The paid boundary can undercapture value when repeated operational contribution stays in the free collaborator layer instead of converting into additional Doc Makers.",
  "strategic_insight": "Coda trades away broad per-seat monetization to maximize collaboration adoption, but it must keep builder rights scarce and important enough that the Doc Maker boundary still feels like the fairest place to charge."
}
```

## Render Instruction

```json
{
  "case_id": "coda-doc-maker-billing",
  "render_goal": "Help the learner see that maker count, not total collaborators, is the main bill driver.",
  "primary_component": "driver_logic",
  "secondary_components": [
    "tier_ladder"
  ],
  "first_screen_priority": [
    "what_is_monetized",
    "what_changes_the_bill",
    "who_pays_more_and_why"
  ],
  "interactive_controls": [
    "maker_count",
    "workspace_tier"
  ],
  "avoid": [
    "feature-comparison framing",
    "visible case snapshot",
    "multiple primary mechanisms",
    "treating editor activity as a billed seat driver"
  ],
  "failure_modes": [
    "Readers mistake free collaboration breadth for the main bill driver.",
    "The page implies tier names alone explain pricing without showing the paid Doc Maker boundary.",
    "The mechanism visual drifts into plan comparison instead of showing how maker count changes spend."
  ],
  "data_dependencies": [
    "schema_version",
    "pricing_model",
    "value_metric",
    "tiers",
    "segments",
    "key_driver",
    "drivers",
    "formula",
    "upgrade_triggers",
    "primary_component",
    "decision_core",
    "friction_points",
    "risks",
    "structural_weakness",
    "strategic_insight"
  ]
}
```
