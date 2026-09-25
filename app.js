const spaces = [
  { id: "ridgeview", name: "Ridgeview Community Hall", area: "Northwest Calgary", category: "Community hall", price: 48, capacity: 120, image: "hall-img", amenities: ["Kitchen", "Accessible", "120 guests"] },
  { id: "crestwood", name: "Crestwood Community Rink", area: "Southwest Calgary", category: "Rink & court", price: 36, capacity: 60, image: "rink-img", amenities: ["Change rooms", "Lighting", "Parking"] },
  { id: "sunroom", name: "The Sunroom", area: "Bridgeland", category: "Meeting room", price: 29, capacity: 24, image: "meeting-img", amenities: ["Projector", "Wi-Fi", "24 guests"] },
  { id: "oak", name: "Oak & Elm Hall", area: "Southeast Calgary", category: "Community hall", price: 54, capacity: 150, image: "hall-img", amenities: ["Stage", "Kitchen", "150 guests"] }
];

const app = document.querySelector("#app");
const toast = document.querySelector(".toast");
let bookingStep = 1;
let bookingData = { date: "2026-10-17", start: "18:00", end: "23:00", guests: 60, event: "Birthday celebration", addons: ["Kitchen access"] };

const money = value => new Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD", minimumFractionDigits: 0 }).format(value);

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2400);
}

function spaceCard(space) {
  return `<button class="space-card" data-space="${space.id}" aria-label="View ${space.name}">
    <div class="card-image ${space.image}"><span class="card-tag">${space.category}</span></div>
    <div class="card-body"><div class="card-topline"><div><h3>${space.name}</h3><p>${space.area}</p></div><div class="price"><strong>${money(space.price)}</strong><br><small>/ hour</small></div></div>
    <div class="amenities">${space.amenities.map(item => `<span>${item}</span>`).join("")}</div></div>
  </button>`;
}

function homePage() {
  return `<section class="hero">
    <div class="hero-copy"><span class="eyebrow">Made for Calgary communities</span><h1>Room for your next big thing.</h1><p>Find welcoming local spaces with clear prices, real availability, and all the details you need—before you send a request.</p>
      <form class="search-panel" id="home-search">
        <div class="search-field"><label for="what">What are you planning?</label><select id="what"><option>Celebration or gathering</option><option>Sports or recreation</option><option>Meeting or workshop</option><option>Food preparation</option></select></div>
        <div class="search-field"><label for="date">When?</label><input id="date" type="date" value="2026-10-17" /></div>
        <div class="search-field"><label for="guests">Guests</label><select id="guests"><option>1–25</option><option selected>26–75</option><option>76–150</option><option>150+</option></select></div>
        <button class="button button-dark" type="submit">Search →</button>
      </form>
    </div>
    <div class="hero-art" aria-label="Illustration of a welcoming community hall"><div class="hall-scene"><div class="hall-wall"></div><div class="window one"></div><div class="window two"></div><div class="banner"></div><div class="table"></div><div class="chair left"></div><div class="chair right"></div><div class="plant"></div></div><div class="art-badge"><span class="check-dot">✓</span><div><strong>Everything in one place</strong><small>Availability · pricing · house rules</small></div></div></div>
  </section>
  <section class="trust-strip"><div><strong>Clear totals</strong><span>No surprise fees</span></div><div><strong>Local spaces</strong><span>Run by your community</span></div><div><strong>Simple requests</strong><span>No account required</span></div></section>
  <section class="section"><div class="section-heading"><div><span class="eyebrow">Spaces near you</span><h2>Gather somewhere good.</h2></div><p>From birthday parties to board meetings, discover maintained spaces with the details already answered.</p></div><div class="card-grid">${spaces.slice(0,3).map(spaceCard).join("")}</div></section>
  <section class="section how"><span class="eyebrow">How it works</span><h2>From idea to booked—without the back-and-forth.</h2><div class="step-grid"><div><span class="step-number">1</span><h3>Find your fit</h3><p>Compare capacity, amenities, availability and the full price in one view.</p></div><div><span class="step-number">2</span><h3>Send one request</h3><p>Share the event details once. We make sure the venue gets everything it needs.</p></div><div><span class="step-number">3</span><h3>Know what’s next</h3><p>Follow a clear status from review to payment, confirmation and event access.</p></div></div></section>
  <section class="host-cta"><div><span class="eyebrow">Built for volunteer teams</span><h2>Less admin. More community.</h2><p>Keep requests, payments, documents and access instructions together—so the next volunteer can pick up where you left off.</p></div><button class="button button-dark" data-route="host">See how it helps →</button></section>`;
}

function explorePage() {
  return `<section class="page-hero"><span class="eyebrow">Calgary community spaces</span><h1>Find a space that fits.</h1><p>Browse transparent prices and current availability from community-run venues across the city.</p></section>
  <div class="filter-bar"><button class="filter-chip active">All spaces</button><button class="filter-chip">Community halls</button><button class="filter-chip">Sports</button><button class="filter-chip">Meeting rooms</button><button class="filter-chip">Kitchen</button><button class="filter-chip">♿ Accessible</button><button class="filter-chip">More filters</button></div>
  <section class="results-layout"><div class="results-list"><div class="section-heading"><h3>4 spaces available</h3><p>Saturday, October 17 · 26–75 guests</p></div><div class="card-grid">${spaces.map(spaceCard).join("")}</div></div><div class="map" aria-label="Decorative map of Calgary"><div class="pin one"><span>$48</span></div><div class="pin two"><span>$29</span></div><div class="pin three"><span>$54</span></div></div></section>`;
}

function venuePage() {
  const hourly = 48 * 5;
  return `<div class="venue-wrap"><div class="venue-gallery hall-img"><div class="window one"></div><div class="window two"></div><div class="table"></div><span class="gallery-pill">▦ View 12 photos</span></div>
    <div class="venue-content"><div><div class="venue-title"><span class="eyebrow">Community hall</span><h1>Ridgeview Community Hall</h1><p class="venue-meta"><span class="rating">★ 4.9</span> · Northwest Calgary · Availability updated today</p></div>
      <div class="feature-row"><span>♙ Up to 120 guests</span><span>♿ Step-free access</span><span>▣ Full kitchen</span><span>Ⓟ Free parking</span></div>
      <div class="content-block"><h3>A bright, flexible hall for the whole neighbourhood</h3><p>Host a celebration, workshop, class or community meeting in a warm, versatile room. Tables and chairs are included, with a commercial-style kitchen and a small stage available.</p></div>
      <div class="content-block"><h3>What’s included</h3><div class="amenities"><span>15 round tables</span><span>120 chairs</span><span>Wi-Fi</span><span>Projector screen</span><span>Accessible washroom</span><span>Coat room</span></div></div>
      <div class="content-block"><h3>Good to know</h3><p>Music is welcome until 11:00 PM. Alcohol requires a liquor licence and proof of insurance. Candles and confetti are not permitted. Setup and cleanup time must be included in your request.</p></div>
    </div>
    <aside class="booking-card"><div class="booking-price"><strong>${money(48)}</strong><span>/ hour</span></div><h3>Check your price</h3><div class="booking-field"><label>Date<input id="venue-date" type="date" value="${bookingData.date}"></label><label>Guests<input id="venue-guests" type="number" value="${bookingData.guests}" min="1" max="120"></label></div><div class="booking-field"><label>Start<input id="venue-start" type="time" value="${bookingData.start}"></label><label>End<input id="venue-end" type="time" value="${bookingData.end}"></label></div><div class="price-lines"><div class="price-line"><span>5 hours × $48</span><span>${money(hourly)}</span></div><div class="price-line"><span>Kitchen access</span><span>${money(45)}</span></div><div class="price-line"><span>GST</span><span>${money(14.25)}</span></div><div class="price-line total"><span>Rental total</span><span>${money(299.25)}</span></div><div class="price-line"><span>Refundable deposit</span><span>${money(300)}</span></div></div><button class="button button-green button-wide" id="request-space">Request this space</button><p class="fine-print">You won’t be charged yet. The volunteer team usually replies within 2 business days.</p></aside></div></div>`;
}

function bookingPage() {
  if (bookingStep === 4) return successPage();
  const labels = ["Your event", "Add-ons", "Review", "Done"];
  return `<section class="booking-page"><div class="booking-shell"><button class="back-link" data-space="ridgeview">← Back to Ridgeview Hall</button><div class="progress">${labels.map((label,i)=>`<div class="progress-step ${i < bookingStep ? "active" : ""}">${label}</div>`).join("")}</div>${bookingStep === 1 ? eventForm() : bookingStep === 2 ? addonForm() : reviewForm()}</div></section>`;
}

function summaryCard() {
  return `<aside class="summary-card"><div class="mini-space"></div><h3>Ridgeview Community Hall</h3><p>${new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday:"long", month:"long", day:"numeric" })}<br>${bookingData.start}–${bookingData.end} · ${bookingData.guests} guests</p><div class="price-lines"><div class="price-line"><span>Rental & add-ons</span><span>$285</span></div><div class="price-line"><span>GST</span><span>$14.25</span></div><div class="price-line total"><span>Total</span><span>$299.25</span></div><div class="price-line"><span>Refundable deposit</span><span>$300</span></div></div></aside>`;
}
function eventForm() { return `<div class="booking-panel"><div class="form-card"><h2>Tell us about your event.</h2><p>This helps the volunteer team make a quick, confident decision.</p><form id="event-form"><div class="form-grid"><div class="form-group"><label for="event-type">Event type</label><select id="event-type"><option>${bookingData.event}</option><option>Meeting or workshop</option><option>Class or program</option><option>Wedding or reception</option></select></div><div class="form-group"><label for="headcount">Expected guests</label><input id="headcount" type="number" value="${bookingData.guests}" min="1" max="120" required></div><div class="form-group"><label for="name">Your name</label><input id="name" value="Alex Morgan" required></div><div class="form-group"><label for="email">Email address</label><input id="email" type="email" value="alex@example.com" required></div><div class="form-group full"><label for="details">Anything the venue should know?</label><textarea id="details" rows="4" placeholder="Tell us about setup, activities, or special requirements…">Family birthday dinner with music and a catered buffet.</textarea></div></div><button class="button button-green" type="submit">Continue to add-ons →</button></form></div>${summaryCard()}</div>`; }
function addonForm() { const options=[['Kitchen access','$45'],['Chair & table setup','$80'],['Projector & screen','$25'],['End-of-event cleaning','$110']]; return `<div class="booking-panel"><div class="form-card"><h2>Make the space yours.</h2><p>Choose any extras you would like included in your request.</p><form id="addon-form"><div class="option-list">${options.map(([name,price],i)=>`<label class="option"><span><input type="checkbox" ${i===0?'checked':''} value="${name}"> &nbsp;<strong>${name}</strong></span><span>${price}</span></label>`).join('')}</div><button class="button button-light" type="button" id="booking-back">← Back</button> <button class="button button-green" type="submit">Review request →</button></form></div>${summaryCard()}</div>`; }
function reviewForm() { return `<div class="booking-panel"><div class="form-card"><h2>Everything look right?</h2><p>You are sending a request—not making an instant booking. No payment is due until the venue approves.</p><div class="content-block"><h3>Event details</h3><p><strong>${bookingData.event}</strong><br>${bookingData.guests} guests · Family birthday dinner with music and a catered buffet.</p></div><div class="content-block"><h3>Selected add-ons</h3><p>✓ Kitchen access</p></div><label class="option"><span><input id="agree" type="checkbox" required> &nbsp; I agree to the venue rules and cancellation policy.</span></label><div style="margin-top:24px"><button class="button button-light" id="booking-back">← Back</button> <button class="button button-green" id="submit-request">Send booking request</button></div></div>${summaryCard()}</div>`; }
function successPage() { return `<div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Request CS-1048</span><h2>Your request is in.</h2><span class="status-pill">Awaiting venue review</span><p>Ridgeview Community Association has everything it needs to review your request. Expect a reply within two business days.</p><p><strong>Next:</strong> We sent a secure management link to alex@example.com. No payment is due yet.</p><button class="button button-dark" data-route="home">Back to home</button></div>`; }

function dashboardPage() {
  return `<section class="dashboard"><aside class="sidebar"><div class="brand"><span class="brand-mark"><span></span><span></span><span></span></span><span>gather</span></div><nav class="side-nav"><button class="active">▦ Overview</button><button>◷ Bookings</button><button>▤ Calendar</button><button>◇ Payments</button><button>▱ Spaces</button><button>⚙ Settings</button></nav><div class="sidebar-bottom">Ridgeview Community Association<br>Switch organization⌄</div></aside><div class="dashboard-main"><header class="dash-head"><div><span class="eyebrow">Friday, September 25</span><h1>Good morning, Jamie.</h1></div><div class="avatar">JM</div></header>
    <div class="metric-grid"><div class="metric"><span>Needs your attention</span><strong>7</strong><em>3 new since Monday</em></div><div class="metric"><span>Upcoming bookings</span><strong>12</strong><em>Next 30 days</em></div><div class="metric"><span>Awaiting payment</span><strong>$842</strong><em>Across 4 bookings</em></div><div class="metric"><span>Deposits to review</span><strong>2</strong><em>Oldest: 3 days</em></div></div>
    <div class="action-grid"><div class="dash-card"><h3>What needs attention</h3><div class="task-row"><span class="task-icon">✦</span><div><p>New booking request</p><small>Alex Morgan · Oct 17 · Birthday celebration</small></div><button data-task="Review opened">Review</button></div><div class="task-row"><span class="task-icon">$</span><div><p>Verify e-Transfer</p><small>CS-1042 · Priya Shah · $420</small></div><button data-task="Payment matching opened">Match</button></div><div class="task-row"><span class="task-icon">▱</span><div><p>Insurance document missing</p><small>CS-1039 · Event in 8 days</small></div><button data-task="Reminder sent">Remind</button></div><div class="task-row"><span class="task-icon">✓</span><div><p>Damage deposit review</p><small>CS-1033 · Event completed Sep 21</small></div><button data-task="Deposit review opened">Review</button></div></div>
      <div class="dash-card"><h3>Next 7 days</h3><div class="calendar-list"><div class="event"><strong>Yoga class</strong><small>Sat · 9:00–11:00</small></div><div class="event sun"><strong>Singh reception</strong><small>Sat · 4:00–11:00</small></div><div class="event coral"><strong>Board meeting</strong><small>Mon · 6:30–8:30</small></div><div class="event"><strong>Kids art club</strong><small>Wed · 4:00–6:00</small></div></div></div></div></div></section>`;
}

function hostPage() {
  return `<div class="host-page"><section class="host-hero"><div class="host-copy"><span class="eyebrow">For community spaces</span><h1>Your bookings, finally in one place.</h1><p>Replace the shared inbox, calendar and payment spreadsheet with one calm weekly workflow your whole volunteer team can use.</p><button class="button button-dark" id="pilot-interest">Join the Calgary pilot →</button></div><div class="host-visual"><div class="dashboard-preview"><div class="preview-top"><strong>Weekly overview</strong><span>● Live</span></div><div class="preview-boxes"><div class="preview-box"></div><div class="preview-box"></div><div class="preview-box"></div></div><div class="preview-line short"></div><div class="preview-row"></div><div class="preview-row"></div><div class="preview-row"></div></div></div></section><section class="host-features"><div class="section-heading"><div><span class="eyebrow">Volunteer-friendly by design</span><h2>Spend less time chasing details.</h2></div><p>Gather keeps each booking moving and shows exactly what needs attention next.</p></div><div class="card-grid"><div class="feature-card"><div class="feature-icon">◷</div><h3>One calendar, no conflicts</h3><p>See requests, holds and confirmed bookings together. Setup and cleanup buffers are built in.</p></div><div class="feature-card"><div class="feature-icon">$</div><h3>Money you can reconcile</h3><p>Track cards, e-Transfers, cash, rent and damage deposits without rebuilding a spreadsheet.</p></div><div class="feature-card"><div class="feature-icon">✉</div><h3>Instructions, right on time</h3><p>Automatically send reminders and securely reveal access details only when renters need them.</p></div></div></section></div>`;
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
  document.querySelectorAll("[data-space]").forEach(el => el.addEventListener("click", () => navigate("venue")));
  document.querySelector("#home-search")?.addEventListener("submit", e => { e.preventDefault(); navigate("explore"); });
  document.querySelector("#request-space")?.addEventListener("click", () => { bookingData.date = document.querySelector("#venue-date").value; bookingData.guests = document.querySelector("#venue-guests").value; bookingData.start = document.querySelector("#venue-start").value; bookingData.end = document.querySelector("#venue-end").value; bookingStep = 1; navigate("booking"); });
  document.querySelector("#event-form")?.addEventListener("submit", e => { e.preventDefault(); bookingData.guests = document.querySelector("#headcount").value; bookingData.event = document.querySelector("#event-type").value; bookingStep = 2; render("booking"); });
  document.querySelector("#addon-form")?.addEventListener("submit", e => { e.preventDefault(); bookingStep = 3; render("booking"); });
  document.querySelector("#booking-back")?.addEventListener("click", () => { bookingStep -= 1; render("booking"); });
  document.querySelector("#submit-request")?.addEventListener("click", () => { if (!document.querySelector("#agree").checked) { showToast("Please accept the venue rules to continue."); return; } bookingStep = 4; render("booking"); });
  document.querySelectorAll(".filter-chip").forEach(chip => chip.addEventListener("click", () => { document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active")); chip.classList.add("active"); showToast(`${chip.textContent} filter applied`); }));
  document.querySelectorAll("[data-task]").forEach(button => button.addEventListener("click", () => showToast(button.dataset.task)));
  document.querySelector("#pilot-interest")?.addEventListener("click", () => showToast("Pilot interest captured — this is a prototype."));
}

document.querySelectorAll("[data-route]").forEach(el => el.addEventListener("click", () => navigate(el.dataset.route)));
document.querySelector(".mobile-menu").addEventListener("click", e => { const header = document.querySelector(".site-header"); header.classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded", header.classList.contains("open")); });
window.addEventListener("hashchange", () => render());
render();
