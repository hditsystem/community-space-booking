# Gather — Community Space Booking prototype

A self-contained clickable pilot prototype based on the supplied Community Space Booking product plan.

## Why this deliverable

The plan recommends validating the workflow with a clickable prototype before building production infrastructure. This prototype is designed for interviews and pilot conversations with Calgary venue operators, hall-rental businesses, and community associations.

## Included journeys

- Public landing page and space discovery
- Filterable directory concept
- Availability-filtered results: if a space appears, it can be booked for the selected time
- Venue details with transparent rental, add-on, tax, and deposit pricing
- Three-step instant booking checkout with included items and selectable paid add-ons
- Mock card payment followed by immediate booking confirmation
- Venue operations dashboard
- Venue-facing pilot explanation

## Run locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open `http://localhost:4173`.

No packages, credentials, build step, or external backend are required. The prototype uses fictional example content and does not process or retain submitted data.

## Suggested pilot script

Ask renters to find a hall for 60 people, confirm that the date and time are available, distinguish included items from paid add-ons, and complete the mock payment without prompting. Ask venue owners, managers, or booking staff to identify what needs attention and explain what they would do next. Record confusion, missing information, time to complete, and any point where they would leave the prototype to call or email.
