# Case Insight Brief

Company: Basecamp / 37signals
Case ID: basecamp-flat-organization-pricing
Pricing model: Per-employee pricing with a flat organization-wide cap
Primary insight: Basecamp monetizes employee participation on smaller accounts while making the organization-wide plan attractive when headcount growth turns per-seat pricing into adoption friction.
What is monetized: Employee access on Basecamp Plus and whole-organization rollout on Basecamp Pro Unlimited.
How users are segmented: Employees and full users are billed on Plus, while guests and clients are free; Pro Unlimited removes per-user billing for the whole organization.
What drives price differences: Billed employee count drives the Plus bill, while plan choice and flat add-ons determine whether the account stays variable or moves to a fixed organization price.
Why this pricing works: The structure lets smaller teams buy gradually while giving growing teams a predictable cap that removes the internal debate over every additional user.
Where friction appears: Buyers must decide when employee-based pricing is less attractive than a fixed organization plan and whether the bundled Pro Unlimited package is worth the commitment.
Where risk appears: Very large but light-usage accounts can be underpriced once they enter the fixed-price plan.
Structural weakness: The jump from per-employee pricing to a fixed organization cap can feel too binary for teams that want broad rollout but not the full bundled Pro Unlimited package.
Student 10-second takeaway: The bill moves with billed employees on Plus, then stops moving per user once the buyer chooses Pro Unlimited.

## Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "basecamp-flat-organization-pricing",
  "case_type": "saas",
  "evidence_level": "observed",
  "pricing_model": "Per-employee pricing with a flat organization-wide cap",
  "value_metric": "Employee participation and organization-wide collaboration access",
  "segmentation_type": "Employee versus guest/client access, with package choice by organization scale",
  "tiers": [
    {
      "name": "Basecamp Free",
      "anchor_price": "$0",
      "pricing_unit": "one project",
      "structural_role": "Entry package for limited evaluation with one project, limited storage, and a user cap"
    },
    {
      "name": "Basecamp Plus",
      "anchor_price": "$15 per user per month",
      "pricing_unit": "billed employee or full user",
      "structural_role": "Variable employee-priced package for freelancers, startups, and smaller teams"
    },
    {
      "name": "Basecamp Pro Unlimited",
      "anchor_price": "$299 per month billed annually or $349 month-to-month",
      "pricing_unit": "whole organization",
      "structural_role": "Fixed-price organization package with unlimited users and bundled upgrades"
    }
  ],
  "segments": [
    {
      "segment": "Small teams",
      "pricing_treatment": "Use Free or Plus while employee count remains easy to budget one user at a time"
    },
    {
      "segment": "Growing organizations",
      "pricing_treatment": "Move toward Pro Unlimited when the predictable organization cap is more valuable than per-employee budgeting"
    },
    {
      "segment": "Guests, clients, and contractors",
      "pricing_treatment": "Can be invited without becoming billed employees on Plus"
    }
  ],
  "pricing_logic": "Basecamp starts with a variable employee meter on Plus, excludes guests and clients from that meter, and then offers Pro Unlimited as a fixed organization-wide package that removes per-user charges.",
  "key_driver": "Billed employee count on Plus compared with the fixed Pro Unlimited organization price",
  "drivers": [
    {
      "driver": "Billed employee count",
      "type": "seat",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Each billed employee or full user increases the Plus bill by the per-user monthly price.",
      "student_label": "Employees move the Plus bill"
    },
    {
      "driver": "Organization-wide package choice",
      "type": "commitment",
      "pricing_role": "cap",
      "direction": "reduce_friction",
      "effect": "Choosing Pro Unlimited replaces incremental per-user charges with a fixed organization price.",
      "student_label": "Pro Unlimited caps per-user growth"
    },
    {
      "driver": "Flat account upgrades",
      "type": "add_on",
      "pricing_role": "access",
      "direction": "segment_users",
      "effect": "Timesheet, Admin Pro Pack, and storage upgrades can add flat account-level value without charging every user separately.",
      "student_label": "Add-ons monetize control and capacity"
    }
  ],
  "formula": {
    "expression": "monthly_bill = selected_package_price + flat_add_ons; Plus package price = 15 * billed_employees; Pro Unlimited package price = 299 billed annually or 349 month-to-month",
    "variables": [
      {
        "symbol": "E",
        "label": "billed employees or full users",
        "maps_to_driver": "Billed employee count"
      },
      {
        "symbol": "P",
        "label": "selected package",
        "maps_to_driver": "Organization-wide package choice"
      },
      {
        "symbol": "A",
        "label": "flat add-ons",
        "maps_to_driver": "Flat account upgrades"
      }
    ],
    "output_label": "Basecamp monthly account bill",
    "explanation": "Employee count directly changes the Plus bill, while selecting Pro Unlimited changes the pricing rule to a fixed organization price."
  },
  "upgrade_triggers": [
    {
      "trigger": "Billed employee count makes Plus less attractive than the fixed organization price",
      "from": "Basecamp Plus",
      "to": "Basecamp Pro Unlimited",
      "why_it_happens": "The buyer wants predictable rollout economics instead of a new charge for every additional employee.",
      "pricing_effect": "The account shifts from a variable per-employee bill to a fixed organization-wide price."
    },
    {
      "trigger": "The buyer needs unlimited users, more storage, priority support, onboarding, or bundled controls",
      "from": "Basecamp Plus",
      "to": "Basecamp Pro Unlimited",
      "why_it_happens": "The account needs organization-level scale and controls rather than only incremental seats.",
      "pricing_effect": "The buyer pays the fixed Pro Unlimited price instead of adding only employee seats or separate upgrades."
    },
    {
      "trigger": "The Free package no longer has enough projects, storage, or user capacity",
      "from": "Basecamp Free",
      "to": "Basecamp Plus or Pro Unlimited",
      "why_it_happens": "The evaluation package no longer fits the team's operating footprint.",
      "pricing_effect": "The buyer leaves the free package for either employee-based billing or the fixed organization plan."
    }
  ],
  "visualization": {
    "primary_component": "driver_logic",
    "supporting_components": [],
    "interactive_controls": ["billed_employee_count", "selected_package", "flat_add_ons"],
    "default_view": "Show billed employee count flowing into Plus spend, then show Pro Unlimited replacing per-user movement with a fixed organization price.",
    "student_prompt": "Watch what changes the bill before and after the account selects the organization cap."
  },
  "primary_component": "driver_logic",
  "decision_core": {
    "what_is_monetized": "Employee participation on Plus and organization-wide rollout on Pro Unlimited.",
    "what_changes_the_bill": "The bill changes when billed employee count rises on Plus, when the account selects Pro Unlimited, or when flat account add-ons are purchased.",
    "who_pays_more_and_why": "Smaller teams pay more as employee count grows on Plus; organizations that value predictable broad rollout pay the higher fixed Pro Unlimited price to remove per-user expansion friction."
  },
  "student_10_second_takeaway": "The bill moves with billed employees on Plus, then stops moving per user once the buyer chooses Pro Unlimited.",
  "friction_points": [
    "The buyer has to estimate when employee growth makes the fixed organization price preferable.",
    "The Pro Unlimited package can feel like a large jump if the team wants predictable rollout but not every bundled upgrade.",
    "Annual billing on the fixed plan can create commitment hesitation even when the cap logic is attractive."
  ],
  "risks": [
    "Large but shallow accounts may receive broad access for a fixed price that undercaptures usage breadth.",
    "The binary jump from Plus to Pro Unlimited can push some mid-sized teams to delay expansion.",
    "Flat pricing depends on marginal user and support costs remaining low."
  ],
  "structural_weakness": "The plan transition is strategically clear but abrupt: buyers move from a per-employee meter to a broad fixed package with limited intermediate ramp.",
  "strategic_insight": "A competitor could attack the crossover point with a smoother ramp between employee billing and an organization cap, or by separating governance add-ons from broad access."
}
```

## Render Instruction

```json
{
  "case_id": "basecamp-flat-organization-pricing",
  "render_goal": "Help the student see that billed employee count drives Plus spend until the account chooses a fixed organization price that removes per-user bill movement.",
  "primary_component": "driver_logic",
  "secondary_components": [],
  "first_screen_priority": [
    "decision_core",
    "billed employee driver",
    "fixed organization cap"
  ],
  "interactive_controls": [
    "billed_employee_count",
    "selected_package",
    "flat_add_ons"
  ],
  "avoid": [
    "Do not present the case primarily as a tier ladder.",
    "Do not make the crossover threshold the primary mechanism.",
    "Do not render a visible Case Snapshot."
  ],
  "failure_modes": [
    "A weak rendering would make the case look like ordinary plan comparison instead of showing how the bill changes.",
    "A weak rendering would hide the difference between billed employees and free guests or clients.",
    "A weak rendering would imply that Pro Unlimited still scales per user."
  ],
  "data_dependencies": [
    "decision_core",
    "key_driver",
    "drivers",
    "formula",
    "upgrade_triggers",
    "tiers",
    "segments"
  ]
}
```
