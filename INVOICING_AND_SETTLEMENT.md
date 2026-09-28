# Gather invoicing, event closeout, and settlement plan

**Status:** required product and accounting design

**Scope:** venue bookings, venue-provided add-ons, third-party vendor orders, refundable security deposits, platform fees, and seller payouts

**Recommended operating model:** the venue or vendor is the supplier; Gather is the disclosed marketplace, booking, collection, and invoicing agent, subject to legal, tax, accounting, payment-provider, and banking review

## Executive decision

Gather should handle invoicing and settlement, but **the first invoice cannot wait until the event is over**. When the customer pays before the event, the relevant supplier invoice and payment receipt must be generated at that time. After the event, Gather completes closeout, issues any additional invoice or credit note, resolves the security deposit, calculates final platform fees, and produces a consolidated **Final Booking Statement**.

The resulting sequence is:

```text
quote → supplier invoice and payment receipt → event
  ├─ each supplier order → closeout → Gather fee invoice → payout statement → payout
  ├─ venue deposit case → inspection → release, refund, or approved application
  └─ all customer charges and credits resolved → Final Booking Statement
```

The venue booking and every independent vendor order remain separate supplier transactions even if Gather presents one event budget and accepts one customer checkout.

## Configurable commercial rules

### Platform defaults

The launch settings are defaults, not hard-coded promises:

| Commercial item | Initial default | Required configuration |
|---|---:|---|
| Community-association subscription | **$0** | Fixed or tiered amount, billing interval, effective dates, trial or promotion, and organization override |
| Platform commission on venue rent | **0%** | Percentage, fixed, tiered, minimum/maximum, effective dates, and organization or venue override |
| Platform commission on venue-owned add-ons and required venue fees | **0%** | Same controls, with eligible line-item classes stated explicitly |
| Third-party vendor commission | **Configurable** | Percentage, fixed, tiered, minimum/maximum, vendor/category/promotion override, and refund rule |
| Payment-processing cost allocation | **Configurable; default to deduction from seller payout for the pilot** | Deduct from payout, invoice separately, or platform-subsidized |
| Customer marketplace/service fee | **Disabled** | Must be intentionally introduced, priced, taxed, and shown to the customer before payment |

Commercial-policy priority must be deterministic:

`booking-specific agreement` → `seller or contract override` → `venue/vendor category policy` → `platform default`

Every policy requires a unique ID, version, effective start and end, approver, audit timestamp, currency, calculation method, minimum/maximum, tax code, payer, collection method, refund/reversal treatment, and eligible or excluded line types. A confirmed booking snapshots the applied policy. A future configuration change must never rewrite an existing booking's economics.

### Commission basis

The policy must state exactly what the rate applies to. The recommended vendor basis is the final completed-service amount after discounts, cancellations, credits, and refunds, excluding:

- GST/HST and other taxes.
- Optional tips or gratuities.
- Refundable security deposits.
- Government, licence, permit, insurance, and regulatory charges collected for another party.
- Donations and raffle or gaming proceeds.
- Cancelled, refunded, or unfulfilled amounts.

Commission is **estimated** before completion and **earned and assessed** only when the applicable vendor service is finalized. If a completed order is later credited, recalculate the fee under the original snapshotted policy and reverse or assess the difference. A proportional reversal is correct only when that percentage, tier, fixed-fee, minimum, or maximum policy produces it.

### Processing costs

Processing costs are not Gather commission and **0% platform commission does not mean free payment processing**. Store the actual processor charge for every payment, refund, dispute, currency conversion, and payout rather than relying on a displayed estimate.

For each seller contract, configure one treatment:

1. **Deduct from payout** — collect the seller-borne amount through settlement. If it is a processor charge applied directly to the seller, show it once as a settlement line. If Gather is making a taxable or otherwise invoiceable cost-recovery supply, issue a dedicated recovery invoice and settle that invoice through the payout; do not also subtract a raw cost line.
2. **Invoice separately** — Gather issues a dedicated recovery invoice payable outside the payout and leaves customer proceeds intact.
3. **Platform-subsidized** — Gather records the expense and the promotion or subsidy that authorized it.

If the payout cannot cover seller-paid charges, create a seller balance due or carry-forward balance under the accepted agreement. Never recover platform or processing fees from a customer's refundable security deposit. The tax treatment of any processing-cost recovery must be confirmed with a Canadian tax adviser; it should not be assumed to be a tax-free pass-through.

The tax document and collection method are separate decisions: an amount can require a Gather invoice and still be collected by an authorized payout deduction. Give a processing-recovery invoice only one collection method. For the pilot, issue separate invoices for amounts with different collection methods—do not mix payout-netted commission, a separately payable processing recovery, and a monthly subscription on one invoice.

If one card charge covers several suppliers, the processor normally reports one fee for the entire charge. Configure a reproducible allocation method. The recommended default is to allocate the actual cost proportionally to each supplier's chargeable subtotal, with rounding assigned deterministically. Do not make the community association subsidize vendor payments unless its contract explicitly requires that result.

## Parties and supplier-of-record decision

The recommended pilot model is:

- The space operator supplies the venue, venue-owned add-ons, and required venue services.
- Each independent vendor supplies its own event service.
- Gather supplies marketplace and platform services to the operator or vendor.
- Gather is authorized by each seller to create documents and collect money on that seller's behalf.
- Gather recognizes its subscription, commission, and other platform fees as revenue—not gross venue or vendor sales.

Customer documents must identify the actual legal supplier and use that supplier's tax profile. Gather's platform-fee invoice uses Gather's identity and tax profile. Contracts must state who bears refunds, disputes, chargebacks, processor costs, negative balances, tax remittance, and customer support.

This agency model is a product recommendation, not a legal conclusion. Before production, advisers must confirm the contracting-party, agency, merchant/settlement-merchant, GST/HST, trust/funds-flow, and Retail Payment Activities Act treatment. Payment-provider architecture must then implement that approved model.

### Payment architecture decision

There is a real trade-off between a single multi-seller checkout and preserving a separate settlement merchant for every supplier:

- A Stripe platform charge followed by separate transfers supports one payment split among a venue and several vendors, but the platform account generally bears the processor fee, refunds, disputes, and transfer-reconciliation work. In Stripe's model, omitting `on_behalf_of` makes the platform the business of record for that payment.
- Separate direct charges can more clearly associate each payment, fee, and statement descriptor with one connected seller, but the customer may see several charges and the reporting and checkout experience become more fragmented.
- One combined payment cannot be “on behalf of” several unrelated sellers at once. A combined visual invoice also cannot make several independent businesses one legal supplier.

Select the charge model only after the approved legal and tax model is known. Prototype both payment experiences before committing to an architecture. Before accepting any live pilot payment or initiating a seller transfer or payout, obtain a documented go/no-go from Canadian legal and CPA advisers on the supplier/agency, GST/HST, invoice, deposit, payment-regulation, and funds-flow model, plus payment-provider approval of the chosen connected-account configuration. Test-mode or shadow operations do not replace this gate.

## Required financial documents

Calling all of these documents an “invoice” would create confusion. They have different issuers, recipients, accounting purposes, and lifecycle rules.

| Document | Issuer / supplier | Recipient | Generated | Purpose |
|---|---|---|---|---|
| Quote or price summary | Gather presentation | Customer | Before payment | Expiring estimate and booking-price snapshot; not proof of payment |
| Venue booking invoice | Venue operator, generated by Gather | Customer | When the venue amount is due or collected | Venue rent, venue add-ons, mandatory venue charges, and venue tax |
| Vendor sales invoice | Individual vendor, generated by Gather | Customer | When that vendor amount is due or collected | Vendor service, travel/delivery, and vendor tax |
| Payment receipt | Payment collector | Customer | On each successful charge | Shows payment amount, method summary, date, transaction reference, and allocation to invoices |
| Security-deposit hold notice or receipt | Venue/Gather presentation, as legally approved | Customer | When authorized or collected | Shows method, amount, deadline, release process, and status; it is not a sales invoice |
| Supplemental invoice or debit note, as applicable | Relevant venue or vendor | Customer | When a valid extra amount becomes due | Overtime, approved extra cleaning, added quantity, or another contractually permitted charge |
| Credit note | Original supplier | Customer | When reducing or correcting an issued invoice | Cancellation, refund, partial fulfilment, price correction, or approved credit |
| Interim Event Account Statement | Gather consolidation | Customer | While a balance, deposit operation, or dispute remains open | Current account position clearly labelled non-final |
| Final Booking Statement | Gather consolidation | Customer | After event closeout | Reconciles every supplier invoice, credit, payment, refund, balance, and deposit outcome |
| Platform-fee or recovery invoice | Gather | Venue or vendor | At finalization or a configured billing cycle | One collection method per invoice for subscription, commission, dedicated processing-cost recovery, and applicable tax |
| Payout statement | Gather/processor presentation | Venue or vendor | With every payout | Gross-to-net settlement; not a sales invoice |
| Annual seller activity summary | Gather | Venue or vendor | Year-end | Product-provided proceeds, fees, taxes, and refunds summary; any statutory information return or seller copy is separate and generated only where applicable |

A single customer PDF may group multiple supplier sections for convenience, but each legal supplier still needs its own invoice identity, tax information, and document number. The Final Booking Statement is a reconciliation summary; it does not replace those supplier invoices.

### Where commission appears

When commission is seller-funded, show it explicitly on:

- Gather's platform-fee invoice to the vendor or venue.
- The corresponding seller payout statement.
- The seller's transaction detail and accounting export.

Do **not** add an internal seller-funded commission to the customer's invoice as though the customer owes it. The customer invoice shows it only if Gather intentionally introduces a customer-paid fee and discloses that fee before checkout. The customer-facing marketplace disclosure can still state that Gather may earn a commission from a completed provider order.

## End-to-end invoicing and payout lifecycle

### 1. Seller setup

Before a listing or service can accept money, collect and verify:

- Legal and trading names, address, contact, organization type, and seller identity.
- Payout account and payment-provider onboarding status.
- Entity classification such as ordinary business, non-profit organization, registered charity, or municipality.
- GST/HST registration status, registration number where applicable, effective dates, and line-level tax codes.
- Invoice prefix and numbering sequence.
- Commercial-policy version and processing-cost allocation.
- Refund, dispute, chargeback, negative-balance, reserve, and payout terms.
- Gather's appointment to invoice and collect on the seller's behalf.

Do not assume all community associations or vendors have the same GST/HST status.

Use the fullest invoice information set for every issued invoice, regardless of amount: unique invoice number, invoice and service dates, booking reference, supplier legal/trading name and address, supplier registration number where applicable, customer name, description, payment terms, line-level tax status/rate, subtotal, tax, total, payments, and balance. When Gather issues it as agent, state **Issued by Gather as billing agent for [supplier]**.

### 2. Quote and checkout

Create an immutable price snapshot containing every line item, supplier, classification, quantity, service date, tax treatment, discount funding, policy version, cancellation terms, and deposit terms. Separate:

- Venue rent and venue-owned items.
- Each independent vendor order.
- Tax by supplier.
- Refundable security deposit.
- Amount due now and every later scheduled amount.

Use the same totals everywhere:

- **Booking subtotal** is the pre-tax sum of selected venue and vendor supplier charges. It excludes every refundable security deposit.
- **Tax** is shown separately by supplier with its configured label and rate.
- **Refundable security deposit** is shown separately from the booking subtotal and revenue.
- **Total due today** is the amount actually collected now: currently due supplier charges and tax, plus the deposit only when it is collected today. A scheduled deposit or later supplier balance is displayed with its due date and excluded from Total due today.

The customer must accept the booking, cancellation, post-event-charge, and security-deposit terms before payment.

An event booked far in advance also needs a payment schedule; payment-provider balances are not escrow. For example, collect a booking amount at confirmation, collect the remaining service balance nearer the event, and secure the refundable deposit shortly before the event. Do not assume funds can remain in a manual connected-account payout balance indefinitely. As of this plan's review, Stripe's provider-specific manual-payout guidance permits 90 days for countries other than the United States and Thailand, including Canada; re-verify that current limit before implementation.

### 3. Payment and confirmation

Use verified payment-provider events—not the browser redirect—to mark the payment successful. On success:

- Confirm the booking and reserve all inventory.
- Issue one sales invoice per supplier whose amount is due or paid.
- Issue the payment receipt and allocate the payment to those invoices.
- Record the deposit separately as an authorization or refundable liability.
- Record the processor transaction and actual fee when available.

If a payment succeeds but booking confirmation fails, route the transaction to a reconciliation exception queue and protect the inventory until the exception is resolved.

These supplier invoices and the receipt are booking-time outputs triggered by verified payment success. They are not deferred to the post-event document workflow; later closeout produces only the necessary supplemental invoices, credit notes, fee invoices, payout statements, and Final Booking Statement.

### 4. Pre-event changes, cancellations, and later balances

- Apply the accepted policy to the affected supplier order.
- Issue an additional invoice or credit note; never overwrite the issued invoice.
- Collect or refund the difference and update the payment allocation.
- Recalculate estimated or assessed commission under the order's snapshotted policy and post the difference.
- Apply the configured rule for processor costs that are not returned.
- Evaluate every linked vendor order independently instead of silently cancelling it with the venue booking.

### 5. Event completion

After the service window, open a time-limited closeout task. The venue records one or more of:

- No issue.
- Overtime.
- Extra venue item consumed.
- Additional cleaning.
- Damage claim.
- Customer or venue no-show.
- Another contractually permitted adjustment.

Each vendor records fulfilled, partially fulfilled, approved substitution, customer no-show, vendor no-show, cancelled, or refunded. A vendor order becomes payout-ready only after organizer confirmation, acceptable fulfilment evidence, or an explicitly disclosed auto-accept rule whose notice and dispute window expired without objection. Silence without one of those agreed controls routes the order to review; it does not prove fulfilment.

Close and settle supplier orders independently. A vendor dispute should normally hold only that vendor's affected amount; an unresolved venue deposit should normally hold only the venue amount required by the approved policy. Escalate to an event-wide hold only when fraud, chargeback exposure, or another documented risk connects the transactions.

### 6. Post-event adjustments

Every extra customer amount needs the contractual basis, itemized calculation, tax code, authorized staff member, supporting evidence, and customer notice. If the customer's accepted mandate and the payment provider allow an off-session charge, use it with the required notice; otherwise send a payment request.

The original invoice remains immutable. A valid extra amount produces a supplemental invoice or debit note, as applicable. A reduction produces a credit note. This document requirement also applies when an approved security-deposit claim will fund the amount: the deposit record is a payment source, not a substitute for the supplier invoice. If the customer disputes the adjustment, hold only the affected settlement amount unless policy or risk requires a broader hold.

A post-event receivable moves through `issued`, `payment_pending`, `paid`, `overdue`, `collection_failed`, `disputed`, or `written_off`. For the pilot, assess commission on a post-event increase only after that increase is collected; exclude a written-off amount. Undisputed proceeds from the original paid order may continue to settlement while the extra receivable remains open, unless the seller agreement authorizes an affected hold. Show an unresolved or disputed amount on an **Interim Event Account Statement**. Finalize the event-level Final Booking Statement only after the amount is paid, credited, or written off and any dispute is closed.

### 7. Security-deposit resolution

- Release the full amount when no permitted claim exists.
- If a claim exists, release the undisputed balance as soon as operationally possible.
- Apply only an approved amount to a properly classified venue charge with the tax treatment determined from the actual reason and agreement.
- Issue the corresponding supplemental venue invoice or debit note, as applicable, and allocate the approved deposit amount to it as payment. Reference that allocation from the deposit record, customer statement, venue settlement, and ledger.
- If a valid charge exceeds the deposit, create a separate amount due.
- Never apply the deposit to Gather commission, processing costs, unrelated vendor orders, or general seller debt.
- Automatically release or refund the full deposit if the venue misses the configured inspection deadline.

Authorization and refund operations are asynchronous. Track `securing_failed`, `authorization_expired`, `partial_capture`, `capture_failed`, `release_pending`, `release_failed`, `refund_pending`, and `refund_failed`. Never show a deposit as available or released until the provider confirms it. A failed or expired deposit operation keeps the deposit case and affected venue settlement amount open, but it does not automatically block an unrelated vendor payout.

A refundable deposit is kept outside revenue and commission calculations. If some amount becomes a charge or is forfeited, its tax and accounting treatment must be determined from the actual reason and agreement rather than by relabelling the deposit. Only the amount allocated as payment to a valid supplier invoice moves from the deposit liability into collected supplier proceeds and enters the venue settlement; the unapplied remainder stays a refundable liability until provider-confirmed release or refund. Any venue commission treatment then follows the snapshotted policy for that invoiced line, while the deposit principal itself remains excluded.

### 8. Final customer documents

When all customer-facing supplier charges, credits, disputes, and the deposit case are resolved:

- Lock actual fulfilled quantities.
- Issue all required additional invoices and credit notes.
- Generate the Final Booking Statement.
- Show the original charges, adjustments, supplier tax, payments, refunds, deposit activity, and final amount due or credit.
- Deliver the documents and record delivery status.

Maintain separate statuses for **event complete**, **customer invoice finalized**, **deposit closed**, and **seller settled**. One does not imply the others.

The Final Booking Statement is event-level and may wait for the final open customer balance or deposit outcome. Supplier fee assessment and payout readiness are order-level and can proceed independently when that supplier's amount is fulfilled, undisputed, permitted by the payout policy, and reconciled.

### 9. Gather fee calculation and invoicing

- Calculate final commission from the fulfilled eligible basis and the snapshotted policy.
- Add Gather's applicable tax to its own fee invoice.
- Generate a Gather platform-fee invoice when non-zero subscription, commission, or other platform service is due.
- Issue separate Gather invoices for different collection methods. A single invoice must not combine a payout-netted fee with an amount that remains separately payable.
- Under `deduct_from_payout`, either post a processor-applied cost once as a direct settlement line or issue a dedicated processing-recovery invoice and settle its total through payout when tax/document rules require it—never both.
- Under `separate_invoice`, issue a dedicated processing-recovery invoice and do not reduce the current payout for that same amount.
- Under `platform_subsidized`, record Gather's expense and do not charge the seller.
- Mark an invoice `settled_by_payout` only when that invoice is authorized for netting and the deduction is actually posted; otherwise keep it payable or mark it paid separately.
- Link every fee line to its supplier order, basis, rate, policy version, and reversal history.

When the venue commission default is 0% and no other Gather fee is due, the payout statement must still show **Gather venue commission — 0.00% / $0.00** and the applied policy version. A meaningless zero-dollar fee invoice is not required.

### 10. Seller settlement and payout

Use this reconciliation:

```text
Net seller payout
= collected supplier proceeds, including supplier tax
− refunds and credits applied against previously collected proceeds
− Gather fee-invoice amounts authorized and posted as `settled_by_payout`
− direct processor-cost settlement lines in `deduct_from_payout` mode
− seller-funded chargebacks or dispute amounts
− configured reserve or holdback
+ released prior reserves
± prior seller balance
```

A credit that only cancels an unpaid receivable reduces that receivable; it does not reduce collected proceeds or the seller payout. When an approved deposit amount pays a supplemental venue invoice, include that invoice amount in collected venue proceeds and show the deposit payment allocation once; do not add the full deposit to proceeds. A processing-recovery invoice settled through payout is included in the fee-invoice line above, while a directly allocated processor cost uses the direct settlement line—never both.

The payout statement must show:

- Gross customer proceeds and the supplier tax included in them.
- Refunds, credit notes, disputes, and chargebacks.
- Applied commission policy ID/version, calculation method, eligible basis, exclusions, tier/minimum/maximum application, effective rate, commission amount, and tax on Gather's fee.
- Actual payment-processing costs, processor tax where applicable, allocation method, and treatment mode; show the amount for transparency even when separately invoiced or subsidized, without subtracting it twice.
- Other authorized adjustments and reserves.
- Net payout, currency, expected and actual dates, separate transfer and bank-payout statuses and provider references where applicable, and bank destination summary.
- References to every supplier invoice, credit note, refund, Gather fee invoice, processor transaction, and booking.

A payout may include several finalized bookings, but its statement must preserve booking-level traceability. Failed or returned payouts remain open and are never marked paid merely because they were submitted to the processor.

Treat the payment-provider **transfer** and **payout** as different events. A transfer moves money from the platform balance to a connected account; a payout moves that connected-account balance to its bank. Store and display both references and statuses where the chosen charge model uses both. Transfer success can make a settlement payout-ready or transferred, but it must never set the seller or settlement to **paid**. Use **paid** only after the bank payout is provider-confirmed, or an approved manual payout is independently confirmed and reconciled.

### 11. Later refunds, disputes, and corrections

Never reopen or rewrite a finalized document. Create a credit note, fee reversal, transfer reversal, supplemental settlement, or seller balance adjustment. If the seller was already paid, recover the authorized amount from a later payout or separate invoice; do not take it from a security deposit.

## Illustrative settlement examples

These examples are not proposed prices. They reconcile one illustrative grouped customer charge for `BKG-1033`:

```text
Shared processor charge CHG-1033                       $1,350.00
  Venue invoice proceeds                                 $630.00
  Vendor invoice proceeds                                $420.00
  Refundable security-deposit liability                  $300.00
Processor cost: 2.9% × $1,350.00 + $0.30                 $39.45
  ALLOC-RCA-1033                                           $18.41
  ALLOC-WSE-1033                                           $12.27
  ALLOC-DEP-1033                                            $8.77
```

There is one processor charge reference and one actual `$39.45` processor cost, with separate allocation references for traceability. Under this example's seller agreement, the association payout bears both the `$18.41` venue-proceeds allocation and the `$8.77` deposit-related allocation. The vendor payout bears `$12.27`. The deposit-related processing allocation is a cost charged to the association payout; it does **not** reduce, consume, or reclassify the customer's `$300.00` refundable deposit, which remains a liability until release, refund, or approved application to a supplemental venue invoice.

### Community-association venue payout

```text
Venue rent and venue-owned add-ons                    $600.00
GST collected for the association                     $30.00
Gross customer proceeds                              $630.00
Customer credits/refunds                                $0.00
Gather venue commission (CA-LAUNCH v1): 0%              $0.00
Processing allocation: venue proceeds                 -$18.41
Processing allocation: deposit-related cost            -$8.77
Total actual processing cost deducted                 -$27.18
Net payout before any approved supplemental claim    $602.82
```

The payout statement identifies the 0% snapshotted commission policy, shared charge `CHG-1033`, both association-borne allocation references, and the single `$27.18` association processing deduction. The `$300.00` deposit is not included in gross venue proceeds and is not reduced by the `$8.77` cost allocation. The association remains responsible for its tax obligations under the approved legal model.

### Third-party vendor payout

```text
Completed vendor service                              $400.00
GST collected for the vendor                           $20.00
Gross customer proceeds                              $420.00
Gather commission (example policy VEND-ENT v3)
  Eligible basis $400 × 12%; effective rate 12%       -$48.00
Illustrative GST on Gather commission                  -$2.40
Processing allocation: vendor proceeds                -$12.27
Net payout                                            $357.33
```

The 12% rate is an example only. The production rate is configurable and comes from the snapshotted vendor/category agreement. The vendor statement references shared charge `CHG-1033` and allocation `ALLOC-WSE-1033`. Gather issues a $50.40 platform-fee invoice and marks it settled by the payout deduction.

### Approved venue charge funded from a deposit

```text
Refundable security deposit held as a liability             $300.00
Supplemental venue invoice: additional cleaning              $80.95
Illustrative GST on the venue charge                           $4.05
Supplemental venue invoice total                              $85.00
Deposit funds allocated as invoice payment                   -$85.00
Deposit remainder released or refunded                      $215.00
```

Before any approved claim, the full `$300.00` remains the deposit liability even though the association payout bears the grouped charge's `$8.77` deposit-related processor-cost allocation. The supplemental invoice, not the deposit claim by itself, establishes the later customer charge and tax. The paid `$85.00` becomes collected venue proceeds and enters a supplemental association settlement under its snapshotted fee policy; the remaining `$215.00` never becomes revenue. Apply the grouped charge's actual processor cost once according to the configured treatment rather than inventing a second fee for the deposit allocation or the later internal payment allocation.

## Status models

- **Supplier invoice:** `draft`, `issued`, `partially_paid`, `paid`, `partially_credited`, `credited`, `overdue`, `written_off`, `void_before_issue`.
- **Post-event receivable:** `issued`, `payment_pending`, `paid`, `overdue`, `collection_failed`, `disputed`, `written_off`.
- **Interim Event Account Statement:** `open`, `updated`, `superseded_by_final`.
- **Final Booking Statement:** `pending_closeout`, `pending_adjustment_payment`, `finalized`, `superseded_by_supplement`.
- **Platform fee:** `estimated`, `assessed`, `invoiced`, `settled_by_payout`, `paid_separately`, `partially_reversed`, `reversed`, `overdue`.
- **Security-deposit operation:** `not_required`, `scheduled`, `secured`, `securing_failed`, `authorization_expired`, `partial_capture`, `capture_failed`, `release_pending`, `released`, `release_failed`, `refund_pending`, `refunded`, `refund_failed`, `disputed`.
- **Settlement:** `pending_completion`, `held`, `calculated`, `approved`, `payout_scheduled`, `paid`, `failed`, `reversed`.
- **Platform transfer:** `not_required`, `not_created`, `pending`, `succeeded`, `failed`, `reversed`.
- **Bank payout:** `not_scheduled`, `pending`, `in_transit`, `paid`, `failed`, `cancelled`, `returned`.
- **Reconciliation:** `unmatched`, `matched`, `exception`, `resolved`.
- **Dispute:** `open`, `evidence_due`, `submitted`, `won`, `lost`, `closed`.

Issued invoices, credit notes, fee invoices, settlement statements, and payout statements need unique, traceable document numbers. A booking ID can be referenced but must not substitute for each document's own identifier.

## Minimum data model

```text
EventBooking
  ├── SupplierOrder: venue
  │     ├── SupplierInvoice / CreditNote
  │     └── SettlementLines
  ├── SupplierOrder: vendor 1
  │     ├── SupplierInvoice / CreditNote
  │     └── SettlementLines
  ├── SupplierOrder: vendor 2...
  ├── SecurityDepositCase
  ├── Payments / Allocations / Refunds / Disputes
  └── FinalBookingStatement

Supplier
  ├── Identity and TaxProfile
  ├── CommercialPolicy versions
  ├── PlatformFeeInvoices
  └── PayoutStatements → Settlements → PlatformTransfers → BankPayouts

All financial activity
  └── ImmutableLedgerEntries → ProcessorReconciliation → AccountingExport
```

The financial source of truth must be an append-only, balanced subledger. Do not calculate money owed only from mutable booking rows. Webhook handling and financial posting must be idempotent.

## Controls and reconciliation

- Separate permissions for adding post-event charges, approving deposit deductions, issuing credits, approving settlement, and releasing payout.
- Snapshot supplier identity, tax registration, tax code/rate, policy, currency, and service date on every issued document.
- Render and retain the exact invoice or statement delivered to the recipient, plus delivery status and audit history.
- Reconcile daily from processor payment and balance transactions to Gather's ledger, transfers, payouts, and bank deposits.
- Reconcile transfer and bank-payout events independently; a succeeded transfer without a provider-confirmed bank payout remains unpaid to the seller.
- Prevent the affected supplier payout or amount while its required onboarding, fulfilment, closeout, dispute, or reconciliation checks are unresolved; do not automatically freeze unrelated suppliers.
- Export supplier sales, Gather fees, taxes, refunds, processor costs, deposits, and payouts separately for accounting.
- Retain Canadian tax and supporting records for the required period; CRA generally describes a six-year retention period, subject to applicable exceptions and professional confirmation.
- Capture seller identity, financial-account, transaction, property-location, fee/commission, and tax data needed to assess Canada's digital-platform reporting rules from the beginning.
- Encrypt and tightly restrict tax identifiers and payout-account data; collect, display, export, and retain them only for authorized onboarding, payment, tax, or reporting purposes.

Every ledger line should retain the booking and event IDs, supplier/issuer, payee, item classification, tax owner, tax rate/amount, fee-policy ID/version and basis, processing-allocation rule, refund allocation, gross/deductions/net amounts, invoice and credit-note references, and provider payment, balance-transaction, transfer, reversal, and payout identifiers.

## Missing cases that must be decided before production

1. Refund or credit after the seller has already been paid.
2. Chargeback arriving weeks or months after payout.
3. Non-refundable processor cost when the customer receives a full refund.
4. Payout failure, closed bank account, or returned payout.
5. Seller fees larger than the current payout and the authorized recovery method.
6. Partial vendor fulfilment, substitution, vendor no-show, or customer no-show.
7. Overtime, cleaning, or damage exceeding the security deposit.
8. Security-deposit authorization expiring before the inspection window.
9. Recurring and multi-day bookings with several service dates.
10. Supplier GST/HST registration changing between booking and event.
11. Platform-funded versus seller-funded discounts and promotional credits.
12. Optional tips versus mandatory service charges.
13. Cash, cheque, or e-Transfer recorded by the venue and any offline refund.
14. Payment success with booking-confirmation failure.
15. Duplicate, delayed, or out-of-order payment-provider webhooks.
16. One checkout containing several suppliers and clear card-statement descriptors.
17. Rounding across taxes, discounts, refunds, fees, and multi-seller allocations.
18. Seller suspension while money, refunds, or open events remain.
19. Evidence, notice, and customer-response deadlines for post-event charges.
20. Who bears each refund, dispute, chargeback, and processor fee.
21. Whether to hold only the affected seller amount or the full event settlement.
22. Invoice and credit-note numbering ownership when Gather generates documents for many suppliers.
23. Accounting integration, month-end cut-off, year-end seller statements, and unclaimed balances.

## Pilot boundary

For the first live pilot:

- Complete documented Canadian legal/CPA and payment-provider go/no-go approval before the first live charge, transfer, or payout.
- Onboard every seller that will accept live money to the approved production payment and payout path before its listing or service becomes bookable.
- Keep community-association subscription and venue commission configurable, defaulting to `$0` and `0%`.
- Default processing costs to `deduct_from_payout`, with `separate_invoice` and `platform_subsidized` available by contract.
- Allocate a combined charge's actual processing cost proportionally across recipients unless a signed contract says otherwise.
- Configure vendor commission by category or vendor; do not hard-code one marketplace rate.
- Collect fixed booking amounts before confirmation and issue supplier invoices and payment receipts immediately.
- Support only itemized overtime, additional cleaning, consumed venue items, and evidenced deposit claims as post-event adjustments. Every approved deposit-funded charge must produce a supplemental venue invoice, tax decision, deposit-payment allocation, refundable-remainder outcome, and corresponding venue-settlement entry.
- Automatically close “no issue” events and release the deposit when the venue's deadline expires.
- Generate the Final Booking Statement, every non-zero Gather fee invoice, and each seller payout statement automatically.
- Release only undisputed, reconciled amounts according to the configured payout delay.
- Track and reconcile platform transfers separately from bank payouts, and never mark a seller or settlement paid from transfer success alone.
- Reconcile every bank payout to processor transactions and the destination bank outcome before marking it paid.

## Official references and required professional review

- [CRA: General Information for GST/HST Registrants](https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4022/general-information-gst-hst-registrants.html) describes tax disclosure, documentary information, deposits, agents, and credit/debit-note requirements.
- [CRA: GST/HST agents guidance](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/charge-collect-special-cases.html) explains general principal/agent treatment and deposit considerations.
- [CRA: Agents](https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/gi-012/agents.html) explains that the facts of the principal/agent relationship and the treatment of commissions and reimbursements matter.
- [CRA: GST/HST information for non-profit organizations](https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4081/gst-hst-information-non-profit-organizations.html) and [charities](https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/rc4082/gst-hst-information-charities.html) show why one tax rule cannot be hard-coded for all community associations.
- [CRA: Refund, adjustment, or credit under section 232](https://www.canada.ca/en/revenue-agency/services/forms-publications/publications/12-2/refund-adjustment-credit-gst-hst-under-section-232-excise-tax-act.html) describes supporting credit/debit-note information.
- [CRA: GST/HST record retention](https://www.canada.ca/en/revenue-agency/services/tax/businesses/topics/gst-hst-businesses/calculate-prepare-report/gst-hst-records-keep.html) describes the general six-year record-retention rule and electronic-record expectations.
- [CRA: Reporting Rules for Digital Platform Operators](https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms/guidance-on-reporting-rules.html) includes commercial-property rental and many personal services and describes seller, consideration, fee/commission, tax, and property data that may need to be reported.
- [Stripe Connect: separate charges and transfers](https://docs.stripe.com/connect/separate-charges-and-transfers) documents multi-party transfers and the need to reconcile refunds with transfers or reversals.
- [Stripe Connect charge types](https://docs.stripe.com/connect/charges) explains the responsibility differences among direct, destination, and separate-charge-and-transfer models.
- [Stripe balance transactions](https://docs.stripe.com/api/balance_transactions/object) exposes the actual processor fee, fee detail, gross amount, and net amount used for reconciliation.
- [Stripe payout reconciliation](https://docs.stripe.com/reports/payout-reconciliation) explains reconciliation of payments, refunds, disputes, fees, and payouts.
- [Stripe manual payouts](https://docs.stripe.com/connect/manual-payouts) documents country-specific maximum holding periods, including the current limit applicable to Canada.
- [Stripe: place a hold on a payment method](https://docs.stripe.com/payments/place-a-hold-on-a-payment-method) explains that authorization windows vary and should not be assumed to last until a distant event.
- [Bank of Canada: online marketplace supervisory policy](https://www.bankofcanada.ca/2025/12/supervisory-policy-for-online-marketplaces/) is relevant to deciding whether Gather participates in the flow of seller funds under the Retail Payment Activities Act.

This document defines the required product behaviour. Canadian legal, tax, accounting, payment-provider, and funds-flow specialists must approve the operating model and document wording before production use.
