# Gather event-services marketplace and booking-requirements plan

**Status:** proposed product direction

**Launch market:** Calgary community associations

**Venue commercial defaults:** configurable; launch defaults are a $0 subscription and 0% platform commission

**Primary revenue experiment:** configurable commission on completed third-party event-service orders

## Executive decision

Gather should configure participating community associations with a `$0` subscription and `0%` venue commission by default during the launch period. These are versioned defaults with organization-level overrides, not hard-coded permanent prices. Standard payment-processing costs are separate, must be disclosed, and can be deducted from the association payout, separately invoiced, or explicitly subsidized under its agreement; **0% platform commission does not mean card processing is free**.

Gather can earn a configurable commission when an organizer voluntarily books and receives an independent vendor service through the marketplace—for example catering, a cake, decorations, a magician, a photographer, a DJ, equipment rental, or cleanup. The final commission is itemized on Gather's fee invoice and the vendor payout statement.

The product must not present every cost or task as an “add-on.” It must distinguish:

1. What is included with the space.
2. Optional products or services supplied by the venue.
3. Mandatory venue fees.
4. Conditional requirements and documents.
5. Refundable security deposits.
6. Optional third-party marketplace services.

This classification is necessary for trustworthy price comparison and for a sustainable vendor-commission model.

## Commercial promise

### Community association

> The launch defaults are no subscription and 0% Gather commission on your space rental and venue-provided items. Your agreement shows the effective pricing and, when you bear payment-processing costs, whether actual costs are deducted from payout or separately invoiced; an explicitly configured promotion may subsidize them. Every payout statement itemizes gross proceeds, fees, refunds, tax, and net payout.

Do not advertise “free forever.” Pricing can change later only with clear advance notice, and no new charge should be applied retroactively to an existing confirmed booking.

### Event organizer

> See the complete required venue cost before paying, understand every requirement, and optionally build the rest of the event with compatible local service providers.

### Event-service vendor

> Receive qualified orders connected to a confirmed venue, event date, attendee count, facility rules, and delivery window. Your agreement states the configurable commission policy, calculation basis, processing-cost treatment, and payout timing. Final fees appear explicitly on the Gather fee invoice and payout statement.

## Booking-item classification

Every line item must use exactly one of these types.

| Type | Examples | Customer treatment | Default platform-fee treatment |
|---|---|---|---:|
| Included amenity | Tables, chairs, Wi-Fi, parking | Displayed as included at $0 | None |
| Venue add-on | Kitchen, projector, stage, extra room, setup service | Optional and selectable when available | Configurable; launch default 0% |
| Required venue fee | Cleaning, caretaker, mandatory security, outside-caterer charge | Automatically added when its rule is triggered | Configurable; launch default 0% |
| Conditional requirement | Insurance, liquor licence, food notification, music licence | Checklist task or evidence upload, not an upsell | None |
| Refundable security deposit | Damage, cleaning, key or access deposit | Excluded from the booking subtotal and revenue; shown separately and included in Total due today only when collected today | Never |
| Third-party vendor service | Catering, cake, décor, DJ, magician, photography | Separate vendor order linked to the venue booking | Configurable on completed eligible value |
| Optional concierge assistance | Permit guidance or managed event planning | Clearly priced service; official fees stay separate | Configurable by supplier and service |

Every configured item needs:

- Supplier: venue, independent vendor, government/regulator, insurer, or platform.
- Classification from the table above.
- Price method: included, flat, hourly, per attendee, per unit, tiered, percentage, or quote required.
- Tax treatment and whether tax is included or added.
- Quantity, inventory, availability, and service area.
- Minimum lead time, delivery window, setup time, teardown time, and space requirements.
- Dependencies and incompatibilities.
- Cancellation, refund, substitution, and failure terms.
- Fee-policy ID/version, commissionability, commission basis, payer, collection method, and refund/reversal rule.
- Evidence or credential requirements, when applicable.

## Price comparison and checkout presentation

Search results should compare the amount required to book the venue for the organizer’s stated event—not a misleading base hourly rate.

### Search-result price

Show an **estimated required venue total** calculated from:

- Space rate and duration, including setup and cleanup time.
- Mandatory venue charges triggered by the event answers.
- Required venue-provided resources.
- Configured tax.

Do not include optional vendor services in the comparative venue total. Show those separately as “Build your event after selecting the space.”

### Checkout totals

Display distinct sections:

1. **Space and venue charges**
   - Space rate.
   - Venue add-ons.
   - Required venue fees.
   - Venue supplier subtotal before tax and refundable deposit.
2. **Event services**
   - One order per independent vendor.
   - Each vendor supplier subtotal before tax and refundable deposit, including delivery/travel charges and tip where applicable.
   - Marketplace disclosure.
3. **Booking subtotal**
   - Sum of all selected venue and vendor supplier subtotals before tax.
   - Excludes every refundable security deposit.
4. **Tax**
   - Tax shown separately by supplier with the configured label and rate.
5. **Refundable security deposit**
   - Amount, method, timing, inspection deadline, and expected release process.
   - Excluded from the booking subtotal and revenue.
6. **Total due today and due later**
   - Exact amount charged now: currently due supplier charges and tax, plus the security deposit only when collected today.
   - Every scheduled balance with its due date.
   - Any required cost that is still an estimate or needs a quote.

An Instant Book venue cannot advertise a final total if an undisclosed mandatory charge will be determined later.

## Venue inventory and possible venue add-ons

### Included or venue-provided inventory

- Individually bookable rooms, halls, kitchens, rinks, courts, studios, fields, patios, and outdoor areas.
- Capacity by layout: standing, seated, banquet, classroom, theatre, dancing, and sport configuration.
- Tables and chairs by type, dimensions, and quantity.
- Wi-Fi and suitable-use notes.
- Parking, accessible parking, bicycle parking, and loading access.
- Kitchen type: warming, residential, commercial, or no kitchen.
- Refrigerator, freezer, stove, oven, microwave, dishwasher, sinks, coffee urns, and serving counters.
- Washrooms, accessible washrooms, change rooms, and showers.
- Step-free entrance, elevator, accessible route, and loading entrance.
- Stage, dance floor, dressing room, green room, podium, and coatroom.
- Projector, screen, television, microphones, speakers, sound board, and lectern.
- Sports flooring, nets, goals, rink equipment, mats, and scoreboards.
- Climate control, outdoor power, water, and waste facilities.

### Possible paid venue add-ons

- Kitchen, bar, stage, rink, patio, or additional-room access.
- Projector, screen, microphones, speakers, piano, lighting, or sports equipment.
- Extra tables or chairs beyond the included quantity.
- Linens, dishes, glassware, cutlery, serving equipment, and coffee service.
- Early access, rehearsal, decorating time, extended setup, teardown, or storage.
- Overtime or extended building access.
- Venue staff setup and teardown.
- Caretaker, opening/closing staff, or equipment technician.
- Cleaning, dishwashing, or extra waste removal.
- Venue-provided security, parking attendant, bartender, or coat check.
- Key, access card, or smart-access service.

### Possible required venue charges

These must be triggered automatically by configured rules:

- Cleaning or caretaker fee.
- Kitchen charge when preparation or cooking is selected.
- Outside-caterer or outside-vendor fee.
- Corkage, bar setup, or mandatory bartender charge.
- Security based on event type, attendance, alcohol, public access, or closing time.
- Event insurance selected through the venue’s configured policy.
- Music-licensing charge when the venue passes it to the organizer.
- Extra waste, floor protection, power, or equipment charge.
- Overtime caused by the selected schedule.
- Applicable tax.

## Event catalogue

The catalogue must remain extensible. No fixed list can anticipate every legitimate use, so include **Other—venue review required** while allowing each space to mark event types as **allowed**, **approval required**, or **prohibited**.

| Event family | Examples | Strong service opportunities | Important booking triggers |
|---|---|---|---|
| Children’s celebrations | Birthdays, youth graduation, play parties | Cake, food, balloons, themed décor, magician, character, face painter, balloon artist, crafts, games, soft play, photographer, cleanup | Minors, allergies, supervision, face painting, animals, inflatables |
| Adult social celebrations | Birthday, anniversary, retirement, engagement, graduation, reunion, holiday or Stampede party | Catering, bar service, cake, décor, DJ, band, emcee, photo booth, photographer, transport, cleanup | Alcohol, dancing, amplified sound, closing time, security |
| Family ceremonies and showers | Baby shower, bridal shower, naming ceremony, baptism reception, milestone celebration | Light catering, desserts, floral or balloon décor, photographer, ceremony décor, games host | Food, ceremony layout, cultural practices, accessibility |
| Weddings | Ceremony, reception, rehearsal dinner, cultural wedding events | Planner, coordinator, officiant, catering, cake, florist, décor, rentals, DJ/band, photo/video, bar staff, servers, transport | Multiple layouts, alcohol, music, long setup, many vendors, insurance |
| Memorials | Celebration of life, funeral reception, remembrance gathering | Coffee/light catering, flowers, celebrant or clergy, AV, livestream, printing, display equipment | Short notice, privacy, accessibility, photo/video display |
| Business and professional | Meeting, training, workshop, conference, networking, product launch, awards, team building | Coffee/catering, AV, hybrid support, facilitator, speaker, signage, printing, interpreter, photographer | Reliable internet, privacy, AV, recurring dates, data handling |
| Community and nonprofit | AGM, board meeting, town hall, volunteer event, newcomer event, fundraiser, awards dinner | Catering, AV, registration, translation, entertainment, security, ticketing or auction tools | Public/private status, admission, raffle, alcohol, accessibility |
| Education and youth | Tutoring, language class, preschool activity, Scouts/Guides, camp, STEM or art workshop | Instructor, materials, snacks, AV, helpers, storage | Minors, supervision, recurrence, storage, food |
| Fitness and wellness | Yoga, dance, martial arts, seniors fitness, meditation, health workshop | Instructor, mats/equipment, sound, first aid, cleaning | Floor, recurring schedule, waivers, music rights, capacity |
| Recreation and sports | Practice, league, tournament, pickleball, badminton, indoor games, esports | Coaches, referees, scoring, equipment, first aid, livestream | Facility suitability, spectators, change rooms, equipment, recurrence |
| Arts and entertainment | Concert, recital, theatre, comedy, rehearsal, film screening, art exhibition | Performers, stage, sound, lighting, technicians, instruments, ticketing, security, media | Performance rights, ticketing, occupancy, noise, stage/fire review |
| Markets and commerce | Craft market, flea market, pop-up retail, trade show, job fair | Booths, tables, pipe-and-drape, power, POS, signage, food, security, waste | Public sales, vendor credentials, market licensing, electrical load |
| Food-centred events | Community meal, cooking class, banquet, tasting, potluck | Caterer, chef/instructor, food truck, mobile bar, servers, dishes, equipment, cleanup | Food source, preparation location, kitchen capability, AHS triggers |
| Religious and cultural | Worship, prayer, feast, festival, cultural ceremony | Specialized catering, ceremonial décor, musicians, clergy, translation, floor coverings | Dietary/cultural needs, layout, sound, fire/open-flame rules |
| Clubs and hobbies | Chess, crafts, quilting, gaming, collectors, community kitchen | Instructor, supplies, refreshments, storage, specialist equipment | Recurrence, cleanup, storage, power |
| Fundraising and gaming | Gala, silent auction, raffle, bingo, casino-style entertainment | Ticketing, auction tools, catering, entertainment, AV, security | Paid chance to win, AGLC eligibility/licence, alcohol, donations |
| Media production | Photography, film/video, podcast, audition, livestream, content production | Lighting/grip, backdrop, props, hair/makeup, sound, catering, security | Power, load-in, noise, filming permission, drones |
| Public festival or fair | Festival, fair, public performance, cultural event | Tents, stage, toilets, fencing, power, food trucks, security, first aid, waste, traffic support | Permits, site plan, public liquor, food vendors, emergency plan |
| Civic and public service | Polling, blood drive, clinic, support group, public consultation, emergency use | Furniture, partitions, IT, interpretation, accessibility, cleaning, security | Privacy, medical operations, accessibility, limited upselling |
| Animal-related | Training, adoption, petting zoo, demonstration | Trainers, animal attraction, fencing, sanitation, handwashing | Venue permission, AHS/animal requirements, insurance |
| Other | A use not represented above | Services suggested only after venue review | Compatibility and risk review before Instant Book |

## Third-party vendor catalogue

### 1. Food and beverage

- Full-service, drop-off, buffet, plated, boxed-meal, cultural, dietary-specialist, and corporate caterers.
- Food trucks, mobile vendors, private chefs, concession operators, and community-meal providers.
- Coffee carts, tea service, juice/mocktail stations, beverage dispensers, and ice delivery.
- Bartenders, mobile bars, bar rentals, servers, dishwashers, and bussing staff.
- Cakes, cupcakes, desserts, candy tables, ice cream, popcorn, cotton candy, and concession machines.

### 2. Planning, coordination, and ceremony

- Event planner, wedding planner, producer, day-of coordinator, and vendor coordinator.
- Emcee, host, moderator, auctioneer, and registration lead.
- Officiant, celebrant, clergy, memorial facilitator, and cultural ceremony specialist.
- Corporate facilitator, speaker, trainer, team-building provider, and workshop instructor.

### 3. Décor, florals, and event styling

- Balloon décor, arches, garlands, themed décor, backdrops, draping, pipe-and-drape, and props.
- Florist, centrepieces, bouquets, ceremony installations, plants, and memorial flowers.
- Table styling, linens, chair covers, tableware, candles where permitted, and floor coverings.
- Cultural décor, wedding stages, arches, signs, seating charts, and custom installations.

### 4. Entertainment and activities

- DJ, band, solo musician, cultural musician, singer, karaoke host, and emcee.
- Magician, comedian, dancer, cultural performer, storyteller, puppeteer, and circus performer.
- Character, princess, superhero, mascot, clown, balloon artist, face painter, henna artist, caricaturist, and craft host.
- Photo booth, video booth, audio guestbook, trivia host, casino-game provider, arcade/game rental, and escape-room activity.
- Soft play, inflatables, carnival games, petting zoo, and animal attraction subject to venue and regulatory approval.

### 5. Photography and media

- Event, portrait, wedding, school, sports, product, and corporate photographer.
- Videographer, livestream operator, editor, content creator, and same-day highlight service.
- Drone operator only where location, permission, insurance, and regulation allow it.

### 6. Production, AV, staging, and technology

- Sound system, microphones, mixer, speakers, projector, screen, television, and LED display.
- Sound engineer, lighting technician, camera crew, livestream technician, and hybrid-meeting producer.
- Stage, riser, dance floor, truss, rigging, power distribution, generator, Wi-Fi, and charging equipment.
- Instrument rental, piano tuning, teleprompter, interpretation equipment, and assistive-listening equipment.

### 7. Furniture and equipment rental

- Tables, chairs, lounge furniture, podiums, coat racks, partitions, booths, and registration desks.
- Linens, tableware, dishes, cutlery, glassware, serving equipment, refrigeration, and warming equipment.
- Tents, canopies, heaters, fans, portable toilets, fencing, barriers, and floor protection where permitted.
- Sports equipment, mats, nets, scoreboards, lockers, and participant supplies.

### 8. Event operations and staffing

- Setup/teardown crew, decorators’ labour, cleaners, dishwashers, waste and recycling crew.
- Servers, bartenders, coat check, ushers, ticket scanners, registration staff, and parking attendants.
- Licensed security, crowd-management staff, first aid, medical coverage, and safety specialists.
- Childcare and child-minding only after appropriate screening, insurance, and policy design.

### 9. Guest logistics and accessibility

- Shuttle bus, limousine, accessible transport, taxi coordination, valet, parking, and equipment delivery.
- ASL interpretation, spoken-language interpretation, translation, captioning, and sensory-support services.
- Wheelchair or mobility-equipment rental, temporary ramps where approved, quiet-space equipment, and accessible seating support.
- Nearby accommodation referral and group transportation coordination.

### 10. Print, branding, invitations, and merchandise

- Invitations, RSVP tools, tickets, programs, menus, place cards, seating charts, badges, banners, and directional signs.
- Graphic design, printing, custom branding, event websites, and digital registration.
- Party favours, gift bags, awards, trophies, branded merchandise, and memorial keepsakes.

### 11. Market, exhibition, and public-event infrastructure

- Exhibitor booths, pipe-and-drape, shelving, display cases, point-of-sale rentals, and check-in technology.
- Ticketing, access control, wristbands, cashless systems, crowd counters, and communications equipment.
- Temporary fencing, toilets, generators, lighting, traffic support, sanitation, and waste management.

### 12. Compliance and specialist assistance

- Event insurance through an appropriately authorized provider.
- Permit or application assistance, clearly separated from government fees and regulator decisions.
- Food-safety, fire-safety, security-plan, emergency-plan, and accessibility consultants.
- Specialty vendors for animals, amusement devices, tents, pyrotechnics, or other regulated activities only after category-specific controls exist.

## Recommended starter bundles

Bundles are editable suggestions, never mandatory packages.

| Bundle | Suggested services |
|---|---|
| Kids’ birthday | Party food, cake, balloons/décor, entertainer or face painter, photographer, cleanup |
| Adult celebration | Catering, cake/dessert, décor, DJ or photo booth, photographer, cleanup |
| Business workshop | Coffee/refreshments, catering, AV/hybrid support, signage/printing, setup |
| Celebration of life | Light catering, flowers, AV/livestream, printed programs, display equipment |
| Wedding reception | Planning, catering, décor/florals, cake, DJ/band, photography/video, bar staff, cleanup |
| Community fundraiser | Registration/ticketing, catering, AV, entertainment, security, cleaning, raffle reminder when triggered |
| Fitness or recurring class | Instructor equipment, sound, participant supplies, first aid, recurring cleaning |
| Market or trade show | Booth/table package, power, signage, registration, security, waste services |

## Purpose-guided add-on discovery

Do not begin with one long list of every possible venue and vendor add-on. Ask what the organizer is planning, collect only the material activity answers for that purpose, and use those answers to organize the next choices. Purpose drives recommendations; it does not override venue policy.

Each venue configures every supported purpose as one of:

- **Allowed** — the use may remain Instant Book when availability and all other rules pass.
- **Approval required** — the organizer may explore compatible options, but the page must stop claiming Instant Book and payment remains blocked until an authorized venue decision is recorded.
- **Prohibited / not offered** — the organizer must choose a different purpose or facility.

The add-on experience should then proceed in three short stages:

1. **Fit and included:** show the selected purpose, venue-policy outcome, included amenities, automatically triggered required items, and conditional tasks. Explain the rule that caused every required item.
2. **Venue options:** show venue-supplied items with clear **Required**, **Recommended for this purpose**, **Also available**, or **Unavailable** labels. Required items cannot be removed while their trigger remains true. Optional paid items always start unchecked.
3. **Event services:** show compact category cards for recommended and already-selected services first. Let the organizer open one category at a time to compare actual provider offerings, then return without losing choices made in other categories. Always provide **Browse all services allowed at this venue** so a recommendation does not become an artificial catalogue restriction.

The **Other / not sure** purpose asks for a plain-language activity description and falls back to all facility-compatible categories. It remains approval-required until the venue classifies the use; it must never borrow an Instant Book label from the room's general availability.

Changing the purpose, venue, date, time, attendance, or a material activity answer revalidates required items and every retained vendor selection. Preserve selections that remain valid. Keep an invalid retained item visible as **Needs attention**, explain the exact failed policy, availability, capacity, lead-time, or facility rule, and require the organizer to replace or remove it before payment. Never silently remove, substitute, or bill an invalid item.

## Dynamic booking and compliance questionnaire

Ask the organizer only questions relevant to the selected event. Answers produce tasks, fees, restrictions, and service suggestions.

### Core event questions

- What type of event is this?
- Is it private/invite-only, public, or publicly advertised?
- Will admission, products, food, drinks, or services be sold?
- What is the maximum number of attendees, workers, vendors, and performers onsite at one time?
- Are minors attending, and is organized childcare being provided?
- What setup, vendor-delivery, rehearsal, event, cleanup, and collection times are required?
- Is the event one-time or recurring?

### Food and beverage

- Will food be served, prepared, reheated, cooked, sampled, or sold?
- Is food volunteer-prepared, delivered by a caterer, supplied by a food truck, or prepared onsite?
- Is kitchen access required, and what appliances or power are needed?
- Are there allergy, dietary, refrigeration, handwashing, or sanitation requirements?
- Will alcohol be provided free, sold, included with admission, or brought by attendees?

### Entertainment and production

- Will there be recorded music, live music, a DJ, dancing, karaoke, or a fitness class using music?
- Will amplified sound be used, and when will soundcheck and teardown end?
- Are a stage, risers, lighting, rigging, special power, fog effects, candles, open flame, cooking flame, fireworks, or pyrotechnics planned?
- Will photography, filming, livestreaming, or drone operation occur?

### Special activities

- Will there be face painting, henna, temporary tattoos, makeup, hair, nails, or other personal services?
- Will there be animals, a petting zoo, inflatables, soft play, amusement equipment, carnival games, or sports equipment?
- Will anyone pay for a chance to win, including a 50/50, squares, draw, raffle, or bingo?
- Will tents, canopies, booths, bleachers, fencing, generators, vehicles, or other temporary structures be used?

### Safety, access, and logistics

- Is event insurance required by the venue, and does alcohol change the coverage?
- Is licensed security, first aid, crowd management, or an emergency plan required?
- Are step-free access, accessible washrooms, accessible seating, interpretation, captioning, sensory accommodations, or service-animal access needed?
- What loading, parking, delivery, storage, waste, and vendor-access arrangements are required?

## Requirement task model

Every generated task needs:

- Requirement source: law/regulator, venue policy, vendor condition, or recommendation.
- Responsible party: organizer, venue, vendor, or platform operations.
- Due date and consequence of missing it.
- Cost type: included, required venue fee, estimated third-party cost, official fee, or no cost.
- Evidence: licence, permit, certificate, policy, layout, invoice, photograph, or acknowledgement.
- Reviewer and review deadline.
- Status: **Not applicable**, **Included by venue**, **Organizer action required**, **Vendor action required**, **Venue review**, **Regulator approval**, **Submitted**, **Verified**, **Rejected**, or **Expired**.

Examples:

| Trigger | Generated outcome |
|---|---|
| Private event with liquor provided or sold | Appropriate AGLC special-event-licence task and venue alcohol rules |
| Public event with commercial food vendors | AHS organizer/vendor notification workflow and vendor documentation |
| Recorded/live music or dancing | Determine whether venue coverage applies; otherwise show the applicable music-licensing task |
| Paid chance to win | AGLC eligibility/licence task; never commission raffle proceeds |
| Candles, indoor cooking, stage, tent, bleachers, special effects, or unusual assembly use | Venue review and possible Calgary Fire/City permit task |
| Venue requires insurance | Coverage amount, additional-insured wording, event dates, certificate upload, and review |
| Face painting or henna at a public special event | AHS personal-services notification and vendor requirements |
| Accessibility request | Private venue-confirmation task using functional needs, not medical diagnosis |

Requirements are conditional. The interface must not imply that every private hall booking needs every permit.

## Marketplace-order models

Support three service types:

1. **Instant package** — fixed scope, price, availability, delivery radius, and quantity.
2. **Request a quote** — organizer sends one structured brief; vendor responds with an itemized proposal and expiry.
3. **Referral or concierge** — used where the platform cannot safely transact or where professional assessment is required.

Each vendor order remains legally and financially distinct from the venue booking even when the customer sees one event itinerary and budget.

The platform should maintain separate ledgers for:

- Venue booking and venue add-ons.
- Each third-party vendor order.
- Refundable security deposit.
- Gather platform fees and processing-cost recovery.
- Seller settlements, transfers, and bank payouts.

A security deposit is never revenue and never commissionable. Do not charge commission on taxes, tips, government fees, donations, or raffle proceeds. If an approved deposit claim represents a venue charge, first classify the charge and determine its tax treatment, issue a supplemental venue invoice, and then apply only the approved deposit amount to that invoice as payment. Only the invoiced amount becomes collected venue proceeds; release or refund the remainder.

Issue the relevant supplier invoice and receipt when the customer pays. After the event, close each supplier order independently, issue any supplemental invoice or credit note, assess that seller's Gather fee, and generate its payout statement. Resolve the venue deposit on its own track; it should not block an unrelated fulfilled vendor. A deposit-funded claim must reference the supplemental venue invoice and its payment allocation in the venue payout statement and Final Booking Statement, while the deposit principal itself remains outside revenue and every commission basis. Create the consolidated Final Booking Statement when all customer-facing charges, credits, disputes, and deposit activity are resolved. The complete financial design is in [INVOICING_AND_SETTLEMENT.md](./INVOICING_AND_SETTLEMENT.md).

Where the payment architecture uses both, model the platform-to-connected-account **transfer** and the connected-account-to-bank **payout** as separate records with separate provider references and statuses. Transfer success never means the seller has been paid; mark the seller paid only after the bank payout is provider-confirmed, or an approved manual payout is independently confirmed and reconciled.

## Vendor profile and onboarding requirements

**Current prototype and pilot rule:** a participating vendor may select any service category the platform currently supports, operate in more than one category, and publish an offering without a separate category-approval step. Each offering still has one primary category, which selects the appropriate package template and organizer questions. Future production may add requested, active, action-required, expired, or paused category states and require category-specific evidence only where operational or regulatory needs justify it.

Every vendor profile should support:

- Legal/business identity and payout onboarding.
- Service categories, service radius, travel charges, and minimum order.
- Fixed packages and/or quote-required services.
- Calendar availability, capacity, inventory, and lead time.
- Setup/delivery/teardown windows and facility needs.
- Pricing, tax, deposit/balance schedule, cancellation terms, and refund terms.
- Portfolio, verified-booking reviews, response time, completion rate, and cancellation rate.
- Category-specific business licences, permits, training, insurance, background screening, and expiry dates.
- Venue compatibility and approved/preferred/prohibited status.

Do not use a single vague “Verified” badge. Display the specific checks completed and their expiry dates.

### Vendor offering catalogue and package builder

An authorized vendor owner or catalogue administrator should be able to create a private draft and publish a versioned offering without platform staff rewriting it. Each offering must record:

- Supplier, category, title, description, inclusions, exclusions, and service area.
- Selling model: pre-made package, organizer-configurable package, configurable package with custom-quote escape hatch, or quote-only service.
- Price method: flat, per attendee, hourly, per unit, tiered, or quote required; plus minimum order, option-level adjustments, tax profile, deposit or balance timing, and cancellation/refund terms.
- Organizer-choice groups initialized from a category template—for example catering menu components and serving style; cake size, flavour, filling, icing, design, inscription, and pickup/delivery; or décor style, entertainment duration, participant capacity, staffing, equipment, and branded artwork. The vendor enables the groups and choices its package supports, edits the organizer-facing labels, and sets each automatic price adjustment and adjustment basis.
- Required and optional selections, minimum/maximum choices, mutually exclusive options, dependencies, capacity, lead time, inventory, availability, delivery/setup/teardown windows, facility needs, and compatible venues.
- Whether custom requests are accepted, which structured brief and private references are required, and whether a vendor quote must be returned before checkout.
- A versioned cover image and other approved media, image-rights attestation, publishing status, author, timestamps, and audit history.

Publishing creates a new immutable catalogue version, and its enabled option groups, organizer-facing labels, choice availability, and price adjustments become the configuration shown after an organizer selects that package. Existing confirmed orders retain the exact offering version, selections, quantities, prices, terms, tax profile, quote, and image reference they accepted even after a vendor changes or unpublishes a later catalogue version. A saved draft remains private; an organizer can select only an active published version that still passes availability and compatibility checks.

The current prototype accepts one locally previewed JPEG, PNG, or WebP cover image up to 5 MB. Organizer custom-design references use the same prototype rule and remain private to the applicable organizer, vendor, and authorized support scope. Browser `accept`, filename, MIME declaration, and size checks improve usability but are not security boundaries. Production must enforce limits again on the server, verify the decoded media type, reject malformed or decompression-bomb content, scan and safely re-encode the image, remove metadata, constrain dimensions, generate safe derivatives, store objects outside executable/public paths, use access-controlled URLs for private references, and support moderation, retention, deletion, and image-rights complaints.

## Organizer comparison and selection

The organizer chooses an offering, not merely a category label. Group competing packages by a specific service need—such as catering, magic show, face painting, cake, décor, or photo booth—and allow at most one selected package within a mutually exclusive group. Complementary groups may be combined when the venue and event permit them.

The category overview should stay compact: purpose-recommended and already-selected categories appear first with a count of currently available packages and an indicative starting price. A separate control exposes every category with at least one package configured for the facility. No paid package is selected merely because it is recommended, and the recommendation model must not rank by Gather commission.

Every comparison card should show:

- Supplier and package name.
- Available, unavailable, quote-required, or venue-review status in text.
- Total fixed price, per-person estimate, hourly price, tier, minimum order, or “quote required,” as applicable.
- Average rating and verified completed-booking review count; new vendors show **New / no reviews**.
- Included scope, capacity, inventory, lead time, service radius, delivery/setup/teardown window, venue fit, facility needs, and cancellation terms.
- An exact reason when the package cannot be selected.

Keep unavailable lower-priced packages visible by default. This lets the organizer make an informed trade-off between price, real availability, review evidence, scope, and fit instead of assuming the cheapest result can be booked. **Best match** prioritizes compatibility, availability, quality, price, response, and reliability; it never uses Gather’s commission rate. Price and rating sorts must preserve unmistakable availability labels, and sponsored placement must be separately labelled.

For catering, collect cuisine, attendee count, menu/package, dietary support, allergy or cross-contact review needs, serving style, delivery/setup time, staff and tableware needs, venue-kitchen requirements, and organizer notes. Dietary and allergy fields describe vendor-reported capabilities; they must not promise “allergen-free.” A material allergy request requires a vendor acknowledgement or confirmation before the catering order becomes final. Sending the request does not count as confirmation: the response must come from an authenticated vendor user or a verified integration and remain tied to the exact package, date, time, attendance, and stated requirements.

After choosing a provider package, the organizer configures only the choices published for that offering. Show included choices separately from paid upgrades, enforce required and minimum/maximum selections, and recalculate the supplier subtotal and tax as each option changes. Cake and other design-led services may accept a private reference image, but a reference is an input to the brief—not vendor acceptance, reproduction permission, availability confirmation, or a final price.

If a selected option or uploaded reference changes the service to custom work, replace the instant-purchase state with **Quote required**. The organizer submits a versioned brief; the vendor returns an itemized quote with scope, price, tax, schedule, assumptions, substitutions, terms, and expiry. Payment stays blocked until the organizer accepts a still-valid quote and the platform reruns availability and compatibility. Never silently treat a custom upload as an order or add an estimated custom-work charge to Total due today.

Before payment, recheck the purpose status and every selected offering using its complete service interval and current capacity, lead time, service area, venue policy, facility requirements, configuration, inventory, price, tax profile, and cancellation terms. If the use requires venue approval, remove the Instant Book promise and block payment until a recorded approval changes the status. If a selected package becomes invalid, preserve it as **Needs attention**, explain why, and require the organizer to replace or remove it—never silently remove it or reduce the charge. Snapshot the purpose, material answers, policy result, selected package, configuration, price, tax, terms, eligibility evidence, and supplier identity when payment is confirmed.

## Organizer My Event workspace

After confirmation, give the booking owner one organizer-only **My Event** workspace for operational coordination. This unified presentation must not collapse the commercial or legal distinction between suppliers: the venue booking and every independent vendor order keep separate references, statuses, terms, invoices, fulfilment decisions, cancellation outcomes, disputes, and settlement records.

The workspace should contain:

1. **Event overview** — confirmed venue, date and time, purpose, attendance, payment and refundable-security-deposit status, selected services, and the next required organizer action.
2. **Separate supplier statuses** — the venue booking plus one status for each vendor order, with clear labels such as confirmed, action required, awaiting supplier response, ready for service, fulfilled, changed, or cancelled. An issue with one order must not imply that every supplier is unavailable or unpaid.
3. **Requirements and documents** — the conditional task model described above, grouped by responsible party and due date, with links to applicable supplier invoices, receipt, insurance or permit evidence, acknowledgements, and later account statements. Displaying a file as submitted is not the same as venue, vendor, regulator, or platform verification.
4. **Booking-linked messages** — event-scoped messages that identify the sender and intended recipient and remain linked to the venue booking or applicable vendor order. Keep private supplier settlement notes, unrelated customer records, access credentials, full payment details, and sensitive dietary, allergy, accessibility, or dispute evidence in appropriately restricted records rather than a general conversation.
5. **Schedule and access** — one readable itinerary that includes the venue access window, organizer setup and cleanup, vendor arrival, loading and delivery, each service window, teardown and collection, checkout, and relevant day-of contacts. The itinerary coordinates the event but does not merge supplier obligations. Release door codes, key instructions, alarm information, or other sensitive access data only at the configured time and only to authorized recipients.
6. **Change and cancellation preview** — a non-destructive calculation that rechecks the proposed date, time, attendance, purpose, requirements, venue inventory, and vendor availability. Itemize the estimated result for the venue and every vendor order, including approval needs, price differences, cancellation charges, credits, refunds, non-refundable amounts, and any additional payment. Opening, editing, closing, or abandoning a preview must not modify the confirmed booking.

If the organizer submits a change or cancellation request, preserve the original confirmation snapshot and create an auditable workflow. Record the request version, reason, actor, affected suppliers, availability results, supplier decisions, policy versions, expiry, and resulting change orders. Financial completion requires the appropriate supplier invoice, supplemental invoice, credit note, refund, or additional payment plus provider confirmation; a screen estimate or supplier acceptance alone is not a completed financial outcome.

The current prototype keeps the workspace, messages, statuses, checklist interactions, and financial-impact previews in browser memory for demonstration only. It does not message a supplier, verify a document, expose a real access credential, reserve capacity, amend or cancel an order, issue an invoice or credit note, submit a refund, or move money.

This workspace is not an attendee-management module. Ticket sales, invitations, RSVP tracking, seating plans, attendee accounts, check-in, badges, and public event websites remain outside the pilot unless later evidence supports a deliberate expansion.

## Verified post-event reviews

The booking owner may review the venue and every fulfilled independent-vendor order as separate targets after the relevant service is completed. A venue review must describe the venue experience; a vendor review must describe that vendor's package and fulfilment. Do not combine them into one event score that obscures which supplier delivered what.

- Create at most one review record for each `booking + target` pair. The venue booking is one target and each fulfilled vendor order is another. If the organizer edits during the permitted period, replace the existing record and recompute the aggregate; never count the edit as another review.
- Open eligibility after that target is completed or fulfilled and close it 30 days later. Evaluate each supplier independently rather than waiting for every event-level financial or deposit track to close. Canceled or unfulfilled targets are not reviewable in the pilot.
- Require an overall 1–5 rating. Public comment and structured positive or improvement highlights are optional. Private feedback is also optional, is visible only to authorized Gather support (not the supplier), and never appears in public review excerpts.
- Label an eligible review **Verified booking** only because it is linked to a completed Gather transaction. The label does not certify that every statement is objectively proven.
- In the prototype, submissions and edits are fictional in-memory actions and publish immediately for demonstration. Production must add automated integrity/content checks, reporting, human moderation where needed, policy notices, appeals, and an auditable removal or reinstatement record.
- The reviewed venue or vendor may report the review and may post one clearly labelled public response. It cannot approve publication, alter the organizer's content, suppress a rating, or obtain removal merely because it disputes the opinion. Remove or restrict content only under the published review and content policies, including rules against fake or duplicate reviews, incentives, extortion, retaliation, unlawful discrimination, harassment, threats, irrelevant content, and exposed personal information.
- Public identity and context stay minimal: display name or first name plus last initial, **Verified booking**, month/year, general event type, and the applicable venue or service package. Do not expose an exact event date or time, booking/order identifier, contact details, attendee or minor identities, dietary/allergy or health data, private notes, deposit evidence, or payment information.
- Keep reviews separate from complaints, safety reports, customer support, refunds, chargebacks, and security-deposit claims. Those workflows preserve their own evidence, deadlines, communications, and financial authority. Neither a review nor its removal decides a dispute, and a supplier must never offer or withhold money in exchange for a rating or revised comment.

For future organizers, show venue aggregate rating and verified-review count in search and on the venue page, followed by recent verified excerpts and structured highlights. Show vendor/package aggregates in provider comparison and excerpts from the relevant service type. New venue or service targets use **New / no reviews**. A public excerpt should identify the reviewed target and service context without revealing private booking information, and all sample reviews in the prototype must remain clearly labelled as fictional data.

## Marketplace safeguards

- Tell customers: **Gather may earn a commission when you book this provider.**
- Tell each seller the exact versioned fee policy before it accepts orders; snapshot that policy on every confirmed order.
- Rank by suitability, availability, quality, price, response, and reliability—not commission size.
- Clearly label sponsored placement.
- Allow each venue to permit all qualified vendors, maintain an approved list, require review, use an exclusive provider, or prohibit a category.
- Keep messages, quotes, agreements, change orders, evidence, and payment on-platform.
- Define what happens to every vendor order if the venue booking changes or is cancelled.
- Release vendor payouts according to the disclosed service-completion, closeout, reconciliation, and dispute policy. Do not mark a vendor paid from transfer success; retain and reconcile the later bank-payout status and reference.
- Recalculate commission under the order's snapshotted policy when it is credited or refunded, then reverse or assess the difference; do not assume a proportional result for fixed, tiered, minimum, or maximum fees.
- Itemize commission basis, rate, commission, Gather tax, actual processing cost, refunds, and net amount on the vendor payout statement; reference Gather's fee invoice.
- Keep venue deposit claims out of independent-vendor orders, vendor commission bases, and vendor payouts. A venue claim affects a vendor settlement only when a separately documented fraud, dispute, or chargeback risk connects the transactions.
- Collect seller identity and transaction data needed for tax and marketplace-reporting obligations.
- Do not imply that Gather guarantees regulator approval or provides legal advice.

## Launch priority

### MVP categories

- Catering and party food.
- Cake and desserts.
- Balloons, décor, and basic florals.
- Linens, tableware, and simple equipment rental.
- DJ and children’s entertainment.
- Magician, face painter, balloon artist, and character performer.
- Photography and photo booth.
- Setup, teardown, and cleaning.

Begin with a curated group of approximately 15–25 Calgary vendors rather than unrestricted self-registration. Early operations can be partially manual while Gather measures demand and failure modes.

### Phase 2 categories

- Bartending and service staff.
- Licensed security and first aid.
- Full AV, stage, lighting, and livestream production.
- Wedding planning, officiants, and advanced florals.
- Furniture, dance-floor, and larger equipment rentals.
- Transportation.
- Inflatables and soft play.
- Ticketing and auction tools.
- Interpreters and accessibility support.
- Insurance referral through an appropriately authorized partner.

### Later or tightly controlled

- Petting zoos and animal attractions.
- Childcare.
- Medical services.
- Large public festivals.
- Tents, generators, and major temporary structures.
- Fireworks, pyrotechnics, and drones.
- Gaming/raffle services.
- Cannabis-related events.
- Complex permit concierge.

## Revenue model

### Launch

- Community-association subscription: configurable, with a launch default of **$0**.
- Platform commission on venue rent: configurable, with a launch default of **0%**.
- Platform commission on venue-provided add-ons and required fees: configurable, with a launch default of **0%**.
- Standard payment-processing cost: actual cost allocated under the seller agreement as `deduct_from_payout`, `separate_invoice`, or `platform_subsidized`, with `deduct_from_payout` as the pilot default. Apply exactly one treatment per cost. For one multi-seller payment, use an explicit allocation rule rather than assigning the whole cost to the venue.
- Independent-vendor revenue: configurable commission assessed on a successfully completed eligible service order.

Every rule must be effective-dated, versioned, approved, and snapshotted on the confirmed order. Support percentage, fixed, tiered, minimum, and maximum fees. The default commission basis excludes tax, optional tips, refundable deposits, government/licence fees, donations, raffle proceeds, and refunded or unfulfilled value.

The first commission policies should be tested by category instead of applying one number to every service. Lower-margin catering and equipment rental may require a lower rate than entertainment or décor. Published marketplace models demonstrate both lower booking fees and service fees around ten percent, but those are references—not validated Calgary pricing.

Seller-funded commission appears on Gather's fee invoice and the seller payout statement. It must not be added to the organizer's invoice unless Gather intentionally introduces a separately disclosed customer-paid fee.

### Possible later revenue

- Vendor Pro subscription for CRM, calendar sync, analytics, priority quoting tools, and additional staff.
- Clearly labelled sponsored vendor placement.
- Qualified-lead fee for categories that cannot transact online, with duplicate/invalid-lead protections.
- Optional event-planning concierge fee.
- Optional premium venue features such as a branded widget, advanced reporting, accounting integration, smart access, or additional staff roles.
- Properly disclosed referral revenue from authorized insurance or other regulated-service partners.

### Unit-economics formula

The marketplace is sustainable only if service attachment is meaningful:

`venue bookings × vendor attachment rate × orders per attached event × average vendor order × net commission rate`

Subtract:

- Payment processing and connected-account costs.
- Refunds, chargebacks, and failed-service protection.
- Vendor acquisition and verification.
- Customer support and manual coordination.
- Promotions and credits.
- Any processing subsidy applied to commission-free venue payments.

Do not assume vendor commission will fund the platform while venue subscription and commission remain at their launch defaults until the pilot measures these variables.

## Pilot measurements

- Active spaces and available bookable hours.
- Confirmed venue bookings.
- Event-type distribution.
- Required-cost accuracy and post-checkout price changes.
- Requirement completion and rejection rate.
- Vendor-service impression, click, quote, and purchase conversion.
- Vendor attachment rate per event type.
- Vendor orders per attached event.
- Vendor gross merchandise value and average order value.
- Gross commission and net revenue after processing/refunds/support.
- Vendor response, acceptance, cancellation, on-time arrival, and completion rates.
- Organizer support contacts and vendor disputes.
- Venue satisfaction with outside vendors and cleanup outcomes.
- Time from event completion to final statement and seller payout.
- Fee-invoice, credit-note, processor-allocation, transfer, payout, and reconciliation exceptions.

## Calgary and Alberta requirement sources

The product should encode configurable rules and link to current official guidance rather than presenting this plan as legal advice.

- [AGLC private special-event liquor licences](https://aglc.ca/liquor/liquor-licences/apply-liquor-licence/liquor-licences-private-special-events?page=1)
- [AGLC public special-event liquor licences](https://aglc.ca/liquor/liquor-licences/apply-liquor-licence/liquor-licences-public-special-events)
- [AGLC raffle licensing](https://aglc.ca/gaming/charitable-gaming-licensing/raffle-licences/raffle-20000-and-less)
- [Alberta Health Services event guidance](https://www.albertahealthservices.ca/eph/Page13999.aspx)
- [City of Calgary special-event permit guidance](https://www.calgary.ca/for-business/licences/special-events-permits.html)
- [Calgary indoor special-event fire requirements](https://www.calgary.ca/safety/events/indoor-fire-code-requirements.html)
- [Calgary entertainment and event business guidance](https://www.calgary.ca/for-business/licences/special-events.html)
- [Calgary noise-exemption guidance](https://www.calgary.ca/bylaws/noise-exemption-permit.html)
- [SOCAN music licensing](https://www.socan.com/music-licenses/)
- [Re:Sound licensing FAQ](https://www.resound.ca/faq/)
- [Alberta security-service worker licensing](https://www.alberta.ca/security-service-worker-licence)
- [Alberta Human Rights Commission goods and services guidance](https://albertahumanrights.ab.ca/issues-with-services/goods-and-services/)
- [Competition Bureau drip-pricing guidance](https://competition-bureau.canada.ca/en/deceptive-marketing-practices/drip-pricing)
- [CRA digital-platform reporting guidance](https://www.canada.ca/en/revenue-agency/programs/about-canada-revenue-agency-cra/compliance/reporting-rules-digital-platforms/guidance-on-reporting-rules.html)
- [Stripe Connect](https://stripe.com/connect)

## Immediate validation plan

1. Interview five community associations about their allowed, approval-required, and prohibited uses; outside-vendor rules; preferred suppliers; required fees; insurance; cleanup; and responsibility when a vendor fails.
2. Configure ten real halls using the booking-item classification and purpose-policy matrix; confirm that every published rate sheet can be represented without hidden mandatory charges.
3. Run the prototype with at least six briefs—children’s birthday, adult celebration, wedding reception, business workshop, memorial, and fundraiser. For each, verify the fit status, included/required/recommended/general separation, and that no optional paid item is preselected.
4. Select a provider in one category, visit another category, and return; valid selections must persist. Change attendance or a material activity answer; all retained items must revalidate and any invalid item must remain visible for correction.
5. Test **Other / not sure**, **Venue approval required**, and **Not offered**. General compatible options may remain browsable, but approval-required uses must lose Instant Book and payment access, while prohibited uses must require another purpose or venue.
6. Interview at least three vendors in each proposed MVP category about packages, availability, margins, cancellation, travel, insurance, and acceptable commission structure.
7. Recruit a curated launch group and rehearse fulfilment with monitored test-mode or shadow operations before accepting live customer money.
8. Obtain a documented Canadian legal and CPA go/no-go on the supplier/agency, tax, invoicing, deposit, payment-regulation, and funds-flow model—and payment-provider approval of the connected-account design—before the first live pilot charge, transfer, or payout.
9. In test mode, rehearse a venue-only and a multi-vendor event from quote through booking-time supplier invoices, payment, post-event adjustment, both a full deposit release and an approved deposit-funded supplemental venue invoice, Gather fee invoice, payout statement, transfer, bank payout, and reconciliation.
10. Before the first live booking, provision the minimum production seller onboarding, payment webhook, invoice, immutable-ledger, separate transfer/bank-payout tracking, and daily reconciliation path; then run a controlled live pilot rather than manually treating a transfer as proof of seller payment.
11. Measure attachment and contribution margin before treating vendor commissions as the platform’s only permanent revenue source.
