# Gather — Space Booking Marketplace prototype

A self-contained clickable prototype adapted from the supplied Community Space Booking plan and revised around an Instant Book marketplace model.

## Why this deliverable

The plan recommends validating the workflow before building production infrastructure. Gather is intended for any supported short-term rentable space; the initial supply-side pitch and pilot focus on Calgary community associations and the halls, rooms, kitchens, rinks, courts, and other spaces they manage.

The reassessed product direction and terminology are documented in [PRODUCT_PLAN.md](PRODUCT_PLAN.md). The event catalogue, vendor categories, dynamic booking checklist, and configurable vendor-commission strategy are documented in [EVENT_SERVICES_MARKETPLACE.md](EVENT_SERVICES_MARKETPLACE.md). The booking-time invoice, post-event closeout, platform-fee invoice, payout statement, and reconciliation design are documented in [INVOICING_AND_SETTLEMENT.md](INVOICING_AND_SETTLEMENT.md). The supplied source plan remains unchanged.

The clickable prototype now demonstrates the venue-booking foundation, independent vendor services, booking-time supplier documents, and a post-event invoicing and settlement walkthrough. It remains a front-end concept: all records, statuses, fees, invoices, refunds, and payouts are simulated in memory.

## Included journeys

- Public landing page and space discovery
- Directory and filter interface (the filter controls are illustrative)
- Simulated availability-filtered results: if a space appears, it can be booked for the selected time
- Venue details with transparent rental, add-on, tax, and deposit pricing
- Three-step instant booking checkout with included items, venue add-ons, and selectable independent vendor services whose date/time availability is rechecked before payment
- Mock card payment followed by immediate booking confirmation, separate supplier invoices, a payment receipt, and a deposit record
- Optional refundable-security-deposit disclosure, full-release path, and accepted-claim path that creates a supplemental venue invoice before applying deposit funds
- Venue operations dashboard with event closeout and finance centre
- Interim Event Account Statement and Final Booking Statement previews
- Association payout statement with default 0% venue commission and one transparently allocated grouped-payment processing cost
- Separate vendor portal, vendor-only invoice, vendor payout statement, and configurable example commission with a separate Gather fee invoice
- Authorized commercial-terms preview for subscription, venue commission, vendor commission, and processing-cost treatment
- Community-association pilot explanation

## Run locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

No packages, credentials, build step, or external backend are required. All listings, availability, totals, taxes, payments, confirmation messages, and dashboard data are fictional and simulated. The prototype does not collect card details, create charges, send email, or reserve a real space.

## Suggested pilot script

Ask an organizer to find a space for 60 attendees, confirm that the date and time are available, distinguish included amenities from venue add-ons and independent vendor services, understand whether a security deposit is required, and complete the mock checkout without prompting. Confirm that they understand why separate suppliers create separate invoices even though checkout is grouped.

Next, ask a community-association manager, booking coordinator, board member, or other venue-team member to complete the sample event closeout twice: first release the deposit in full, then reset the demo and submit an accepted claim that becomes a supplemental venue invoice, a deposit payment allocation, and a partial refund. Review the Interim Event Account Statement before provider confirmation and the Final Booking Statement afterward. Walk finance staff through the association settlement, one grouped processor-cost allocation, the separate vendor account, Gather fee invoice, and snapshotted policy terms. Record confusion, missing information, time to complete, and any point where a reviewer would leave the prototype to call, email, or use a spreadsheet.
