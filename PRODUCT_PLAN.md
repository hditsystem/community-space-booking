# Gather: revised space-booking product plan

**Status:** product-direction reassessment

**Market:** category-flexible space booking; Calgary community associations first

**Product model:** live availability, Instant Book, online payment, venue operations, and optional event services

## Executive decision

Gather should be positioned as a marketplace and operations platform for short-term rentable spaces. It is not limited to community-owned spaces.

The initial supply-side pitch should focus on community associations because they already manage varied bookable inventory—halls, meeting rooms, kitchens, rinks, courts, studios, and outdoor areas—but often rely on email, spreadsheets, and disconnected payment processes. Community associations are the launch beachhead, not the permanent product boundary.

The underlying account, listing, availability, pricing, add-on, payment, and security-deposit model should remain usable by other space operators. The first release should still define a practical boundary: hourly or session-based spaces for events, meetings, recreation, classes, and similar activities. Overnight accommodation, long-term leasing, vehicles, and storage should remain out of scope until their different legal and operating requirements are intentionally designed.

The customer promise is:

> Search by date and time, see only spaces that can actually be booked, choose available add-ons, pay securely, and receive immediate confirmation.

The operator promise is:

> Publish accurate inventory, accept paid bookings automatically, and manage calendars, payments, documents, access instructions, cancellations, and security deposits in one place.

The launch commercial promise is:

> Community-association pricing is configurable. The launch defaults are a $0 subscription and 0% platform commission on venue rent and venue-owned add-ons. When an association bears standard payment-processing costs, they remain separate and transparent and are deducted from its payout or separately invoiced according to its agreement; an explicitly configured promotion may subsidize them. Gather's commission on completed third-party vendor orders is also configurable and is itemized on the vendor's fee invoice and payout statement.

The detailed event catalogue, vendor catalogue, dynamic requirement checklist, and marketplace model are defined in [EVENT_SERVICES_MARKETPLACE.md](./EVENT_SERVICES_MARKETPLACE.md).

The booking-time invoice, post-event closeout, platform-fee invoice, and seller-payout lifecycle are defined in [INVOICING_AND_SETTLEMENT.md](./INVOICING_AND_SETTLEMENT.md).

This replaces the original plan's default request-and-approval workflow. Instant Book is the primary product. Approval-required inquiries can exist later as a clearly separate workflow, but they must never look like bookable inventory.

## Why the plan changed

| Original direction | Revised direction | Reason |
|---|---|---|
| Volunteer-run community associations are the product identity | Any supported short-term rentable space can be listed; community associations are the initial supply segment | The launch pitch can be focused without hard-coding the whole product to one organization type |
| Request-to-book is the default | Instant Book is the default for all search results | If a space appears for an exact date and time, the customer expects to be able to book it |
| Card payments are a later phase | Card and wallet payment are required for the core MVP | Payment is what converts a checkout hold into an immediately confirmed booking |
| Manual e-Transfer can lead the pilot | Manual methods are operator-recorded or pending-payment workflows | An unverified e-Transfer cannot provide reliable instant confirmation |
| Approval is part of the normal booking state machine | Approval is an exception path, separate from Instant Book | A hidden approval step breaks the customer promise and lowers conversion |
| Volunteer time is the central design constraint | Operator efficiency and inventory accuracy are the central constraints | The product must serve owners, managers, booking staff, finance staff, and other association team members |
| Availability can be manually maintained | Calendar accuracy and conflict prevention are launch requirements | Instant Book is credible only when the operator can trust that confirmed bookings will be honoured |
| Venue subscription is the initial revenue model | Subscription and venue commission are configurable, with launch defaults of $0 and 0% for participating community associations | Removing initial supply-side cost lowers adoption friction without hard-coding permanent pricing; optional third-party event services become the first revenue experiment |
| Every additional item can be called an add-on | Included amenities, venue add-ons, required fees, conditional requirements, refundable deposits, and third-party services are separate concepts | A mandatory cleaning charge, liquor-licence task, refundable deposit, and optional magician must not appear to be equivalent purchases |

## Standard product terminology

Use these terms consistently in the interface, documentation, emails, and database-facing product language.

| Concept | Preferred term | Avoid |
|---|---|---|
| Business or organization supplying the space | Space operator or venue operator | Volunteer team, landlord |
| Marketplace-side supplier label | Host, only where a short consumer label is useful | Volunteer |
| Person completing the booking | Customer or organizer | Guest when it could mean an attendee; renter in general marketing copy |
| People attending the event | Attendees | Guests when referring to the purchaser |
| Physical property | Venue | Organization when the customer is thinking about the place |
| Individually bookable room, hall, rink, or court | Space | Venue when multiple spaces can exist at one address |
| Public representation of a space | Listing | Booking page |
| Immediate booking capability | Instant Book | Auto-approve, request-free |
| Time temporarily protected during checkout | Checkout hold | Reservation, confirmed hold |
| Features provided at no extra cost | Included amenities | Free extras |
| Optional paid items or services | Add-ons | Extras when pricing must be explicit |
| Mandatory amount charged by the venue | Required venue fee | Add-on, optional fee |
| Licence, permit, insurance, evidence, or approval task | Requirement | Add-on, recommendation when it is mandatory |
| Independently supplied optional service | Event service or vendor service | Venue add-on when the venue is not the supplier |
| Sum of selected venue and vendor charges before tax and refundable deposit | Booking subtotal | Rental total when add-ons or vendor services are included |
| Amount authorized, charged, or manually collected under the accepted policy for permitted post-event deductions | Refundable security deposit or security-deposit authorization, depending on method | Damage fee, deposit alone, escrow |
| Amount actually charged at checkout: currently due supplier charges and tax, plus a security deposit when collected today | Total due today | Booking subtotal when tax, deposit, or a later balance is handled separately |
| Rules accepted at checkout | Venue rules, cancellation policy, and security-deposit policy when applicable | House rules for non-residential venues |
| Completed transaction | Confirmed booking | Approved request |

## Product rules that should not be negotiable

### 1. Search results are bookable inventory

- Search requires date, start time, end time, and attendee count.
- Results include only spaces that pass capacity, operating-hours, notice-period, buffer, blackout, and conflict checks.
- Every result carries a clear **Instant Book** or **Available** indicator.
- A final authoritative availability check runs before payment.
- A short checkout hold protects the selected interval while payment is completed.
- The database prevents overlapping active holds and bookings for the same blocked interval.
- Once confirmed, the interval is removed from availability immediately.

If approval-required inventory is introduced later, it should use a separate **Request approval** label and filter. It should not be mixed into the default Instant Book results.

### 2. Venue add-ons have real availability

Each listing separates:

- **Included amenities:** available with every booking at no additional charge.
- **Available venue add-ons:** optional paid items or services supplied by the venue that can be selected at checkout.
- **Unavailable items:** either hidden or clearly disabled with a reason.

A venue add-on can depend on date, time, quantity, staff availability, equipment inventory, or event type. An Instant Book listing must only offer it when the operator can fulfil it. Shared equipment and limited staff must be reserved atomically with the space. Independent vendor services follow their own availability, quote, order, and cancellation workflow.

### 3. Pricing is complete before payment

Show, in this order:

1. Space rate and duration.
2. Selected venue add-ons.
3. Mandatory fees, if any.
4. Selected third-party vendor services, grouped by supplier.
5. **Booking subtotal:** the pre-tax sum of selected venue and vendor charges; it excludes every refundable security deposit.
6. Tax by supplier, with each configured label and rate.
7. Security-deposit amount and collection method, if required; show it separately from the booking subtotal and revenue.
8. **Total due today:** currently due supplier charges and tax, plus the security deposit only when it is collected today.
9. Any later supplier balance or scheduled security deposit, with its due date; do not include a later amount in Total due today.

Do not advertise “no hidden fees” unless every mandatory fee is included before checkout.

### 3A. Booking items and requirements are classified correctly

Every cost or task must be classified as one of:

- Included amenity.
- Optional venue add-on.
- Required venue fee.
- Conditional requirement or document.
- Refundable security deposit.
- Optional third-party event service.

Search-result comparisons use the required venue cost for the organizer's event answers, not only a base hourly rate. Optional third-party services are shown separately and never included in the venue total until selected.

The booking questionnaire must use the selected event type and follow-up answers to generate relevant requirements. It should cover public versus private access, attendance, paid admission, alcohol, food preparation or sales, music and dancing, noise and event times, raffle/gaming, fire-risk activities, temporary structures, animals, inflatables, personal services, outside vendors, accessibility needs, insurance, setup, cleanup, and recurrence.

Each generated requirement records its source—law/regulator, venue policy, vendor condition, or recommendation—plus the responsible party, due date, evidence, cost type, reviewer, and status. Legal or venue requirements must never be disguised as marketplace upsells.

### 3B. Event services are separate vendor orders

- The venue booking, each independent vendor order, and the security deposit have separate ledgers and cancellation states.
- Community-association subscription and venue commission are configurable, with launch defaults of $0 and 0% on venue rent and venue-owned items.
- Gather may charge a disclosed, configurable commission on successfully completed third-party vendor orders. The applied policy is snapshotted when the order is confirmed.
- No commission is charged on taxes, tips, refundable deposits, government fees, donations, or raffle proceeds.
- Venues control whether outside vendors are allowed, approval-required, preferred, exclusive, or prohibited by category.
- Vendor services support fixed packages, quote-required services, or referral/concierge flows.
- If the venue booking changes or is cancelled, every linked vendor order receives an explicit impact assessment; it is not silently cancelled or refunded under the venue's policy.
- Organizers compare competing packages within a specific service need rather than seeing one undifferentiated add-on. Each result shows the supplier, scope, availability, total or pricing basis, rating and verified-review count, guest capacity, lead time, service area, venue compatibility, cancellation terms, and the exact reason when it cannot be booked.
- Unavailable packages remain visible by default so an organizer can understand price, availability, quality, and scope trade-offs. They are never selectable or included in totals. Sorting and recommendation use booking fit, availability, quality, price, response, and reliability—not Gather commission.
- A mutually exclusive service need, such as catering, permits at most one selected provider package. Complementary needs, such as a magic show and face painting, may be selected together. Changing the venue, date, time, attendance, or relevant event answers reruns compatibility for every retained selection and never silently removes or bills an invalid package.
- Catering comparison includes cuisine, guest-dependent pricing, minimum order, capacity, dietary support, allergy/cross-contact review capability, serving style, menu scope, service staff or tableware, delivery/setup window, facility requirements, service area, and lead time. “Gluten-aware,” “nut-aware,” or an allergy-review capability is a vendor-reported accommodation—not an allergen-free guarantee—and material allergy requirements require explicit vendor confirmation.
- Ratings displayed as verified reviews must come from completed platform orders. New providers show **New / no reviews**, not a zero-star score. Sponsored placement must be labelled and must not be blended into organic best-match ranking.

### 3C. Verified reviews follow completed supplier work

- After the event, the booking owner may review the venue and each fulfilled independent-vendor order separately. Eligibility is evaluated per target, so a completed vendor service can be reviewed even when another supplier or the venue deposit remains open.
- Allow one review record per `booking + review target`. The venue booking is one target and each fulfilled vendor order is its own target. An organizer edit replaces that record and recalculates the aggregate; it never adds a second rating for the same booking and target.
- Open the review window when the relevant venue stay or vendor service is completed and close it 30 days later. Canceled, unfulfilled, refunded-before-service, or otherwise ineligible targets do not create a public review in the pilot.
- Collect a required overall 1–5 rating plus optional public comment and structured highlights. Offer optional private feedback to authorized Gather support; it is not shared with the supplier and is never included in public excerpts or aggregate review content.
- A **Verified booking** label means the review is linked to an eligible completed Gather transaction. It does not mean Gather independently verified every factual claim in the review.
- The clickable prototype publishes a submitted review immediately in memory and uses fictional review data. Production requires content and integrity checks, reporting, moderation, an appeal/audit trail, and controls against duplicate, fraudulent, incentivized, extortive, retaliatory, discriminatory, harassing, or privacy-violating content.
- A venue or vendor may report a review and may receive a clearly labelled public-response capability, but it cannot approve a review before publication, edit the organizer's words, or remove a rating merely because it disagrees with it. Moderation removes or limits content only under the published review and content policies.
- Public review identity is deliberately minimal: the organizer's chosen display name or first name and last initial, **Verified booking**, month/year, a general event type, and the relevant venue or vendor package. Never publish the booking identifier, exact event date or time, contact details, attendee identities, allergy or health details, private event notes, deposit evidence, or payment information.
- Reviews do not replace support, safety, complaint, refund, chargeback, or security-deposit-dispute workflows. A review cannot move money, decide a claim, or be traded for a refund or discount; an open complaint or deposit case does not give a supplier veto over a policy-compliant first-hand review.
- Future organizers see the venue's aggregate rating and verified-review count on discovery and listing views, plus recent verified excerpts and useful structured highlights. Vendor offerings show the supplier/package aggregate and excerpts from the relevant service type. New targets display **New / no reviews**, and fictional prototype ratings remain labelled as sample data.

### 3D. Invoices, deposits, fees, and payouts remain distinct

- Issue the relevant supplier invoice and payment receipt when money is due or collected. Do not wait until after the event to create the first financial document.
- After event closeout, issue a supplemental supplier invoice or credit note for every valid change and produce one consolidated **Final Booking Statement**. When an approved venue charge is funded from the security deposit, the supplemental venue invoice is still required and the approved deposit amount is recorded as payment against it.
- Generate Gather fee invoices for non-zero commission or subscription. When processing-cost recovery requires a tax document, issue a dedicated recovery invoice whether it is settled through payout or paid separately; otherwise a processor cost deducted directly from payout remains one settlement line. Never mix collection methods on one invoice or collect the same cost twice.
- Show the commission basis, rate, amount, Gather tax, processing cost, refunds, gross proceeds, and net payout explicitly on the venue or vendor payout statement. A 0% venue rate still appears as `$0.00` on the statement.
- Do not show a seller-funded commission as a customer charge. Show it on the customer invoice only if the customer is actually responsible for a separately disclosed fee.
- Keep refundable security deposits outside sales revenue and commission. A valid claim becomes a properly classified and taxed venue charge on a supplemental invoice before any deposit funds are applied to it. Only that invoiced amount moves from the deposit liability into collected venue proceeds; refund or release the remainder, and never use deposit funds for Gather fees, processing costs, vendor orders, or unrelated seller debt.
- Snapshot the commercial policy, supplier tax profile, line-level tax treatment, and processing-cost rule on every confirmed supplier order.
- Close and settle each supplier order independently; normally hold only the affected seller amount while the event-level Final Booking Statement waits for all customer-facing balances and deposit activity to resolve.

The complete lifecycle and required edge cases are specified in [INVOICING_AND_SETTLEMENT.md](./INVOICING_AND_SETTLEMENT.md).

### 4. Verified payment confirms the booking

- Card and supported digital-wallet payment are the standard Instant Book methods.
- The browser redirect does not mark a booking paid. A verified payment-provider webhook does.
- While payment is asynchronous, show **Payment processing** and keep the checkout hold active.
- On verified success, change the status to **Confirmed**, block the calendar, and send the receipt and calendar invitation.
- On failure or hold expiry, release the inventory and clearly invite the customer to retry.
- Manual e-Transfer, cash, or cheque can create **Payment pending**, not instant confirmation, until recorded or verified by authorized venue staff.

### 5. Operator cancellations are exceptional

Instant Book creates a strong commitment. Operators must maintain their calendars and should not cancel for preventable availability or add-on mistakes. The product should track operator-initiated cancellation rate, require a reason, notify affected customers, and provide a full-refund workflow.

### 6. A security deposit is optional per listing

For the pilot, each space supports either **no security deposit** or a **fixed refundable security deposit**. Percentage-based and risk-scored deposits should wait.

#### Operator configuration

The host configures:

- Whether the deposit is not required, always required, or required by a disclosed rule such as event type or attendee count.
- The fixed amount.
- The method: pre-event card authorization where supported, refundable charge, or manual deposit.
- When it is secured.
- The inspection deadline and customer-response period.
- Permitted deduction reasons, required evidence, and which staff roles may approve a deduction.
- Automatic release or refund when the host misses the inspection deadline.

#### Checkout disclosure

Before payment, show the deposit separately from the booking subtotal:

- Amount and whether it will be charged, authorized, or collected manually.
- Collection date.
- Inspection deadline.
- Permitted deduction reasons and evidence requirements.
- Customer-response process.
- Expected release or refund timing, with a reminder that the payment provider and customer’s bank control when funds become visible.

If the deposit is scheduled for later, it must not be included in **Total due today**. Display **Security deposit scheduled for [date]** and obtain explicit consent before reusing a saved payment method.

#### Pre-event securing

- Create a separate security-deposit payment record rather than mixing it with rental revenue.
- On success, mark it **Secured** and notify the customer.
- On failure, notify the customer, allow a disclosed retry window, and offer a host-approved alternative.
- Do not hold a normal card authorization for months or promise a fixed duration. Use the payment provider’s actual authorization-expiry timestamp.

#### Post-event inspection and release

- At event end, create an inspection task. Use a configurable deadline; 3 business days is a reasonable pilot default.
- **No issue:** immediately initiate the authorization release or refundable-charge refund.
- **Proposed deduction:** require an itemized amount, permitted reason, written explanation, and supporting evidence such as timestamped photos, an invoice, or an inspection note.
- Never deduct more than the secured amount. Any additional claim becomes a separate balance or offline dispute.
- Release or refund any undisputed remainder promptly.

#### Customer response and automatic closeout

- Notify the customer of a proposed deduction, evidence, refundable remainder, and response deadline.
- If accepted or otherwise finally approved under the agreed process, classify the underlying venue charge, determine its tax treatment, issue the supplemental venue invoice, apply the approved deposit amount to that invoice as payment, and release or refund the remainder. If the approved invoice exceeds the secured deposit, leave the excess as a separate customer balance rather than describing it as a larger deposit deduction.
- If disputed, mark the case **Under review**, preserve the evidence and messages, and route it to authorized staff. Gather records the workflow but should not claim to adjudicate the underlying property dispute.
- If the host takes no action by the inspection deadline, automatically release or refund the full deposit.
- Treat **refund initiated** and **refunded** as different states; keep the case open until the provider confirms the money movement.
- If no deposit is required, do not create payment, inspection, or release tasks for it.

## Identity, accounts, memberships, and access

Gather has four primary **account contexts**. An account context identifies the party on whose behalf a person is acting; a permission role determines what that person may do in that context.

| Account context | Purpose | Representative prototype roles |
|---|---|---|
| Customer account | Search, book, pay, receive documents, manage the booking, and respond to post-event matters | **Organizer / booking owner** |
| Space-operator organization | Publish and operate one or more rentable spaces and manage the venue-side booking lifecycle | **Owner / account administrator**, **booking manager**, **operations / inspection staff**, **finance and settlement**, **board / auditor — read only** |
| Event-service vendor | Publish and fulfil independent services and manage supplier documents and settlement | **Vendor owner / administrator**, **order / fulfilment staff**, **vendor finance** |
| Gather platform team | Operate the marketplace, administer access and commercial policy, support participants, and reconcile platform activity | **Platform administrator / super admin**, **marketplace operations / support**, **platform finance / reconciliation** |

These are twelve representative roles for workflow and permission testing, not twelve permanent identity types. A person has one identity and may hold multiple organization memberships—for example, someone may book a family event as a customer, manage one association as a booking manager, and serve as a read-only board member in another organization. Each membership records the tenant, role, status, and effective permissions. The user selects an **active context** before entering a private workspace, and every private action is evaluated against that active membership. Switching context must not merge data, permissions, or financial records across organizations.

### Representative role responsibilities

- **Organizer / booking owner:** completes Instant Book checkout, receives customer invoices and receipts, manages permitted booking changes, responds to a documented security-deposit claim, and reviews each eligible completed venue or vendor service. The organizer cannot see private seller payouts or platform controls.
- **Owner / account administrator:** controls the operator account, listings, policies, team memberships, and complete venue workflow. This role does not receive Gather-wide administration rights.
- **Booking manager:** manages calendars, customer communication, booking changes, documents, and access instructions without changing bank, tax, commission, or payout settings.
- **Operations / inspection staff:** handles access, setup, event completion, inspection notes, evidence, and proposed deposit outcomes. It cannot approve the financial outcome of its own proposal.
- **Finance and settlement:** reviews venue invoices, credits, refunds, deposit ledgers, processing allocations, and calculated payouts. It does not edit listing content or daily availability.
- **Board / auditor — read only:** reviews operator metrics, current terms, and audit-oriented status without changing bookings, claims, money, settings, or membership.
- **Vendor owner / administrator:** controls the vendor profile, services, availability, staff, fulfilment, credentials, and vendor finances. It cannot see venue-private deposit or payout data.
- **Order / fulfilment staff:** works assigned orders and records delivery, setup, completion, exceptions, and evidence without seeing commissions, payout destinations, or bank details.
- **Vendor finance:** reviews vendor supplier invoices, Gather fee invoices, payment allocations, transfers, and bank-payout status without changing services or fulfilment evidence.
- **Platform administrator / super admin:** has global operational visibility across organizations, memberships, listings, bookings, vendor orders, deposit and settlement health, commercial-policy versions, and privileged-access audit history. It does not silently impersonate participants or expose passwords, API keys, full card/bank credentials, or unneeded tax identifiers. Cross-tenant support access is read-only by default, reason-coded, time-limited, visibly attributed to the platform actor, and immutably audited; sensitive financial changes require their own permission and approval workflow. Existing booking snapshots remain immutable.
- **Marketplace operations / support:** reviews seller onboarding, listings, credentials, support cases, and synchronization exceptions. Access to participant records is reason-coded, time-limited, and audited; this role cannot approve money movement or change commercial policy.
- **Platform finance / reconciliation:** reviews processor-to-ledger exceptions, fee documents, seller balances, transfers, and bank payouts. It cannot edit venue listings or vendor fulfilment evidence.

### Boundaries and non-account parties

- An **anonymous visitor** may search and view public listings without a membership. Public access never implies access to customer, seller, or platform records.
- An **attendee** may receive directions or event information from the organizer but does not control the booking and does not need an account in the pilot. Multi-party planning and attendee accounts remain deferred.
- A community association, venue business, vendor business, and Gather are organizations or tenants, not user roles. Employment or volunteer status does not determine permissions.
- Payment processors, banks, tax services, email providers, Communal, and other calendar or operator systems are external systems, not human users. Their service accounts and API credentials require separate ownership, scopes, rotation, audit, and revocation controls.

### Authorization principles

- Apply **least privilege**: grant only the permissions needed for the active role and organization.
- Apply **separation of duties** to sensitive workflows. In particular, distinguish proposing an inspection or deposit outcome from approving the related financial action; distinguish marketplace support from fee-policy changes and money movement; and keep fulfilment access separate from bank and payout data.
- Default to **deny**. A route, API action, record, field, export, or administrative operation is unavailable unless the active membership explicitly permits it.
- Enforce authorization server-side on every request and every object lookup. Client-side navigation, hidden buttons, and route guards are usability aids, not security boundaries.
- Scope all private records and queries to the authenticated tenant and active membership. Never trust an organization, booking, invoice, vendor, or payout identifier supplied by the browser without verifying access to that object.
- Require stronger controls for privileged operations: recent authentication where appropriate, approval policy, reason codes, immutable audit events, and alerts for material access, permission, policy, payout, refund, or deposit changes.
- Make support access time-limited, purpose-bound, auditable, and revocable. Platform employment alone must not provide silent unrestricted access to participant data.

The clickable prototype models account selection, role-specific navigation, and client-side route guards only. It does not authenticate identities or provide real authorization. Production must use secure identity verification, server-managed sessions, tenant-scoped authorization, and default-deny enforcement; the backend must return an authorization error even if a user bypasses the interface and calls a protected endpoint directly.

## Pilot MVP

Keep the first build narrow. The pilot should prove that accurate inventory can convert into self-service paid bookings without staff intervention.

### Customer experience

- Search by exact date, time, attendees, location, activity, capacity, and amenities.
- Availability-filtered results with Instant Book status and an estimated total.
- Listing pages with photos, capacity, accessibility, included amenities, add-ons, venue rules, cancellation terms, optional security-deposit terms, and live availability.
- Short checkout hold.
- Event details and eligibility questions.
- Event-type-driven required-fee and compliance checklist.
- Add-on selection with availability and quantity rules.
- Optional compatible event-service suggestions shown separately from required venue charges.
- Full price breakdown and policy acceptance.
- Secure card or digital-wallet checkout.
- Clear pages for payment processing, booking confirmation, payment failure, cancellation, completion, and refunds.
- Supplier invoice, payment receipt, calendar invitation, booking-management link, reminders, and time-gated access instructions.
- Post-event Final Booking Statement showing adjustments, credits, payments, refunds, and security-deposit outcome.
- A 30-day post-event review task with one independent venue review and one review for each fulfilled vendor order, optional private feedback, and clear submitted, edited, and expired states.

### Venue operations

- Multi-venue and multi-space account structure.
- Organization memberships with owner / account administrator, booking manager, operations / inspection staff, finance and settlement, and board / auditor read-only roles.
- Active-context selection for people who belong to more than one organization, without merging tenant data or permissions.
- Server-enforced, default-deny, tenant-scoped authorization and separation of deposit proposal, financial approval, and payout permissions.
- Listing readiness checks before Instant Book can be enabled.
- Opening hours, special hours, blackout periods, lead time, booking horizon, minimum duration, and setup/cleanup buffers.
- External calendar import/sync and visible sync-health status.
- Rate rules, mandatory fees, taxes, add-ons, quantities, and optional security-deposit configuration.
- Effective-dated subscription, commission, processing-cost, tax-profile, and payout settings, with organization-level overrides and booking snapshots.
- Allowed, approval-required, and prohibited event types.
- Outside-vendor policy by category, including approved, preferred, exclusive, review-required, or prohibited vendors.
- Dynamic requirement rules for alcohol, food, music, insurance, security, permits, fire-risk activities, personal services, accessibility, and other event conditions.
- Confirmed-booking calendar and action-based dashboard.
- Booking changes, cancellations, refunds, documents, access instructions, and post-event closeout.
- Supplier invoices, Gather fee invoices, credit notes, payout statements, immutable finance ledger, and reconciliation/accounting export.
- Audit history for material booking, policy, access, and financial events.

### Platform operations

- Host identity and payout onboarding before a listing becomes bookable.
- Listing moderation and report-listing flow.
- Review reporting and moderation with policy-based decisions, supplier responses, immutable booking eligibility, duplicate prevention, and an audit trail for removal or reinstatement.
- Payment webhook processing, retry queues, refund failures, and dispute evidence.
- Reconciliation exceptions, seller balances, transfer/payout monitoring, fee-policy audit, and controlled post-event adjustments.
- Support tooling with time-limited, audited access.
- Privacy, retention, export, deletion, incident-response, and backup procedures.
- Curated vendor onboarding, category-specific credential review, connected payouts, vendor-order support, commission disclosure, and marketplace reporting data.

### Defer until the pilot proves demand

- Approval-required listings and inquiry workflows.
- Recurring bookings, waitlists, competitive bidding, discount codes, and loyalty features.
- Unrestricted vendor self-registration and automated complex vendor bundles; the pilot may use curated, manually supported service packages.
- Native mobile apps.
- Complex revenue management or dynamic pricing.
- Multi-party event planning and attendee accounts.
- Broad geographic expansion or venue categories that require a different compliance model.

## Booking lifecycle

The normal booking path should be short:

`checkout_started` → `confirmed` → `completed` → `closed`

Booking exceptions:

`checkout_expired`, `cancelled_by_customer`, `cancelled_by_venue`, `no_show`

Keep these related states separate:

- **Availability hold:** active, expired, converted.
- **Payment:** requires_payment, processing, paid, partially_refunded, refunded, failed.
- **Supplier invoice:** draft, issued, partially_paid, paid, partially_credited, credited, overdue, written_off.
- **Final Booking Statement:** pending_closeout, pending_adjustment_payment, finalized, superseded_by_supplement.
- **Platform fee:** estimated, assessed, invoiced, settled_by_payout, paid_separately, partially_reversed, reversed, overdue.
- **Seller settlement:** pending_completion, held, calculated, approved, payout_scheduled, paid, failed, reversed.
- **Platform-to-connected-account transfer:** not_required, not_created, pending, succeeded, failed, reversed.
- **Connected-account-to-bank payout:** not_scheduled, pending, in_transit, paid, failed, cancelled, returned.
- **Security-deposit case:** not_required, scheduled, secured, inspection_due, deduction_proposed, customer_review, release_pending, deduction_processing, closed_released, closed_partially_deducted, closed_fully_deducted, securing_failed, authorization_expired, refund_pending, refund_failed, customer_disputed, resolution_required.
- **Requirements:** not_required, due, submitted, accepted, rejected, expired.

A successful platform transfer means only that funds reached the seller's connected-account balance. It does not prove that the seller received money in its bank. Store both provider references and mark the seller settlement **paid** only after the bank payout is provider-confirmed, or an approved manual payout is independently confirmed and reconciled.

If an approval workflow is later supported, use a separate path:

`inquiry_submitted` → `under_review` → `invited_to_book` → Instant Book checkout

An inquiry does not reserve inventory indefinitely and must never be displayed as a confirmed booking.

## Payment and commercial recommendation

- Keep each space operator and independent vendor as the customer's supplier under a disclosed agency model, subject to Canadian legal, tax, accounting, payment-provider, and funds-flow review.
- Select the connected-account charge model only after deciding who is the contracting party, invoice issuer, settlement merchant, tax collector, and bearer of refunds, disputes, processor fees, and negative balances. A single multi-seller checkout and separate direct supplier charges have materially different responsibilities and customer experiences.
- Make community-association subscription and commission configurable. Set launch defaults to a `$0` subscription and `0%` platform commission on venue rent and venue-provided items; snapshot the applied version on each booking and never change it retroactively.
- Make payment-processing allocation configurable as `deduct_from_payout`, `separate_invoice`, or `platform_subsidized`, with `deduct_from_payout` as the pilot default. Use actual processor costs, disclose them on the payout statement or fee invoice, and do not describe 0% commission as free payment processing. Apply exactly one treatment per cost.
- For a combined multi-seller charge, allocate actual processing costs by an explicit method; the recommended default is proportional allocation by each supplier's chargeable subtotal.
- Make third-party vendor commission configurable by vendor, category, service, campaign, and effective date. Support percentage, fixed, tiered, minimum, and maximum fees; assess the final fee on completed eligible service value rather than assuming one rate fits every category.
- Show seller-funded commission on Gather's fee invoice and the vendor payout statement—not as a hidden reduction and not as a customer charge.
- Maintain separate venue, vendor-order, and security-deposit ledgers. A refundable security deposit is never revenue or commissionable. If it funds an approved post-event venue charge, transfer only the amount applied to the related supplemental invoice from the deposit liability into collected venue proceeds.
- Issue supplier invoices and payment receipts when money is due or collected; after the event, issue any supplemental invoice or credit note, allocate an approved deposit payment where applicable, and then issue the Final Booking Statement.
- Do not add a customer marketplace fee during the pilot unless the strategy is intentionally revised and tested with customers.
- Make card payment onboarding part of listing readiness for Instant Book.
- Use a staged payment schedule for distant events where provider holding-period, payout, risk, or security-deposit limits make one early full payment unsuitable. A payment-provider balance is not escrow.
- For the pilot, support **none** or a **fixed amount**. Choose one operational method—refundable charge, pre-event authorization where its actual expiry safely covers the event and inspection period, or manual deposit—and label it precisely.
- Never describe a months-long card authorization as guaranteed; use the provider-reported expiry or capture deadline.

## Availability ownership and optional external-system integration

Gather should be able to operate as the booking source of truth. Each operator publishes its operating hours, bookable hours, minimum notice, booking horizon, setup and cleanup buffers, blackout dates, and existing blocked periods. A booking confirmed in Gather blocks that inventory immediately. If the association continues using another system, staff may update that system manually during the pilot, but the dashboard must expose a clear synchronization task and audit timestamp so the duplicate entry is not forgotten.

Communal or another operator system can be offered later as an **optional connector**, not a launch dependency. If a supported and contractually permitted API is available, an authorized association administrator may connect its own account. Credentials must be encrypted and stored server-side, masked after entry, scoped to the minimum required permissions, rotatable, and never embedded in the browser or listing. The connector should:

- Import existing bookings and blackout periods before enabling Instant Book.
- Export or update confirmed Gather bookings, changes, and cancellations.
- Record the external record ID, last successful synchronization time, direction, and error state.
- Process retries idempotently and maintain an operator-visible exception queue.
- Fail closed for affected inventory when freshness exceeds the configured threshold or a conflict cannot be resolved.

Do not claim that Communal currently provides the required API until its current documentation and commercial access are verified with Communal. If only calendar feeds are available, treat them as a lower-confidence interoperability option: read-only or delayed feeds can help staff but are not sufficient by themselves to guarantee Instant Book. A safe rollout is `Gather source of truth + manual external update`, followed by a monitored one-way export, then verified two-way synchronization only if the external system supports dependable change events and conflict handling.

## Revised roadmap

### Phase 0 — workflow and supply validation

- Interview community-association managers, booking coordinators, board members, finance staff, other team members who handle rentals, and customers.
- Configure at least ten real spaces from five community associations using actual rate sheets, rules, calendars, add-ons, and deposit policies.
- Test the clickable prototype with exact date/time searches and complete mock checkout.
- Secure five pilot associations that will keep a digital calendar current.
- Record outside-vendor policies and requirement triggers for each pilot space.
- Interview vendors across catering, cakes, décor, entertainment, photography, rentals, and cleaning; validate package structure and acceptable marketplace economics.

**Exit:** ten validated space listings, three pilot associations that have agreed commercial terms in principle, and no unresolved core data-model mismatch.

### Phase 1 — inventory foundation

- Tenancy, roles, listings, availability rules, blackouts, buffers, prices, policies, calendar import/sync, and audit log.
- Listing-readiness validation and preview.
- Gather must be the availability source of truth, or each external calendar integration must meet a defined freshness threshold and visibly fail closed when synchronization is unhealthy. A delayed one-way calendar feed cannot guarantee Instant Book accuracy.

**Exit:** an operator can publish an accurate Instant Book listing, and concurrent conflict tests allow exactly one hold.

### Phase 2 — Instant Book checkout

- Search, availability-filtered results, listing page, checkout holds, event questions, add-ons, price snapshots, policy acceptance, and card checkout in test mode.
- Calculate event-specific required venue fees and produce the conditional requirement checklist before payment.
- Verified payment webhooks, booking confirmation, one supplier invoice for every supplier amount due or paid, payment allocation and receipt, and `.ics` calendar invitation. These booking-time invoices are Phase 2 checkout outputs; Phase 3 adds post-event and operator document workflows rather than deferring the original invoices.

**Exit:** in test mode, a customer can complete a booking without staff intervention, each paid supplier invoice and the payment receipt are generated from the verified payment event, and payment failure or checkout expiry releases inventory correctly.

### Phase 3 — controlled live pilot and operator workflows

- **Go/no-go before the first live charge:** obtain documented Canadian legal and CPA approval of the contracting-party/agency model, GST/HST responsibilities, invoice model, payment architecture, funds flow, deposit treatment, seller-fee treatment, and applicable payment-regulation obligations; obtain payment-provider approval for the chosen connected-account configuration.
- Provision the minimum production path for the controlled pilot: connected-account and payout onboarding for at least one association and any paid pilot vendor, production payment webhooks, booking-time supplier invoices and receipts, an immutable ledger, settlement approval, separate transfer and bank-payout tracking, and daily processor-to-ledger-to-transfer-to-payout reconciliation with an exception queue.
- Dashboard, booking changes, cancellations, refunds, document management, reminders, access instructions, post-event closeout, security deposits, supplemental supplier invoices funded from approved deposit claims, credit notes, Final Booking Statements, fee invoices, payout statements, and finance export.
- Curated event-service recommendations, vendor quotes or fixed packages, linked vendor orders, separate cancellation handling, and manually supervised vendor fulfilment.

**Exit:** the legal/CPA/payment-provider go/no-go is recorded, every seller accepting live money is onboarded, and ten controlled live pilot bookings reconcile from customer payment through booking-time supplier invoices, post-event closeout, transfer, provider-confirmed bank payout, and bank reconciliation without a separate booking or finance spreadsheet.

### Phase 4 — production launch and scale

- Expand the approved connected-account and production-payment architecture from the controlled pilot to the remaining launch sellers; add support tooling, legal/privacy pages, accessibility audit, moderation, monitoring, backups, and a restoration test.
- Scale vendor onboarding, commission collection, category-specific credential expiry, payout timing, marketplace disclosures, and seller-reporting controls.
- Automate and operationalize the already-proven daily processor-to-ledger-to-transfer-to-bank reconciliation, exception handling, immutable financial documents, and production accounting export.

**Exit:** five active community associations, successful end-to-end payment/refund/deposit-release tests, and no unresolved critical security or double-booking issue.

## Metrics that match the new model

Primary metric:

> Confirmed self-service bookings per active space per month.

Supporting metrics:

- Search-to-listing-view conversion.
- Listing-view-to-checkout conversion.
- Checkout-to-confirmed conversion.
- Payment success and retry rates.
- Calendar sync freshness and conflict rate.
- Add-on attachment rate and add-on fulfilment failures.
- Third-party vendor attachment rate by event type.
- Vendor quote-to-order conversion, gross merchandise value, average order value, completion, cancellation, refund, and commission revenue.
- Eligible-review completion, venue and vendor rating distribution, review-edit rate, private-feedback use, supplier-response rate, report rate, and policy-removal rate.
- Net marketplace contribution after processing, refunds, support, promotions, and any venue-payment subsidy.
- Required-cost accuracy and requirement completion/rejection rates.
- Operator-initiated cancellation rate.
- Customer cancellation rate and refund time.
- Average booking value and venue revenue.
- Security-deposit closeout time.
- Event-completion-to-final-statement time and event-completion-to-seller-payout time.
- Unmatched payment, transfer, payout, and ledger exception rate.
- Support minutes per confirmed booking.

## Decisions still required before production

1. Which community-association space types are supported in the pilot and which categories are explicitly excluded.
2. Minimum lead time for Instant Book.
3. Payment schedule: full amount at booking or booking payment plus later balance.
4. Security-deposit method, timing, inspection deadline, customer-response period, and permitted deductions.
5. Cancellation-policy templates and operator override rules.
6. Calendar sources required for launch and expected sync freshness.
7. Scope, eligibility, effective dates, override approval, and advance-notice rule for the configurable `$0` subscription and `0%` venue-commission launch defaults.
8. Which event types or answers make a listing ineligible for Instant Book.
9. Which documents are required before checkout, after confirmation, or before access.
10. What evidence and staff authorization are required for a security-deposit deduction.
11. Which contracts may override the pilot's `deduct_from_payout` processing-cost default, how recovery is taxed, and how one combined charge's actual cost is allocated among sellers without double collection.
12. Initial vendor categories, category-specific commission policies, eligible fee basis, payout timing, refunds, and vendor-failure protection.
13. Disclosed-agent versus principal/merchant model, invoice issuer, tax responsibility, charge architecture, funds flow, and responsibility for refunds, disputes, chargebacks, and negative balances.
14. Post-event invoice/credit rules, settlement hold period, reserve policy, accounting integration, and seller-debt recovery authority.
15. Which vendor credentials Gather verifies and which remain the venue or organizer's responsibility.

## Recommended immediate next steps

1. Test the revised prototype with five customers using the task: “Find and book a space for 60 attendees without contacting the venue.”
2. Test the host dashboard with five community associations and ask what would stop them from listing every available space or trusting Instant Book.
3. Collect live calendars, cancellation policies, rate sheets, add-on lists, and security-deposit practices for at least ten spaces across five associations.
4. Obtain a documented go/no-go from a Canadian CPA and legal adviser on the supplier/agency, GST/HST, invoice, digital-platform-reporting, payment-regulation, deposit, and funds-flow model before accepting any live pilot payment or initiating any seller transfer or payout.
5. Decide the pilot's card charge model, payment schedule, security-deposit method, inspection deadline, settlement timing, validate the default processing-cost allocation and permitted overrides, and define deduction evidence.
6. Build availability, checkout holds, and conflict prevention before expanding the directory.
7. Configure the complete item classification and dynamic checklist against six representative events: children's birthday, adult celebration, wedding reception, business workshop, memorial, and fundraiser.
8. Recruit a curated group of Calgary caterers, cake vendors, decorators, entertainers, photographers, rental providers, and cleaners for a manually supported marketplace pilot.
9. Test one venue-only and one multi-vendor event from quote through supplier invoice, refund/credit, both a full deposit release and a deposit-funded supplemental venue invoice, fee invoice, payout statement, payout, and reconciliation.
10. Measure vendor-service attachment and contribution margin before relying on vendor commission as the permanent revenue model.

## Industry references used for this reassessment

- [Peerspace describes Instant Book](https://support.peerspace.com/en/articles/10119119-how-do-i-book-a-space-using-instant-book) as payment followed by immediate confirmation without host approval, and uses **Book Now** as the call to action.
- [Peerspace advises Instant Book hosts](https://support.peerspace.com/en/articles/10119384-how-do-guests-access-my-add-ons-at-checkout) to show only add-ons they can reliably fulfil.
- Airbnb describes [Instant Book](https://www.airbnb.com/help/article/523) as immediate booking of available calendar dates and emphasizes [accurate, synchronized calendars](https://www.airbnb.com/resources/hosting-homes/a/tips-for-avoiding-preventable-cancellations-373).
- [Stripe's SaaS platform guidance](https://docs.stripe.com/connect/saas) outlines connected-account payment models and the responsibilities that vary with the chosen charge structure.
- [Stripe's authorization guidance](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method) explains that authorization validity varies and exposes the actual capture deadline.
- [Stripe's refund guidance](https://docs.stripe.com/refunds) distinguishes refund initiation from final success and documents pending or failed refunds.
- [AGLC's private special-event guidance](https://aglc.ca/liquor/liquor-licences/apply-liquor-licence/liquor-licences-private-special-events?page=1) distinguishes private non-sale and resale liquor licences.
- [Alberta Health Services' event guidance](https://www.albertahealthservices.ca/eph/Page13999.aspx) distinguishes public special events, community-organization functions, private functions, food vendors, personal services, and animal events.
- [The City of Calgary's special-event guidance](https://www.calgary.ca/for-business/licences/special-events-permits.html) identifies event activities and temporary structures that can require permits or review.
- [SOCAN](https://www.socan.com/music-licenses/) and [Re:Sound](https://www.resound.ca/faq/) explain public-performance music licensing responsibilities.
- [The Competition Bureau's drip-pricing guidance](https://competition-bureau.canada.ca/en/deceptive-marketing-practices/drip-pricing) supports showing unavoidable charges in the advertised price.
