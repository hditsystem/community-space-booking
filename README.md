# Gather — Community Space Booking prototype

A self-contained clickable pilot prototype based on the supplied Community Space Booking product plan.

## Why this deliverable

The plan recommends validating the workflow with a clickable prototype before building production infrastructure. This prototype is designed for interviews and pilot conversations with Calgary community associations.

## Included journeys

- Public landing page and space discovery
- Filterable directory concept
- Venue details with transparent rental and deposit pricing
- Three-step guest booking request
- Plain-language request confirmation and next action
- Volunteer action dashboard
- Venue-facing pilot explanation

## Run locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

No packages, credentials, build step, or external backend are required. The prototype uses fictional example content and does not process or retain submitted data.

## Suggested pilot script

Ask renters to find a hall for 60 people, understand the total price, and submit a request without prompting. Ask volunteers to identify what needs attention and explain what they would do next. Record confusion, missing information, time to complete, and any point where they would leave the prototype to call or email.
