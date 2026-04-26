schema_version: "1.0"

# Case Insight Brief

Company: Klaviyo
Case ID: klaviyo-active-profile-billing
Pricing model: Active-profile band pricing with send limits and optional mobile-message credits
Primary insight: Klaviyo monetizes the current emailable audience, so list hygiene changes the bill more directly than total stored customer data does.
What is monetized: The current pool of emailable active profiles, with optional mobile-message usage layered on top.
How users are segmented: Buyers are segmented by active-profile band and by whether they stay on email-only packaging or add mobile messaging.
What drives price differences: The count of emailable active profiles sets the base plan band, while mobile-message credits add a second paid layer.
Why this pricing works: It lowers adoption friction by letting brands keep all historical customer records while charging only for the audience that is still commercially reachable.
Where friction appears: Friction appears when marketers have to forecast active-profile growth, decide who stays emailable, and manage suppression as a spend-control action.
Where risk appears: Risk appears because the bill can move with eligibility policy and suppression behavior more than with stable underlying customer value.
Structural weakness: The meter tracks emailable status more closely than actual commercial value, so the same customer graph can produce different bills through governance changes alone.
Student 10-second takeaway: The bill changes when more customer profiles stay emailable and push the account into a higher active-profile band.

## Case JSON

```json
{
  "case_id": "klaviyo-active-profile-billing",
  "case_type": "saas",
  "evidence_level": "observed",
  "pricing_model": "Active-profile band pricing with send limits and optional mobile-message credits",
  "value_metric": "Emailable active profiles per billing cycle",
  "segmentation_type": "Audience-size band plus channel bundle",
  "tiers": [
    {
      "name": "Free",
      "anchor_price": "$0",
      "audience": "Very small brands and new stores",
      "structural_role": "Entry tier for accounts with up to 250 active profiles and 500 monthly email sends."
    },
    {
      "name": "Email",
      "anchor_price": "$45/month starting",
      "audience": "Email-first retention teams",
      "structural_role": "Paid email plan whose base price rises with active-profile bands and includes 15,000 monthly email sends at the visible entry point."
    },
    {
      "name": "Email + mobile messages",
      "anchor_price": "$60/month starting",
      "audience": "Multichannel retention teams",
      "structural_role": "Email base plus mobile-message credits, with the same active-profile logic underneath the channel bundle."
    }
  ],
  "segments": [
    {
      "name": "Small or early-stage brands",
      "pricing_treatment": "Stay in the free layer while the emailable audience remains small."
    },
    {
      "name": "Email-led retention teams",
      "pricing_treatment": "Pay the active-profile-based email plan without adding mobile credits."
    },
    {
      "name": "Multichannel lifecycle teams",
      "pricing_treatment": "Keep the same active-profile base logic but add mobile-message credits and related channel capacity."
    }
  ],
  "pricing_logic": "Klaviyo charges for the current pool of profiles that can still receive email. As that emailable audience grows, the account moves into higher active-profile bands; mobile messaging adds a second paid layer on top of the same base audience logic.",
  "key_driver": "Count of emailable active profiles",
  "drivers": [
    {
      "driver": "Count of emailable active profiles",
      "type": "volume",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "The base plan price rises as more profiles remain eligible to receive email and the account moves into a higher active-profile band.",
      "student_label": "Reachable audience count"
    },
    {
      "driver": "Profile eligibility and suppression status",
      "type": "usage",
      "pricing_role": "threshold",
      "direction": "enforce_upgrade",
      "effect": "Profiles count toward the bill only while they remain emailable, so suppression and unsuppression decisions move the account toward or away from higher paid bands.",
      "student_label": "Who still counts as emailable"
    },
    {
      "driver": "Mobile-message credits",
      "type": "add_on",
      "pricing_role": "variable_charge",
      "direction": "increase_revenue",
      "effect": "Adding mobile messaging creates an additional paid layer on top of the active-profile-based email plan.",
      "student_label": "Optional multichannel spend"
    }
  ],
  "formula": {
    "expression": "Monthly bill = BasePrice(active_profiles) + MobileAddOn(optional)",
    "variables": [
      {
        "symbol": "A",
        "label": "Emailable active profiles",
        "maps_to_driver": "Count of emailable active profiles"
      },
      {
        "symbol": "E",
        "label": "Eligibility and suppression policy",
        "maps_to_driver": "Profile eligibility and suppression status"
      },
      {
        "symbol": "M",
        "label": "Mobile-message add-on",
        "maps_to_driver": "Mobile-message credits"
      }
    ],
    "output_label": "Monthly subscription bill",
    "explanation": "E determines which stored profiles are included in A. When A crosses a higher active-profile band, BasePrice(A) resets upward; M adds channel-specific spend on top."
  },
  "upgrade_triggers": [
    {
      "trigger": "Emailable active profiles cross the current pricing band",
      "from": "Current active-profile band",
      "to": "Next active-profile band",
      "why_it_happens": "More stored profiles remain eligible to receive email and therefore count toward the paid base.",
      "pricing_effect": "The monthly email base price increases on the next billing cycle."
    },
    {
      "trigger": "The account adds SMS or mobile messaging",
      "from": "Email",
      "to": "Email + mobile messages",
      "why_it_happens": "The buyer wants to run multichannel lifecycle marketing instead of email alone.",
      "pricing_effect": "Mobile-message credits are added on top of the active-profile-based email bill."
    },
    {
      "trigger": "Included send or feature limits no longer fit the reachable audience",
      "from": "Lower paid configuration",
      "to": "Higher paid configuration",
      "why_it_happens": "Audience scale and channel intensity outgrow the lower package boundary.",
      "pricing_effect": "The account moves to a larger paid configuration with higher recurring spend."
    }
  ],
  "visualization": {
    "primary_component": "driver_logic",
    "supporting_components": [
      "tier_ladder"
    ],
    "interactive_controls": [
      "Emailable active profile count",
      "Suppressed versus emailable audience mix",
      "Mobile messaging on or off"
    ],
    "default_view": "Show emailable active profiles as the dominant bill driver before showing the optional mobile-message layer.",
    "student_prompt": "Trace how more profiles staying emailable changes the base bill before any mobile-message add-on is selected."
  },
  "primary_component": "driver_logic",
  "decision_core": {
    "what_is_monetized": "The current pool of emailable active profiles, with optional mobile-message usage layered on top.",
    "what_changes_the_bill": "The bill changes when more profiles stay emailable and push the account into a higher active-profile band, or when mobile messaging is added.",
    "who_pays_more_and_why": "Brands with larger reachable audiences and multichannel retention needs pay more because more of the customer graph stays commercially active."
  },
  "student_10_second_takeaway": "The bill changes when more customer profiles stay emailable and push the account into a higher active-profile band.",
  "friction_points": [
    "Marketers must forecast how many profiles will stay emailable before the next billing cycle.",
    "Suppression policy becomes a budgeting decision because suppressed profiles stop counting toward the bill.",
    "Adding mobile messaging creates a second spend layer on top of the same audience base."
  ],
  "risks": [
    "The pricing boundary can feel detached from value when dormant but still strategically useful profiles are kept out of the bill through suppression.",
    "Buyers may experience list hygiene as procurement control work rather than only as deliverability management.",
    "The visible plan ladder can obscure the fact that audience eligibility is the real bill-setting variable."
  ],
  "structural_weakness": "The model tracks emailable status more closely than stable customer value, so governance changes can alter spend without materially changing the underlying customer graph.",
  "strategic_insight": "A competitor can attack by charging for engaged reach or delivered output while keeping inactive-profile storage outside the main billing boundary."
}
```

## Render Instruction

```json
{
  "case_id": "klaviyo-active-profile-billing",
  "render_goal": "Show that the Klaviyo bill is set first by emailable active-profile count, with mobile messaging and plan labels acting as secondary packaging layers.",
  "primary_component": "driver_logic",
  "secondary_components": [
    "tier_ladder"
  ],
  "first_screen_priority": [
    "decision_core",
    "key_driver",
    "formula"
  ],
  "interactive_controls": [
    "Emailable active profile count",
    "Suppressed versus emailable audience mix",
    "Mobile messaging on or off"
  ],
  "avoid": [
    "Feature comparison tables",
    "Visible case snapshot sidebars",
    "Treating the active-profile bands as a purely threshold-led mechanism"
  ],
  "failure_modes": [
    "Readers think total stored profiles are billed instead of emailable ones",
    "The page makes mobile messaging look like the main driver instead of a secondary add-on",
    "Suppression is described as deliverability housekeeping rather than part of the pricing logic"
  ],
  "data_dependencies": [
    "decision_core",
    "key_driver",
    "drivers",
    "formula",
    "tiers",
    "segments",
    "upgrade_triggers",
    "primary_component",
    "student_10_second_takeaway",
    "strategic_insight"
  ]
}
```
