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
- Demo sign-in and account switching across customer, space-operator, event-service-vendor, and Gather platform contexts
- Twelve representative permission roles with role-specific workspaces, navigation, and route-access demonstrations
- Platform-administration preview for subscription, venue commission, vendor commission, and processing-cost treatment
- Community-association pilot explanation

## Demo accounts and access model

Choose **Demo sign in** to select one of four account contexts and twelve representative roles:

| Account context | Representative roles in the prototype |
|---|---|
| Customer account | Organizer / booking owner |
| Space-operator organization | Owner / account administrator; booking manager; operations / inspection staff; finance and settlement; board / auditor — read only |
| Event-service vendor | Vendor owner / administrator; order / fulfilment staff; vendor finance |
| Gather platform team | Platform administrator; marketplace operations / support; platform finance / reconciliation |

The account switcher selects an **active context**—the organization and role whose workspace and permissions are being demonstrated. In production, one identity may hold memberships in multiple organizations and may have a different role in each; a user would switch context without creating duplicate credentials. Permissions should follow least privilege and separation of duties. For example, operations staff may record inspection evidence and propose a deposit outcome, while an authorized finance role approves the financial outcome.

An anonymous visitor can browse public listings without an account. The organizer controls the booking; attendees are not account holders in the pilot. Payment processors, banks, Communal or other calendar systems, tax services, and email providers are external systems—not human user types—and require separately controlled integration credentials.

The sign-in flow and access guards in this static prototype are simulated entirely in the browser. They are useful for reviewing navigation and permission boundaries, but they are **not authentication or security controls**. A production implementation must authenticate identities and enforce authorization on the server for every request and object, default to denying access, scope every membership and data lookup to the correct tenant, and keep privileged support access time-limited and auditable.

## Run locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

No packages, credentials, build step, or external backend are required. All identities, memberships, permissions, listings, availability, totals, taxes, payments, confirmation messages, and dashboard data are fictional and simulated. The prototype does not authenticate users, collect card details, create charges, send email, or reserve a real space.

## Suggested pilot script

Ask an organizer to find a space for 60 attendees, confirm that the date and time are available, distinguish included amenities from venue add-ons and independent vendor services, understand whether a security deposit is required, and complete the mock checkout without prompting. Confirm that they understand why separate suppliers create separate invoices even though checkout is grouped.

Next, use **Switch demo account** to compare the same records across the organizer, space operator, vendor, and Gather platform contexts. Within the venue context, compare operations staff—who can record inspection evidence and propose an outcome—with finance staff, who can review financial records and approve permitted outcomes, and the read-only board/auditor view.

Ask the venue team to complete the sample event closeout twice: first have operations propose a full release, finance approve it, and finance record provider confirmation; then reset the demo, have operations submit an itemized claim, switch to the organizer to accept or dispute it, and switch to finance to approve the financial outcome and then record provider confirmation. The accepted and approved path becomes a supplemental venue invoice, a deposit payment allocation, and a partial refund. Review the Interim Event Account Statement before provider confirmation and the Final Booking Statement afterward. Walk finance staff through the association settlement, one grouped processor-cost allocation, the separate vendor account, Gather fee invoice, and snapshotted policy terms. Record confusion, missing information, time to complete, and any point where a reviewer would leave the prototype to call, email, or use a spreadsheet.
