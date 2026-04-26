# Case Insight Brief

Company: Webflow
Case ID: webflow-workspace-site-pricing-split
Pricing model: Per-site publishing pricing with workspace governance and role-seat expansion
Primary insight: Webflow turns one website workflow into a bill that grows when more paid surfaces are activated.
What is monetized: Live sites, workspace governance, and collaborator permission depth.
How users are segmented: Buyers are separated by published site needs, workspace governance needs, and collaborator role intensity.
What drives price differences: The bill changes when a buyer adds or upgrades a Site plan, upgrades the Workspace layer, or moves collaborators into paid seat roles.
Why this pricing works: The model lets Webflow capture value from publishing, team coordination, and permission depth without forcing every collaborator into the same paid seat.
Where friction appears: Buyers must classify whether the next cost belongs to a site, workspace, or collaborator role.
Where risk appears: The pricing can feel like one customer outcome being decomposed into too many commercial layers.
Structural weakness: The commercial boundary can mirror Webflow's product architecture more closely than the buyer's project outcome.
Student 10-second takeaway: The bill changes when more Webflow paid surfaces are activated: sites, workspace governance, or paid collaborator roles.

# Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "webflow-workspace-site-pricing-split",
  "case_type": "saas",
  "evidence_level": "observed",
  "pricing_model": "Per-site publishing pricing with workspace governance and role-seat expansion",
  "value_metric": "Published site and collaborator permission depth",
  "segmentation_type": "Asset layer, workspace governance layer, and role permission layer",
  "tiers": [
    {
      "name": "Starter",
      "surface": "Site plan",
      "anchor_price": "$0/month",
      "pricing_role": "Entry site and experimentation layer"
    },
    {
      "name": "Basic",
      "surface": "Site plan",
      "anchor_price": "$14/month billed yearly",
      "pricing_role": "Simple published site layer"
    },
    {
      "name": "CMS",
      "surface": "Site plan",
      "anchor_price": "$23/month billed yearly",
      "pricing_role": "Content-managed site layer"
    },
    {
      "name": "Business",
      "surface": "Site plan",
      "anchor_price": "$39/month billed yearly",
      "pricing_role": "Higher-scale marketing site layer"
    },
    {
      "name": "Enterprise",
      "surface": "Site and workspace plan",
      "anchor_price": "Contact sales",
      "pricing_role": "Custom scale, control, and governance layer"
    }
  ],
  "segments": [
    {
      "segment": "Single-site publisher",
      "pricing_treatment": "Pays for a Site plan attached to one published property."
    },
    {
      "segment": "Collaborative in-house team",
      "pricing_treatment": "Adds workspace governance and paid collaborator roles as team coordination grows."
    },
    {
      "segment": "Freelancer or agency",
      "pricing_treatment": "Uses workspace and permission layers to manage multiple sites, clients, guests, and reviewers."
    }
  ],
  "pricing_logic": "Webflow prices the live site, workspace governance, and collaborator permission depth as separate bill-change inputs. The model expands when the customer activates more of those paid surfaces.",
  "key_driver": "Activation and scale of paid surfaces: published sites, workspace governance, and paid seat roles",
  "drivers": [
    {
      "driver": "Published site count and Site-plan level",
      "type": "asset",
      "pricing_role": "base_charge",
      "direction": "increase_revenue",
      "effect": "Each live site needs its own Site plan, and higher Site plans increase the per-site charge for operating limits.",
      "student_label": "Site asset"
    },
    {
      "driver": "Workspace governance tier",
      "type": "add_on",
      "pricing_role": "access",
      "direction": "segment_users",
      "effect": "Higher workspace tiers unlock stronger staging, collaboration, and governance controls across a portfolio.",
      "student_label": "Workspace layer"
    },
    {
      "driver": "Paid collaborator role intensity",
      "type": "role",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Collaborators who need fuller creation or editing permissions move from free review-style access into paid roles.",
      "student_label": "Seat role"
    }
  ],
  "formula": {
    "expression": "monthly_bill = sum(site_plan_price_per_published_site) + workspace_tier_price + sum(paid_seat_role_prices)",
    "variables": [
      {
        "symbol": "S",
        "label": "Published sites and selected Site plans",
        "maps_to_driver": "Published site count and Site-plan level"
      },
      {
        "symbol": "W",
        "label": "Selected Workspace tier",
        "maps_to_driver": "Workspace governance tier"
      },
      {
        "symbol": "R",
        "label": "Paid collaborator roles",
        "maps_to_driver": "Paid collaborator role intensity"
      }
    ],
    "output_label": "Webflow recurring bill",
    "explanation": "Plan tier sets the price for each activated surface; the bill rises as more sites, governance needs, or paid collaborator roles are activated."
  },
  "upgrade_triggers": [
    {
      "trigger": "A new published site requires its own Site plan",
      "from": "Unpublished or existing site coverage",
      "to": "Additional paid Site plan",
      "why_it_happens": "Publishing turns a project into a billable live asset.",
      "pricing_effect": "Adds or raises the per-site charge."
    },
    {
      "trigger": "The workspace needs higher collaboration or governance controls",
      "from": "Lower workspace tier",
      "to": "Higher workspace tier or Enterprise",
      "why_it_happens": "The team needs stronger staging, permissions, governance, or portfolio controls.",
      "pricing_effect": "Raises the workspace layer of the bill."
    },
    {
      "trigger": "A collaborator moves into a paid full or limited seat role",
      "from": "Free reviewer, guest, or client-style access",
      "to": "Paid collaborator role",
      "why_it_happens": "The person needs deeper creation, editing, or workspace participation rights.",
      "pricing_effect": "Adds paid seat-role cost."
    }
  ],
  "visualization": {
    "primary_component": "driver_logic",
    "supporting_components": [],
    "interactive_controls": [],
    "default_view": "Show three bill-change inputs flowing into one recurring bill.",
    "student_prompt": "Ask which paid surface changes when the buyer adds a site, upgrades governance, or changes a collaborator role."
  },
  "primary_component": "driver_logic",
  "decision_core": {
    "what_is_monetized": "Live sites, workspace governance, and collaborator permission depth.",
    "what_changes_the_bill": "The bill changes when the buyer adds or upgrades a Site plan, upgrades the Workspace layer, or moves collaborators into paid seat roles.",
    "who_pays_more_and_why": "Teams with more live sites, stronger governance needs, and more high-permission collaborators pay more because more paid surfaces are activated."
  },
  "student_10_second_takeaway": "The bill changes when more Webflow paid surfaces are activated: sites, workspace governance, or paid collaborator roles.",
  "friction_points": [
    "Layer-selection burden: the buyer must decide whether the next cost belongs to a Site plan, Workspace plan, or paid seat role.",
    "Role-classification burden: the buyer must map collaborators into free review-style access or paid full and limited roles.",
    "Portfolio budgeting burden: site-level and workspace-level costs can turn one web project into multiple budget lines."
  ],
  "risks": [
    "Packaging complexity can make one website outcome feel like several separate bills.",
    "Competitors can attack by bundling site publishing and collaboration allowances around the buyer's project outcome."
  ],
  "structural_weakness": "The commercial boundary can mirror Webflow's product architecture more closely than the buyer's project outcome.",
  "strategic_insight": "A simpler competitor could bundle one published site with a default collaborator allowance, then charge for scale once the project grows beyond that bundle."
}
```

# Render Instruction

```json
{
  "case_id": "webflow-workspace-site-pricing-split",
  "render_goal": "Make the student see that the bill grows through activated paid surfaces, not through one blended subscription.",
  "primary_component": "driver_logic",
  "secondary_components": [],
  "first_screen_priority": [
    "decision_core",
    "key_driver",
    "student_10_second_takeaway"
  ],
  "interactive_controls": [],
  "avoid": [
    "Do not render the case as a generic feature comparison table.",
    "Do not make the Site plan ladder look like the only mechanism.",
    "Do not add a second primary mechanism token."
  ],
  "failure_modes": [
    "A weak rendering would make Webflow look like ordinary tiered SaaS instead of a multi-surface bill.",
    "A weak rendering would hide which paid surface changes when the buyer adds a site, upgrades governance, or changes a collaborator role."
  ],
  "data_dependencies": [
    "decision_core",
    "key_driver",
    "drivers",
    "formula",
    "upgrade_triggers",
    "primary_component"
  ]
}
```
