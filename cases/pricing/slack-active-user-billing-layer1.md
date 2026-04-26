# Case Insight Brief

Company: Slack / Salesforce
Case ID: slack-active-user-billing
Pricing model: Active-member billing with tier packaging, guest carve-outs, and inactivity credits
Primary insight: Slack monetizes active participation rather than every provisioned collaboration account.
What is monetized: Active participation inside the workspace rather than every provisioned account.
How users are segmented: Users are segmented by plan tier, member role, guest role, and activity state.
What drives price differences: The dominant driver is the count of active members in the billing window, with plan tier setting the per-member price and guest rules deciding who enters the paid boundary.
Why this pricing works: It reduces adoption resistance by letting collaboration access spread while charging most reliably when Slack becomes habitual operating infrastructure.
Where friction appears: Buyers must forecast activity, classify guests, and understand when light participation becomes billable.
Where risk appears: Slack gives up some revenue certainty through inactivity credits and free single-channel guest access.
Structural weakness: Access value and activity value are not identical, so retained knowledge access and occasional participation can remain valuable even when the active-user meter does not fully capture them.
Student 10-second takeaway: The bill changes when more people are active often enough to count in Slack's billing window.

# Case JSON

```json
{
  "schema_version": "1.0",
  "case_id": "slack-active-user-billing",
  "case_type": "saas",
  "evidence_level": "observed",
  "pricing_model": "Active-member billing with tier packaging, guest carve-outs, and inactivity credits",
  "value_metric": "Active billable members in the workspace",
  "segmentation_type": "Plan tier plus member role and activity state",
  "tiers": [
    {
      "name": "Free",
      "anchor_price": "$0",
      "structural_role": "Entry workspace with limited history and capability"
    },
    {
      "name": "Pro",
      "anchor_price": "$8.75 monthly or $7.25 annually per active member",
      "structural_role": "Paid collaboration layer"
    },
    {
      "name": "Business+",
      "anchor_price": "$18 monthly or $15 annually per active member",
      "structural_role": "Higher governance, security, administration, and support layer"
    },
    {
      "name": "Enterprise+",
      "anchor_price": "Contact sales",
      "structural_role": "Contracted enterprise governance and scale layer"
    }
  ],
  "segments": [
    {
      "segment": "Workspace owners, admins, and full members",
      "pricing_treatment": "Billable when active on paid plans"
    },
    {
      "segment": "Multi-channel guests",
      "pricing_treatment": "Billed like regular members"
    },
    {
      "segment": "Single-channel guests",
      "pricing_treatment": "Free guest layer with channel limits"
    },
    {
      "segment": "Bots",
      "pricing_treatment": "Free non-human account layer"
    }
  ],
  "pricing_logic": "Slack sets a per-active-member price through the plan tier, counts paid member types that are active in the billing window, applies prorated charges when active billable members are added or reactivated, and applies prorated credits when paid members become inactive.",
  "key_driver": "Count of active members in the billing window",
  "drivers": [
    {
      "driver": "Active member count",
      "type": "seat",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Each active billable member increases recurring spend according to the selected plan's per-member price.",
      "student_label": "Active billable people"
    },
    {
      "driver": "Plan tier",
      "type": "commitment",
      "pricing_role": "multiplier",
      "direction": "segment_users",
      "effect": "Free, Pro, Business+, and Enterprise+ set the capability package and per-member price level.",
      "student_label": "Governance tier"
    },
    {
      "driver": "Member classification",
      "type": "role",
      "pricing_role": "access",
      "direction": "reduce_friction",
      "effect": "Full members and multi-channel guests sit inside the paid boundary, while single-channel guests and bots remain free.",
      "student_label": "Member or guest status"
    },
    {
      "driver": "Activity state",
      "type": "usage",
      "pricing_role": "threshold",
      "direction": "reduce_friction",
      "effect": "Inactive paid members generate prorated credits; reactivated members can create prorated charges.",
      "student_label": "Active or inactive"
    }
  ],
  "formula": {
    "expression": "monthly_bill = plan_price_per_active_member(plan_tier) * billable_active_members + prorated_additions - inactivity_credits",
    "variables": [
      {
        "symbol": "plan_tier",
        "label": "Selected Slack plan",
        "maps_to_driver": "Plan tier"
      },
      {
        "symbol": "billable_active_members",
        "label": "Paid member types active in the billing window",
        "maps_to_driver": "Active member count"
      },
      {
        "symbol": "prorated_additions",
        "label": "Charges for newly active or newly added billable members",
        "maps_to_driver": "Activity state"
      },
      {
        "symbol": "inactivity_credits",
        "label": "Credits for paid members who become inactive",
        "maps_to_driver": "Activity state"
      }
    ],
    "output_label": "Slack workspace bill",
    "explanation": "Plan tier sets the per-member price; active billable member count is the dominant variable; guest and activity rules determine who enters or exits the billable base."
  },
  "upgrade_triggers": [
    {
      "trigger": "More members become active within the billing window",
      "from": "Inactive or uncounted participation",
      "to": "Billable active member",
      "why_it_happens": "The member takes Slack actions often enough to count as active for billing.",
      "pricing_effect": "Adds or restores a prorated active-member charge."
    },
    {
      "trigger": "Guest access no longer fits one channel",
      "from": "Free single-channel guest",
      "to": "Billable multi-channel guest or full member",
      "why_it_happens": "The collaborator needs access across more than one channel or broader workspace participation.",
      "pricing_effect": "Moves the collaborator into the paid member boundary."
    },
    {
      "trigger": "The buyer needs Business+ or Enterprise governance",
      "from": "Lower self-serve plan",
      "to": "Higher governance tier",
      "why_it_happens": "Security, administration, support, or compliance needs exceed the lower tier.",
      "pricing_effect": "Raises the per-active-member price level or moves the account to sales-led pricing."
    }
  ],
  "visualization": {
    "primary_component": "driver_logic",
    "supporting_components": [
      "tier_ladder"
    ],
    "interactive_controls": [],
    "default_view": "Active member count flowing through plan and role rules into prorated bill consequences",
    "student_prompt": "What happens to the bill when one more collaborator becomes active or needs broader channel access?"
  },
  "primary_component": "driver_logic",
  "decision_core": {
    "what_is_monetized": "Active participation inside the workspace rather than every provisioned account.",
    "what_changes_the_bill": "The bill changes when more members count as active in the billing window or when the buyer moves into a higher governance tier.",
    "who_pays_more_and_why": "Organizations with more habitual active participation and stronger control needs pay more because more of the operating graph becomes billable."
  },
  "student_10_second_takeaway": "The bill changes when more people are active often enough to count in Slack's billing window.",
  "friction_points": [
    "Buyers must forecast who will count as active over the billing window.",
    "Buyers must decide when a collaborator can stay a single-channel guest versus becoming a billable multi-channel guest or full member.",
    "Governance needs can raise the plan tier even when active-member count stays stable."
  ],
  "risks": [
    "Slack gives up some revenue certainty by crediting inactivity and leaving narrow guest access free.",
    "The meter can undercapture value from retained knowledge access and occasional emergency participation.",
    "The activity definition must stay trusted or buyers may treat role and activity management as budget gaming."
  ],
  "structural_weakness": "Access value and activity value are not identical; a low-activity or dormant account can still benefit from searchable history, channel presence, and emergency access while falling outside the active billing boundary.",
  "strategic_insight": "A competitor could attack with a hybrid model that captures retained access and temporary participation more explicitly without forcing every marginal collaborator into a full active seat."
}
```

# Render Instruction

```json
{
  "case_id": "slack-active-user-billing",
  "render_goal": "Help the student understand that Slack's bill moves primarily with active billable member count, while plan tier and guest classification set the pricing parameters.",
  "primary_component": "driver_logic",
  "secondary_components": [
    "tier_ladder"
  ],
  "first_screen_priority": [
    "decision_core",
    "key_driver",
    "student_10_second_takeaway"
  ],
  "interactive_controls": [],
  "avoid": [
    "Do not make the tier ladder appear to be the main mechanism.",
    "Do not add a second primary mechanism.",
    "Do not render a visible case snapshot."
  ],
  "failure_modes": [
    "A weak rendering would make Slack look like ordinary provisioned-seat pricing.",
    "A weak rendering would hide the active/inactive billing boundary.",
    "A weak rendering would treat guest roles as feature detail instead of pricing segmentation."
  ],
  "data_dependencies": [
    "decision_core",
    "key_driver",
    "drivers",
    "formula",
    "upgrade_triggers",
    "segments",
    "tiers",
    "primary_component"
  ]
}
```
