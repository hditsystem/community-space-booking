const spaces = [
  { id: "ridgeview", name: "Ridgeview Community Hall", area: "Northwest Calgary", category: "Community hall", price: 48, capacity: 120, image: "hall-img", amenities: ["Kitchen", "Accessible", "120 guests"], busy: [{ date: "2026-10-17", start: 14, end: 17 }] },
  { id: "crestwood", name: "Crestwood Community Rink", area: "Southwest Calgary", category: "Rink & court", price: 36, capacity: 60, image: "rink-img", amenities: ["Change rooms", "Lighting", "Parking"], busy: [{ date: "2026-10-17", start: 9, end: 12 }] },
  { id: "sunroom", name: "The Sunroom", area: "Bridgeland", category: "Meeting room", price: 29, capacity: 24, image: "meeting-img", amenities: ["Projector", "Wi-Fi", "24 guests"], busy: [] },
  { id: "oak", name: "Oak & Elm Hall", area: "Southeast Calgary", category: "Community hall", price: 54, capacity: 150, image: "hall-img", amenities: ["Stage", "Kitchen", "150 guests"], busy: [{ date: "2026-10-17", start: 18, end: 20 }] }
];

const app = document.querySelector("#app");
const toast = document.querySelector(".toast");
let bookingStep = 1;
let bookingData = { date: "2026-10-17", start: "18:00", end: "23:00", guests: 60, event: "Birthday celebration", addons: [] };
let selectedSpaceId = "ridgeview";

const addonCatalog = [
  { id: "kitchen", name: "Kitchen access", price: 45, description: "Ovens, prep counters and dishwasher", available: true },
  { id: "setup", name: "Chair & table setup", price: 80, description: "Room set before your arrival", available: true },
  { id: "av", name: "Projector & AV kit", price: 25, description: "Projector, screen and HDMI cable", available: true },
  { id: "cleaning", name: "End-of-event cleaning", price: 110, description: "Standard floor and surface cleanup", available: true },
  { id: "lighting", name: "Stage lighting", price: 60, description: "Unavailable for this date", available: false }
];

const money = value => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", minimumFractionDigits: Number.isInteger(value) ? 0 : 2, maximumFractionDigits: 2 }).format(value);

const timeAsHours = value => {
  const [hours, minutes] = value.split(":").map(Number);
  return hours + minutes / 60;
};

const formatTime = value => new Date(`2026-01-01T${value}:00`).toLocaleTimeString("en-CA", { hour: "numeric", minute: "2-digit" });
const formatHour = value => formatTime(`${String(Math.floor(value)).padStart(2, "0")}:${value % 1 ? "30" : "00"}`);
const currentSpace = () => spaces.find(space => space.id === selectedSpaceId) || spaces[0];

function durationHours() {
  return Math.max(0, timeAsHours(bookingData.end) - timeAsHours(bookingData.start));
}

function availability(space = currentSpace()) {
  const start = timeAsHours(bookingData.start);
  const end = timeAsHours(bookingData.end);
  const guests = Number(bookingData.guests);
  if (!bookingData.date || !Number.isFinite(start) || !Number.isFinite(end)) return { available: false, message: "Choose a valid date and time." };
  if (!Number.isFinite(guests) || guests < 1 || guests > space.capacity) return { available: false, message: `This space can accommodate 1–${space.capacity} guests.` };
  if (end <= start) return { available: false, message: "End time must be after start time." };
  if (start < 8 || end > 23) return { available: false, message: "Bookings are available from 8:00 AM to 11:00 PM." };
  const conflict = space.busy.find(block => block.date === bookingData.date && start < block.end && end > block.start);
  if (conflict) {
    return { available: false, message: `This time overlaps a confirmed booking from ${formatHour(conflict.start)}–${formatHour(conflict.end)}` };
  }
  return { available: true, message: "Available now — payment confirms this booking instantly." };
}

function pricing() {
  const rental = durationHours() * currentSpace().price;
  const addons = addonCatalog.filter(item => bookingData.addons.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
  const tax = Math.round((rental + addons) * 0.05 * 100) / 100;
  const rentalTotal = rental + addons + tax;
  const deposit = 300;
  return { rental, addons, tax, rentalTotal, deposit, dueNow: rentalTotal + deposit };
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function spaceCard(space) {
  return `<button class="space-card" data-space="${space.id}" aria-label="View ${space.name}">
    <div class="card-image ${space.image}"><span class="card-tag">${space.category}</span><span class="availability-badge">✓ Available ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}</span></div>
    <div class="card-body"><div class="card-topline"><div><h3>${space.name}</h3><p>${space.area}</p></div><div class="price"><strong>${money(space.price)}</strong><br><small>/ hour</small></div></div>
    <div class="amenities">${space.amenities.map(item => `<span>${item}</span>`).join("")}</div></div>
  </button>`;
}

function homePage() {
  return `<section class="hero">
    <div class="hero-copy"><span class="eyebrow">Built for Calgary venues</span><h1>Room for your next big thing.</h1><p>Find welcoming local spaces with clear prices, real availability, and all the details you need—then book securely online.</p>
      <form class="search-panel" id="home-search">
        <div class="search-field"><label for="what">What are you planning?</label><select id="what"><option>Celebration or gathering</option><option>Sports or recreation</option><option>Meeting or workshop</option><option>Food preparation</option></select></div>
        <div class="search-field"><label for="date">When?</label><input id="date" type="date" value="2026-10-17" /></div>
        <div class="search-field"><label for="search-start">Start</label><input id="search-start" type="time" value="${bookingData.start}" /></div>
        <div class="search-field"><label for="search-end">End</label><input id="search-end" type="time" value="${bookingData.end}" /></div>
        <div class="search-field"><label for="guests">Guests</label><select id="guests"><option value="20">1–25</option><option value="60" selected>26–75</option><option value="100">76–150</option><option value="175">150+</option></select></div>
        <button class="button button-dark" type="submit">Search →</button>
      </form>
    </div>
    <div class="hero-art" aria-label="Illustration of a welcoming community hall"><div class="hall-scene"><div class="hall-wall"></div><div class="window one"></div><div class="window two"></div><div class="banner"></div><div class="table"></div><div class="chair left"></div><div class="chair right"></div><div class="plant"></div></div><div class="art-badge"><span class="check-dot">✓</span><div><strong>Everything in one place</strong><small>Availability · pricing · house rules</small></div></div></div>
  </section>
  <section class="trust-strip"><div><strong>Clear totals</strong><span>No surprise fees</span></div><div><strong>Live availability</strong><span>Every result is bookable</span></div><div><strong>Instant confirmation</strong><span>Pay and it’s yours</span></div></section>
  <section class="section"><div class="section-heading"><div><span class="eyebrow">Spaces near you</span><h2>Gather somewhere good.</h2></div><p>From birthday parties to board meetings, discover maintained spaces with the details already answered.</p></div><div class="card-grid">${spaces.filter(space => availability(space).available).slice(0,3).map(spaceCard).join("")}</div></section>
  <section class="section how"><span class="eyebrow">How it works</span><h2>From idea to booked—without the back-and-forth.</h2><div class="step-grid"><div><span class="step-number">1</span><h3>See real availability</h3><p>Search for a date and time. Every space in the results is ready to book.</p></div><div><span class="step-number">2</span><h3>Choose your extras</h3><p>See what is included and add only the available extras you actually need.</p></div><div><span class="step-number">3</span><h3>Pay and confirm</h3><p>Secure payment confirms the booking immediately—no approval wait or phone call.</p></div></div></section>
  <section class="host-cta"><div><span class="eyebrow">Built for venue teams</span><h2>Less admin. More bookings.</h2><p>Keep bookings, payments, documents and access instructions together—so owners, managers and booking staff always know what comes next.</p></div><button class="button button-dark" data-route="host">See how it helps →</button></section>`;
}

function explorePage() {
  const selectedDate = new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });
  const availableSpaces = spaces.filter(space => availability(space).available);
  return `<section class="page-hero"><span class="eyebrow">Calgary venues and spaces</span><h1>Find a space that fits.</h1><p>Browse transparent prices and live availability from local halls and venue operators across the city.</p><div class="instant-book-note"><strong>✓ Ready to book</strong><span>Only spaces available for your selected date, time and group size appear here.</span></div></section>
  <div class="filter-bar"><button class="filter-chip active">All spaces</button><button class="filter-chip">Community halls</button><button class="filter-chip">Sports</button><button class="filter-chip">Meeting rooms</button><button class="filter-chip">Kitchen</button><button class="filter-chip">♿ Accessible</button><button class="filter-chip">More filters</button></div>
  <section class="results-layout"><div class="results-list"><div class="section-heading"><h3>${availableSpaces.length} ${availableSpaces.length === 1 ? "space" : "spaces"} available now</h3><p>${selectedDate} · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)} · ${bookingData.guests} guests</p></div><div class="card-grid">${availableSpaces.map(spaceCard).join("") || `<div class="empty-results"><h3>No instant-book spaces match.</h3><p>Try another time or reduce the guest count.</p><button class="button button-dark" data-route="home">Change search</button></div>`}</div></div><div class="map" aria-label="Decorative map of Calgary"><div class="pin one"><span>$48</span></div><div class="pin two"><span>$29</span></div><div class="pin three"><span>$54</span></div></div></section>`;
}

function venuePage() {
  const space = currentSpace();
  const totals = pricing();
  const slot = availability();
  const selectedDate = new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });
  const busySlots = space.busy.filter(block => block.date === bookingData.date).map(block => `<span class="slot booked">Booked · ${formatHour(block.start)}–${formatHour(block.end)}</span>`).join("");
  return `<div class="venue-wrap"><div class="venue-gallery hall-img"><div class="window one"></div><div class="window two"></div><div class="table"></div><span class="gallery-pill">▦ View 12 photos</span></div>
    <div class="venue-content"><div><div class="venue-title"><span class="eyebrow">${space.category}</span><h1>${space.name}</h1><p class="venue-meta"><span class="rating">★ 4.9</span> · ${space.area} · Live availability</p></div>
      <div class="feature-row"><span>♙ Up to ${space.capacity} guests</span><span>♿ Step-free access</span><span>▣ Add-ons available</span><span>Ⓟ Free parking</span></div>
      <div class="content-block"><h3>A bright, flexible hall for the whole neighbourhood</h3><p>Host a celebration, workshop, class or community meeting in a warm, versatile room. Tables and chairs are included, with a commercial-style kitchen available as an optional add-on.</p></div>
      <div class="content-block"><h3>Availability for ${selectedDate}</h3><div class="slot-row"><span class="slot available">✓ Open 8:00 AM–11:00 PM</span>${busySlots}<span class="slot ${slot.available ? "selected" : "booked"}">${slot.available ? "✓ Available" : "Not available"} · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}</span></div><p class="block-note">Green times are available to book immediately. Times shown include required setup and cleanup buffers.</p></div>
      <div class="content-block"><h3>Included with every booking</h3><div class="amenities included"><span>✓ 15 round tables</span><span>✓ 120 chairs</span><span>✓ Wi-Fi</span><span>✓ Free parking</span><span>✓ Accessible washroom</span><span>✓ Coat room</span></div></div>
      <div class="content-block"><h3>Optional add-ons</h3><p>Choose these during booking. Availability is checked for your selected date.</p><div class="addon-preview-grid">${addonCatalog.slice(0, 4).map(item => `<div class="addon-preview"><div><strong>${item.name}</strong><small>${item.description}</small></div><span>+${money(item.price)}</span></div>`).join("")}</div></div>
      <div class="content-block"><h3>Good to know</h3><p>Music is welcome until 11:00 PM. Alcohol requires a liquor licence and proof of insurance. Candles and confetti are not permitted. Setup and cleanup time must be included in your booking.</p></div>
    </div>
    <aside class="booking-card"><div class="booking-price"><strong>${money(space.price)}</strong><span>/ hour</span></div><h3>Choose a date and time</h3><div class="booking-field"><label>Date<input id="venue-date" type="date" value="${bookingData.date}"></label><label>Guests<input id="venue-guests" type="number" value="${bookingData.guests}" min="1" max="${space.capacity}"></label></div><div class="booking-field"><label>Start<input id="venue-start" type="time" value="${bookingData.start}"></label><label>End<input id="venue-end" type="time" value="${bookingData.end}"></label></div><div class="availability-status ${slot.available ? "available" : "unavailable"}"><span>${slot.available ? "✓" : "!"}</span><div><strong>${slot.available ? "This time is available" : "This time is unavailable"}</strong><small>${slot.message}</small></div></div><div class="price-lines"><div class="price-line"><span>${durationHours()} hours × ${money(space.price)}</span><span>${money(totals.rental)}</span></div><div class="price-line"><span>Optional add-ons</span><span>${totals.addons ? money(totals.addons) : "Choose next"}</span></div><div class="price-line"><span>GST</span><span>${money(totals.tax)}</span></div><div class="price-line total"><span>Rental total</span><span>${money(totals.rentalTotal)}</span></div><div class="price-line"><span>Refundable deposit</span><span>${money(totals.deposit)}</span></div></div><button class="button button-green button-wide" id="book-space" ${slot.available ? "" : "disabled"}>${slot.available ? "Book now" : "Choose another time"}</button><p class="fine-print">${slot.available ? "Your time is held for 10 minutes at checkout. Payment confirms it instantly." : "Choose another available time or date."}</p></aside></div></div>`;
}

function bookingPage() {
  if (bookingStep === 4) return successPage();
  const labels = ["Event details", "Add-ons", "Review & pay", "Confirmed"];
  return `<section class="booking-page"><div class="booking-shell"><button class="back-link" data-space="${currentSpace().id}">← Back to ${currentSpace().name}</button><div class="hold-notice"><strong>✓ Held for 10 minutes</strong><span>${formatTime(bookingData.start)}–${formatTime(bookingData.end)} is reserved while you finish checkout.</span></div><div class="progress">${labels.map((label,i)=>`<div class="progress-step ${i < bookingStep ? "active" : ""}">${label}</div>`).join("")}</div>${bookingStep === 1 ? eventForm() : bookingStep === 2 ? addonForm() : reviewForm()}</div></section>`;
}

function summaryCard() {
  const totals = pricing();
  const selectedAddons = addonCatalog.filter(item => bookingData.addons.includes(item.id));
  return `<aside class="summary-card"><div class="mini-space"></div><h3>${currentSpace().name}</h3><p>${new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday:"long", month:"long", day:"numeric" })}<br>${formatTime(bookingData.start)}–${formatTime(bookingData.end)} · ${bookingData.guests} guests</p><div class="summary-available">✓ Available · Instant book</div><div class="price-lines"><div class="price-line"><span>Space rental</span><span>${money(totals.rental)}</span></div>${selectedAddons.map(item => `<div class="price-line"><span>${item.name}</span><span>${money(item.price)}</span></div>`).join("")}<div class="price-line"><span>GST</span><span>${money(totals.tax)}</span></div><div class="price-line total"><span>Rental total</span><span>${money(totals.rentalTotal)}</span></div><div class="price-line"><span>Refundable deposit</span><span>${money(totals.deposit)}</span></div><div class="price-line due"><span>Due now</span><span>${money(totals.dueNow)}</span></div></div></aside>`;
}
function eventForm() { return `<div class="booking-panel"><div class="form-card"><h2>Tell us about your event.</h2><p>Your selected time is available. These details create the booking record and help apply the venue rules.</p><form id="event-form"><div class="form-grid"><div class="form-group"><label for="event-type">Event type</label><select id="event-type"><option>${bookingData.event}</option><option>Meeting or workshop</option><option>Class or program</option><option>Wedding or reception</option></select></div><div class="form-group"><label for="headcount">Expected guests</label><input id="headcount" type="number" value="${bookingData.guests}" min="1" max="${currentSpace().capacity}" required></div><div class="form-group"><label for="name">Your name</label><input id="name" value="Alex Morgan" required></div><div class="form-group"><label for="email">Email address</label><input id="email" type="email" value="alex@example.com" required></div><div class="form-group full"><label for="details">Anything the venue should know?</label><textarea id="details" rows="4" placeholder="Tell us about setup, activities, or special requirements…">Family birthday dinner with music and a catered buffet.</textarea></div></div><button class="button button-green" type="submit">Continue to add-ons →</button></form></div>${summaryCard()}</div>`; }
function addonForm() { return `<div class="booking-panel"><div class="form-card"><h2>Choose what you need.</h2><p>Included items cost nothing. Select any available optional add-ons; anything unavailable for this booking is clearly marked.</p><div class="included-panel"><strong>Included at no extra charge</strong><div class="amenities included"><span>✓ Tables & chairs</span><span>✓ Wi-Fi</span><span>✓ Parking</span><span>✓ Accessible washroom</span></div></div><form id="addon-form"><h3 class="form-subheading">Optional add-ons</h3><div class="option-list">${addonCatalog.map(item => `<label class="option ${item.available ? "" : "unavailable"}"><span><input class="addon-checkbox" type="checkbox" value="${item.id}" ${bookingData.addons.includes(item.id) ? "checked" : ""} ${item.available ? "" : "disabled"}> <span class="option-copy"><strong>${item.name}</strong><small>${item.description}</small></span></span><span class="option-price">${item.available ? `+${money(item.price)}` : "Not available"}</span></label>`).join("")}</div><button class="button button-light" type="button" id="booking-back">← Back</button> <button class="button button-green" type="submit">Review and pay →</button></form></div>${summaryCard()}</div>`; }
function reviewForm() { const totals = pricing(); const selectedAddons = addonCatalog.filter(item => bookingData.addons.includes(item.id)); return `<div class="booking-panel"><div class="form-card"><h2>Review and pay.</h2><p>The system rechecked the calendar. Your time is still available and will be confirmed immediately after payment.</p><div class="content-block"><h3>Event details</h3><p><strong>${bookingData.event}</strong><br>${bookingData.guests} guests · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}</p></div><div class="content-block"><h3>Selected add-ons</h3><p>${selectedAddons.length ? selectedAddons.map(item => `✓ ${item.name}`).join("<br>") : "No optional add-ons selected."}</p></div><div class="payment-panel"><div><span class="secure-icon">🔒</span><strong>Secure card payment</strong><small>Card details are handled securely by Stripe.</small></div><div class="mock-card-field">Card number &nbsp; •••• •••• •••• 4242</div><div class="mock-card-row"><span>Expiry &nbsp; 12/29</span><span>CVC &nbsp; •••</span></div><p class="prototype-note">Prototype only — no real payment will be processed.</p></div><label class="option terms"><span><input id="agree" type="checkbox" required> &nbsp; I agree to the venue rules and cancellation policy.</span></label><div style="margin-top:24px"><button class="button button-light" id="booking-back">← Back</button> <button class="button button-green" id="confirm-booking">Pay ${money(totals.dueNow)} & confirm</button></div></div>${summaryCard()}</div>`; }
function successPage() { const totals = pricing(); return `<div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Booking BKG-1048</span><h2>You’re booked.</h2><span class="status-pill confirmed">Confirmed</span><p>${currentSpace().name} is reserved for ${new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday:"long", month:"long", day:"numeric" })}, ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}.</p><p><strong>Payment:</strong> ${money(totals.dueNow)} paid, including the ${money(totals.deposit)} refundable deposit.</p><p>A receipt, calendar invitation and secure booking-management link were sent to alex@example.com.</p><button class="button button-dark" data-route="home">Back to home</button></div>`; }

function dashboardPage() {
  return `<section class="dashboard"><aside class="sidebar"><div class="brand"><span class="brand-mark"><span></span><span></span><span></span></span><span>gather</span></div><nav class="side-nav"><button class="active">▦ Overview</button><button>◷ Bookings</button><button>▤ Calendar</button><button>◇ Payments</button><button>▱ Spaces</button><button>⚙ Settings</button></nav><div class="sidebar-bottom">Ridgeview Community Association<br>Switch organization⌄</div></aside><div class="dashboard-main"><header class="dash-head"><div><span class="eyebrow">Friday, September 25</span><h1>Good morning, Jamie.</h1></div><div class="avatar">JM</div></header>
    <div class="metric-grid"><div class="metric"><span>Needs your attention</span><strong>7</strong><em>3 new since Monday</em></div><div class="metric"><span>Upcoming bookings</span><strong>12</strong><em>Next 30 days</em></div><div class="metric"><span>Awaiting payment</span><strong>$842</strong><em>Across 4 bookings</em></div><div class="metric"><span>Deposits to review</span><strong>2</strong><em>Oldest: 3 days</em></div></div>
    <div class="action-grid"><div class="dash-card"><h3>What needs attention</h3><div class="task-row"><span class="task-icon">✦</span><div><p>New confirmed booking</p><small>Alex Morgan · Oct 17 · Birthday celebration</small></div><button data-task="Booking opened">View</button></div><div class="task-row"><span class="task-icon">$</span><div><p>Verify e-Transfer</p><small>CS-1042 · Priya Shah · $420</small></div><button data-task="Payment matching opened">Match</button></div><div class="task-row"><span class="task-icon">▱</span><div><p>Insurance document missing</p><small>CS-1039 · Event in 8 days</small></div><button data-task="Reminder sent">Remind</button></div><div class="task-row"><span class="task-icon">✓</span><div><p>Damage deposit review</p><small>CS-1033 · Event completed Sep 21</small></div><button data-task="Deposit review opened">Review</button></div></div>
      <div class="dash-card"><h3>Next 7 days</h3><div class="calendar-list"><div class="event"><strong>Yoga class</strong><small>Sat · 9:00–11:00</small></div><div class="event sun"><strong>Singh reception</strong><small>Sat · 4:00–11:00</small></div><div class="event coral"><strong>Board meeting</strong><small>Mon · 6:30–8:30</small></div><div class="event"><strong>Kids art club</strong><small>Wed · 4:00–6:00</small></div></div></div></div></div></section>`;
}

function hostPage() {
  return `<div class="host-page"><section class="host-hero"><div class="host-copy"><span class="eyebrow">For venue operators</span><h1>Your bookings, finally in one place.</h1><p>Replace the shared inbox, calendar and payment spreadsheet with one calm weekly workflow your whole venue team can use.</p><button class="button button-dark" id="pilot-interest">Join the Calgary pilot →</button></div><div class="host-visual"><div class="dashboard-preview"><div class="preview-top"><strong>Weekly overview</strong><span>● Live</span></div><div class="preview-boxes"><div class="preview-box"></div><div class="preview-box"></div><div class="preview-box"></div></div><div class="preview-line short"></div><div class="preview-row"></div><div class="preview-row"></div><div class="preview-row"></div></div></div></section><section class="host-features"><div class="section-heading"><div><span class="eyebrow">Operator-friendly by design</span><h2>Spend less time chasing details.</h2></div><p>Gather keeps each booking moving and shows exactly what needs attention next.</p></div><div class="card-grid"><div class="feature-card"><div class="feature-icon">◷</div><h3>One calendar, no conflicts</h3><p>See checkout holds and confirmed bookings together. Setup and cleanup buffers are built in.</p></div><div class="feature-card"><div class="feature-icon">$</div><h3>Money you can reconcile</h3><p>Track cards, e-Transfers, cash, rent and damage deposits without rebuilding a spreadsheet.</p></div><div class="feature-card"><div class="feature-icon">✉</div><h3>Instructions, right on time</h3><p>Automatically send reminders and securely reveal access details only when renters need them.</p></div></div></section></div>`;
}

function render(route = location.hash.slice(1) || "home") {
  const page = route === "explore" ? explorePage() : route === "venue" ? venuePage() : route === "booking" ? bookingPage() : route === "dashboard" ? dashboardPage() : route === "host" ? hostPage() : homePage();
  app.innerHTML = page;
  window.scrollTo({ top: 0, behavior: "instant" });
  bindPageEvents();
}

function navigate(route) { location.hash = route; }

function bindPageEvents() {
  document.querySelectorAll("[data-route]").forEach(el => el.addEventListener("click", () => navigate(el.dataset.route)));
  document.querySelectorAll("[data-space]").forEach(el => el.addEventListener("click", () => { if (selectedSpaceId !== el.dataset.space) bookingData.addons = []; selectedSpaceId = el.dataset.space; navigate("venue"); }));
  document.querySelector("#home-search")?.addEventListener("submit", e => {
    e.preventDefault();
    bookingData.date = document.querySelector("#date").value;
    bookingData.start = document.querySelector("#search-start").value;
    bookingData.end = document.querySelector("#search-end").value;
    bookingData.guests = Number(document.querySelector("#guests").value);
    const start = timeAsHours(bookingData.start);
    const end = timeAsHours(bookingData.end);
    if (!bookingData.date || !Number.isFinite(start) || !Number.isFinite(end) || end <= start) { showToast("Choose a valid date and time."); return; }
    navigate("explore");
  });
  ["#venue-date", "#venue-guests", "#venue-start", "#venue-end"].forEach(selector => document.querySelector(selector)?.addEventListener("change", () => {
    bookingData.date = document.querySelector("#venue-date").value;
    bookingData.guests = Number(document.querySelector("#venue-guests").value);
    bookingData.start = document.querySelector("#venue-start").value;
    bookingData.end = document.querySelector("#venue-end").value;
    render("venue");
  }));
  document.querySelector("#book-space")?.addEventListener("click", () => {
    bookingData.date = document.querySelector("#venue-date").value;
    bookingData.guests = Number(document.querySelector("#venue-guests").value);
    bookingData.start = document.querySelector("#venue-start").value;
    bookingData.end = document.querySelector("#venue-end").value;
    if (!availability().available) { showToast(availability().message); return; }
    bookingStep = 1;
    navigate("booking");
  });
  document.querySelector("#event-form")?.addEventListener("submit", e => { e.preventDefault(); bookingData.guests = document.querySelector("#headcount").value; bookingData.event = document.querySelector("#event-type").value; bookingStep = 2; render("booking"); });
  document.querySelector("#addon-form")?.addEventListener("submit", e => { e.preventDefault(); bookingData.addons = [...document.querySelectorAll(".addon-checkbox:checked")].map(input => input.value); bookingStep = 3; render("booking"); });
  document.querySelector("#booking-back")?.addEventListener("click", () => { bookingStep -= 1; render("booking"); });
  document.querySelector("#confirm-booking")?.addEventListener("click", () => { if (!document.querySelector("#agree").checked) { showToast("Please accept the venue rules to continue."); return; } if (!availability().available) { showToast("That time is no longer available. Please choose another time."); navigate("venue"); return; } bookingStep = 4; render("booking"); });
  document.querySelectorAll(".filter-chip").forEach(chip => chip.addEventListener("click", () => { document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active")); chip.classList.add("active"); showToast(`${chip.textContent} filter applied`); }));
  document.querySelectorAll("[data-task]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.task)));
  document.querySelector("#pilot-interest")?.addEventListener("click", () => showToast("Pilot interest captured — this is a prototype."));
}

document.querySelectorAll("[data-route]").forEach(el => el.addEventListener("click", () => navigate(el.dataset.route)));
document.querySelector(".mobile-menu").addEventListener("click", e => { const header = document.querySelector(".site-header"); header.classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", header.classList.contains("open")); });
window.addEventListener("hashchange", () => render());
render();
