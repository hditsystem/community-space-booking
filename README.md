# Gather — Space Booking Marketplace prototype

A self-contained clickable prototype adapted from the supplied Community Space Booking plan and revised around an Instant Book marketplace model.

## Why this deliverable

The plan recommends validating the workflow before building production infrastructure. Gather is intended for any supported short-term rentable space; the initial supply-side pitch and pilot focus on Calgary community associations and the halls, rooms, kitchens, rinks, courts, and other spaces they manage.

The reassessed product direction and terminology are documented in [PRODUCT_PLAN.md](PRODUCT_PLAN.md). The event catalogue, vendor categories, dynamic booking checklist, and configurable vendor-commission strategy are documented in [EVENT_SERVICES_MARKETPLACE.md](EVENT_SERVICES_MARKETPLACE.md). The booking-time invoice, post-event closeout, platform-fee invoice, payout statement, and reconciliation design are documented in [INVOICING_AND_SETTLEMENT.md](INVOICING_AND_SETTLEMENT.md). The supplied source plan remains unchanged.

The clickable prototype now demonstrates the venue-booking foundation, a two-sided independent-vendor marketplace, booking-time supplier documents, an organizer-only **My Event** workspace, and a post-event invoicing and settlement walkthrough. It remains a front-end concept: all records, statuses, messages, offering drafts, image previews, quotes, fees, invoices, refunds, and payouts are simulated in memory.

## Included journeys

- Public landing page and space discovery
- Directory and filter interface (the filter controls are illustrative)
- Simulated availability-filtered results: if a space appears, it can be booked for the selected time
- Venue details with transparent rental, add-on, tax, and deposit pricing
- Purpose-guided booking details for celebrations, meetings, classes, weddings, recreation, public events, community gatherings, or an **Other / not sure** fallback
- Venue-policy fit shown as **allowed**, **venue approval required**, or **not offered**, with Instant Book and payment available only while the selected use remains allowed
- Three-stage add-on selection that first explains venue fit and included or required items, then shows optional venue recommendations, and finally opens a compact category-first event-service marketplace
- Purpose-based recommendations that stay optional and unselected, plus a **Browse all services allowed at this venue** fallback for every facility-compatible category
- Provider comparison by availability, total or per-person price, rating, verified-review count, guest capacity, lead time, venue compatibility, scope, and supplier
- Organizer configuration of the selected package: catering menus and service style, cake flavour/filling/icing/design/inscription/fulfilment, and category-appropriate choices for décor, entertainment, face painting, and photo booths; paid choices update the displayed price immediately
- Quote-gated custom cake, décor, photo, and custom-service requests: a required private reference or brief can be submitted for a vendor quote, but upload or quote request alone never makes the item payable or confirmed
- Catering filters for cuisine, menu preference, dietary support, allergy-review capability, serving style, guest count, delivery/setup window, and organizer notes; vendor-reported capabilities never imply an allergen-free guarantee
- Two-stage allergy handling: the organizer can send a confirmation request, but checkout stays blocked until the prototype separately simulates an authenticated vendor response
- Unavailable lower-priced packages remain visible with a reason, while only available and compatible packages can be selected and rechecked before payment; valid selections persist as the organizer moves between categories
- Mock card payment followed by immediate booking confirmation, separate supplier invoices, a payment receipt, and a deposit record
- Organizer-only **My Event** workspace that keeps the confirmed venue booking, separate vendor-order statuses, requirements and documents, booking-linked messages, and the event-day schedule and access information together
- Non-destructive booking-change and cancellation previews that show the estimated effect on the venue booking and each independent vendor order before any request would be submitted
- Verified post-event reviews submitted separately for the venue and each fulfilled independent-vendor order, with one editable review record per booking and supplier target
- Public 1–5 ratings, optional comments and highlights, private feedback to authorized Gather support, a 30-day review window, and future-organizer rating summaries and review excerpts
- Optional refundable-security-deposit disclosure, full-release path, and accepted-claim path that creates a supplemental venue invoice before applying deposit funds
- Venue operations dashboard with event closeout and finance centre
- Interim Event Account Statement and Final Booking Statement previews
- Association payout statement with default 0% venue commission and one transparently allocated grouped-payment processing cost
- Separate vendor portal, vendor-only invoice, vendor payout statement, and configurable example commission with a separate Gather fee invoice
- Vendor-owner offering builder for private drafts and published marketplace packages, including selling model, pricing basis, package inclusions, category-template option groups, organizer-facing choice labels and price adjustments, custom-request policy, capacity, lead time, compatible venues, and a cover image; the published option structure drives the organizer configurator
- Open prototype category access: a vendor admin may choose any service category currently shown in the offering builder and create separate offerings in multiple categories without a category-approval gate; the selected category loads the appropriate organizer-choice template
- Vendor cover images and organizer custom-reference images restricted in the prototype to one JPEG, PNG, or WebP file up to 5 MB, with a local preview and clear validation error
- Demo sign-in and account switching across customer, space-operator, event-service-vendor, and Gather platform contexts
- Twelve representative permission roles with role-specific workspaces, navigation, and route-access demonstrations
- Platform-super-administration preview with global organization, booking/order, deposit and settlement health; redacted cross-tenant records; commercial terms; and reason-coded, expiring, audited read-only support sessions
- Community-association pilot explanation

## Demo accounts and access model

Choose **Demo sign in** to select one of four account contexts and twelve representative roles:

| Account context | Representative roles in the prototype |
|---|---|
| Customer account | Organizer / booking owner |
| Space-operator organization | Owner / account administrator; booking manager; operations / inspection staff; finance and settlement; board / auditor — read only |
| Event-service vendor | Vendor owner / administrator; order / fulfilment staff; vendor finance |
| Gather platform team | Platform administrator / super admin; marketplace operations / support; platform finance / reconciliation |

The account switcher selects an **active context**—the organization and role whose workspace and permissions are being demonstrated. In production, one identity may hold memberships in multiple organizations and may have a different role in each; a user would switch context without creating duplicate credentials. Permissions should follow least privilege and separation of duties. For example, operations staff may record inspection evidence and propose a deposit outcome, while an authorized finance role approves the financial outcome.

An anonymous visitor can browse public listings without an account. The organizer controls the booking; attendees are not account holders in the pilot. Payment processors, banks, Communal or other calendar systems, tax services, and email providers are external systems—not human user types—and require separately controlled integration credentials.

The sign-in flow and access guards in this static prototype are simulated entirely in the browser. They are useful for reviewing navigation and permission boundaries, but they are **not authentication or security controls**. A production implementation must authenticate identities and enforce authorization on the server for every request and object, default to denying access, scope every membership and data lookup to the correct tenant, and keep privileged support access time-limited and auditable. The My Event messages, requirement updates, schedule details, access information, and change or cancellation previews are fictional in-memory demonstrations; they do not contact a venue or vendor, amend an order, cancel a booking, issue a refund, or move money. Review records, ratings, excerpts, publication, and edits are also fictional in-memory demonstrations; they do not contact a supplier or publish to a real marketplace.

This prototype iteration demonstrates instantly priced fixed and per-person vendor packages, configurable package choices with live price changes, and a quote gate for custom work. The quote response is a clearly labelled in-memory simulation; no vendor is contacted, no file is uploaded to a server, and no quote is legally accepted. Referral or concierge orders remain documented rather than simulated.

The browser validates prototype images by declared file type and size only. The 5 MB JPEG/PNG/WebP rule is a product constraint, not a production security control. Production must repeat size and MIME checks on the server, verify the decoded image rather than trusting the filename or browser type, scan and safely re-encode it, remove metadata, enforce image dimensions and access permissions, store it outside executable/public paths, and retain moderation, deletion, and image-rights controls.

The pilot remains a venue-booking and event-services marketplace, not a full attendee-management product. Attendee ticketing, invitations and RSVP management, seating plans, attendee accounts, and event check-in are intentionally outside this iteration.

## Run locally

From this folder:

```bash
python3 -m http.server 4173
```

Then open `http://127.0.0.1:4173`.

No packages, credentials, build step, or external backend are required. All identities, memberships, permissions, listings, availability, totals, taxes, payments, confirmation messages, and dashboard data are fictional and simulated. The prototype does not authenticate users, collect card details, create charges, send email, or reserve a real space.

## Suggested pilot script

Use Ridgeview Community Hall with 60 attendees and complete this focused add-on test:

1. Select **Birthday or family celebration**, then choose the applicable activity answers. Confirm that the venue's policy—not the recommendation engine—determines whether the use is allowed, approval-required, or not offered.
2. Continue through **Fit & included**, **Venue options**, and **Event services**. Ask the organizer to explain the difference between included, required, recommended, and other compatible items. Confirm that no optional paid item is preselected.
3. Open one recommended service category, choose a provider, return to the category overview, and verify that the choice remains saved. Then choose **Browse all services allowed at this venue** and confirm that relevant recommendations do not hide general facility-compatible options.
4. Compare a cheaper unavailable package with available mid-priced and higher-priced alternatives. Sort by price and rating, and confirm that availability and incompatibility reasons remain visible.
5. Return to booking details and change a material answer such as attendance, on-site food preparation, alcohol, or public access. Confirm that fit and every retained selection are revalidated, required items are added with a reason, and an invalid selection is shown for correction rather than silently removed or charged.
6. Trigger **Venue approval required** and confirm the checkout no longer claims Instant Book and cannot advance to payment. Use a venue/purpose combination marked **Not offered** and confirm the organizer must change the purpose or space.

For catering, filter by cuisine, menu preference, dietary support, allergy review, and serving style. Select the Bow River sample package and choose the exact mains, sides, serving style, and optional staffing/tableware choices. Confirm that maximum-choice rules are enforced and each paid option changes the configured price and checkout total immediately. Confirm that the organizer understands the per-person estimate, guest-capacity and lead-time checks, delivery/setup window, shared-kitchen cross-contact warning, supplier tax, and need for vendor confirmation of a disclosed allergy. Send its confirmation request, verify that checkout remains blocked, and then use the clearly labelled prototype control to simulate the authenticated vendor response. With the default Bow River configuration, add kitchen access and the WonderSpark magic show; the expected demo total for 60 attendees is **$1,785.75**, including $1,415.00 before supplier taxes, $70.75 of supplier taxes, and a separate $300.00 refundable security deposit. Complete checkout and verify one venue invoice, two vendor invoices, one grouped receipt, and the saved catering configuration.

Open a cake package and select a custom design. Confirm that a JPEG, PNG, or WebP reference no larger than 5 MB is required, an invalid file is rejected without replacing the current preview, and checkout remains blocked until an itemized vendor quote is returned. Use the prototype quote-response control and verify that the quoted adjustment, selected options, and reference-file metadata—not the local preview URL—are retained in the order snapshot.

Switch to the **Vendor owner / administrator** account and open **Offerings**. Confirm that the vendor can choose any currently supported service category without approval, switch between at least two categories, and see the appropriate organizer-choice template load for each one. Create a separate offering for every additional category. Choose a pre-made, configurable, hybrid, or quote-only selling model, set the pricing basis, enable option groups, rename the choices shown to organizers, and set each automatic price adjustment. Add capacity/lead-time/venue rules and upload a valid cover image. Verify that a non-image or file larger than 5 MB is rejected, **Save draft** does not expose the offering to organizers, and **Publish offering** makes that exact option structure available in the in-memory organizer configurator. Confirmed orders preserve their published package version, selected choices, prices, terms, and image reference when a later catalogue version is published. Refreshing the page resets these prototype-only changes and local image previews.

Open **My Event** as the organizer. Confirm that the venue booking and each vendor order retain separate statuses while appearing in one organizer view. Review the requirement and document checklist, booking-linked message history, and the combined schedule with access, setup, delivery, service, teardown, and checkout details. Open both the change and cancellation previews and verify that they show estimated venue and supplier-specific effects without changing the confirmed booking, sending a request, issuing a credit or refund, or moving money.

Switch to the organizer account and open the completed sample booking. Choose **Leave reviews**, submit one review for Ridgeview Community Hall and a separate review for WonderSpark Entertainment, and confirm that either target may be skipped or completed independently. Use a 1–5 rating, public highlights or comment, and optional private feedback to Gather support; verify that private feedback is not shown to future organizers or suppliers. Edit a submitted review and confirm that it replaces the original booking-and-target record instead of increasing the review count. Check that the public display uses only a minimal organizer identity, month/year, general event type, and **Verified booking** label; then confirm that updated aggregates and excerpts appear in the venue and vendor views. Keep a deposit claim or complaint separate and verify that neither supplier can approve a review or remove it merely because it disagrees with the rating.

Next, use **Switch demo account** to compare the same records across the organizer, space operator, vendor, and Gather platform contexts. Within the venue context, compare operations staff—who can record inspection evidence and propose an outcome—with finance staff, who can review financial records and approve permitted outcomes, and the read-only board/auditor view.

As the Platform administrator / super admin, review the global organization directory, linked bookings and vendor orders, deposit and settlement health, and masked-data boundary. Start and end a reason-coded, 30-minute read-only support session and verify that Taylor Chen remains the identified actor and both events appear in the audit history; the prototype must not silently switch to a venue or vendor identity.

Ask the venue team to complete the sample event closeout twice: first have operations propose a full release, finance approve it, and finance record provider confirmation; then reset the demo, have operations submit an itemized claim, switch to the organizer to accept or dispute it, and switch to finance to approve the financial outcome and then record provider confirmation. The accepted and approved path becomes a supplemental venue invoice, a deposit payment allocation, and a partial refund. Review the Interim Event Account Statement before provider confirmation and the Final Booking Statement afterward. Walk finance staff through the association settlement, one grouped processor-cost allocation, the separate vendor account, Gather fee invoice, and snapshotted policy terms. Record confusion, missing information, time to complete, and any point where a reviewer would leave the prototype to call, email, or use a spreadsheet.
