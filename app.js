const venueTaxProfileFor = space => ({ id: `TAX-VEN-${space.id.toUpperCase()}`, label: "GST · venue sample profile (5%)", rate: 0.05 });
const gatherTaxProfile = { id: "TAX-GATHER-CA", label: "GST · Gather sample profile (5%)", rate: 0.05 };

const spaces = [
  {
    id: "ridgeview", name: "Ridgeview Community Hall", operator: "Ridgeview Community Association", invoicePrefix: "RCA", area: "Northwest Calgary", category: "Community hall", price: 48, capacity: 120, deposit: 300, image: "hall-img",
    amenities: ["Kitchen add-on", "Step-free", "120 attendees"], highlights: ["♿ Step-free access", "▣ Add-ons available", "Ⓟ Free parking"], busy: [{ date: "2026-10-17", start: 14, end: 17 }],
    descriptionTitle: "A bright, flexible hall for celebrations and community events",
    description: "Host a celebration, workshop, class, or community meeting in a warm, versatile room. Tables and chairs are included, and commercial-kitchen access can be added at checkout.",
    included: ["15 round tables", "120 chairs", "Wi-Fi", "Free parking", "Accessible washroom", "Coat room"],
    rules: "Music is permitted until 11:00 PM. Alcohol is permitted only when the booking contact meets the venue’s licensing and insurance requirements. Candles and confetti are not permitted.",
    addons: [
      { id: "kitchen", name: "Kitchen access", price: 45, description: "Per booking · ovens, prep counters, and dishwasher", available: true },
      { id: "setup", name: "Table and chair setup", price: 80, description: "Per booking · room set before arrival", available: true },
      { id: "av", name: "Projector and AV kit", price: 25, description: "Per booking · projector, screen, and HDMI cable", available: true },
      { id: "cleaning", name: "Post-event cleaning", price: 110, description: "Per booking · standard floor and surface cleaning", available: true },
      { id: "lighting", name: "Stage lighting", price: 60, description: "Unavailable for the selected date", available: false }
    ]
  },
  {
    id: "crestwood", name: "Crestwood Community Rink", operator: "Crestwood Community Association", invoicePrefix: "CCA", area: "Southwest Calgary", category: "Rink and court", price: 36, capacity: 60, deposit: 150, image: "rink-img",
    amenities: ["Change rooms", "Free parking", "60 attendees"], highlights: ["▣ Two change rooms", "◈ Equipment add-ons", "Ⓟ Free parking"], busy: [{ date: "2026-10-17", start: 9, end: 12 }],
    descriptionTitle: "An indoor rink for practices, games, and active events",
    description: "Book the rink for team practices, recreation sessions, or small tournaments. Standard nets, player benches, and two change rooms are included in the hourly rate.",
    included: ["Standard nets", "Player benches", "2 change rooms", "Spectator seating", "Washrooms", "Free parking"],
    rules: "Indoor athletic footwear is required for dry-floor bookings. Glass, smoking, and outside alcohol are not permitted. The space must be left clear of equipment at the end of the booking.",
    addons: [
      { id: "rink-lighting", name: "Enhanced rink lighting", price: 40, description: "Per booking · full competition lighting", available: true },
      { id: "equipment", name: "Equipment package", price: 55, description: "Per booking · cones, pinnies, and training aids", available: true },
      { id: "scoreboard", name: "Scoreboard access", price: 25, description: "Per booking · controller included", available: true },
      { id: "attendant", name: "Facility attendant", price: 75, description: "Per booking · opening, setup, and lockup support", available: true },
      { id: "party-room", name: "Private party room", price: 60, description: "Unavailable for the selected date", available: false }
    ]
  },
  {
    id: "sunroom", name: "The Sunroom", operator: "The Sunroom Calgary Ltd.", invoicePrefix: "SUN", area: "Bridgeland", category: "Meeting room", price: 29, capacity: 24, deposit: 0, image: "meeting-img",
    amenities: ["Projector included", "Wi-Fi", "24 attendees"], highlights: ["▣ Projector included", "⌁ High-speed Wi-Fi", "♿ Accessible washroom"], busy: [],
    descriptionTitle: "A light-filled room for meetings, workshops, and small classes",
    description: "A quiet, professional space with flexible seating, fast Wi-Fi, a whiteboard, and a projector included in the hourly rate.",
    included: ["Projector and screen", "Wi-Fi", "Whiteboard", "24 chairs", "6 tables", "Accessible washroom"],
    rules: "Food and non-alcoholic drinks are welcome. Keep noise within the room, remove confidential materials, and return furniture to the standard layout before leaving.",
    addons: [
      { id: "coffee", name: "Coffee and tea service", price: 35, description: "Per booking · service for up to 24 attendees", available: true },
      { id: "conference", name: "Video-conferencing kit", price: 20, description: "Per booking · camera, microphone, and speaker", available: true },
      { id: "printing", name: "Workshop printing", price: 15, description: "Per booking · up to 50 black-and-white pages", available: true },
      { id: "after-hours", name: "After-hours access", price: 45, description: "Per booking · access outside staffed hours", available: true },
      { id: "catering", name: "Catering coordination", price: 40, description: "Unavailable for the selected date", available: false }
    ]
  },
  {
    id: "oak", name: "Oak & Elm Hall", operator: "Oak & Elm Events Ltd.", invoicePrefix: "OEH", area: "Southeast Calgary", category: "Event hall", price: 54, capacity: 150, deposit: 400, image: "hall-img",
    amenities: ["Stage included", "Kitchen add-on", "150 attendees"], highlights: ["▱ Built-in stage", "♿ Accessible entrance", "Ⓟ Free parking"], busy: [{ date: "2026-10-17", start: 18, end: 20 }],
    descriptionTitle: "A spacious event hall with a stage and flexible floor plan",
    description: "Plan a reception, fundraiser, performance, or large workshop with a built-in stage, flexible seating, and optional kitchen and AV services.",
    included: ["Built-in stage", "20 rectangular tables", "150 chairs", "Wi-Fi", "Free parking", "Accessible entrance"],
    rules: "Amplified music must end by 11:00 PM. Alcohol requires the applicable licence and insurance. Decorations must use approved removable fasteners.",
    addons: [
      { id: "oak-kitchen", name: "Commercial kitchen access", price: 55, description: "Per booking · prep area, ovens, and dishwasher", available: true },
      { id: "oak-setup", name: "Table and chair setup", price: 90, description: "Per booking · layout completed before arrival", available: true },
      { id: "oak-av", name: "Sound and projection package", price: 40, description: "Per booking · microphones, speakers, and projector", available: true },
      { id: "oak-cleaning", name: "Post-event cleaning", price: 125, description: "Per booking · standard floor and surface cleaning", available: true },
      { id: "security", name: "Event security", price: 160, description: "Unavailable for the selected date", available: false }
    ]
  }
];

const vendorServices = [
  { id: "decor", category: "Decorations", name: "Celebration décor package", vendor: "Bright Day Events", invoicePrefix: "BDE", price: 285, description: "Balloon garland, backdrop, delivery, setup, and teardown", active: true, busy: [], taxProfile: { id: "TAX-BDE-CA", label: "GST · Bright Day sample profile (5%)", rate: 0.05 } },
  { id: "magician", category: "Entertainment", name: "Family magic show", vendor: "WonderSpark Entertainment", invoicePrefix: "WSE", price: 350, description: "60-minute show for family celebrations", active: true, busy: [], taxProfile: { id: "TAX-WSE-CA", label: "GST · WonderSpark sample profile (5%)", rate: 0.05 } },
  { id: "face-painting", category: "Entertainment", name: "Face painting", vendor: "Colour Cloud Studio", invoicePrefix: "CCS", price: 240, description: "Two-hour service for up to 30 participants", active: true, busy: [], taxProfile: { id: "TAX-CCS-CA", label: "GST · Colour Cloud sample profile (5%)", rate: 0.05 } },
  { id: "cake", category: "Food & cake", name: "Celebration cake", vendor: "Prairie Sugar Co.", invoicePrefix: "PSC", price: 95, description: "Custom message and local delivery", active: true, busy: [], taxProfile: { id: "TAX-PSC-CA", label: "GST · Prairie Sugar sample profile (5%)", rate: 0.05 } },
  { id: "catering", category: "Catering", name: "Family buffet", vendor: "Bow River Catering", invoicePrefix: "BRC", price: 780, description: "Sample package for up to 60 attendees", active: true, busy: [], taxProfile: { id: "TAX-BRC-CA", label: "GST · Bow River sample profile (5%)", rate: 0.05 } },
  { id: "photo-booth", category: "Entertainment", name: "Photo booth", vendor: "Flashbox Calgary", invoicePrefix: "FBC", price: 425, description: "Three-hour staffed booth with digital gallery", active: true, busy: [{ date: "2026-10-17", start: 16, end: 23 }], taxProfile: { id: "TAX-FBC-CA", label: "GST · Flashbox sample profile (5%)", rate: 0.05 } }
];

const app = document.querySelector("#app");
const toast = document.querySelector(".toast");
let bookingStep = 1;
let bookingData = { date: "2026-10-17", start: "18:00", end: "23:00", guests: 60, event: "Birthday celebration", contact: "Alex Morgan", email: "alex@example.com", notes: "Family birthday dinner with music and a catered buffet.", addons: [], vendorServices: [] };
let selectedSpaceId = "ridgeview";
let depositView = "review";
let depositDeduction = 0;
let depositClaimReason = "Additional cleaning";
let depositClaimEvidence = "Timestamped post-event photos and supporting record attached (prototype).";
let closeoutFinalized = false;
let confirmedBookingSnapshot = null;
let bookingSequence = 1048;
let policyRevision = 1;
let feePolicy = {
  associationSubscription: 0,
  venueCommission: 0,
  vendorCommission: 12,
  processingTreatment: "deduct_from_payout",
  processingAllocation: "proportional"
};

const financeDemo = {
  bookingId: "BKG-1033",
  event: "Singh family reception",
  eventDate: "September 21, 2026",
  customer: "Priya Shah",
  venueSupplier: "Ridgeview Community Association",
  vendorSupplier: "WonderSpark Entertainment",
  venueInvoice: "INV-RCA-1033",
  vendorInvoice: "INV-WSE-1033",
  receipt: "RCT-1033",
  chargeRef: "CHG-1033",
  allocations: { venue: "ALLOC-RCA-1033", vendor: "ALLOC-WSE-1033", deposit: "ALLOC-DEP-1033" },
  taxProfiles: {
    venue: { id: "TAX-RCA-CA", label: "GST · Ridgeview sample profile (5%)", rate: 0.05 },
    vendor: { id: "TAX-WSE-CA", label: "GST · WonderSpark sample profile (5%)", rate: 0.05 },
    gather: gatherTaxProfile
  },
  association: { sales: 600, tax: 30, gross: 630, commissionRate: 0, commission: 0, processing: 27.18, net: 602.82 },
  vendor: { sales: 400, tax: 20, gross: 420, commissionRate: 12, commission: 48, commissionTax: 2.40, processing: 12.27, net: 357.33 },
  processing: { total: 39.45, rate: 2.9, fixed: 0.30, venueAllocation: 18.41, vendorAllocation: 12.27, depositAllocation: 8.77 },
  deposit: 300
};

const accountContexts = [
  { id: "customer", label: "Customer account", icon: "◎", description: "The organizer who searches, books, pays, receives documents, and responds to post-event matters." },
  { id: "venue", label: "Space-operator organization", icon: "▱", description: "The business or association that publishes and operates one or more rentable spaces." },
  { id: "vendor", label: "Event-service vendor", icon: "✦", description: "An independent supplier providing catering, entertainment, décor, photography, staffing, rentals, or another event service." },
  { id: "platform", label: "Gather platform team", icon: "◇", description: "Internal roles responsible for access, marketplace operations, support, commercial policy, payments, and reconciliation." }
];

const demoRoles = [
  {
    id: "customer-organizer", accountType: "customer", role: "Organizer / booking owner", shortRole: "Organizer", name: "Priya Shah", initials: "PS", organization: "Personal booking account", landing: "customer-dashboard", workspaceLabel: "Open My bookings",
    summary: "Books the space and optional vendor services, pays, receives customer documents, and manages the booking.",
    permissionKeys: ["customer.booking.manage", "customer.documents.view", "customer.deposit.respond", "customer.messages"],
    permissions: ["Search and complete Instant Book checkout", "View customer invoices, receipts, statements, and deposit status", "Request permitted changes or cancellation", "Respond to a documented deposit claim"],
    restrictions: ["Cannot see venue or vendor private payouts", "Cannot change availability, commercial policy, or supplier records"],
    routes: ["customer-dashboard", "customer-documents", "customer-deposit", "interim-statement", "final-statement"]
  },
  {
    id: "venue-admin", accountType: "venue", role: "Owner / account administrator", shortRole: "Venue admin", name: "Jamie Morales", initials: "JM", organization: "Ridgeview Community Association", landing: "dashboard", workspaceLabel: "Open venue dashboard",
    summary: "Controls the operator account, spaces, policies, team access, and the complete venue workflow.",
    permissionKeys: ["venue.settings", "venue.members", "venue.booking.manage", "venue.operations", "venue.deposit.approve", "venue.finance.view"],
    permissions: ["Manage spaces, availability, policies, and team memberships", "Manage bookings and customer communication", "Review and approve a separately proposed deposit outcome", "View venue documents and calculated payouts"],
    restrictions: ["Cannot view a vendor’s private fee or payout records", "Cannot edit Gather-wide platform fee policy"],
    routes: ["dashboard", "settlement", "deposit", "payments", "finance-booking-documents", "interim-statement", "final-statement", "association-payout", "venue-terms"]
  },
  {
    id: "venue-bookings", accountType: "venue", role: "Booking manager", shortRole: "Bookings", name: "Samira Khan", initials: "SK", organization: "Ridgeview Community Association", landing: "dashboard", workspaceLabel: "Open booking workspace",
    summary: "Runs calendars, customer communication, booking changes, documents, and access instructions.",
    permissionKeys: ["venue.booking.manage", "venue.customer.communicate", "venue.documents.view"],
    permissions: ["Manage confirmed bookings and calendar conflicts", "Contact customers and send operational reminders", "Prepare access instructions and booking documents", "View closeout status without approving payouts"],
    restrictions: ["Cannot change bank, tax, commission, or payout settings", "Cannot approve deposit deductions or seller settlement"],
    routes: ["dashboard", "settlement", "interim-statement", "final-statement", "venue-terms"]
  },
  {
    id: "venue-operations", accountType: "venue", role: "Operations / inspection staff", shortRole: "Operations", name: "Devon Lee", initials: "DL", organization: "Ridgeview Community Association", landing: "settlement", workspaceLabel: "Open operations workspace",
    summary: "Handles access, setup, event completion, inspection evidence, and proposed deposit outcomes.",
    permissionKeys: ["venue.operations", "venue.deposit.propose"],
    permissions: ["View today’s event and access tasks", "Confirm venue fulfilment and returned access items", "Record inspection notes and evidence", "Propose a deposit release or itemized claim"],
    restrictions: ["Cannot approve the financial outcome of its own claim", "Cannot view payout destinations or edit commercial terms"],
    routes: ["dashboard", "settlement", "deposit"]
  },
  {
    id: "venue-finance", accountType: "venue", role: "Finance and settlement", shortRole: "Venue finance", name: "Priya Desai", initials: "PD", organization: "Ridgeview Community Association", landing: "payments", workspaceLabel: "Open finance centre",
    summary: "Reconciles venue charges, refunds, deposits, invoices, processing costs, and seller settlement.",
    permissionKeys: ["venue.finance.view", "venue.finance.approve", "venue.deposit.approve", "venue.documents.view"],
    permissions: ["View supplier invoices, receipts, credits, and deposit ledgers", "Review and approve permitted financial outcomes", "Reconcile processing allocations and calculated payouts", "Export operator accounting records"],
    restrictions: ["Cannot edit space content or daily availability", "Cannot access independent-vendor private settlement records"],
    routes: ["dashboard", "settlement", "deposit", "payments", "finance-booking-documents", "interim-statement", "final-statement", "association-payout", "venue-terms"]
  },
  {
    id: "venue-viewer", accountType: "venue", role: "Board / auditor — read only", shortRole: "Viewer", name: "Chris Wong", initials: "CW", organization: "Ridgeview Community Association", landing: "dashboard", workspaceLabel: "Open read-only overview",
    summary: "Reviews operational performance and policy without changing bookings, money, or access.",
    permissionKeys: ["venue.reporting.view"],
    permissions: ["View summary metrics and upcoming-booking calendar", "Review the organization’s current commercial terms", "See audit-oriented status without customer editing controls"],
    restrictions: ["Cannot create or change bookings, claims, refunds, or payouts", "Cannot manage members, settings, tax data, or bank details"],
    routes: ["dashboard", "venue-terms"]
  },
  {
    id: "vendor-admin", accountType: "vendor", role: "Vendor owner / administrator", shortRole: "Vendor admin", name: "Morgan Ellis", initials: "ME", organization: "WonderSpark Entertainment", landing: "vendor-dashboard", workspaceLabel: "Open vendor portal",
    summary: "Controls the vendor profile, services, availability, team access, fulfilment, and vendor finances.",
    permissionKeys: ["vendor.settings", "vendor.members", "vendor.orders", "vendor.fulfilment", "vendor.finance"],
    permissions: ["Manage service packages, availability, credentials, and staff", "Accept and fulfil eligible service orders", "View vendor supplier invoices, Gather fees, and calculated payouts", "Maintain payout onboarding"],
    restrictions: ["Cannot see venue deposit or association payout records", "Cannot change customer or venue supplier documents"],
    routes: ["vendor-dashboard", "vendor-invoice", "vendor-payout"]
  },
  {
    id: "vendor-fulfilment", accountType: "vendor", role: "Order / fulfilment staff", shortRole: "Fulfilment", name: "Jordan Bell", initials: "JB", organization: "WonderSpark Entertainment", landing: "vendor-dashboard", workspaceLabel: "Open fulfilment queue",
    summary: "Works from the vendor schedule and records delivery, setup, service completion, and evidence.",
    permissionKeys: ["vendor.orders", "vendor.fulfilment"],
    permissions: ["View assigned service orders and venue delivery instructions", "Record arrival, fulfilment, exceptions, and completion evidence", "Message the organizer through the order"],
    restrictions: ["Cannot see commission invoices, payout destination, or vendor bank details", "Cannot change vendor membership or commercial agreement"],
    routes: ["vendor-dashboard"]
  },
  {
    id: "vendor-finance", accountType: "vendor", role: "Vendor finance", shortRole: "Vendor finance", name: "Taylor Singh", initials: "TS", organization: "WonderSpark Entertainment", landing: "vendor-payout", workspaceLabel: "Open vendor finance",
    summary: "Reviews vendor invoices, fees, processing allocations, transfers, and bank-payout status.",
    permissionKeys: ["vendor.documents", "vendor.finance"],
    permissions: ["View vendor supplier invoices and payment allocations", "Review Gather fee invoices and calculated payout", "Reconcile transfer and bank-payout status"],
    restrictions: ["Cannot change services, availability, or fulfilment evidence", "Cannot see venue-private financial or deposit records"],
    routes: ["vendor-dashboard", "vendor-invoice", "vendor-payout"]
  },
  {
    id: "platform-admin", accountType: "platform", role: "Platform administrator", shortRole: "Platform admin", name: "Taylor Chen", initials: "TC", organization: "Gather", landing: "platform-dashboard", workspaceLabel: "Open platform console",
    summary: "Administers organizations, access policy, platform configuration, and controlled commercial-policy changes.",
    permissionKeys: ["platform.access", "platform.policy", "platform.marketplace", "platform.support", "platform.finance"],
    permissions: ["Administer tenants, memberships, roles, and global controls", "Review marketplace and operational queues", "Create future commercial-policy versions", "View reconciliation health and audit history"],
    restrictions: ["Support access must still be time-limited and reason-coded", "Cannot silently rewrite an existing booking’s snapshotted terms"],
    routes: ["platform-dashboard", "fee-settings"]
  },
  {
    id: "platform-ops", accountType: "platform", role: "Marketplace operations / support", shortRole: "Platform ops", name: "Noor Ahmed", initials: "NA", organization: "Gather", landing: "platform-dashboard", workspaceLabel: "Open operations console",
    summary: "Handles seller onboarding, listing moderation, credential review, support, and exception queues.",
    permissionKeys: ["platform.marketplace", "platform.support"],
    permissions: ["Review operator and vendor onboarding", "Moderate listings and category credentials", "Manage support and synchronization exceptions", "Use audited, time-limited support access"],
    restrictions: ["Cannot change fee policy or approve platform money movement", "Cannot expose full bank, tax, or payment credentials"],
    routes: ["platform-dashboard"]
  },
  {
    id: "platform-finance", accountType: "platform", role: "Platform finance / reconciliation", shortRole: "Platform finance", name: "Riley Patel", initials: "RP", organization: "Gather", landing: "platform-dashboard", workspaceLabel: "Open reconciliation console",
    summary: "Reconciles processor activity, ledger entries, transfers, payouts, seller balances, and platform fee documents.",
    permissionKeys: ["platform.finance", "platform.policy"],
    permissions: ["Review processor-to-ledger reconciliation exceptions", "Track transfers separately from bank payouts", "Issue and reconcile platform fee documents", "Create approved future fee-policy versions"],
    restrictions: ["Cannot edit venue listings or vendor fulfilment evidence", "Cannot impersonate a customer or seller without audited support access"],
    routes: ["platform-dashboard", "fee-settings"]
  }
];

const publicRoutes = new Set(["home", "explore", "venue", "booking", "booking-documents", "host", "sign-in"]);
const storedDemoRole = (() => { try { return sessionStorage.getItem("gather-demo-role"); } catch { return null; } })();
let activeRoleId = demoRoles.some(role => role.id === storedDemoRole) ? storedDemoRole : null;
const activeRole = () => demoRoles.find(role => role.id === activeRoleId) || null;
const accountContext = accountType => accountContexts.find(context => context.id === accountType);
const hasPermission = permission => Boolean(activeRole()?.permissionKeys.includes(permission));
if (activeRole()?.accountType === "customer") {
  bookingData.contact = activeRole().name;
  bookingData.email = "priya@example.com";
}
if (activeRole()?.accountType === "customer" && depositView === "review") seedCustomerClaimScenario();
const canAccessRoute = route => {
  if (["booking", "booking-documents"].includes(route) && activeRole() && activeRole().accountType !== "customer") return false;
  return publicRoutes.has(route) || (route === "role-home" ? Boolean(activeRole()) : Boolean(activeRole()?.routes.includes(route)));
};
const routeLabels = {
  booking: "Instant Book checkout",
  "booking-documents": "Checkout booking documents",
  "customer-dashboard": "My bookings",
  "customer-documents": "Customer booking documents",
  "customer-deposit": "Customer deposit response",
  dashboard: "Venue overview",
  settlement: "Event closeout",
  deposit: "Security-deposit closeout",
  payments: "Venue finance centre",
  "finance-booking-documents": "Booking finance documents",
  "vendor-invoice": "Vendor supplier invoice",
  "interim-statement": "Interim Event Account Statement",
  "final-statement": "Final Booking Statement",
  "association-payout": "Association payout statement",
  "vendor-payout": "Vendor payout statement",
  "vendor-dashboard": "Vendor portal",
  "platform-dashboard": "Platform console",
  "fee-settings": "Platform commercial terms",
  "venue-terms": "Venue commercial terms",
  "role-home": "Role and permissions"
};

const money = value => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 }).format(value);
const moneyExact = value => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
const deductionAmount = value => value ? `−${moneyExact(value)}` : moneyExact(0);
const cadMoney = value => money(value).replace("$", "CA$");
const escapeHtml = value => String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);

const timeAsHours = value => {
  const [hours, minutes] = value.split(":").map(Number);
  return hours + minutes / 60;
};

const formatTime = value => new Date(`2026-01-01T${value}:00`).toLocaleTimeString("en-CA", { hour: "numeric", minute: "2-digit" });
const formatHour = value => formatTime(`${String(Math.floor(value)).padStart(2, "0")}:${value % 1 ? "30" : "00"}`);
const currentSpace = () => spaces.find(space => space.id === selectedSpaceId) || spaces[0];
const currentAddons = () => currentSpace().addons;
const selectedVendorServices = () => vendorServices.filter(item => bookingData.vendorServices.includes(item.id));
const selectedBillableVendorServices = () => selectedVendorServices().filter(item => vendorAvailability(item).available);
const taxFor = (value, profile) => Math.round(value * profile.rate * 100) / 100;

function durationHours() {
  return Math.max(0, timeAsHours(bookingData.end) - timeAsHours(bookingData.start));
}

function availability(space = currentSpace()) {
  const start = timeAsHours(bookingData.start);
  const end = timeAsHours(bookingData.end);
  const guests = Number(bookingData.guests);
  if (!bookingData.date || !Number.isFinite(start) || !Number.isFinite(end)) return { available: false, message: "Choose a valid date and time." };
  if (!Number.isFinite(guests) || guests < 1 || guests > space.capacity) return { available: false, message: `This space can accommodate 1–${space.capacity} attendees.` };
  if (end <= start) return { available: false, message: "End time must be after start time." };
  if (start < 8 || end > 23) return { available: false, message: "Bookings are available from 8:00 AM to 11:00 PM." };
  const conflict = space.busy.find(block => block.date === bookingData.date && start < block.end && end > block.start);
  if (conflict) {
    return { available: false, message: `This time overlaps a confirmed booking from ${formatHour(conflict.start)}–${formatHour(conflict.end)}` };
  }
  return { available: true, message: "Available for your selected date and time. Successful payment confirms your booking." };
}

function vendorAvailability(service) {
  if (!service.active) return { available: false, message: "This provider is not accepting orders." };
  const start = timeAsHours(bookingData.start);
  const end = timeAsHours(bookingData.end);
  const conflict = (service.busy || []).find(block => block.date === bookingData.date && start < block.end && end > block.start);
  if (conflict) return { available: false, message: `Unavailable ${formatHour(conflict.start)}–${formatHour(conflict.end)} on this date.` };
  return { available: true, message: "Available for the selected date and time." };
}

function selectedVendorAvailability() {
  const unavailable = selectedVendorServices().filter(service => !vendorAvailability(service).available);
  return { available: unavailable.length === 0, unavailable };
}

function pricing() {
  const rental = durationHours() * currentSpace().price;
  const addons = currentAddons().filter(item => bookingData.addons.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
  const venueSubtotal = rental + addons;
  const selectedVendors = selectedBillableVendorServices();
  const vendorSubtotal = selectedVendors.reduce((sum, item) => sum + item.price, 0);
  const venueTax = taxFor(venueSubtotal, venueTaxProfileFor(currentSpace()));
  const vendorTax = selectedVendors.reduce((sum, item) => sum + taxFor(item.price, item.taxProfile), 0);
  const tax = venueTax + vendorTax;
  const servicesTotal = venueSubtotal + venueTax + vendorSubtotal + vendorTax;
  const deposit = currentSpace().deposit;
  return { rental, addons, venueSubtotal, vendorSubtotal, venueTax, vendorTax, tax, servicesTotal, rentalTotal: servicesTotal, deposit, dueNow: servicesTotal + deposit };
}

function createBookingSnapshot() {
  const reference = bookingSequence;
  return JSON.parse(JSON.stringify({
    reference,
    bookingId: `BKG-${reference}`,
    space: currentSpace(),
    booking: bookingData,
    totals: pricing(),
    addons: currentAddons().filter(item => bookingData.addons.includes(item.id)),
    vendors: selectedBillableVendorServices(),
    venueTaxProfile: venueTaxProfileFor(currentSpace()),
    venueInvoiceNumber: `INV-${currentSpace().invoicePrefix}-${reference}`,
    receiptNumber: `RCT-${reference}`
  }));
}

function claimInvoiceDetails() {
  const hasAmount = depositDeduction > 0;
  const taxableService = depositClaimReason === "Additional cleaning";
  const taxRate = taxableService ? financeDemo.taxProfiles.venue.rate : 0;
  const subtotal = hasAmount ? Math.round((depositDeduction / (1 + taxRate)) * 100) / 100 : 0;
  const tax = hasAmount ? Math.round((depositDeduction - subtotal) * 100) / 100 : 0;
  return {
    invoice: "SUP-RCA-1033",
    reason: depositClaimReason,
    subtotal,
    tax,
    total: hasAmount ? depositDeduction : 0,
    taxLabel: taxableService ? financeDemo.taxProfiles.venue.label : "No tax in this prototype scenario · production review required"
  };
}

function seedCustomerClaimScenario() {
  depositDeduction = 85;
  depositClaimReason = "Additional cleaning";
  depositClaimEvidence = "Timestamped post-event photos and supporting cleaning record attached (prototype).";
  depositView = "customer_review";
  closeoutFinalized = false;
}

function supplementalClaim() {
  return { ...claimInvoiceDetails(), approved: depositView === "closed" && depositDeduction > 0 };
}

function hasIssuedSupplementalClaim() {
  return depositDeduction > 0 && ["claim_payment_pending", "closed"].includes(depositView);
}

function associationSettlement() {
  const claim = supplementalClaim();
  const base = financeDemo.association;
  const collectedClaim = claim.approved ? claim : { subtotal: 0, tax: 0, total: 0 };
  return {
    ...base,
    sales: base.sales + collectedClaim.subtotal,
    tax: base.tax + collectedClaim.tax,
    gross: base.gross + collectedClaim.total,
    net: base.net + collectedClaim.total,
    claim
  };
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function spaceCard(space) {
  return `<button class="space-card" data-space="${space.id}" aria-label="View ${space.name}">
    <div class="card-image ${space.image}"><span class="card-tag">${space.category}</span><span class="availability-badge">⚡ Instant Book · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}</span></div>
    <div class="card-body"><div class="card-topline"><div><h3>${space.name}</h3><p>${space.area}</p></div><div class="price"><strong>${money(space.price)}</strong><br><small>per hour</small></div></div>
    <div class="amenities">${space.amenities.map(item => `<span>${item}</span>`).join("")}</div></div>
  </button>`;
}

function homePage() {
  return `<section class="hero">
    <div class="hero-copy"><span class="eyebrow">Bookable spaces across Calgary</span><h1>Room for whatever you’re planning.</h1><p>Find halls, rooms, rinks, studios, and other rentable spaces with upfront pricing and availability for your selected date and time.</p>
      <form class="search-panel" id="home-search">
        <div class="search-field"><label for="what">What are you planning?</label><select id="what"><option>Celebration or gathering</option><option>Sports or recreation</option><option>Meeting or workshop</option><option>Food preparation</option></select></div>
        <div class="search-field"><label for="date">When?</label><input id="date" type="date" value="${bookingData.date}" /></div>
        <div class="search-field"><label for="search-start">Start</label><input id="search-start" type="time" value="${bookingData.start}" /></div>
        <div class="search-field"><label for="search-end">End</label><input id="search-end" type="time" value="${bookingData.end}" /></div>
        <div class="search-field"><label for="guests">Attendees</label><select id="guests"><option value="20" ${bookingData.guests <= 25 ? "selected" : ""}>1–25</option><option value="60" ${bookingData.guests > 25 && bookingData.guests <= 75 ? "selected" : ""}>26–75</option><option value="100" ${bookingData.guests > 75 && bookingData.guests <= 150 ? "selected" : ""}>76–150</option><option value="175" ${bookingData.guests > 150 ? "selected" : ""}>150+</option></select></div>
        <button class="button button-dark" type="submit">Search →</button>
      </form>
    </div>
    <div class="hero-art" aria-label="Illustration of a welcoming rentable space"><div class="hall-scene"><div class="hall-wall"></div><div class="window one"></div><div class="window two"></div><div class="banner"></div><div class="table"></div><div class="chair left"></div><div class="chair right"></div><div class="plant"></div></div><div class="art-badge"><span class="check-dot">✓</span><div><strong>Everything in one place</strong><small>Availability · pricing · venue rules</small></div></div></div>
  </section>
  <section class="trust-strip"><div><strong>Upfront pricing</strong><span>See an itemized total before you pay</span></div><div><strong>Available for your time</strong><span>Results match your date, time, and attendance</span></div><div><strong>Instant Book</strong><span>Successful payment confirms your booking</span></div></section>
  <section class="section"><div class="section-heading"><div><span class="eyebrow">Spaces near you</span><h2>Find the right space.</h2></div><p>From celebrations and classes to meetings and recreation, compare amenities, venue rules, and pricing before you book.</p></div><div class="card-grid">${spaces.filter(space => availability(space).available).slice(0,3).map(spaceCard).join("")}</div></section>
  <section class="section how"><span class="eyebrow">How it works</span><h2>From idea to booked—without the back-and-forth.</h2><div class="step-grid"><div><span class="step-number">1</span><h3>Find available spaces</h3><p>Choose a date and time. Every result is available for your selected booking details.</p></div><div><span class="step-number">2</span><h3>Choose add-ons and services</h3><p>Compare what is included, venue-owned add-ons, and optional services from independent local vendors.</p></div><div><span class="step-number">3</span><h3>Pay and confirm</h3><p>Complete checkout to confirm instantly—no manual venue approval required.</p></div></div></section>
  <section class="host-cta"><div><span class="eyebrow">Starting with community associations</span><h2>Turn available space into booked space.</h2><p>List halls, meeting rooms, kitchens, rinks, courts, and other spaces your association makes available to rent.</p></div><button class="button button-dark" data-route="host">See how it helps →</button></section>`;
}

function explorePage() {
  const selectedDate = new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });
  const availableSpaces = spaces.filter(space => availability(space).available);
  const pinClasses = ["one", "two", "three"];
  const mapPins = availableSpaces.slice(0, 3).map((space, index) => `<div class="pin ${pinClasses[index]}"><span>${money(space.price).replace(".00", "")}</span></div>`).join("");
  return `<section class="page-hero"><span class="eyebrow">Rentable spaces in Calgary</span><h1>Find a space that fits.</h1><p>Compare rates, included amenities, available add-ons, and availability from local hosts.</p><div class="instant-book-note"><strong>⚡ Instant Book</strong><span>These spaces are available for your selected date, time, and attendance.</span></div></section>
  <div class="filter-bar"><button class="filter-chip active">All spaces</button><button class="filter-chip">Community halls</button><button class="filter-chip">Sports venues</button><button class="filter-chip">Meeting rooms</button><button class="filter-chip">Kitchen available</button><button class="filter-chip">Accessibility features</button><button class="filter-chip">More filters</button></div>
  <section class="results-layout"><div class="results-list"><div class="section-heading"><h3>${availableSpaces.length} ${availableSpaces.length === 1 ? "space" : "spaces"} available</h3><p>${selectedDate} · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)} · ${bookingData.guests} attendees</p></div><div class="card-grid">${availableSpaces.map(spaceCard).join("") || `<div class="empty-results"><h3>No spaces are available for your selected time.</h3><p>Try a different date or time, or adjust the number of attendees.</p><button class="button button-dark" data-route="home">Edit search</button></div>`}</div></div><div class="map" aria-label="Decorative map showing available Calgary spaces">${mapPins}</div></section>`;
}

function venuePage() {
  const space = currentSpace();
  const totals = pricing();
  const slot = availability();
  const availableVendorServices = vendorServices.filter(service => vendorAvailability(service).available).slice(0, 4);
  const selectedDate = new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });
  const busySlots = space.busy.filter(block => block.date === bookingData.date).map(block => `<span class="slot booked">Booked · ${formatHour(block.start)}–${formatHour(block.end)}</span>`).join("");
  const canStartBooking = !activeRole() || activeRole().accountType === "customer";
  return `<div class="venue-wrap"><div class="venue-gallery ${space.image}"><div class="window one"></div><div class="window two"></div><div class="table"></div><span class="gallery-pill">▦ View sample gallery</span></div>
    <div class="venue-content"><div><div class="venue-title"><span class="eyebrow">${space.category}</span><h1>${space.name}</h1><p class="venue-meta">${space.area} · ⚡ Instant Book</p></div>
      <div class="feature-row"><span>♙ Capacity: ${space.capacity} attendees</span>${space.highlights.map(item => `<span>${item}</span>`).join("")}</div>
      <div class="content-block"><h3>${space.descriptionTitle}</h3><p>${space.description}</p></div>
      <div class="content-block"><h3>Availability for ${selectedDate}</h3><div class="slot-row"><span class="slot available">Booking hours: 8:00 AM–11:00 PM</span>${busySlots}<span class="slot ${slot.available ? "selected" : "booked"}">${slot.available ? "✓ Available" : "Not available"} · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}</span></div><p class="block-note">Booked periods are unavailable. Your selected time must include setup and cleanup.</p></div>
      <div class="content-block"><h3>Included in the hourly rate</h3><div class="amenities included">${space.included.map(item => `<span>✓ ${item}</span>`).join("")}</div></div>
      <div class="content-block"><h3>Available add-ons</h3><p>Select available add-ons at checkout.</p><div class="addon-preview-grid">${currentAddons().filter(item => item.available).slice(0, 4).map(item => `<div class="addon-preview"><div><strong>${item.name}</strong><small>${item.description}</small></div><span>+${money(item.price)}</span></div>`).join("")}</div></div>
      <div class="content-block"><h3>Optional services from local vendors</h3><p>Add independent providers at checkout. Each vendor issues its own supplier invoice and remains responsible for fulfilment.</p><div class="addon-preview-grid">${availableVendorServices.map(item => `<div class="addon-preview vendor-preview"><div><span class="vendor-category">${item.category}</span><strong>${item.name}</strong><small>${item.vendor} · available for this date and time</small></div><span>+${money(item.price)}</span></div>`).join("")}</div><p class="block-note">Vendor availability is checked for the selected date and time and rechecked before payment. Gather does not add vendor commission as a separate customer charge.</p></div>
      <div class="content-block"><h3>Venue rules</h3><p>${space.rules} Setup and cleanup must be completed within your booked time.</p></div>
      <div class="content-block"><h3>Refundable security deposit</h3>${space.deposit ? `<p><strong>${money(space.deposit)} is required for this sample booking.</strong> It is shown separately and collected at checkout.</p><div class="deposit-steps"><div><span>1</span><strong>Before the event</strong><small>The amount and deposit policy are accepted at checkout.</small></div><div><span>2</span><strong>After the event</strong><small>The venue team records the inspection within its configured deadline.</small></div><div><span>3</span><strong>Release or documented claim</strong><small>No issue: the full refund is initiated. Any claim requires an itemized reason and evidence.</small></div></div><p class="block-note">Refund timing after release depends on the payment provider and the customer’s bank. This is a sample policy for prototype review.</p>` : `<p><strong>No security deposit is required for this sample listing.</strong> No deposit is added at checkout and no post-event release task is created.</p>`}</div>
    </div>
    <aside class="booking-card"><div class="booking-price"><strong>${money(space.price)}</strong><span>per hour</span></div><h3>Choose a date and time</h3><div class="booking-field"><label>Date<input id="venue-date" type="date" value="${bookingData.date}"></label><label>Attendees<input id="venue-guests" type="number" value="${bookingData.guests}" min="1" max="${space.capacity}"></label></div><div class="booking-field"><label>Start<input id="venue-start" type="time" value="${bookingData.start}"></label><label>End<input id="venue-end" type="time" value="${bookingData.end}"></label></div><div class="availability-status ${slot.available ? "available" : "unavailable"}"><span>${slot.available ? "✓" : "!"}</span><div><strong>${slot.available ? "Available to book" : "This time is unavailable"}</strong><small>${slot.message}</small></div></div><div class="price-lines"><div class="price-line"><span>${durationHours()} hours × ${money(space.price)}</span><span>${money(totals.rental)}</span></div><div class="price-line"><span>Venue add-ons</span><span>${totals.addons ? money(totals.addons) : "Select at checkout"}</span></div><div class="price-line"><span>Independent vendor services</span><span>${totals.vendorSubtotal ? money(totals.vendorSubtotal) : "Optional at checkout"}</span></div><div class="price-line"><span>Estimated supplier taxes</span><span>${money(totals.tax)}</span></div><div class="price-line total"><span>Estimated services total</span><span>${money(totals.servicesTotal)}</span></div>${totals.deposit ? `<div class="price-line"><span>Refundable security deposit</span><span>${money(totals.deposit)}</span></div>` : ""}</div>${canStartBooking ? `<button class="button button-green button-wide" id="book-space" ${slot.available ? "" : "disabled"}>${slot.available ? "Book now" : "Choose another time"}</button>` : '<button class="button button-green button-wide" type="button" data-route="sign-in">Switch to a customer account</button>'}<p class="fine-print">${!canStartBooking ? "Booking checkout is available only in a customer context or as a signed-out guest." : slot.available ? "We’ll recheck venue and selected vendor availability before payment. Successful payment confirms your booking." : "Choose another available time or date."}</p></aside></div></div>`;
}

function bookingPage() {
  if (bookingStep === 4) return successPage();
  const labels = ["Booking details", "Add-ons", "Review & pay", "Confirmation"];
  return `<section class="booking-page"><div class="booking-shell"><h1 class="visually-hidden">Book ${currentSpace().name}</h1><button class="back-link" data-space="${currentSpace().id}">← Back to ${currentSpace().name}</button><div class="hold-notice"><strong>⚡ Instant Book checkout</strong><span>Venue and selected vendor availability will be rechecked before payment.</span></div><div class="progress" role="list" aria-label="Booking progress">${labels.map((label, i) => `<div class="progress-step ${i < bookingStep ? "active" : ""}" role="listitem" ${i + 1 === bookingStep ? 'aria-current="step"' : ""}>${label}</div>`).join("")}</div>${bookingStep === 1 ? eventForm() : bookingStep === 2 ? addonForm() : reviewForm()}</div></section>`;
}

function summaryCard() {
  const totals = pricing();
  const selectedAddons = currentAddons().filter(item => bookingData.addons.includes(item.id));
  const selectedVendors = selectedBillableVendorServices();
  return `<aside class="summary-card"><div class="mini-space"></div><h3>${currentSpace().name}</h3><p>${new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday:"long", month:"long", day:"numeric" })}<br>${formatTime(bookingData.start)}–${formatTime(bookingData.end)} · ${bookingData.guests} attendees</p><div class="summary-available">⚡ Instant Book</div><div class="price-lines"><div class="price-line"><span>Space rental</span><span>${money(totals.rental)}</span></div>${selectedAddons.map(item => `<div class="price-line"><span>${item.name}</span><span>${money(item.price)}</span></div>`).join("")}${selectedVendors.map(item => `<div class="price-line"><span>${item.name}</span><span>${money(item.price)}</span></div>`).join("")}<div class="price-line"><span>Estimated supplier taxes</span><span>${money(totals.tax)}</span></div><div class="price-line total"><span>Services total</span><span>${money(totals.servicesTotal)}</span></div>${totals.deposit ? `<div class="price-line"><span>Refundable security deposit</span><span>${money(totals.deposit)}</span></div>` : ""}<div class="price-line due"><span>Total due today (CAD)</span><span>${money(totals.dueNow)}</span></div></div></aside>`;
}
function eventForm() { return `<div class="booking-panel"><div class="form-card"><h2>Add event details</h2><p>Tell the venue team what you’re planning and confirm that it follows the venue rules.</p><form id="event-form"><div class="form-grid"><div class="form-group"><label for="event-type">Type of event</label><select id="event-type"><option>${escapeHtml(bookingData.event)}</option><option>Meeting or workshop</option><option>Class or program</option><option>Wedding or reception</option></select></div><div class="form-group"><label for="headcount">Number of attendees</label><input id="headcount" type="number" value="${bookingData.guests}" min="1" max="${currentSpace().capacity}" required></div><div class="form-group"><label for="name">Booking contact</label><input id="name" value="${escapeHtml(bookingData.contact)}" required></div><div class="form-group"><label for="email">Confirmation email</label><input id="email" type="email" value="${escapeHtml(bookingData.email)}" required></div><div class="form-group full"><label for="details">Event notes (optional)</label><textarea id="details" rows="4" placeholder="Share setup, activities, or accessibility requirements…">${escapeHtml(bookingData.notes)}</textarea></div></div><button class="button button-green" type="submit">Continue to add-ons →</button></form></div>${summaryCard()}</div>`; }
function addonForm() {
  const vendorOptions = vendorServices.map(item => {
    const status = vendorAvailability(item);
    return `<label class="option vendor-option ${status.available ? "" : "unavailable"}"><span><input class="vendor-checkbox" type="checkbox" value="${item.id}" ${bookingData.vendorServices.includes(item.id) && status.available ? "checked" : ""} ${status.available ? "" : "disabled"}> <span class="option-copy"><span class="vendor-category">${item.category}</span><strong>${item.name}</strong><small>${item.vendor} · ${item.description}</small><small class="vendor-availability">${status.available ? "✓" : "!"} ${status.message}</small></span></span><span class="option-price">${status.available ? `+${money(item.price)}` : "Unavailable"}</span></label>`;
  }).join("");
  return `<div class="booking-panel"><div class="form-card"><h2>Choose add-ons and services</h2><p>Included amenities, venue add-ons, and independent vendor services are shown separately so you know who provides each item.</p><div class="included-panel"><strong>Included in the hourly rate</strong><div class="amenities included">${currentSpace().included.map(item => `<span>✓ ${item}</span>`).join("")}</div></div><form id="addon-form"><h3 class="form-subheading">Venue add-ons</h3><p class="form-help">Provided and invoiced by ${currentSpace().name}.</p><div class="option-list">${currentAddons().map(item => `<label class="option ${item.available ? "" : "unavailable"}"><span><input class="addon-checkbox" type="checkbox" value="${item.id}" ${bookingData.addons.includes(item.id) ? "checked" : ""} ${item.available ? "" : "disabled"}> <span class="option-copy"><strong>${item.name}</strong><small>${item.description}</small></span></span><span class="option-price">${item.available ? `+${money(item.price)}` : "Not available"}</span></label>`).join("")}</div><h3 class="form-subheading">Optional services from local vendors</h3><p class="form-help">Each service is provided and invoiced by the named independent provider. Availability is specific to your date and time and is rechecked before payment. Gather does not add vendor commission as a separate customer charge.</p><div class="option-list vendor-options">${vendorOptions}</div><button class="button button-light" type="button" id="booking-back">← Back</button> <button class="button button-green" type="submit">Review and pay →</button></form></div>${summaryCard()}</div>`;
}

function reviewForm() {
  const totals = pricing();
  const selectedAddons = currentAddons().filter(item => bookingData.addons.includes(item.id));
  const vendors = selectedVendorServices();
  const vendorStatus = selectedVendorAvailability();
  return `<div class="booking-panel"><div class="form-card"><h2>Review and pay</h2><p>${vendorStatus.available ? "The venue and every selected vendor currently show available. We’ll recheck all of them once more when you confirm and pay." : "One or more selected vendor services is no longer available. Return to add-ons before payment."}</p><div class="content-block"><h3>Booking details</h3><p><strong>${bookingData.event}</strong><br>${bookingData.guests} attendees · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}</p></div><div class="content-block"><h3>Venue add-ons</h3><p>${selectedAddons.length ? selectedAddons.map(item => `✓ ${item.name}`).join("<br>") : "No venue add-ons selected."}</p></div><div class="content-block"><h3>Independent vendor services</h3>${vendors.length ? vendors.map(item => { const status = vendorAvailability(item); return `<p><strong>${item.name}</strong><br>${item.vendor} · ${money(item.price)} plus tax under ${item.taxProfile.id}<br><span class="mini-status ${status.available ? "" : "pending"}">${status.available ? "✓" : "!"} ${status.message}</span></p>`; }).join("") : "<p>No independent vendor services selected.</p>"}<p class="block-note">Gather does not add vendor commission as a separate customer charge. Each supplier controls its listed service price.</p></div><div class="content-block"><h3>Security deposit</h3><p>${totals.deposit ? `${money(totals.deposit)} is collected separately at checkout for this sample booking. After the event, the venue team follows its configured deadline to release it or submit an itemized claim with evidence.` : "No security deposit is required for this space."}</p></div><div class="payment-panel"><div><span class="secure-icon">🔒</span><strong>Payment details (prototype)</strong><small>Demo only — no card details are collected or processed.</small></div><div class="mock-card-field">Card number &nbsp; •••• •••• •••• 4242</div><div class="mock-card-row"><span>Expiry &nbsp; 12/29</span><span>CVC &nbsp; •••</span></div><p class="prototype-note">This interactive prototype does not create a charge or reservation.</p></div><label class="option terms"><span><input id="agree" type="checkbox" required> &nbsp; I agree to the venue rules, vendor terms, cancellation policies, and security-deposit policy when applicable.</span></label><div style="margin-top:24px"><button class="button button-light" id="booking-back">← Back</button> <button class="button button-green" id="confirm-booking">Confirm and pay ${cadMoney(totals.dueNow)}</button></div></div>${summaryCard()}</div>`;
}
function successPage() {
  const snapshot = confirmedBookingSnapshot || createBookingSnapshot();
  const vendorCount = snapshot.vendors.length;
  return `<div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Demo booking · ${snapshot.bookingId}</span><h1>Payment received. Booking confirmed.</h1><span class="status-pill confirmed">Confirmed</span><p>${snapshot.space.name} would be reserved for ${new Date(snapshot.booking.date + "T12:00:00").toLocaleDateString("en-CA", { weekday:"long", month:"long", day:"numeric" })} from ${formatTime(snapshot.booking.start)} to ${formatTime(snapshot.booking.end)}</p><p><strong>Demo total:</strong> ${money(snapshot.totals.dueNow)} CAD${snapshot.totals.deposit ? `, including the separate ${money(snapshot.totals.deposit)} refundable security deposit` : ""}.</p><div class="confirmation-docs"><strong>Documents available now</strong><span>✓ Venue supplier invoice</span>${vendorCount ? `<span>✓ ${vendorCount} vendor supplier invoice${vendorCount === 1 ? "" : "s"}</span>` : ""}<span>✓ Payment receipt</span>${snapshot.totals.deposit ? "<span>✓ Security-deposit record</span>" : ""}</div><p>Your Final Booking Statement would be created after the event, when supplier fulfilment, adjustments, and the deposit outcome are resolved.</p><p><strong>Prototype only:</strong> no charge, email, or real reservation was created.</p><div class="button-row"><button class="button button-green" data-route="booking-documents">View booking documents</button><button class="button button-light" data-route="home">Browse more spaces</button></div></div>`;
}

function bookingDocumentsPage() {
  if (!confirmedBookingSnapshot) {
    return `<section class="document-page"><div class="document-wrap"><button class="back-link" data-route="explore">← Back to available spaces</button><div class="document-title-row"><div><span class="eyebrow">Customer documents</span><h1>No confirmed demo booking</h1><p>Invoices and a receipt are created only after the venue and selected vendors are rechecked and the mock payment succeeds.</p></div><span class="status-pill">Not issued</span></div><div class="document-notice warning"><strong>Nothing to display yet</strong><span>Complete the Instant Book checkout to create an immutable in-memory document snapshot.</span></div><div class="document-actions"><button class="button button-dark" data-route="explore">Find a space</button></div></div></section>`;
  }
  const snapshot = confirmedBookingSnapshot;
  const totals = snapshot.totals;
  const selectedAddons = snapshot.addons;
  const vendors = snapshot.vendors;
  const venueInvoiceTotal = totals.venueSubtotal + totals.venueTax;
  const venueTaxProfile = snapshot.venueTaxProfile;
  const venueInvoiceNumber = snapshot.venueInvoiceNumber;
  return `<section class="document-page"><div class="document-wrap"><button class="back-link" data-route="booking">← Back to confirmation</button><div class="document-title-row"><div><span class="eyebrow">Customer documents · ${snapshot.bookingId}</span><h1>Booking documents</h1><p>Immutable payment-success snapshot: separate supplier invoices plus one grouped receipt.</p></div><span class="status-pill confirmed">Payment recorded</span></div><div class="document-notice"><strong>Why separate invoices?</strong><span>The venue and each independent vendor are separate suppliers. Gather groups payment for convenience while preserving who sold each service.</span></div>
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Supplier invoice</span><h2>${snapshot.space.operator}</h2><p>${venueInvoiceNumber} · trading as ${snapshot.space.name} · ${venueTaxProfile.id}</p></div><strong>${money(venueInvoiceTotal)}</strong></div><div class="statement-section"><div class="key-value"><span>Bill to</span><strong>${escapeHtml(snapshot.booking.contact)}</strong></div><div class="key-value"><span>Confirmation email</span><strong>${escapeHtml(snapshot.booking.email)}</strong></div></div><div class="money-table"><div><span>Space rental</span><span>${money(totals.rental)}</span></div>${selectedAddons.map(item => `<div><span>${item.name}</span><span>${money(item.price)}</span></div>`).join("")}<div><span>${venueTaxProfile.label}</span><span>${money(totals.venueTax)}</span></div><div class="money-total"><span>Venue invoice total</span><span>${money(venueInvoiceTotal)}</span></div></div><p class="document-footnote">Prototype supplier identity and tax profile. A production invoice would also include the configured address, registration number, issue date, and payment terms.</p></article>
    ${vendors.map(item => { const vendorTax = taxFor(item.price, item.taxProfile); return `<article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Supplier invoice · Independent vendor</span><h2>${item.vendor}</h2><p>Invoice INV-${item.invoicePrefix}-${snapshot.reference} · Issued at booking · ${item.taxProfile.id}</p></div><strong>${money(item.price + vendorTax)}</strong></div><div class="statement-section"><div class="key-value"><span>Bill to</span><strong>${escapeHtml(snapshot.booking.contact)}</strong></div></div><div class="money-table"><div><span>${item.name}</span><span>${money(item.price)}</span></div><div><span>${item.taxProfile.label}</span><span>${money(vendorTax)}</span></div><div class="money-total"><span>Vendor invoice total</span><span>${money(item.price + vendorTax)}</span></div></div><p class="document-footnote">Gather does not add vendor commission as a separate customer charge. The vendor’s commercial fee is documented in its own settlement.</p></article>`; }).join("")}
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Payment receipt</span><h2>Gather checkout</h2><p>Receipt ${snapshot.receiptNumber} · Demo transaction •••• 4242</p></div><strong>${money(totals.dueNow)}</strong></div><div class="money-table"><div><span>Supplier invoices paid</span><span>${money(totals.servicesTotal)}</span></div>${totals.deposit ? `<div><span>Refundable security deposit held separately</span><span>${money(totals.deposit)}</span></div>` : ""}<div class="money-total"><span>Total payment recorded</span><span>${money(totals.dueNow)}</span></div></div><p class="document-footnote">Prototype only. No invoice, receipt, charge, or reservation was actually created. Snapshot event note: ${escapeHtml(snapshot.booking.notes || "None supplied")}</p></article>
    <div class="document-actions"><button class="button button-light" data-document="Booking document download simulated">Download all (demo)</button><button class="button button-dark" data-route="sign-in">Explore demo accounts</button></div></div></section>`;
}

function roleContextNotice() {
  const role = activeRole();
  if (!role) return "";
  const context = accountContext(role.accountType);
  return `<div class="role-context-notice"><span class="role-icon" aria-hidden="true">${context.icon}</span><div><strong>${role.shortRole} view</strong><span>${role.summary}</span></div><button class="text-button" type="button" data-route="role-home">View permissions</button></div>`;
}

function signInPage() {
  const current = activeRole();
  const groups = accountContexts.map(context => {
    const roles = demoRoles.filter(role => role.accountType === context.id);
    return `<section class="account-group" aria-labelledby="account-${context.id}"><div class="account-group-head"><span class="account-icon" aria-hidden="true">${context.icon}</span><div><h2 id="account-${context.id}">${context.label}</h2><p>${context.description}</p></div><span class="role-count">${roles.length} demo ${roles.length === 1 ? "role" : "roles"}</span></div><div class="role-card-grid">${roles.map(role => `<article class="role-card ${current?.id === role.id ? "current" : ""}"><div class="role-card-top"><span class="avatar">${role.initials}</span><span class="account-badge">${role.shortRole}</span></div><h3>${role.role}</h3><p>${role.summary}</p><small>${role.name} · ${role.organization}</small><button class="button ${current?.id === role.id ? "button-light" : "button-dark"} button-wide" type="button" data-demo-role="${role.id}">${current?.id === role.id ? "Continue as this role" : `Continue as ${role.shortRole}`}</button></article>`).join("")}</div></section>`;
  }).join("");
  return `<section class="signin-page"><div class="signin-hero"><span class="eyebrow">Role-based prototype</span><h1>Choose a demo account.</h1><p>Explore how the same marketplace and booking look to each party. No account, password, organization access, or real authorization is created.</p>${current ? `<div class="current-session"><span class="avatar">${current.initials}</span><div><strong>Currently viewing ${current.name}</strong><span>${current.organization} · ${current.role}</span></div><button class="button button-light" data-route="role-home">View current permissions</button></div>` : ""}</div><div class="signin-content">${groups}<aside class="identity-boundaries"><h2>Who does not need a login?</h2><div><strong>Public visitor</strong><span>Can browse availability and start checkout without an account.</span></div><div><strong>Event attendee</strong><span>May receive directions or event information from the organizer but does not control the booking.</span></div><div><strong>External systems</strong><span>Communal, payment providers, insurers, permit authorities, and accounting tools are integrations or evidence sources—not Gather user roles.</span></div></aside><div class="prototype-security-note"><strong>Prototype boundary</strong><span>These client-side guards are for review only. Production authorization must be enforced on the server, default-deny, scoped to the active organization, and recorded in an audit log.</span></div></div></section>`;
}

function roleHomePage() {
  const role = activeRole();
  if (!role) return signInPage();
  const context = accountContext(role.accountType);
  return `<section class="role-home"><div class="role-hero"><div><span class="eyebrow">Active demo identity</span><h1>${role.shortRole}</h1><p>${role.summary}</p><div class="role-hero-actions"><button class="button button-green" data-route="${role.landing}">${role.workspaceLabel} →</button><button class="button button-light" data-route="sign-in">Switch demo user</button></div></div><div class="identity-card"><span class="avatar large">${role.initials}</span><div><strong>${role.name}</strong><span>${role.role}</span><small>${role.organization}</small></div></div></div><div class="role-layout"><article class="permission-card"><span class="account-badge">${context.icon} ${context.label}</span><h2>Permission scope</h2><ul class="check-list">${role.permissions.map(item => `<li>${item}</li>`).join("")}</ul><p class="document-footnote">The prototype demonstrates this role’s primary workspace and access boundaries; not every listed administration screen is interactive yet.</p></article><article class="permission-card restricted"><span class="account-badge">Least privilege</span><h2>What stays restricted</h2><ul class="restriction-list">${role.restrictions.map(item => `<li>${item}</li>`).join("")}</ul></article></div><div class="membership-note"><strong>Identity and access model</strong><p>One person may belong to more than one organization or hold more than one role. The live product would make the active organization and role explicit, authorize every server request within that context, and preserve an audit trail when the context changes.</p></div></section>`;
}

function accessRestrictedPage(route) {
  const role = activeRole();
  const destination = routeLabels[route] || "this workspace";
  return `<section class="access-page"><div class="access-card"><span class="access-symbol" aria-hidden="true">${role ? "↛" : "◎"}</span><span class="eyebrow">${role ? "Access restricted" : "Demo sign-in required"}</span><h1>${role ? `${destination} is not available to this role.` : `Choose a demo account to view ${destination}.`}</h1><p>${role ? `The prototype is currently viewing ${role.name} as ${role.role} for ${role.organization}. This screen intentionally demonstrates a least-privilege boundary.` : "Select a representative role to see its permitted workspace. No password or real account is required."}</p><div class="button-row">${role ? `<button class="button button-green" data-route="${role.landing}">Return to ${role.shortRole} workspace</button><button class="button button-light" data-route="role-home">View permissions</button>` : ""}<button class="button button-dark" data-route="sign-in">${role ? "Switch demo user" : "Choose a demo account"}</button></div><small>Prototype note: production access must be enforced by server-side authorization, not by hidden navigation or browser code.</small></div></section>`;
}

function dashboardShell(active, content) {
  const role = activeRole();
  const contextType = role?.accountType || "venue";
  const navByContext = {
    venue: [["role-home", "◎", "Role & permissions"], ["dashboard", "▦", "Overview"], ["settlement", "✓", "Event closeout"], ["deposit", "◇", "Deposit case"], ["payments", "$", "Payouts & documents"], ["venue-terms", "⚙", "Commercial terms"]],
    vendor: [["role-home", "◎", "Role & permissions"], ["vendor-dashboard", "▦", "Vendor overview"], ["vendor-invoice", "▤", "Supplier invoice"], ["vendor-payout", "◇", "Payout statement"]],
    platform: [["role-home", "◎", "Role & permissions"], ["platform-dashboard", "▦", "Platform console"], ["fee-settings", "⚙", "Commercial terms"]]
  };
  const navItems = (navByContext[contextType] || navByContext.venue).filter(([route]) => canAccessRoute(route));
  const navMarkup = navItems.map(([route, icon, label]) => `<button type="button" data-route="${route}" class="${active === route ? "active" : ""}" ${active === route ? 'aria-current="page"' : ""}>${icon} ${label}</button>`).join("");
  const context = accountContext(contextType);
  return `<section class="dashboard"><aside class="sidebar"><div class="brand"><span class="brand-mark"><span></span><span></span><span></span></span><span>gather</span></div><nav class="side-nav" aria-label="${context?.label || "Account"} dashboard">${navMarkup}</nav><div class="sidebar-bottom"><strong>${role?.name || "Demo user"}</strong><br>${role?.organization || "No organization"}<br><span>${role?.shortRole || "No role"}</span><button class="sidebar-switch" type="button" data-route="sign-in">Switch demo user</button></div></aside><div class="dashboard-main"><nav class="mobile-dashboard-tabs" aria-label="Dashboard sections">${navMarkup}</nav>${content}</div></section>`;
}

function customerDepositCard() {
  if (depositView === "customer_review") return `<article class="customer-deposit-card attention"><div><span class="account-badge">Action required</span><h2>Review a documented deposit claim</h2><p>Ridgeview has proposed ${moneyExact(depositDeduction)} for ${depositClaimReason.toLowerCase()}, with evidence and a ${moneyExact(financeDemo.deposit - depositDeduction)} refundable remainder.</p></div><button class="button button-dark" data-route="customer-deposit">Review claim</button></article>`;
  if (depositView === "customer_disputed") return `<article class="customer-deposit-card"><div><span class="account-badge">Under review</span><h2>Deposit claim response submitted</h2><p>Your dispute is recorded in this demo. The venue cannot close the case until the review process reaches a documented outcome.</p></div><button class="button button-light" data-route="customer-deposit">View response</button></article>`;
  if (depositView === "claim_approval_pending") return `<article class="customer-deposit-card"><div><span class="account-badge">Accepted · approval pending</span><h2>Venue financial approval is pending</h2><p>Your acceptance is recorded. An authorized venue role must approve the supplemental invoice, deposit allocation, and remaining refund before submission.</p></div><button class="button button-light" data-route="customer-deposit">View status</button></article>`;
  if (depositView === "claim_payment_pending") return `<article class="customer-deposit-card"><div><span class="account-badge">Accepted · processing</span><h2>Deposit outcome awaiting provider confirmation</h2><p>Your accepted claim is recorded. The supplemental invoice, deposit allocation, and remaining refund are not final until provider confirmation.</p></div><button class="button button-light" data-route="customer-deposit">View status</button></article>`;
  if (depositView === "closed") return `<article class="customer-deposit-card"><div><span class="account-badge">Closed</span><h2>Deposit outcome confirmed</h2><p>The final deposit record is available with any applied invoice amount and the confirmed refund.</p></div><button class="button button-light" data-route="customer-deposit">View outcome</button></article>`;
  return `<article class="customer-deposit-card"><div><span class="account-badge">No action required</span><h2>Security-deposit status</h2><p>A response becomes available only after the venue submits an itemized claim with evidence. Customers cannot create or alter the venue’s claim.</p></div><button class="button button-light" data-route="customer-deposit">View deposit record</button></article>`;
}

function customerDashboardPage() {
  const role = activeRole();
  const deposit = depositStatus();
  const checkoutTotal = financeDemo.association.gross + financeDemo.vendor.gross + financeDemo.deposit;
  const documentCount = 4 + (hasIssuedSupplementalClaim() ? 1 : 0);
  return `<section class="customer-dashboard"><div class="customer-dashboard-head"><div><span class="eyebrow">Customer account</span><h1>My bookings</h1><p>Welcome back, ${role.name}. Your supplier documents, payment receipt, event requirements, and deposit record stay together without exposing seller-private settlement details.</p></div><div class="avatar large">${role.initials}</div></div>${roleContextNotice()}<div class="customer-metrics"><div><span>Recent bookings</span><strong>1 booking</strong><small>${financeDemo.eventDate}</small></div><div><span>Documents</span><strong>${documentCount} available</strong><small>${hasIssuedSupplementalClaim() ? "Includes approved supplemental invoice" : "Invoices, receipt + account statement"}</small></div><div><span>Security deposit</span><strong>${money(financeDemo.deposit)}</strong><small>${deposit.label} · separate record</small></div></div><article class="customer-booking-card"><div class="customer-booking-title"><div><span class="account-badge">Completed · ${financeDemo.bookingId}</span><h2>${financeDemo.event}</h2><p>Ridgeview Community Hall · ${financeDemo.eventDate} · event completed</p></div><strong>${moneyExact(checkoutTotal)} paid</strong></div><div class="customer-booking-grid"><div><span>Venue supplier</span><strong>${financeDemo.venueSupplier}</strong><small>Venue rental, venue-owned add-ons, and refundable deposit record</small></div><div><span>Independent vendor</span><strong>${financeDemo.vendorSupplier}</strong><small>Family magic show · separately supplied and invoiced</small></div><div><span>Next step</span><strong>${depositView === "customer_review" ? "Review documented deposit claim" : deposit.label}</strong><small>${deposit.detail}</small></div></div><div class="button-row"><button class="button button-dark" data-route="customer-documents">View booking documents</button><button class="button button-light" data-route="${closeoutFinalized ? "final-statement" : "interim-statement"}">View current statement</button><button class="button button-light" data-route="customer-deposit">View deposit status</button></div></article>${customerDepositCard()}<div class="privacy-boundary"><strong>Customer privacy boundary</strong><span>You can see what you bought, paid, and may receive back. Venue and vendor bank details, platform fees, processing allocations, and private payout statements are intentionally excluded.</span></div></section>`;
}

function customerDocumentsPage() {
  const venueSubtotal = financeDemo.association.sales;
  const venueTax = financeDemo.association.tax;
  const vendorSubtotal = financeDemo.vendor.sales;
  const vendorTax = financeDemo.vendor.tax;
  const servicesTotal = financeDemo.association.gross + financeDemo.vendor.gross;
  const totalPaid = servicesTotal + financeDemo.deposit;
  const claimIssued = hasIssuedSupplementalClaim();
  const claim = claimInvoiceDetails();
  const supplementalDocument = claimIssued ? `<article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Supplemental venue invoice</span><h2>${claim.invoice}</h2><p>${financeDemo.venueSupplier} · ${claim.reason} · ${financeDemo.taxProfiles.venue.id}</p></div><strong>${moneyExact(claim.total)}</strong></div><div class="money-table"><div><span>${claim.reason} before tax</span><span>${moneyExact(claim.subtotal)}</span></div><div><span>${claim.taxLabel}</span><span>${moneyExact(claim.tax)}</span></div><div class="money-total"><span>Supplemental invoice total</span><span>${moneyExact(claim.total)}</span></div></div><p class="document-footnote">${depositView === "closed" ? `${moneyExact(claim.total)} was paid from the security-deposit ledger and ${moneyExact(financeDemo.deposit - claim.total)} was refunded.` : `Issued after customer acceptance and authorized venue approval. The deposit payment allocation and ${moneyExact(financeDemo.deposit - claim.total)} refund await provider confirmation.`}</p></article>` : "";
  return `<section class="document-page"><div class="document-wrap">
    <button class="back-link" data-route="customer-dashboard">← Back to My bookings</button>
    <div class="document-title-row"><div><span class="eyebrow">Customer documents · ${financeDemo.bookingId}</span><h1>Booking documents</h1><p>Separate supplier documents, one grouped payment receipt, and a separate refundable deposit record.</p></div><span class="status-pill confirmed">Booking paid</span></div>
    <div class="document-notice"><strong>Customer view</strong><span>These documents show what ${financeDemo.customer} purchased, what has been issued, and what was paid. Supplier commission, processing allocation, payout destination, and bank information are intentionally not included.</span></div>
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Venue supplier invoice</span><h2>${financeDemo.venueSupplier}</h2><p>${financeDemo.venueInvoice} · Ridgeview Community Hall · ${financeDemo.taxProfiles.venue.id}</p></div><strong>${moneyExact(venueSubtotal + venueTax)}</strong></div><div class="money-table"><div><span>Venue rental and venue-owned add-ons</span><span>${moneyExact(venueSubtotal)}</span></div><div><span>${financeDemo.taxProfiles.venue.label}</span><span>${moneyExact(venueTax)}</span></div><div class="money-total"><span>Venue invoice total</span><span>${moneyExact(venueSubtotal + venueTax)}</span></div></div></article>
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Independent vendor invoice</span><h2>${financeDemo.vendorSupplier}</h2><p>${financeDemo.vendorInvoice} · Family magic show · ${financeDemo.taxProfiles.vendor.id}</p></div><strong>${moneyExact(vendorSubtotal + vendorTax)}</strong></div><div class="money-table"><div><span>Family magic show</span><span>${moneyExact(vendorSubtotal)}</span></div><div><span>${financeDemo.taxProfiles.vendor.label}</span><span>${moneyExact(vendorTax)}</span></div><div class="money-total"><span>Vendor invoice total</span><span>${moneyExact(vendorSubtotal + vendorTax)}</span></div></div></article>
    ${supplementalDocument}
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Grouped payment receipt</span><h2>${financeDemo.receipt}</h2><p>Demo grouped charge · ${financeDemo.chargeRef}</p></div><strong>${moneyExact(totalPaid)}</strong></div><div class="money-table"><div><span>Original supplier invoices paid</span><span>${moneyExact(servicesTotal)}</span></div><div><span>Refundable security deposit held separately</span><span>${moneyExact(financeDemo.deposit)}</span></div><div class="money-total"><span>Total payment recorded at checkout</span><span>${moneyExact(totalPaid)}</span></div></div><p class="document-footnote">A later supplemental invoice is not added back into this original receipt. Its separate deposit-payment allocation is shown on the account statement. Prototype only—no invoice, receipt, deposit, charge, or reservation was actually created.</p></article>
    <div class="document-actions"><button class="button button-light" data-document="Customer booking documents download simulated">Download all (demo)</button><button class="button button-dark" data-route="customer-dashboard">Return to My bookings</button></div>
  </div></section>`;
}

function customerDepositPage() {
  if (depositView === "customer_review") return `<section class="document-page"><div class="document-wrap"><button class="back-link" data-route="customer-dashboard">← Back to My bookings</button><div class="document-title-row"><div><span class="eyebrow">Customer deposit response · ${financeDemo.bookingId}</span><h1>Review the venue’s claim.</h1><p>The amount, permitted reason, evidence summary, response deadline, and refundable remainder are shown before you respond.</p></div><span class="status-pill">Response required</span></div><div class="document-notice warning"><strong>Prototype only</strong><span>No message, invoice, charge, refund, or legal decision is created by either button.</span></div><article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Proposed security-deposit claim</span><h2>${depositClaimReason}</h2><p>Evidence EVD-1033 · Ridgeview Community Association</p></div><strong>${moneyExact(depositDeduction)}</strong></div><div class="statement-section"><h3>Evidence summary</h3><p>${escapeHtml(depositClaimEvidence)}</p></div><div class="statement-section"><h3>Response deadline</h3><p>October 2, 2026 at 11:59 PM Mountain Time · sample policy deadline</p></div><div class="money-table"><div><span>Security deposit held</span><span>${moneyExact(financeDemo.deposit)}</span></div><div><span>Proposed claim including applicable tax</span><span>${deductionAmount(depositDeduction)}</span></div><div class="money-total"><span>Refundable remainder if accepted</span><span>${moneyExact(financeDemo.deposit - depositDeduction)}</span></div></div><p class="document-footnote">Accepting records the customer response; it does not itself approve the financial outcome, issue the supplemental invoice, allocate the deposit, or submit the refund. Disputing routes the case to a documented review process. Gather records the workflow and does not claim to adjudicate the underlying dispute.</p></article><div class="document-actions"><button class="button button-light" id="customer-dispute-claim" type="button">Dispute and request review</button><button class="button button-green" id="customer-accept-claim" type="button">Accept proposed outcome</button></div></div></section>`;
  if (depositView === "customer_disputed") return `<section class="access-page"><div class="access-card"><span class="access-symbol">!</span><span class="eyebrow">Deposit response recorded</span><h1>The claim is under review.</h1><p>Your sample dispute has been recorded. The live product would preserve the evidence and messages, notify authorized venue staff, and keep the deposit case open. Gather would not decide the property dispute.</p><div class="button-row"><button class="button button-dark" data-route="customer-dashboard">Return to My bookings</button></div><small>Prototype only — no message or dispute was actually submitted.</small></div></section>`;
  if (depositView === "claim_approval_pending") return `<section class="access-page"><div class="access-card"><span class="access-symbol">✓</span><span class="eyebrow">Customer response recorded</span><h1>You accepted the proposed outcome.</h1><p>An authorized venue finance or administrator role must still approve the financial outcome. No supplemental invoice, deposit allocation, or refund is submitted before that controlled step.</p><div class="button-row"><button class="button button-dark" data-route="customer-dashboard">Return to My bookings</button></div><small>Prototype only — no invoice, payment allocation, or refund was created.</small></div></section>`;
  if (depositView === "claim_payment_pending") return `<section class="access-page"><div class="access-card"><span class="access-symbol">✓</span><span class="eyebrow">Financial outcome approved</span><h1>Provider confirmation is pending.</h1><p>The authorized venue approval is recorded in the demo. The supplemental invoice, deposit allocation, and remaining refund stay pending until the payment provider confirms the submitted outcome.</p><div class="button-row"><button class="button button-dark" data-route="customer-dashboard">Return to My bookings</button></div><small>Prototype only — no invoice, payment allocation, or refund was created.</small></div></section>`;
  if (depositView === "closed") return `<section class="access-page"><div class="access-card"><span class="access-symbol">✓</span><span class="eyebrow">Deposit case closed</span><h1>Your deposit outcome is confirmed.</h1><p>${depositDeduction ? `${moneyExact(depositDeduction)} was applied to the documented supplemental invoice and ${moneyExact(financeDemo.deposit - depositDeduction)} was refunded.` : `The full ${moneyExact(financeDemo.deposit)} deposit was refunded.`}</p><div class="button-row"><button class="button button-dark" data-route="customer-dashboard">Return to My bookings</button></div><small>Prototype record only — no money moved.</small></div></section>`;
  return `<section class="access-page"><div class="access-card"><span class="access-symbol">◎</span><span class="eyebrow">Security deposit</span><h1>No customer response is required.</h1><p>A response becomes available only after the venue submits an itemized claim with evidence. Until then, the deposit remains refundable under the configured policy.</p><div class="button-row"><button class="button button-dark" data-route="customer-dashboard">Return to My bookings</button></div></div></section>`;
}

function venueTermsPage() {
  const treatmentCopy = feePolicy.processingTreatment === "deduct_from_payout" ? "Actual cost deducted once from calculated payout" : feePolicy.processingTreatment === "separate_invoice" ? "Invoiced separately" : "Platform subsidized";
  const content = `<header class="dash-head"><div><span class="eyebrow">Organization agreement · read only</span><h1>Commercial terms</h1><p>Current terms visible to ${activeRole().organization}. Platform-wide defaults are administered separately.</p></div><span class="status-pill confirmed">CA-LAUNCH v${policyRevision}</span></header>${roleContextNotice()}<div class="settings-layout"><article class="dash-card current-terms"><span class="read-only-label">Read only</span><h2>Ridgeview terms</h2><div class="terms-list"><div><span>Subscription</span><strong>${money(feePolicy.associationSubscription)} / month</strong></div><div><span>Venue commission</span><strong>${feePolicy.venueCommission.toFixed(2)}%</strong></div><div><span>Processing cost</span><strong>${treatmentCopy}</strong></div><div><span>Currency</span><strong>CAD</strong></div></div><p>Every booking stores the policy version accepted at confirmation. Later changes apply only to eligible future bookings.</p></article><aside class="dash-card"><h3>What is not shown here</h3><p>Independent vendors have their own agreements and payout records. This venue account cannot see or edit another supplier’s private commercial terms.</p><div class="policy-callout"><strong>Need a change?</strong><span>An authorized account administrator would request a contract change from Gather. The prototype does not create an amendment.</span></div></aside></div>`;
  return dashboardShell("venue-terms", content);
}

function dashboardPage() {
  const role = activeRole();
  const association = associationSettlement();
  const financeAccess = hasPermission("venue.finance.view");
  const canManageBookings = hasPermission("venue.booking.manage");
  const tasks = [
    `<div class="task-row"><span class="task-icon">✦</span><div><p>Prepare confirmed booking</p><small>BKG-1048 · Alex Morgan · Oct 17</small></div>${canManageBookings ? '<button type="button" data-task="Confirmed booking opened">Open</button>' : '<span class="read-only-label">View only</span>'}</div>`,
    canAccessRoute("settlement") ? `<div class="task-row"><span class="task-icon">✓</span><div><p>Event closeout</p><small>BKG-1033 · Venue complete · vendor fulfilled · ${depositView === "closed" ? "deposit closed" : "deposit due"}</small></div><button type="button" data-route="settlement">${hasPermission("venue.operations") ? "Continue" : "View"}</button></div>` : "",
    `<div class="task-row"><span class="task-icon">▱</span><div><p>Insurance certificate due</p><small>BKG-1039 · Event in 8 days</small></div>${canManageBookings ? '<button type="button" data-task="Reminder sent">Remind</button>' : '<span class="read-only-label">View only</span>'}</div>`,
    canAccessRoute("association-payout") ? `<div class="task-row"><span class="task-icon">$</span><div><p>Review payout statement</p><small>BKG-1033 · Calculated net ${cadMoney(association.net)}</small></div><button type="button" data-route="association-payout">Review</button></div>` : ""
  ].join("");
  const content = `<header class="dash-head"><div><span class="eyebrow">Venue dashboard · ${role.shortRole}</span><h1>Good morning, ${role.name.split(" ")[0]}.</h1><p>${role.organization}</p></div><div class="avatar">${role.initials}</div></header>${roleContextNotice()}
    <div class="metric-grid"><div class="metric"><span>Needs attention</span><strong>7</strong><em>3 new since Monday</em></div><div class="metric"><span>Upcoming bookings</span><strong>12</strong><em>Next 30 days</em></div><div class="metric"><span>${financeAccess ? "Estimated payouts" : "Calendar utilization"}</span><strong>${financeAccess ? "$842" : "68%"}</strong><em>${financeAccess ? "Across 4 bookings" : "Next 30 days"}</em></div><div class="metric"><span>Deposit cases</span><strong>2</strong><em>${canAccessRoute("deposit") ? "Within role scope" : "Status only"}</em></div></div>
    <div class="action-grid"><div class="dash-card"><div class="card-heading-row"><h3>${canManageBookings || hasPermission("venue.operations") ? "What needs attention" : "Operational overview"}</h3>${canAccessRoute("payments") ? '<button class="text-button" data-route="payments">View finance centre</button>' : ""}</div>${tasks}</div>
      <div class="dash-card"><h3>Next 7 days</h3><div class="calendar-list"><div class="event"><strong>Yoga class</strong><small>Sat · 9:00–11:00</small></div><div class="event sun"><strong>Singh reception</strong><small>Sat · 4:00–11:00</small></div><div class="event coral"><strong>Board meeting</strong><small>Mon · 6:30–8:30</small></div><div class="event"><strong>Kids art club</strong><small>Wed · 4:00–6:00</small></div></div><button class="button button-light button-wide" type="button" data-route="sign-in">Compare another demo role</button></div></div>`;
  return dashboardShell("dashboard", content);
}

function depositPage() {
  const canPropose = hasPermission("venue.deposit.propose");
  const canApprove = hasPermission("venue.deposit.approve");
  const approvalBoundary = `<div class="document-notice warning"><strong>Separation of duties</strong><span>This role may review the record but cannot approve the financial outcome. A venue finance or administrator role must complete the next controlled step.</span></div>`;
  if (depositView === "closed") {
    const refund = financeDemo.deposit - depositDeduction;
    const claim = supplementalClaim();
    return `<section class="booking-page"><div class="booking-shell"><button class="back-link" data-route="settlement">← Back to event closeout</button><div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Security deposit record · ${financeDemo.bookingId}</span><h1>Deposit case closed</h1><span class="status-pill confirmed">Confirmed</span><p><strong>Deposit collected:</strong> ${moneyExact(financeDemo.deposit)}<br>${claim.approved ? `<strong>${claim.invoice} · ${claim.reason}:</strong> ${moneyExact(claim.total)}<br><strong>Evidence EVD-1033:</strong> ${escapeHtml(depositClaimEvidence)}<br><strong>Deposit applied as payment:</strong> ${moneyExact(claim.total)}<br>` : ""}<strong>Refund confirmed:</strong> ${moneyExact(refund)}</p><p>${claim.approved ? `The accepted amount first became a supplemental venue invoice with a saved tax classification. The deposit ledger then applied ${moneyExact(claim.total)} to that invoice and refunded the remainder.` : "The full deposit was released. No supplier adjustment invoice was needed."}</p><p>The original deposit record remains separate from revenue. Only an approved, invoiced amount enters venue sales and payout calculations.</p><button class="button button-dark" data-route="settlement">Continue event closeout</button></div></div></section>`;
  }

  if (depositView === "release_approval_pending") {
    return `<section class="booking-page"><div class="booking-shell"><button class="back-link" data-route="settlement">← Back to event closeout</button><div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Proposed deposit outcome · ${financeDemo.bookingId}</span><h2>Full release awaiting approval</h2><span class="status-pill">Financial approval pending</span><p>Operations proposed a full ${money(financeDemo.deposit)} release after recording no inspection issues. No refund has been submitted.</p><p><strong>Prototype only:</strong> no money moved and no customer notification was sent.</p>${canApprove ? '<button class="button button-green" id="approve-release" type="button">Approve full release</button>' : approvalBoundary} <button class="button button-light" data-route="settlement">Return to closeout</button></div></div></section>`;
  }

  if (depositView === "release_pending") {
    return `<section class="booking-page"><div class="booking-shell"><button class="back-link" data-route="settlement">← Back to event closeout</button><div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Approved deposit outcome · ${financeDemo.bookingId}</span><h2>Refund submitted</h2><span class="status-pill">Provider confirmation pending</span><p>An authorized venue role approved the full ${money(financeDemo.deposit)} release. The live product would keep this case open until the payment provider confirms the refund.</p><p><strong>Prototype only:</strong> no money moved and no customer notification was sent.</p>${canApprove ? '<button class="button button-green" id="confirm-refund" type="button">Simulate provider confirmation</button>' : approvalBoundary} <button class="button button-light" data-route="settlement">Return to closeout</button></div></div></section>`;
  }

  if (depositView === "claim_approval_pending") {
    const claim = claimInvoiceDetails();
    return `<section class="booking-page"><div class="booking-shell"><button class="back-link" data-route="settlement">← Back to event closeout</button><div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Accepted claim · ${financeDemo.bookingId}</span><h1>Financial approval required</h1><span class="status-pill">Approval pending</span><p><strong>Customer accepted:</strong> ${moneyExact(claim.total)} for ${claim.reason.toLowerCase()}<br><strong>Evidence EVD-1033:</strong> ${escapeHtml(depositClaimEvidence)}<br><strong>Planned refund:</strong> ${moneyExact(financeDemo.deposit - claim.total)}</p><p>Approval creates the supplemental venue invoice and authorizes submission of the deposit allocation and remaining refund. Customer acceptance alone does not move money.</p><p><strong>Prototype only:</strong> no invoice, allocation, refund, or transfer was posted.</p>${canApprove ? '<button class="button button-green" id="approve-claim" type="button">Approve financial outcome</button>' : approvalBoundary} <button class="button button-light" data-route="settlement">Return to closeout</button></div></div></section>`;
  }

  if (depositView === "claim_payment_pending") {
    const claim = claimInvoiceDetails();
    return `<section class="booking-page"><div class="booking-shell"><button class="back-link" data-route="settlement">← Back to event closeout</button><div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Supplemental invoice · ${financeDemo.bookingId}</span><h1>Claim accepted; provider confirmation pending</h1><span class="status-pill">Allocation and refund pending</span><p><strong>${claim.invoice}:</strong> ${moneyExact(claim.total)} for ${claim.reason.toLowerCase()}<br><strong>Evidence EVD-1033:</strong> ${escapeHtml(depositClaimEvidence)}<br><strong>Pre-tax amount:</strong> ${moneyExact(claim.subtotal)}<br><strong>Tax:</strong> ${moneyExact(claim.tax)}<br><strong>Planned refund:</strong> ${moneyExact(financeDemo.deposit - claim.total)}</p><p>The supplemental venue invoice is recorded first. The live product would then apply ${moneyExact(claim.total)} from DEP-1033 to that invoice, submit the ${moneyExact(financeDemo.deposit - claim.total)} refund, and keep the case open until the provider confirms both outcomes.</p><p><strong>Prototype only:</strong> no invoice, allocation, refund, or transfer was actually posted.</p>${canApprove ? '<button class="button button-green" id="confirm-claim-outcome" type="button">Simulate provider confirmation</button>' : approvalBoundary} <button class="button button-light" data-route="settlement">Return to closeout</button></div></div></section>`;
  }

  if (depositView === "customer_disputed") {
    return `<section class="booking-page"><div class="booking-shell"><button class="back-link" data-route="settlement">← Back to event closeout</button><div class="success-card"><div class="success-icon">!</div><span class="eyebrow">Sample deposit · ${financeDemo.bookingId}</span><h1>Customer requested review</h1><span class="status-pill">Under review</span><p><strong>Disputed claim:</strong> ${moneyExact(depositDeduction)} for ${depositClaimReason.toLowerCase()}.<br><strong>Evidence EVD-1033:</strong> ${escapeHtml(depositClaimEvidence)}</p><p>The live product would preserve the evidence and message history, notify authorized staff, and keep the deposit case open. Gather records the workflow but does not claim to decide the underlying property dispute.</p><div class="document-notice warning"><strong>No unilateral closeout</strong><span>The venue cannot accept the claim on the customer’s behalf or treat the proposed amount as revenue while the response remains disputed.</span></div><button class="button button-light" data-route="settlement">Return to closeout</button></div></div></section>`;
  }

  if (depositView === "customer_review") {
    return `<section class="booking-page"><div class="booking-shell"><button class="back-link" data-route="settlement">← Back to event closeout</button><div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Sample deposit · ${financeDemo.bookingId}</span><h1>Claim sent for customer review</h1><span class="status-pill">Customer response pending</span><p><strong>Proposed claim:</strong> ${moneyExact(depositDeduction)} for ${depositClaimReason.toLowerCase()}.<br><strong>Evidence EVD-1033:</strong> ${escapeHtml(depositClaimEvidence)}<br><strong>Refundable remainder:</strong> ${moneyExact(financeDemo.deposit - depositDeduction)}.</p><p>The customer—not venue staff—must accept or dispute this proposed outcome. The case stays open while the response is pending.</p><div class="document-notice warning"><strong>Acceptance is not financial approval</strong><span>If the customer accepts, an authorized venue role must still approve supplemental invoice SUP-RCA-1033 and submission of the deposit allocation and refund. Provider confirmation is a later state.</span></div><p><strong>Prototype only:</strong> no claim, invoice, refund, or notification was created.</p><button class="button button-light" data-route="settlement">Return to closeout</button></div></div></section>`;
  }

  const decisionPanel = !canPropose ? `<div class="deposit-decision"><span class="eyebrow">Finance review</span><h2>Inspection proposal is awaiting operations.</h2><p>This authorized approver may review and approve a documented outcome after operations submits it, but cannot create its own inspection claim.</p><div class="inspection-list"><span>✓ Event completion visible</span><span>✓ Deposit ledger visible</span><span>○ Operations evidence and proposal pending</span></div><div class="document-notice"><strong>No approval action yet</strong><span>The approve control appears only after a separate operations role records a full-release proposal or the customer accepts an itemized claim.</span></div></div>` : depositView === "deduction" ? `<div class="deposit-decision"><h2>Propose a deposit claim</h2><p>Document the amount, permitted reason, and evidence before anything is sent to the customer.</p><form id="deduction-form"><div class="form-grid"><div class="form-group"><label for="deduction-amount">Total claim including applicable tax (CAD)</label><input id="deduction-amount" type="number" value="${depositDeduction || 85}" min="0.01" max="${financeDemo.deposit}" step="0.01" required><small>The prototype splits this total into pre-tax charge and tax on the supplemental invoice.</small></div><div class="form-group"><label for="deduction-reason">Reason</label><select id="deduction-reason"><option ${depositClaimReason === "Additional cleaning" ? "selected" : ""}>Additional cleaning</option><option ${depositClaimReason === "Damage to venue property" ? "selected" : ""}>Damage to venue property</option><option ${depositClaimReason === "Missing keys or equipment" ? "selected" : ""}>Missing keys or equipment</option></select></div><div class="form-group full"><label for="deduction-evidence">Evidence summary</label><textarea id="deduction-evidence" rows="4" required>${escapeHtml(depositClaimEvidence)}</textarea></div></div><div class="deposit-actions"><button class="button button-light" id="cancel-deduction" type="button">← Back</button><button class="button button-green" type="submit">Send for customer review</button></div></form><p class="prototype-note">Prototype only — this form does not move money or contact anyone. A separate authorized role approves the financial outcome.</p></div>` : `<div class="deposit-decision"><span class="eyebrow">Post-event decision</span><h2>Complete the inspection.</h2><p>Choose the outcome only after the space, access items, and booked add-ons have been checked.</p><div class="inspection-list"><span>✓ Event ended September 21 at 11:00 PM</span><span>✓ Keys and access items returned</span><span>✓ Inspection notes saved</span></div><div class="decision-grid"><div><h3>No issues</h3><p>Propose a full refund for authorized financial confirmation.</p><button class="button button-green" id="release-deposit" type="button">Propose full ${cadMoney(financeDemo.deposit)} release</button></div><div><h3>Issue found</h3><p>Enter an itemized amount, permitted reason, and supporting evidence.</p><button class="button button-light" id="propose-deduction" type="button">Start documented claim</button></div></div><p class="prototype-note">Prototype only — neither option moves money or contacts the customer. Financial approval is a separate permission.</p></div>`;

  return `<section class="deposit-page"><div class="booking-shell"><button class="back-link" data-route="settlement">← Back to event closeout</button><div class="deposit-head"><div><span class="eyebrow">Security deposit · ${financeDemo.bookingId}</span><h1>Deposit closeout</h1><p>Ridgeview Community Hall · September 21 · ${money(financeDemo.deposit)} refundable security deposit</p></div><span class="status-pill">Inspection due</span></div><div class="deposit-layout"><aside class="deposit-record"><h3>Deposit record</h3><div class="deposit-timeline"><div class="complete"><span>✓</span><div><strong>Required and disclosed</strong><small>${money(financeDemo.deposit)} refundable security deposit accepted at checkout.</small></div></div><div class="complete"><span>✓</span><div><strong>Payment confirmed</strong><small>Separate deposit record secured before the event.</small></div></div><div class="complete"><span>✓</span><div><strong>Event completed</strong><small>September 21 at 11:00 PM.</small></div></div><div class="current"><span>4</span><div><strong>Inspection and decision</strong><small>Release in full or submit a documented claim.</small></div></div><div><span>5</span><div><strong>Provider confirmation</strong><small>Keep open until release, refund, or claim reaches a final state.</small></div></div></div><p class="prototype-note">Sample record only. No real deposit was collected.</p></aside>${decisionPanel}</div></div></section>`;
}

function depositStatus() {
  if (depositView === "closed") return { label: "Closed", detail: depositDeduction ? `${money(depositDeduction)} accepted and invoiced on SUP-RCA-1033; ${money(financeDemo.deposit - depositDeduction)} refunded` : `${money(financeDemo.deposit)} refund confirmed`, tone: "complete" };
  if (depositView === "release_approval_pending") return { label: "Approval pending", detail: `${money(financeDemo.deposit)} full release proposed by operations`, tone: "pending" };
  if (depositView === "release_pending") return { label: "Provider pending", detail: `${money(financeDemo.deposit)} refund submitted`, tone: "pending" };
  if (depositView === "claim_approval_pending") return { label: "Approval pending", detail: `${money(depositDeduction)} claim accepted by customer; financial approval required`, tone: "pending" };
  if (depositView === "claim_payment_pending") return { label: "Provider pending", detail: `SUP-RCA-1033 accepted; ${money(depositDeduction)} allocation and ${money(financeDemo.deposit - depositDeduction)} refund awaiting confirmation`, tone: "pending" };
  if (depositView === "customer_review") return { label: "Customer review", detail: `${money(depositDeduction)} documented claim proposed`, tone: "pending" };
  if (depositView === "customer_disputed") return { label: "Under review", detail: `${money(depositDeduction)} claim disputed by customer`, tone: "attention" };
  return { label: "Action required", detail: "Inspection outcome and refund decision needed", tone: "attention" };
}

function settlementPage() {
  const deposit = depositStatus();
  const association = associationSettlement();
  const claim = association.claim;
  const claimDetails = claimInvoiceDetails();
  const claimRecorded = depositDeduction > 0 && ["claim_payment_pending", "closed"].includes(depositView);
  const canOperate = hasPermission("venue.operations");
  const canApprove = hasPermission("venue.deposit.approve");
  const financeAccess = hasPermission("venue.finance.view");
  const finalizeAction = !canApprove ? `<div class="document-notice warning"><strong>Approval restricted</strong><span>This role can review closeout status but cannot finalize the financial outcome.</span></div>` : depositView === "closed" ? `<button class="button button-green" id="finalize-closeout" type="button">${closeoutFinalized ? "View Final Booking Statement" : "Finalize customer account"}</button>` : `<button class="button button-light" type="button" disabled>Finalize after deposit closes</button>`;
  const content = `<header class="dash-head closeout-head"><div><span class="eyebrow">Event closeout · ${financeDemo.bookingId}</span><h1>${financeDemo.event}</h1><p>${financeDemo.eventDate} · ${financeDemo.customer}</p></div><span class="status-pill ${closeoutFinalized ? "confirmed" : ""}">${closeoutFinalized ? "Customer account final" : "Closeout in progress"}</span></header>
    <div class="policy-callout"><strong>Four independent tracks</strong><span>Event completion, customer documents, security deposit, and seller payouts each keep their own status. One open track does not erase another supplier’s completed work.</span></div>
    <div class="closeout-grid"><article class="closeout-card complete"><span class="track-icon">✓</span><div><small>Venue fulfilment</small><h3>Event complete</h3><p>Space access, venue add-ons, and checkout checklist confirmed.</p></div><span class="mini-status">Settlement calculated</span></article><article class="closeout-card complete"><span class="track-icon">✓</span><div><small>Independent vendor</small><h3>Magic show fulfilled</h3><p>WonderSpark marked the service complete from its vendor portal.</p></div><span class="mini-status">Settlement calculated</span></article><article class="closeout-card ${deposit.tone}"><span class="track-icon">${depositView === "closed" ? "✓" : "!"}</span><div><small>Security deposit</small><h3>${deposit.label}</h3><p>${deposit.detail}. The ledger stays separate; only an accepted, invoiced amount becomes venue revenue.</p></div>${canAccessRoute("deposit") ? `<button class="compact-button" type="button" data-route="deposit">${depositView === "closed" ? "View record" : canOperate ? "Resolve" : "Review"}</button>` : '<span class="mini-status pending">Outside role scope</span>'}</article><article class="closeout-card ${closeoutFinalized ? "complete" : "pending"}"><span class="track-icon">${closeoutFinalized ? "✓" : "4"}</span><div><small>Customer account</small><h3>${closeoutFinalized ? "Finalized" : depositView === "closed" ? "Ready to finalize" : "Waiting for deposit"}</h3><p>${closeoutFinalized ? "Final Booking Statement issued in the demo." : depositView === "closed" ? "All customer-side outcomes are resolved. Finalize to issue the Final Booking Statement." : "An Interim Event Account Statement is available while the deposit remains open."}</p></div><span class="mini-status">${closeoutFinalized ? "Final" : depositView === "closed" ? "Ready" : "Interim"}</span></article></div>
    <div class="settlement-layout"><section class="dash-card"><div class="card-heading-row"><div><h3>Supplier completion</h3><p>Each supplier closes and settles independently from the customer-account finalization step.</p></div></div><div class="supplier-row"><div><span class="supplier-mark">V</span><div><strong>${financeDemo.venueSupplier}</strong><small>${financeDemo.venueInvoice}${claimRecorded ? ` + ${claimDetails.invoice}` : ""} · venue supplier documents</small></div></div><div class="supplier-outcome"><span class="mini-status">Settlement calculated</span><strong>${financeAccess ? moneyExact(association.gross) : "Complete"}</strong></div></div><div class="supplier-row"><div><span class="supplier-mark vendor">W</span><div><strong>${financeDemo.vendorSupplier}</strong><small>${financeDemo.vendorInvoice} · independent entertainment service</small></div></div><div class="supplier-outcome"><span class="mini-status">Settlement calculated</span><strong>${financeAccess ? moneyExact(financeDemo.vendor.gross) : "Fulfilled"}</strong></div></div><p class="document-footnote">${financeAccess ? `Settlement calculation does not mean approved, transferred, or paid to bank. ${claim.approved ? `${claim.invoice} records the accepted ${claim.reason.toLowerCase()} charge after ${moneyExact(claim.total)} of deposit funds are confirmed as payment.` : claimRecorded ? `${claimDetails.invoice} is accepted and issued for ${moneyExact(claimDetails.total)}, but its deposit payment and the remaining refund are still awaiting provider confirmation; it is not yet in collected proceeds or payout.` : "No overtime, added cleaning, cancellation, or consumed-item adjustment is approved. A post-event increase creates a supplemental invoice; a decrease creates a credit note."}` : "This operational view shows completion states only. Supplier amounts, payment allocations, and payout destinations remain in an authorized finance view."}</p></section>
      <aside class="dash-card closeout-actions"><h3>Closeout documents</h3>${canAccessRoute("interim-statement") ? '<button class="document-link" type="button" data-route="interim-statement"><span><strong>Interim Event Account Statement</strong><small>Available while a balance, dispute, or deposit remains open</small></span><b>→</b></button>' : '<div class="privacy-boundary compact"><strong>Documents outside role scope</strong><span>Customer account statements are available to booking, finance, and administrator roles—not inspection staff.</span></div>'}${canAccessRoute("final-statement") ? `<button class="document-link" type="button" data-route="final-statement"><span><strong>Final Booking Statement</strong><small>${closeoutFinalized ? "Issued after all customer-side outcomes resolved" : depositView === "closed" ? "Confirmed outcomes · preview until customer account is finalized" : "Not issued · resolve the deposit first"}</small></span><b>→</b></button>` : ""}<div class="closeout-buttons">${finalizeAction}${canApprove ? '<button class="text-button" id="reset-closeout" type="button">Reset demo closeout</button>' : ""}</div></aside></div>`;
  return dashboardShell("settlement", content);
}

function paymentsPage() {
  const deposit = depositStatus();
  const association = associationSettlement();
  const pendingServiceBalance = depositView === "claim_payment_pending" ? depositDeduction : 0;
  const content = `<header class="dash-head"><div><span class="eyebrow">Finance centre</span><h1>Payouts & documents</h1><p>Trace customer documents, supplier fees, processing costs, and payouts by booking.</p></div><button class="button button-light" type="button" data-route="venue-terms">View commercial terms</button></header>
    <div class="metric-grid"><div class="metric"><span>Calculated venue payout</span><strong>${money(association.net)}</strong><em>Transfer not simulated</em></div><div class="metric"><span>Vendor order status</span><strong class="metric-text">Fulfilled</strong><em>Private settlement stays in vendor account</em></div><div class="metric"><span>Customer service balance</span><strong>${money(pendingServiceBalance)}</strong><em>${pendingServiceBalance ? "SUP-RCA-1033 awaiting deposit allocation" : "Issued invoices paid"}</em></div><div class="metric"><span>Deposit status</span><strong class="metric-text">${deposit.label}</strong><em>Separate ledger</em></div></div>
    <div class="finance-booking"><div class="finance-booking-head"><div><span class="eyebrow">${financeDemo.bookingId} · ${financeDemo.eventDate}</span><h2>${financeDemo.event}</h2><p>${financeDemo.customer} · two suppliers · one grouped checkout</p></div><button class="button button-dark" type="button" data-route="settlement">Open event closeout</button></div><div class="finance-columns"><section><h3>Venue-managed customer records</h3><button class="document-link" type="button" data-route="interim-statement"><span><strong>Interim Event Account Statement</strong><small>Current closeout view · not an invoice</small></span><b>→</b></button><button class="document-link" type="button" data-route="final-statement"><span><strong>Final Booking Statement</strong><small>${closeoutFinalized ? "Final · customer account closed" : depositView === "closed" ? "Preview · confirmed outcomes, not issued" : "Not issued · deposit unresolved"}</small></span><b>→</b></button><button class="document-link" type="button" data-route="finance-booking-documents"><span><strong>Customer-facing supplier documents</strong><small>${financeDemo.venueInvoice}, ${financeDemo.vendorInvoice}, and ${financeDemo.receipt}</small></span><b>→</b></button></section><section><h3>Settlement views</h3><button class="document-link" type="button" data-route="association-payout"><span><strong>Association payout statement</strong><small>Gross ${money(association.gross)} · net ${money(association.net)}</small></span><b>→</b></button><button class="document-link" type="button" data-route="sign-in"><span><strong>Open independent vendor demo</strong><small>Switch role to see vendor-private payout and Gather fee details</small></span><b>→</b></button><div class="privacy-boundary compact"><strong>Supplier boundary</strong><span>The venue can see fulfilment status needed for its booking, but not the independent vendor’s bank destination or private settlement details.</span></div></section></div></div>`;
  return dashboardShell("payments", content);
}

function financeBookingDocumentsPage() {
  const serviceTotal = financeDemo.association.gross + financeDemo.vendor.gross;
  const checkoutTotal = serviceTotal + financeDemo.deposit;
  return `<section class="document-page"><div class="document-wrap">
    <button class="back-link" data-route="payments">← Back to payouts & documents</button>
    <div class="document-title-row"><div><span class="eyebrow">Customer-facing documents visible to authorized venue roles · ${financeDemo.bookingId}</span><h1>Supplier invoices & receipt</h1><p>Read-only documents issued to the customer when the booking was paid and confirmed.</p></div><span class="status-pill confirmed">Paid</span></div>
    <div class="document-notice"><strong>Immutable originals</strong><span>Post-event increases never rewrite these invoices. They create a numbered supplemental supplier invoice; decreases create a credit note.</span></div>
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Venue supplier invoice</span><h2>${financeDemo.venueInvoice}</h2><p>${financeDemo.venueSupplier} · ${financeDemo.taxProfiles.venue.id}</p></div><strong>${moneyExact(financeDemo.association.gross)}</strong></div><div class="money-table"><div><span>Venue rental and venue-owned add-ons</span><span>${moneyExact(financeDemo.association.sales)}</span></div><div><span>${financeDemo.taxProfiles.venue.label}</span><span>${moneyExact(financeDemo.association.tax)}</span></div><div class="money-total"><span>Venue invoice total</span><span>${moneyExact(financeDemo.association.gross)}</span></div></div></article>
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Independent vendor invoice</span><h2>${financeDemo.vendorInvoice}</h2><p>${financeDemo.vendorSupplier} · ${financeDemo.taxProfiles.vendor.id}</p></div><strong>${moneyExact(financeDemo.vendor.gross)}</strong></div><div class="money-table"><div><span>Family magic show</span><span>${moneyExact(financeDemo.vendor.sales)}</span></div><div><span>${financeDemo.taxProfiles.vendor.label}</span><span>${moneyExact(financeDemo.vendor.tax)}</span></div><div class="money-total"><span>Vendor invoice total</span><span>${moneyExact(financeDemo.vendor.gross)}</span></div></div><p class="document-footnote">Gather does not add vendor commission as a separate customer charge.</p></article>
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Grouped payment receipt</span><h2>${financeDemo.receipt}</h2><p>One customer payment · ${financeDemo.chargeRef} · allocated to separate supplier and deposit records</p></div><strong>${moneyExact(checkoutTotal)}</strong></div><div class="money-table"><div><span>Supplier invoices paid</span><span>${moneyExact(serviceTotal)}</span></div><div><span>Security deposit collected separately</span><span>${moneyExact(financeDemo.deposit)}</span></div><div class="money-total"><span>Total payment recorded</span><span>${moneyExact(checkoutTotal)}</span></div></div><div class="statement-section"><h3>Venue-side processor-cost audit · not a customer charge</h3><p>This venue account sees its own ${moneyExact(financeDemo.processing.venueAllocation + financeDemo.processing.depositAllocation)} provider-cost share: ${moneyExact(financeDemo.processing.venueAllocation)} allocated to venue proceeds (${financeDemo.allocations.venue}) and ${moneyExact(financeDemo.processing.depositAllocation)} allocated to the venue payout for collecting the refundable deposit (${financeDemo.allocations.deposit}). The deposit itself is not reduced. The independent vendor’s private processing allocation and payout details remain in the vendor account.</p></div></article>
    <p class="document-footnote">Prototype sample only. No invoice, receipt, tax record, or payment was actually created.</p><div class="document-actions"><button class="button button-light" data-document="Original booking documents download simulated">Download all (demo)</button><button class="button button-dark" data-route="settlement">Open event closeout</button></div>
  </div></section>`;
}

function vendorInvoicePage() {
  return `<section class="document-page"><div class="document-wrap">
    <button class="back-link" data-route="vendor-dashboard">← Back to vendor portal</button>
    <div class="document-title-row"><div><span class="eyebrow">Vendor account document · ${financeDemo.bookingId}</span><h1>Vendor supplier invoice</h1><p>Only this vendor’s order, tax, and payment allocation are shown in the independent vendor account.</p></div><span class="status-pill confirmed">Paid</span></div>
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Independent vendor invoice</span><h2>${financeDemo.vendorInvoice}</h2><p>${financeDemo.vendorSupplier} · ${financeDemo.taxProfiles.vendor.id}</p></div><strong>${moneyExact(financeDemo.vendor.gross)}</strong></div><div class="money-table"><div><span>Family magic show</span><span>${moneyExact(financeDemo.vendor.sales)}</span></div><div><span>${financeDemo.taxProfiles.vendor.label}</span><span>${moneyExact(financeDemo.vendor.tax)}</span></div><div class="money-total"><span>Vendor invoice total</span><span>${moneyExact(financeDemo.vendor.gross)}</span></div></div><div class="statement-section"><h3>Payment allocation</h3><div class="key-value"><span>Grouped charge</span><strong>${financeDemo.chargeRef}</strong></div><div class="key-value"><span>Allocation reference</span><strong>${financeDemo.allocations.vendor}</strong></div><div class="key-value"><span>Amount allocated</span><strong>${moneyExact(financeDemo.vendor.gross)} CAD</strong></div><div class="key-value"><span>Status</span><strong>Customer payment confirmed</strong></div><p>The association invoice, security-deposit ledger, and customer’s full grouped receipt are not available in this independent vendor account.</p></div></article>
    <div class="document-actions"><button class="button button-light" data-document="Vendor invoice download simulated">Download invoice (demo)</button><button class="button button-dark" data-route="vendor-payout">View vendor settlement</button></div>
  </div></section>`;
}

function interimStatementPage() {
  const isCustomer = activeRole()?.accountType === "customer";
  const backRoute = isCustomer ? "customer-dashboard" : "settlement";
  const backLabel = isCustomer ? "Back to My bookings" : "Back to event closeout";
  const deposit = depositStatus();
  const claim = claimInvoiceDetails();
  const claimRecorded = depositDeduction > 0 && ["claim_payment_pending", "closed"].includes(depositView);
  const claimPaid = depositDeduction > 0 && depositView === "closed";
  const pendingBalance = claimRecorded && !claimPaid ? claim.total : 0;
  const originalServices = financeDemo.association.gross + financeDemo.vendor.gross;
  const nextAction = isCustomer ? '<button class="button button-dark" data-route="customer-dashboard">Return to My bookings</button>' : canAccessRoute("deposit") ? '<button class="button button-dark" data-route="deposit">Review deposit case</button>' : '<button class="button button-dark" data-route="settlement">Return to event closeout</button>';
  return `<section class="document-page"><div class="document-wrap"><button class="back-link" data-route="${backRoute}">← ${backLabel}</button><div class="document-title-row"><div><span class="eyebrow">Customer document · ${financeDemo.bookingId}</span><h1>Interim Event Account Statement</h1><p>Current account position while post-event matters remain unresolved.</p></div><span class="status-pill">Interim · not an invoice</span></div><div class="document-notice warning"><strong>Why interim?</strong><span>The deposit is ${deposit.label.toLowerCase()}. This statement summarizes issued documents, confirmed payments, and pending allocations but does not replace an invoice, receipt, credit note, or final statement.</span></div><article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Account summary</span><h2>${financeDemo.event}</h2><p>${financeDemo.customer} · ${financeDemo.eventDate}</p></div><strong>${pendingBalance ? `${moneyExact(pendingBalance)} pending allocation` : `${moneyExact(0)} due`}</strong></div><div class="money-table"><div><span>${financeDemo.venueInvoice} · ${financeDemo.venueSupplier}</span><span>${moneyExact(financeDemo.association.gross)}</span></div><div><span>${financeDemo.vendorInvoice} · ${financeDemo.vendorSupplier}</span><span>${moneyExact(financeDemo.vendor.gross)}</span></div>${claimRecorded ? `<div><span>${claim.invoice} · ${claim.reason}</span><span>${moneyExact(claim.total)}</span></div>` : ""}<div><span>${financeDemo.receipt} · original checkout payment applied</span><span>${deductionAmount(originalServices)}</span></div>${claimPaid ? `<div><span>DEP-1033 · deposit payment applied to ${claim.invoice}</span><span>${deductionAmount(claim.total)}</span></div>` : ""}<div class="money-total"><span>${pendingBalance ? "Supplier invoice balance awaiting deposit allocation" : "Service invoice balance"}</span><span>${moneyExact(pendingBalance)}</span></div></div><div class="statement-section"><h3>Open post-event item</h3><div class="key-value"><span>Security deposit</span><strong>${moneyExact(financeDemo.deposit)} · ${deposit.label}</strong></div><p>${deposit.detail}.${claimRecorded && !claimPaid ? ` The planned allocation is ${moneyExact(claim.total)} to ${claim.invoice}, followed by a ${moneyExact(financeDemo.deposit - claim.total)} refund; neither is confirmed yet.` : ""} The deposit ledger remains separate; only a confirmed payment to an issued invoice enters supplier proceeds.</p></div><div class="statement-section"><h3>Supplier status</h3><div class="key-value"><span>${financeDemo.venueSupplier}</span><strong>${pendingBalance ? "Supplemental invoice awaiting deposit payment" : "Complete"}</strong></div><div class="key-value"><span>${financeDemo.vendorSupplier}</span><strong>Fulfilled · payable independently</strong></div></div><p class="document-footnote">Prototype sample. No real document has been issued.</p></article><div class="document-actions"><button class="button button-light" data-document="Interim statement download simulated">Download PDF (demo)</button>${nextAction}</div></div></section>`;
}

function finalStatementPage() {
  const isCustomer = activeRole()?.accountType === "customer";
  const backRoute = isCustomer ? "customer-dashboard" : canAccessRoute("payments") ? "payments" : "settlement";
  const backLabel = isCustomer ? "Back to My bookings" : canAccessRoute("payments") ? "Back to payouts & documents" : "Back to event closeout";
  if (isCustomer && !closeoutFinalized) {
    const deposit = depositStatus();
    return `<section class="document-page"><div class="document-wrap"><button class="back-link" data-route="customer-dashboard">← Back to My bookings</button><div class="document-title-row"><div><span class="eyebrow">Customer document · ${financeDemo.bookingId}</span><h1>Final Booking Statement</h1><p>The final statement becomes available only after the venue finalizes every confirmed customer-side outcome.</p></div><span class="status-pill">Not issued</span></div><div class="document-notice warning"><strong>Final statement unavailable</strong><span>${depositView === "closed" ? "The deposit outcome is confirmed, but the venue has not finalized the customer account." : `The deposit is ${deposit.label.toLowerCase()}: ${deposit.detail}.`} Continue using the Interim Event Account Statement until finalization.</span></div><div class="document-actions"><button class="button button-light" data-route="interim-statement">View Interim Statement</button><button class="button button-dark" data-route="customer-dashboard">Return to My bookings</button></div></div></section>`;
  }
  if (depositView !== "closed") {
    const deposit = depositStatus();
    return `<section class="document-page"><div class="document-wrap">
      <button class="back-link" data-route="${backRoute}">← ${backLabel}</button>
      <div class="document-title-row"><div><span class="eyebrow">Customer document · ${financeDemo.bookingId}</span><h1>Final Booking Statement</h1><p>The final statement is issued only after every customer-side outcome is confirmed.</p></div><span class="status-pill">Not issued</span></div>
      <div class="document-notice warning"><strong>Security deposit unresolved</strong><span>The deposit is currently ${deposit.label.toLowerCase()}: ${deposit.detail}. No claim, refund, or zero-balance deposit outcome is final yet.</span></div>
      <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Document gate</span><h2>Use the interim statement</h2><p>${financeDemo.event} · ${financeDemo.customer}</p></div><strong>Open</strong></div><div class="statement-section"><h3>What happens next</h3><p>Resolve the deposit, record provider confirmation, and then finalize the customer account. Until then, the Interim Event Account Statement is the accurate account view.</p></div></article>
      <div class="document-actions"><button class="button button-light" data-route="interim-statement">View Interim Statement</button>${isCustomer ? '<button class="button button-dark" data-route="customer-dashboard">Return to My bookings</button>' : canAccessRoute("deposit") ? '<button class="button button-dark" data-route="deposit">Review deposit case</button>' : '<button class="button button-dark" data-route="settlement">Return to event closeout</button>'}</div>
    </div></section>`;
  }

  const claim = supplementalClaim();
  const refund = financeDemo.deposit - depositDeduction;
  const finalLabel = closeoutFinalized ? "Final" : "Preview · not issued";
  const originalServices = financeDemo.association.gross + financeDemo.vendor.gross;
  return `<section class="document-page"><div class="document-wrap">
    <button class="back-link" data-route="${backRoute}">← ${backLabel}</button>
    <div class="document-title-row"><div><span class="eyebrow">Customer document · ${financeDemo.bookingId}</span><h1>Final Booking Statement</h1><p>Consolidated customer record after services and post-event outcomes are resolved.</p></div><span class="status-pill ${closeoutFinalized ? "confirmed" : ""}">${finalLabel}</span></div>
    ${closeoutFinalized ? "" : `<div class="document-notice warning"><strong>Preview only</strong><span>This document cannot be issued until the security-deposit outcome is confirmed and the customer account is finalized.</span></div>`}
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Final account record</span><h2>${financeDemo.event}</h2><p>Statement FBS-1033 · ${financeDemo.customer} · ${financeDemo.eventDate}</p></div><strong>${moneyExact(0)} due</strong></div>
      <div class="statement-section"><h3>Supplier invoices and payments</h3><div class="money-table"><div><span>${financeDemo.venueInvoice} · venue supplier invoice</span><span>${moneyExact(financeDemo.association.gross)}</span></div><div><span>${financeDemo.vendorInvoice} · vendor supplier invoice</span><span>${moneyExact(financeDemo.vendor.gross)}</span></div>${claim.approved ? `<div><span>${claim.invoice} · ${claim.reason} (${claim.taxLabel})</span><span>${moneyExact(claim.total)}</span></div>` : ""}<div><span>${financeDemo.receipt} · original checkout payment applied</span><span>${deductionAmount(originalServices)}</span></div>${claim.approved ? `<div><span>DEP-1033 · deposit applied to ${claim.invoice}</span><span>${deductionAmount(claim.total)}</span></div>` : ""}<div class="money-total"><span>Services balance</span><span>${moneyExact(0)}</span></div></div></div>
      <div class="statement-section"><h3>Security-deposit outcome</h3><div class="money-table"><div><span>Deposit collected and held separately</span><span>${moneyExact(financeDemo.deposit)}</span></div>${claim.approved ? `<div><span>Applied as payment to ${claim.invoice}</span><span>${deductionAmount(claim.total)}</span></div>` : ""}<div><span>Refund confirmed</span><span>${deductionAmount(refund)}</span></div><div class="money-total"><span>Deposit remaining</span><span>${moneyExact(0)}</span></div></div></div>
      <div class="statement-section"><h3>Documents referenced</h3><p>${financeDemo.venueInvoice}, ${financeDemo.vendorInvoice}, ${financeDemo.receipt}${claim.approved ? `, ${claim.invoice}, evidence record EVD-1033, deposit application and refund record DEP-1033` : ", deposit refund record DEP-1033"}.</p></div>
      <p class="document-footnote">Gather does not add seller-funded venue or vendor commission as a separate customer charge. This statement links the source documents; it is not a new invoice or receipt.</p>
    </article><div class="document-actions"><button class="button button-light" data-document="Final statement download simulated">Download PDF (demo)</button>${canAccessRoute("association-payout") ? '<button class="button button-dark" data-route="association-payout">View venue settlement</button>' : `<button class="button button-dark" data-route="${backRoute}">${isCustomer ? "Return to My bookings" : "Return to event closeout"}</button>`}</div>
  </div></section>`;
}

function associationPayoutPage() {
  const a = associationSettlement();
  const claim = a.claim;
  return `<section class="document-page"><div class="document-wrap">
    <button class="back-link" data-route="payments">← Back to payouts & documents</button>
    <div class="document-title-row"><div><span class="eyebrow">Seller document · ${financeDemo.bookingId}</span><h1>Association payout statement</h1><p>${financeDemo.venueSupplier} · PST-RCA-1033</p></div><span class="status-pill confirmed">Settlement calculated</span></div>
    <div class="policy-callout"><strong>Commercial terms snapshot</strong><span>CA-LAUNCH v1 · venue commission ${a.commissionRate.toFixed(2)}% · actual processing deducted from payout. Later policy changes do not alter this booking.</span></div>
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Payout calculation</span><h2>${financeDemo.venueSupplier}</h2><p>${financeDemo.venueInvoice} · grouped charge ${financeDemo.chargeRef} · ${financeDemo.allocations.venue}</p></div><strong>${moneyExact(a.net)}</strong></div>
      <div class="money-table"><div><span>Original venue rent and venue-owned add-ons</span><span>${moneyExact(financeDemo.association.sales)}</span></div>${claim.approved ? `<div><span>${claim.invoice} · ${claim.reason} before tax</span><span>${moneyExact(claim.subtotal)}</span></div>` : ""}<div><span>Tax on original venue invoice</span><span>${moneyExact(financeDemo.association.tax)}</span></div>${claim.approved ? `<div><span>Tax on ${claim.invoice}</span><span>${moneyExact(claim.tax)}</span></div>` : ""}<div class="money-subtotal"><span>Gross collected supplier proceeds</span><span>${moneyExact(a.gross)}</span></div><div><span>Gather venue commission · ${a.commissionRate.toFixed(2)}% of ${moneyExact(a.sales)}</span><span>${deductionAmount(a.commission)}</span></div><div><span>Actual processor cost · venue ${moneyExact(financeDemo.processing.venueAllocation)} + deposit portion ${moneyExact(financeDemo.processing.depositAllocation)}</span><span>${deductionAmount(a.processing)}</span></div><div><span>Refunds / credits / other adjustments</span><span>${moneyExact(0)}</span></div><div class="money-total"><span>Calculated net payout</span><span>${moneyExact(a.net)}</span></div></div>
      <div class="statement-section"><h3>Fee document treatment</h3><p>No Gather fee invoice is generated for this booking because the snapshotted venue commission is ${moneyExact(0)}. The 0.00% rate remains visible here for auditability.</p></div>
      <div class="statement-section"><h3>Deposit ledger treatment</h3><p>${claim.approved ? `The original ${moneyExact(financeDemo.deposit)} deposit remains on its own ledger. Only the accepted ${moneyExact(claim.total)} amount—after ${claim.invoice} was issued and paid from that ledger—enters supplier proceeds above. The ${moneyExact(financeDemo.deposit - claim.total)} remainder is refunded and excluded from revenue.` : `The ${moneyExact(financeDemo.deposit)} security deposit remains on its own ledger and is fully excluded from supplier sales, commission basis, and payout.`} The ${moneyExact(financeDemo.processing.depositAllocation)} processor-cost share caused by collecting the deposit is charged to the association payout under this sample agreement; it is not taken from the refundable deposit.</p></div>
      <div class="statement-section"><h3>Transfer and bank-payout status</h3><div class="key-value"><span>Currency</span><strong>CAD</strong></div><div class="key-value"><span>Platform transfer</span><strong>Not generated · no reference</strong></div><div class="key-value"><span>Bank payout</span><strong>Not scheduled · no payout date</strong></div><div class="key-value"><span>Destination</span><strong>Sample bank account · •••• 4821</strong></div><p>This prototype calculates a settlement amount only. It does not reconcile, approve, create a connected-account transfer, schedule a bank payout, or move funds. Customer-account finalization does not change those independent states.</p></div>
      <p class="document-footnote">Prototype sample. Production tax, funds-flow, and invoice obligations require professional review.</p>
    </article><div class="document-actions"><button class="button button-light" data-document="Association payout statement download simulated">Download statement (demo)</button><button class="button button-dark" data-route="venue-terms">View current terms</button></div>
  </div></section>`;
}

function vendorPayoutPage() {
  const v = financeDemo.vendor;
  return `<section class="document-page"><div class="document-wrap">
    <button class="back-link" data-route="vendor-dashboard">← Back to vendor portal</button>
    <div class="document-title-row"><div><span class="eyebrow">Vendor document · ${financeDemo.bookingId}</span><h1>Vendor payout statement</h1><p>${financeDemo.vendorSupplier} · PST-WSE-1033</p></div><span class="status-pill confirmed">Settlement calculated</span></div>
    <div class="policy-callout"><strong>Configurable policy snapshot</strong><span>VEND-ENT v3 · ${v.commissionRate.toFixed(2)}% of pre-tax completed service sales · actual processing deducted from payout. This example rate is not universal.</span></div>
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Payout calculation</span><h2>${financeDemo.vendorSupplier}</h2><p>${financeDemo.vendorInvoice} · grouped charge ${financeDemo.chargeRef} · ${financeDemo.allocations.vendor}</p></div><strong>${moneyExact(v.net)}</strong></div>
      <div class="money-table"><div><span>Completed vendor service sales</span><span>${moneyExact(v.sales)}</span></div><div><span>Vendor tax collected · ${financeDemo.taxProfiles.vendor.id}</span><span>${moneyExact(v.tax)}</span></div><div class="money-subtotal"><span>Gross customer proceeds</span><span>${moneyExact(v.gross)}</span></div><div><span>Gather commission · ${v.commissionRate.toFixed(2)}% of ${moneyExact(v.sales)}</span><span>${deductionAmount(v.commission)}</span></div><div><span>${financeDemo.taxProfiles.gather.label} on Gather commission</span><span>${deductionAmount(v.commissionTax)}</span></div><div><span>Actual processor cost · proportional share of grouped charge</span><span>${deductionAmount(v.processing)}</span></div><div class="money-total"><span>Calculated net vendor payout</span><span>${moneyExact(v.net)}</span></div></div>
      <div class="statement-section"><h3>Transfer and bank-payout status</h3><div class="key-value"><span>Currency</span><strong>CAD</strong></div><div class="key-value"><span>Platform transfer</span><strong>Not generated · no reference</strong></div><div class="key-value"><span>Bank payout</span><strong>Not scheduled · no payout date</strong></div><div class="key-value"><span>Destination</span><strong>Sample bank account · •••• 7719</strong></div><p>Settlement calculation, platform transfer, and bank payout are separate states. This demo has not approved or created either movement.</p></div>
    </article>
    <article class="statement-sheet fee-invoice"><div class="statement-head"><div><span class="document-type">Gather fee invoice</span><h2>FEE-VEND-1033</h2><p>Bill to ${financeDemo.vendorSupplier} · policy VEND-ENT v3</p></div><strong>${moneyExact(v.commission + v.commissionTax)}</strong></div>
      <div class="money-table"><div><span>Commission basis · completed pre-tax service</span><span>${moneyExact(v.sales)}</span></div><div><span>Commission · ${v.commissionRate.toFixed(2)}%</span><span>${moneyExact(v.commission)}</span></div><div><span>${financeDemo.taxProfiles.gather.label}</span><span>${moneyExact(v.commissionTax)}</span></div><div class="money-total"><span>Fee invoice total</span><span>${moneyExact(v.commission + v.commissionTax)}</span></div></div>
      <div class="invoice-settlement"><strong>Planned collection method · not posted</strong><span>Net once from PST-WSE-1033 after settlement approval. This prototype has not posted the deduction, scheduled the payout, or transferred funds.</span></div>
    </article><p class="document-footnote">The customer’s supplier invoice shows the service price and applicable supplier tax only. Gather does not add this seller-funded commission as a separate customer charge.</p><div class="document-actions"><button class="button button-light" data-document="Vendor documents download simulated">Download both (demo)</button><button class="button button-dark" data-route="vendor-dashboard">Back to vendor portal</button></div>
  </div></section>`;
}

function feeSettingsPage() {
  const version = `CA-LAUNCH v${policyRevision}`;
  const treatmentCopy = feePolicy.processingTreatment === "deduct_from_payout" ? "Deduct actual cost from payout" : feePolicy.processingTreatment === "separate_invoice" ? "Invoice separately" : "Platform subsidized";
  const content = `<header class="dash-head"><div><span class="eyebrow">Authorized platform administration · prototype</span><h1>Commercial terms</h1><p>Configure future-booking defaults while preserving the exact policy snapshot used by every existing booking.</p></div><span class="status-pill confirmed">${version}</span></header><div class="document-notice"><strong>Current pilot defaults</strong><span>Association subscription starts at ${money(0)} and venue commission at 0%. Both are configurable contract terms, not permanent promises.</span></div><div class="settings-layout"><form class="dash-card policy-form" id="fee-policy-form"><h2>Future booking policy</h2><p>Only an authorized platform or contract administrator should change negotiated fees.</p><div class="form-grid"><div class="form-group"><label for="association-subscription">Association subscription (CAD / month)</label><input id="association-subscription" type="number" min="0" step="1" value="${feePolicy.associationSubscription}" required></div><div class="form-group"><label for="venue-commission">Venue commission (%)</label><input id="venue-commission" type="number" min="0" max="100" step="0.01" value="${feePolicy.venueCommission}" required></div><div class="form-group"><label for="vendor-commission">Default vendor commission (%)</label><input id="vendor-commission" type="number" min="0" max="100" step="0.01" value="${feePolicy.vendorCommission}" required></div><div class="form-group"><label for="processing-treatment">Payment-processing treatment</label><select id="processing-treatment" required><option value="deduct_from_payout" ${feePolicy.processingTreatment === "deduct_from_payout" ? "selected" : ""}>Deduct actual cost from payout</option><option value="separate_invoice" ${feePolicy.processingTreatment === "separate_invoice" ? "selected" : ""}>Invoice separately</option><option value="platform_subsidized" ${feePolicy.processingTreatment === "platform_subsidized" ? "selected" : ""}>Platform subsidized</option></select></div><div class="form-group"><label for="processing-allocation">Grouped-payment allocation</label><select id="processing-allocation" required><option value="proportional" ${feePolicy.processingAllocation === "proportional" ? "selected" : ""}>Proportional by payment share</option><option value="contract_override" ${feePolicy.processingAllocation === "contract_override" ? "selected" : ""}>Contract-specific override</option></select></div></div><button class="button button-green" type="submit">Save as new future version</button><p class="prototype-note">Prototype only. Saving updates in-memory demo settings and creates no contract or charge.</p></form><aside class="dash-card current-terms"><h3>Current values</h3><div class="terms-list"><div><span>Policy</span><strong>${version}</strong></div><div><span>Association subscription</span><strong>${money(feePolicy.associationSubscription)} / month</strong></div><div><span>Venue commission</span><strong>${feePolicy.venueCommission.toFixed(2)}%</strong></div><div><span>Vendor commission default</span><strong>${feePolicy.vendorCommission.toFixed(2)}%</strong></div><div><span>Processing treatment</span><strong>${treatmentCopy}</strong></div><div><span>Grouped-payment allocation</span><strong>${feePolicy.processingAllocation === "proportional" ? "Proportional by payment share" : "Contract-specific override"}</strong></div></div><div class="policy-callout"><strong>Existing bookings stay unchanged</strong><span>${financeDemo.bookingId} retains CA-LAUNCH v1 for the venue and VEND-ENT v3 at 12.00% for the vendor, regardless of edits here.</span></div><p class="document-footnote">Each fee invoice has exactly one collection method. Processing costs are disclosed once and never both netted and invoiced.</p></aside></div>`;
  return dashboardShell("fee-settings", content);
}

function platformDashboardPage() {
  const role = activeRole();
  const isFinance = hasPermission("platform.finance");
  const canEditPolicy = hasPermission("platform.policy");
  const isOps = hasPermission("platform.marketplace") || hasPermission("platform.support");
  const content = `<header class="dash-head"><div><span class="eyebrow">Gather platform console · ${role.shortRole}</span><h1>Platform operations</h1><p>Cross-organization health is kept separate from customer, venue, and vendor workspaces.</p></div><div class="avatar">${role.initials}</div></header>${roleContextNotice()}<div class="metric-grid"><div class="metric"><span>Active operators</span><strong>18</strong><em>Sample pilot data</em></div><div class="metric"><span>Active vendors</span><strong>27</strong><em>8 categories</em></div><div class="metric"><span>${isFinance ? "Reconciliation exceptions" : "Onboarding reviews"}</span><strong>${isFinance ? "3" : "6"}</strong><em>${isFinance ? "Needs investigation" : "Oldest: 2 days"}</em></div><div class="metric"><span>${isOps ? "Support queue" : "Fee documents"}</span><strong>${isOps ? "9" : "14"}</strong><em>${isOps ? "2 high priority" : "Current settlement cycle"}</em></div></div><div class="platform-grid"><section class="dash-card"><div class="card-heading-row"><div><h3>${isFinance ? "Money-movement controls" : "Marketplace and support"}</h3><p>Only queues permitted for this role are shown.</p></div>${canEditPolicy ? '<button class="text-button" data-route="fee-settings">Commercial terms</button>' : ""}</div>${isFinance ? `<div class="platform-queue"><span class="task-icon">◇</span><div><strong>Processor-to-ledger mismatch</strong><small>CHG-1033 · grouped payment allocations require review</small></div><button data-task="Reconciliation case opened">Review</button></div><div class="platform-queue"><span class="task-icon">$</span><div><strong>Transfer not generated</strong><small>PST-WSE-1033 · approval and transfer are separate states</small></div><button data-task="Transfer exception opened">Review</button></div>` : ""}${isOps ? `<div class="platform-queue"><span class="task-icon">▱</span><div><strong>Operator onboarding</strong><small>2 listings need identity or payout-readiness checks</small></div><button data-task="Operator onboarding queue opened">Review</button></div><div class="platform-queue"><span class="task-icon">✦</span><div><strong>Vendor credentials</strong><small>Food service and personal-service records due</small></div><button data-task="Vendor credential queue opened">Review</button></div><div class="platform-queue"><span class="task-icon">↻</span><div><strong>Calendar sync exception</strong><small>Communal update requires operator follow-up</small></div><button data-task="Synchronization exception opened">Review</button></div>` : ""}</section><aside class="dash-card"><h3>Privileged-access boundary</h3><p>Platform roles do not silently become customers, venue staff, or vendors. Any future support access should be reason-coded, time-limited, approved where required, and fully audited.</p><div class="policy-callout"><strong>Booking snapshots remain immutable</strong><span>A new commercial-policy version cannot rewrite an existing booking’s saved supplier, tax, or fee terms.</span></div><button class="button button-light button-wide" data-route="sign-in">Compare another demo role</button></aside></div>`;
  return dashboardShell("platform-dashboard", content);
}

function vendorDashboardPage() {
  const role = activeRole();
  const financeAccess = hasPermission("vendor.finance") || hasPermission("vendor.documents");
  const fulfilmentAccess = hasPermission("vendor.fulfilment");
  const financePanel = financeAccess ? `<h3>Completed-order documents</h3><button class="document-link" type="button" data-route="vendor-invoice"><span><strong>${financeDemo.vendorInvoice}</strong><small>Vendor supplier invoice and payment allocation</small></span><b>→</b></button><button class="document-link" type="button" data-route="vendor-payout"><span><strong>PST-WSE-1033</strong><small>Payout statement + Gather fee invoice</small></span><b>→</b></button>` : `<span class="read-only-label">Fulfilment access</span><h3>Financial details are restricted</h3><p>This role can complete assigned orders but cannot see commission invoices, calculated payouts, bank destinations, or vendor tax details.</p><div class="policy-callout"><strong>Why?</strong><span>Operational staff receive only the information needed to deliver the service.</span></div>`;
  const content = `<header class="dash-head"><div><span class="eyebrow">Independent vendor portal · ${role.shortRole}</span><h1>Good morning, ${role.name.split(" ")[0]}.</h1><p>${role.organization} · entertainment services</p></div><div class="avatar">${role.initials}</div></header>${roleContextNotice()}<div class="metric-grid"><div class="metric"><span>Upcoming orders</span><strong>4</strong><em>Next 30 days</em></div><div class="metric"><span>Fulfilment due</span><strong>1</strong><em>Confirm after service</em></div><div class="metric"><span>${financeAccess ? "Calculated payout" : "Orders this month"}</span><strong>${financeAccess ? money(financeDemo.vendor.net) : "6"}</strong><em>${financeAccess ? "Transfer not simulated" : "Assigned to team"}</em></div><div class="metric"><span>Customer rating</span><strong>4.9</strong><em>Sample profile</em></div></div><div class="settlement-layout"><section class="dash-card"><div class="card-heading-row"><div><h3>Service orders</h3><p>Vendor fulfilment is tracked separately from venue closeout.</p></div></div><div class="vendor-order"><div><span class="supplier-mark vendor">W</span><div><strong>Family magic show</strong><small>${financeDemo.bookingId} · ${financeDemo.eventDate} · Ridgeview Community Hall</small></div></div><span class="mini-status">Fulfilled</span></div><div class="vendor-order"><div><span class="supplier-mark vendor">W</span><div><strong>Family magic show</strong><small>BKG-1048 · October 17, 2026 · booking confirmed</small></div></div>${fulfilmentAccess ? '<button class="compact-button" data-task="Fulfilment checklist opened">Open checklist</button>' : '<span class="mini-status pending">Upcoming</span>'}</div><div class="policy-callout"><strong>Independent settlement</strong><span>The completed order can become payout-ready even if the venue’s separate security-deposit case is still open. Approval and transfer keep their own statuses.</span></div></section><aside class="dash-card">${financePanel}<button class="button button-light button-wide" type="button" data-route="sign-in">Compare another demo role</button></aside></div>`;
  return dashboardShell("vendor-dashboard", content);
}

function hostPage() {
  return `<div class="host-page"><section class="host-hero"><div class="host-copy"><span class="eyebrow">For space operators · starting with community associations</span><h1>Make every available space easier to rent.</h1><p>List halls, meeting rooms, kitchens, rinks, courts, studios, and other bookable spaces—each with live availability, included amenities, venue add-ons, independent vendor services, policies, and an optional security deposit.</p><button class="button button-dark" data-route="sign-in">Explore operator demo roles →</button></div><div class="host-visual"><div class="dashboard-preview"><div class="preview-top"><strong>Weekly overview</strong><span>Demo</span></div><div class="preview-boxes"><div class="preview-box"></div><div class="preview-box"></div><div class="preview-box"></div></div><div class="preview-line short"></div><div class="preview-row"></div><div class="preview-row"></div><div class="preview-row"></div></div></div></section><section class="host-features"><div class="section-heading"><div><span class="eyebrow">A focused first market</span><h2>Built first for association-managed spaces.</h2></div><p>The platform can support any short-term rentable space; the initial pitch helps Calgary community associations publish availability and run booking, fulfilment, deposit, and payout workflows in one place.</p></div><div class="card-grid"><div class="feature-card"><div class="feature-icon">▱</div><h3>List every rentable space</h3><p>Give each hall, room, rink, court, or kitchen its own schedule, capacity, included amenities, and venue-owned add-ons.</p></div><div class="feature-card"><div class="feature-icon">◷</div><h3>Publish real availability</h3><p>Use Gather as the source of truth for operating hours, bookable hours, blackouts, and buffers. Existing systems can be updated manually in the pilot and connected later where a dependable API is available.</p></div><div class="feature-card"><div class="feature-icon">✦</div><h3>Add independent vendors</h3><p>Offer catering, decoration, entertainment, cakes, photography, staffing, rentals, and other event services with separate supplier records.</p></div><div class="feature-card"><div class="feature-icon">$</div><h3>Settle every party clearly</h3><p>Close customer accounts, deposits, association payouts, vendor commissions, and vendor payouts with linked documents.</p></div></div></section><section class="host-commercial"><div><span class="eyebrow">Configurable pilot terms</span><h2>A low-friction launch for associations.</h2><p>The current prototype defaults to no subscription fee and no venue commission. Standard payment-processing costs remain separate and transparent.</p></div><div class="commercial-cards"><div><strong>${money(0)}</strong><span>monthly subscription<br><small>current default</small></span></div><div><strong>0.00%</strong><span>venue commission<br><small>current default</small></span></div><div><strong>Actual cost</strong><span>payment processing<br><small>deducted once by default</small></span></div></div><p>All values are configurable commercial terms and may change for future bookings. Existing bookings retain their saved policy version.</p><button class="button button-dark" data-route="sign-in">Explore all demo accounts →</button></section></div>`;
}

function setActiveRole(roleId) {
  const nextRole = demoRoles.find(role => role.id === roleId);
  if (!nextRole) return;
  if (activeRoleId !== nextRole.id) confirmedBookingSnapshot = null;
  if (nextRole.accountType === "customer" && depositView === "review") seedCustomerClaimScenario();
  if (nextRole.accountType === "customer") {
    bookingData.contact = nextRole.name;
    bookingData.email = "priya@example.com";
  }
  activeRoleId = nextRole.id;
  try { sessionStorage.setItem("gather-demo-role", nextRole.id); } catch { /* Session persistence is optional in the prototype. */ }
  updateSessionChrome();
  navigate("role-home");
  showToast(`Demo role changed to ${nextRole.shortRole}.`);
}

function signOut() {
  activeRoleId = null;
  confirmedBookingSnapshot = null;
  bookingData.contact = "Alex Morgan";
  bookingData.email = "alex@example.com";
  try { sessionStorage.removeItem("gather-demo-role"); } catch { /* Session persistence is optional in the prototype. */ }
  updateSessionChrome();
  navigate("home");
  showToast("Demo session ended. No account data was changed.");
}

function updateSessionChrome() {
  const role = activeRole();
  const sessionButton = document.querySelector("#session-button");
  const signOutButton = document.querySelector("#sign-out-button");
  const workspaceNav = document.querySelector("#workspace-nav");
  const footerWorkspace = document.querySelector("#footer-workspace");
  const sessionContext = document.querySelector("#session-context");
  if (!role) {
    sessionButton.textContent = "Demo sign in";
    sessionButton.dataset.route = "sign-in";
    signOutButton.hidden = true;
    workspaceNav.textContent = "Demo accounts";
    workspaceNav.dataset.route = "sign-in";
    footerWorkspace.textContent = "Demo accounts";
    footerWorkspace.dataset.route = "sign-in";
    sessionContext.hidden = true;
    sessionContext.innerHTML = "";
    return;
  }
  const context = accountContext(role.accountType);
  sessionButton.textContent = `${role.initials} · ${role.shortRole}`;
  sessionButton.dataset.route = "role-home";
  signOutButton.hidden = false;
  workspaceNav.textContent = "My demo workspace";
  workspaceNav.dataset.route = role.landing;
  footerWorkspace.textContent = "My demo workspace";
  footerWorkspace.dataset.route = role.landing;
  sessionContext.hidden = false;
  sessionContext.innerHTML = `<div class="session-context-inner"><div class="session-identity"><span class="session-dot" aria-hidden="true">${context.icon}</span><div><strong>Viewing as ${role.name}</strong><span>${role.organization} · ${role.role}</span></div></div><div class="session-actions"><button type="button" data-session-route="role-home">Permissions</button><button type="button" data-session-route="sign-in">Switch role</button><button type="button" data-session-signout>Sign out</button></div></div>`;
  sessionContext.querySelectorAll("[data-session-route]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.sessionRoute)));
  sessionContext.querySelector("[data-session-signout]")?.addEventListener("click", signOut);
}

function render(route = location.hash.slice(1) || "home") {
  const routes = {
    home: homePage,
    explore: explorePage,
    venue: venuePage,
    booking: bookingPage,
    "booking-documents": bookingDocumentsPage,
    dashboard: dashboardPage,
    settlement: settlementPage,
    deposit: depositPage,
    payments: paymentsPage,
    "finance-booking-documents": financeBookingDocumentsPage,
    "vendor-invoice": vendorInvoicePage,
    "interim-statement": interimStatementPage,
    "final-statement": finalStatementPage,
    "association-payout": associationPayoutPage,
    "vendor-payout": vendorPayoutPage,
    "fee-settings": feeSettingsPage,
    "vendor-dashboard": vendorDashboardPage,
    "customer-dashboard": customerDashboardPage,
    "customer-documents": customerDocumentsPage,
    "customer-deposit": customerDepositPage,
    "platform-dashboard": platformDashboardPage,
    "venue-terms": venueTermsPage,
    "role-home": roleHomePage,
    "sign-in": signInPage,
    host: hostPage
  };
  const titles = {
    home: "Book spaces in Calgary",
    explore: "Available spaces",
    venue: currentSpace().name,
    booking: "Instant Book checkout",
    "booking-documents": "Booking documents",
    dashboard: "Venue dashboard",
    settlement: "Event closeout",
    deposit: "Deposit closeout",
    payments: "Payouts and documents",
    "finance-booking-documents": "Supplier invoices and receipt",
    "vendor-invoice": "Vendor supplier invoice",
    "interim-statement": "Interim Event Account Statement",
    "final-statement": "Final Booking Statement",
    "association-payout": "Association payout statement",
    "vendor-payout": "Vendor payout statement",
    "fee-settings": "Commercial terms",
    "vendor-dashboard": "Vendor portal demo",
    "customer-dashboard": "My bookings",
    "customer-documents": "Customer booking documents",
    "customer-deposit": "Customer deposit response",
    "platform-dashboard": "Platform console",
    "venue-terms": "Venue commercial terms",
    "role-home": "Role and permissions",
    "sign-in": "Choose a demo account",
    host: "For space operators"
  };
  const resolvedRoute = routes[route] ? route : "home";
  const permitted = canAccessRoute(resolvedRoute);
  app.innerHTML = permitted ? routes[resolvedRoute]() : accessRestrictedPage(resolvedRoute);
  document.title = `${permitted ? titles[resolvedRoute] : "Access restricted"} — Gather`;
  updateSessionChrome();
  window.scrollTo({ top: 0 });
  bindPageEvents();
  requestAnimationFrame(() => {
    const heading = app.querySelector("h1");
    if (heading) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    } else {
      app.focus({ preventScroll: true });
    }
  });
}

function closeMobileMenu() {
  const header = document.querySelector(".site-header");
  const menu = document.querySelector(".mobile-menu");
  header.classList.remove("open");
  menu.setAttribute("aria-expanded", "false");
  menu.setAttribute("aria-label", "Open menu");
}

function navigate(route) {
  closeMobileMenu();
  if (location.hash === `#${route}`) render(route);
  else location.hash = route;
}

function bindPageEvents() {
  app.querySelectorAll("[data-route]").forEach(el => el.addEventListener("click", () => navigate(el.dataset.route)));
  app.querySelectorAll("[data-demo-role]").forEach(button => button.addEventListener("click", () => setActiveRole(button.dataset.demoRole)));
  app.querySelectorAll("[data-sign-out]").forEach(button => button.addEventListener("click", signOut));
  app.querySelectorAll("[data-space]").forEach(el => el.addEventListener("click", () => { if (selectedSpaceId !== el.dataset.space) { bookingData.addons = []; bookingData.vendorServices = []; } selectedSpaceId = el.dataset.space; navigate("venue"); }));
  app.querySelector("#home-search")?.addEventListener("submit", e => {
    e.preventDefault();
    bookingData.date = app.querySelector("#date").value;
    bookingData.start = app.querySelector("#search-start").value;
    bookingData.end = app.querySelector("#search-end").value;
    bookingData.guests = Number(app.querySelector("#guests").value);
    const start = timeAsHours(bookingData.start);
    const end = timeAsHours(bookingData.end);
    if (!bookingData.date || !Number.isFinite(start) || !Number.isFinite(end) || end <= start) { showToast("Choose a valid date and time."); return; }
    navigate("explore");
  });
  ["#venue-date", "#venue-guests", "#venue-start", "#venue-end"].forEach(selector => app.querySelector(selector)?.addEventListener("change", () => {
    bookingData.date = app.querySelector("#venue-date").value;
    bookingData.guests = Number(app.querySelector("#venue-guests").value);
    bookingData.start = app.querySelector("#venue-start").value;
    bookingData.end = app.querySelector("#venue-end").value;
    render("venue");
  }));
  app.querySelector("#book-space")?.addEventListener("click", () => {
    bookingData.date = app.querySelector("#venue-date").value;
    bookingData.guests = Number(app.querySelector("#venue-guests").value);
    bookingData.start = app.querySelector("#venue-start").value;
    bookingData.end = app.querySelector("#venue-end").value;
    if (!availability().available) { showToast(availability().message); return; }
    bookingStep = 1;
    navigate("booking");
  });
  app.querySelector("#event-form")?.addEventListener("submit", e => { e.preventDefault(); bookingData.guests = Number(app.querySelector("#headcount").value); bookingData.event = app.querySelector("#event-type").value; bookingData.contact = app.querySelector("#name").value.trim(); bookingData.email = app.querySelector("#email").value.trim(); bookingData.notes = app.querySelector("#details").value.trim(); bookingStep = 2; render("booking"); });
  app.querySelector("#addon-form")?.addEventListener("submit", e => { e.preventDefault(); bookingData.addons = [...app.querySelectorAll(".addon-checkbox:checked:not(:disabled)")].map(input => input.value); bookingData.vendorServices = [...app.querySelectorAll(".vendor-checkbox:checked:not(:disabled)")].map(input => input.value); bookingStep = 3; render("booking"); });
  app.querySelector("#booking-back")?.addEventListener("click", () => { bookingStep = Math.max(1, bookingStep - 1); render("booking"); });
  app.querySelector("#confirm-booking")?.addEventListener("click", () => { if (!app.querySelector("#agree").checked) { showToast("Please accept the applicable booking policies to continue."); return; } if (!availability().available) { showToast("That venue time is no longer available. Please choose another time."); navigate("venue"); return; } const vendorStatus = selectedVendorAvailability(); if (!vendorStatus.available) { showToast(`${vendorStatus.unavailable.map(item => item.name).join(", ")} is no longer available. Please update vendor services.`); bookingStep = 2; render("booking"); return; } confirmedBookingSnapshot = createBookingSnapshot(); bookingSequence += 1; bookingStep = 4; render("booking"); });
  app.querySelector("#release-deposit")?.addEventListener("click", () => { depositDeduction = 0; depositView = "release_approval_pending"; render("deposit"); });
  app.querySelector("#propose-deduction")?.addEventListener("click", () => { depositView = "deduction"; render("deposit"); });
  app.querySelector("#cancel-deduction")?.addEventListener("click", () => { depositView = "review"; render("deposit"); });
  app.querySelector("#deduction-form")?.addEventListener("submit", e => { e.preventDefault(); const evidence = app.querySelector("#deduction-evidence").value.trim(); if (!evidence) { showToast("Add an evidence summary before sending the claim for review."); return; } depositDeduction = Number(app.querySelector("#deduction-amount").value); depositClaimReason = app.querySelector("#deduction-reason").value; depositClaimEvidence = evidence; depositView = "customer_review"; render("deposit"); });
  app.querySelector("#approve-release")?.addEventListener("click", () => { depositView = "release_pending"; closeoutFinalized = false; render("deposit"); showToast("Sample financial approval recorded; provider confirmation is still required."); });
  app.querySelector("#confirm-refund")?.addEventListener("click", () => { depositView = "closed"; closeoutFinalized = false; navigate("settlement"); showToast("Demo refund confirmation recorded."); });
  app.querySelector("#customer-accept-claim")?.addEventListener("click", () => { depositView = "claim_approval_pending"; closeoutFinalized = false; render("customer-deposit"); showToast("Sample customer acceptance recorded; venue financial approval is still required."); });
  app.querySelector("#customer-dispute-claim")?.addEventListener("click", () => { depositView = "customer_disputed"; closeoutFinalized = false; render("customer-deposit"); showToast("Sample customer dispute recorded for review."); });
  app.querySelector("#approve-claim")?.addEventListener("click", () => { depositView = "claim_payment_pending"; closeoutFinalized = false; render("deposit"); showToast("Sample financial approval recorded; provider confirmation is still required."); });
  app.querySelector("#confirm-claim-outcome")?.addEventListener("click", () => { depositView = "closed"; closeoutFinalized = false; navigate("settlement"); showToast("Supplemental invoice payment, refund, and provider confirmation recorded in the demo."); });
  app.querySelector("#finalize-closeout")?.addEventListener("click", () => { if (depositView !== "closed") { showToast("Close the security-deposit case first."); return; } closeoutFinalized = true; navigate("final-statement"); });
  app.querySelector("#reset-closeout")?.addEventListener("click", () => { depositView = "review"; depositDeduction = 0; depositClaimReason = "Additional cleaning"; depositClaimEvidence = "Timestamped post-event photos and supporting record attached (prototype)."; closeoutFinalized = false; render("settlement"); showToast("Demo closeout reset."); });
  app.querySelector("#fee-policy-form")?.addEventListener("submit", e => {
    e.preventDefault();
    const nextPolicy = {
      associationSubscription: Number(app.querySelector("#association-subscription").value),
      venueCommission: Number(app.querySelector("#venue-commission").value),
      vendorCommission: Number(app.querySelector("#vendor-commission").value),
      processingTreatment: app.querySelector("#processing-treatment").value,
      processingAllocation: app.querySelector("#processing-allocation").value
    };
    const validNumbers = Number.isFinite(nextPolicy.associationSubscription) && nextPolicy.associationSubscription >= 0 && Number.isFinite(nextPolicy.venueCommission) && nextPolicy.venueCommission >= 0 && nextPolicy.venueCommission <= 100 && Number.isFinite(nextPolicy.vendorCommission) && nextPolicy.vendorCommission >= 0 && nextPolicy.vendorCommission <= 100;
    if (!validNumbers) { showToast("Enter valid commercial terms before saving a new version."); return; }
    if (JSON.stringify(nextPolicy) === JSON.stringify(feePolicy)) { showToast("No commercial terms changed; no new version was created."); return; }
    feePolicy = nextPolicy;
    policyRevision += 1;
    render("fee-settings");
    showToast("New future-booking policy version saved in this demo.");
  });
  app.querySelectorAll(".filter-chip").forEach(chip => chip.addEventListener("click", () => { app.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active")); chip.classList.add("active"); showToast("Filter controls are for demonstration only."); }));
  app.querySelectorAll("[data-task]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.task)));
  app.querySelectorAll("[data-document]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.document)));
}

document.querySelectorAll("[data-route]").forEach(el => el.addEventListener("click", () => navigate(el.dataset.route)));
document.querySelector("#sign-out-button").addEventListener("click", signOut);
document.querySelector(".mobile-menu").addEventListener("click", e => { const header = document.querySelector(".site-header"); header.classList.toggle("open"); const open = header.classList.contains("open"); e.currentTarget.setAttribute("aria-expanded", open); e.currentTarget.setAttribute("aria-label", open ? "Close menu" : "Open menu"); });
window.addEventListener("hashchange", () => render());
render();
