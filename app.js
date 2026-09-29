const venueTaxProfileFor = space => ({ id: `TAX-VEN-${space.id.toUpperCase()}`, label: "GST · venue sample profile (5%)", rate: 0.05 });
const gatherTaxProfile = { id: "TAX-GATHER-CA", label: "GST · Gather sample profile (5%)", rate: 0.05 };

const spaces = [
  {
    id: "ridgeview", name: "Ridgeview Community Hall", operator: "Ridgeview Community Association", invoicePrefix: "RCA", area: "Northwest Calgary", category: "Community hall", price: 48, capacity: 120, deposit: 300, rating: 4.7, reviewCount: 86, image: "hall-img",
    amenities: ["Kitchen add-on", "Step-free", "120 attendees"], highlights: ["♿ Step-free access", "▣ Add-ons available", "Ⓟ Free parking"], busy: [{ date: "2026-10-17", start: 14, end: 17 }],
    descriptionTitle: "A bright, flexible hall for celebrations and community events",
    description: "Host a celebration, workshop, class, or community meeting in a warm, versatile room. Tables and chairs are included, and commercial-kitchen access can be added at checkout.",
    included: ["15 round tables", "120 chairs", "Wi-Fi", "Free parking", "Accessible washroom", "Coat room"],
    rules: "Music is permitted until 11:00 PM. Alcohol is permitted only when the booking contact meets the venue’s licensing and insurance requirements. Candles and confetti are not permitted.",
    purposePolicy: { allowed: ["birthday-party", "meeting-workshop", "class-program", "wedding-reception", "community-gathering"], approval: ["performance-fundraiser", "other-permitted"] },
    addons: [
      { id: "kitchen", name: "Kitchen access", price: 45, description: "Per booking · ovens, prep counters, and dishwasher", available: true },
      { id: "setup", name: "Table and chair setup", price: 80, description: "Per booking · room set before arrival", available: true },
      { id: "av", name: "Projector and AV kit", price: 25, description: "Per booking · projector, screen, and HDMI cable", available: true },
      { id: "cleaning", name: "Post-event cleaning", price: 110, description: "Per booking · standard floor and surface cleaning", available: true },
      { id: "lighting", name: "Stage lighting", price: 60, description: "Unavailable for the selected date", available: false }
    ]
  },
  {
    id: "crestwood", name: "Crestwood Community Rink", operator: "Crestwood Community Association", invoicePrefix: "CCA", area: "Southwest Calgary", category: "Rink and court", price: 36, capacity: 60, deposit: 150, rating: 4.6, reviewCount: 42, image: "rink-img",
    amenities: ["Change rooms", "Free parking", "60 attendees"], highlights: ["▣ Two change rooms", "◈ Equipment add-ons", "Ⓟ Free parking"], busy: [{ date: "2026-10-17", start: 9, end: 12 }],
    descriptionTitle: "An indoor rink for practices, games, and active events",
    description: "Book the rink for team practices, recreation sessions, or small tournaments. Standard nets, player benches, and two change rooms are included in the hourly rate.",
    included: ["Standard nets", "Player benches", "2 change rooms", "Spectator seating", "Washrooms", "Free parking"],
    rules: "Indoor athletic footwear is required for dry-floor bookings. Glass, smoking, and outside alcohol are not permitted. The space must be left clear of equipment at the end of the booking.",
    purposePolicy: { allowed: ["sports-recreation", "class-program", "community-gathering"], approval: ["birthday-party", "meeting-workshop", "performance-fundraiser", "other-permitted"] },
    addons: [
      { id: "rink-lighting", name: "Enhanced rink lighting", price: 40, description: "Per booking · full competition lighting", available: true },
      { id: "equipment", name: "Equipment package", price: 55, description: "Per booking · cones, pinnies, and training aids", available: true },
      { id: "scoreboard", name: "Scoreboard access", price: 25, description: "Per booking · controller included", available: true },
      { id: "attendant", name: "Facility attendant", price: 75, description: "Per booking · opening, setup, and lockup support", available: true },
      { id: "party-room", name: "Private party room", price: 60, description: "Unavailable for the selected date", available: false }
    ]
  },
  {
    id: "sunroom", name: "The Sunroom", operator: "The Sunroom Calgary Ltd.", invoicePrefix: "SUN", area: "Bridgeland", category: "Meeting room", price: 29, capacity: 24, deposit: 0, rating: 4.9, reviewCount: 31, image: "meeting-img",
    amenities: ["Projector included", "Wi-Fi", "24 attendees"], highlights: ["▣ Projector included", "⌁ High-speed Wi-Fi", "♿ Accessible washroom"], busy: [],
    descriptionTitle: "A light-filled room for meetings, workshops, and small classes",
    description: "A quiet, professional space with flexible seating, fast Wi-Fi, a whiteboard, and a projector included in the hourly rate.",
    included: ["Projector and screen", "Wi-Fi", "Whiteboard", "24 chairs", "6 tables", "Accessible washroom"],
    rules: "Food and non-alcoholic drinks are welcome. Keep noise within the room, remove confidential materials, and return furniture to the standard layout before leaving.",
    purposePolicy: { allowed: ["meeting-workshop", "class-program", "community-gathering"], approval: ["birthday-party", "other-permitted"] },
    addons: [
      { id: "coffee", name: "Coffee and tea service", price: 35, description: "Per booking · service for up to 24 attendees", available: true },
      { id: "conference", name: "Video-conferencing kit", price: 20, description: "Per booking · camera, microphone, and speaker", available: true },
      { id: "printing", name: "Workshop printing", price: 15, description: "Per booking · up to 50 black-and-white pages", available: true },
      { id: "after-hours", name: "After-hours access", price: 45, description: "Per booking · access outside staffed hours", available: true },
      { id: "catering", name: "Catering coordination", price: 40, description: "Unavailable for the selected date", available: false }
    ]
  },
  {
    id: "oak", name: "Oak & Elm Hall", operator: "Oak & Elm Events Ltd.", invoicePrefix: "OEH", area: "Southeast Calgary", category: "Event hall", price: 54, capacity: 150, deposit: 400, rating: 4.5, reviewCount: 73, image: "hall-img",
    amenities: ["Stage included", "Kitchen add-on", "150 attendees"], highlights: ["▱ Built-in stage", "♿ Accessible entrance", "Ⓟ Free parking"], busy: [{ date: "2026-10-17", start: 18, end: 20 }],
    descriptionTitle: "A spacious event hall with a stage and flexible floor plan",
    description: "Plan a reception, fundraiser, performance, or large workshop with a built-in stage, flexible seating, and optional kitchen and AV services.",
    included: ["Built-in stage", "20 rectangular tables", "150 chairs", "Wi-Fi", "Free parking", "Accessible entrance"],
    rules: "Amplified music must end by 11:00 PM. Alcohol requires the applicable licence and insurance. Decorations must use approved removable fasteners.",
    purposePolicy: { allowed: ["birthday-party", "meeting-workshop", "class-program", "wedding-reception", "performance-fundraiser", "community-gathering"], approval: ["other-permitted"] },
    addons: [
      { id: "oak-kitchen", name: "Commercial kitchen access", price: 55, description: "Per booking · prep area, ovens, and dishwasher", available: true },
      { id: "oak-setup", name: "Table and chair setup", price: 90, description: "Per booking · layout completed before arrival", available: true },
      { id: "oak-av", name: "Sound and projection package", price: 40, description: "Per booking · microphones, speakers, and projector", available: true },
      { id: "oak-cleaning", name: "Post-event cleaning", price: 125, description: "Per booking · standard floor and surface cleaning", available: true },
      { id: "security", name: "Event security", price: 160, description: "Unavailable for the selected date", available: false }
    ]
  }
];

const vendorServiceTypes = [
  { id: "decor", label: "Decorations", description: "Compare décor scope, setup, teardown, style, price, and provider record." },
  { id: "magic", label: "Magic shows", description: "Compare show length, audience size, performance style, price, and reviews." },
  { id: "face-painting", label: "Face painting", description: "Compare artist time, participant capacity, materials, hygiene practices, and reviews." },
  { id: "cake", label: "Cakes & desserts", description: "Compare size, customization, delivery, dietary options, price, and reviews." },
  { id: "catering", label: "Catering", description: "Filter by cuisine, dietary support, allergy-handling practice, serving style, and guest fit." },
  { id: "photo-booth", label: "Photo booths", description: "Compare booth time, staffing, prints, digital galleries, price, and reviews." }
];

const eventPurposes = [
  { id: "birthday-party", label: "Birthday or family celebration", shortLabel: "Celebration", icon: "✦", description: "Birthdays, showers, anniversaries, graduations, and family gatherings.", recommendedServices: ["decor", "cake", "catering", "magic", "face-painting", "photo-booth"], recommendedAddons: { ridgeview: ["kitchen", "setup", "cleaning"], crestwood: ["attendant", "party-room"], sunroom: ["coffee", "after-hours"], oak: ["oak-kitchen", "oak-setup", "oak-av", "oak-cleaning"] } },
  { id: "meeting-workshop", label: "Meeting, training, or workshop", shortLabel: "Meeting", icon: "▦", description: "Board meetings, AGMs, training, workshops, conferences, and networking.", recommendedServices: ["catering"], recommendedAddons: { ridgeview: ["av", "setup"], crestwood: ["attendant"], sunroom: ["coffee", "conference", "printing"], oak: ["oak-setup", "oak-av"] } },
  { id: "class-program", label: "Class or community program", shortLabel: "Class / program", icon: "◫", description: "Education, arts and crafts, clubs, youth programs, or recurring sessions.", recommendedServices: ["catering"], recommendedAddons: { ridgeview: ["setup", "av"], crestwood: ["equipment", "attendant"], sunroom: ["printing", "coffee"], oak: ["oak-setup", "oak-av"] } },
  { id: "wedding-reception", label: "Wedding, ceremony, or reception", shortLabel: "Wedding", icon: "◇", description: "Ceremonies, receptions, rehearsals, and cultural wedding events.", recommendedServices: ["decor", "catering", "cake", "photo-booth"], recommendedAddons: { ridgeview: ["kitchen", "setup", "av", "cleaning"], crestwood: [], sunroom: [], oak: ["oak-kitchen", "oak-setup", "oak-av", "oak-cleaning"] } },
  { id: "sports-recreation", label: "Sport, fitness, or recreation", shortLabel: "Sport / recreation", icon: "◎", description: "Practices, games, tournaments, fitness, dance, and active recreation.", recommendedServices: [], recommendedAddons: { ridgeview: [], crestwood: ["rink-lighting", "equipment", "scoreboard", "attendant"], sunroom: [], oak: [] } },
  { id: "performance-fundraiser", label: "Performance, fundraiser, or public event", shortLabel: "Public event", icon: "▰", description: "Performances, markets, public fundraisers, filming, and ticketed events.", recommendedServices: ["decor", "catering", "photo-booth"], recommendedAddons: { ridgeview: ["setup", "av", "cleaning"], crestwood: ["attendant", "rink-lighting"], sunroom: ["conference", "after-hours"], oak: ["oak-setup", "oak-av", "oak-cleaning", "security"] } },
  { id: "community-gathering", label: "Community or cultural gathering", shortLabel: "Community gathering", icon: "◉", description: "Association events, memorials, religious or cultural gatherings, and local programs.", recommendedServices: ["catering", "decor", "photo-booth"], recommendedAddons: { ridgeview: ["setup", "kitchen", "cleaning"], crestwood: ["attendant"], sunroom: ["coffee", "printing"], oak: ["oak-setup", "oak-kitchen", "oak-cleaning"] } },
  { id: "other-permitted", label: "Other or not sure", shortLabel: "Other use", icon: "+", description: "Describe the activity for venue review, then browse every compatible option.", recommendedServices: [], recommendedAddons: { ridgeview: [], crestwood: [], sunroom: [], oak: [] } }
];

const eventNeedOptions = [
  { id: "food", label: "Food or catering", detail: "Meals, snacks, cake, or beverage service", purposes: ["birthday-party", "meeting-workshop", "class-program", "wedding-reception", "performance-fundraiser", "community-gathering", "other-permitted"] },
  { id: "onsiteCooking", label: "On-site food preparation", detail: "Cooking or reheating in the venue kitchen", purposes: ["birthday-party", "wedding-reception", "community-gathering", "other-permitted"] },
  { id: "alcohol", label: "Alcohol service", detail: "May trigger licence and insurance review", purposes: ["birthday-party", "wedding-reception", "performance-fundraiser", "community-gathering", "other-permitted"] },
  { id: "amplifiedMusic", label: "Amplified music or dancing", detail: "Music, DJ, performance sound, or dance floor", purposes: ["birthday-party", "wedding-reception", "performance-fundraiser", "community-gathering", "other-permitted"] },
  { id: "children", label: "Children attending", detail: "Helps recommend age-appropriate services", purposes: ["birthday-party", "class-program", "sports-recreation", "community-gathering", "other-permitted"] },
  { id: "publicEvent", label: "Public or ticketed event", detail: "May require capacity, safety, and permit review", purposes: ["performance-fundraiser", "community-gathering", "other-permitted"] }
];

const vendorServices = [
  { id: "decor-spruce", serviceType: "decor", category: "Decorations", name: "Essential celebration décor", vendor: "Spruce & Spark", invoicePrefix: "SAS", pricing: { type: "flat", amount: 210 }, rating: 4.8, reviewCount: 143, description: "Backdrop, table accents, delivery, and self-managed teardown", inclusions: ["Backdrop", "Table accents", "Delivery"], active: true, busy: [{ date: "2026-10-17", start: 15, end: 23 }], venueIds: ["ridgeview", "sunroom", "oak"], minGuests: 1, maxGuests: 150, minLeadDays: 5, taxProfile: { id: "TAX-SAS-CA", label: "GST · Spruce & Spark sample profile (5%)", rate: 0.05 } },
  { id: "decor-bright-day", serviceType: "decor", category: "Decorations", name: "Celebration décor package", vendor: "Bright Day Events", invoicePrefix: "BDE", pricing: { type: "flat", amount: 285 }, rating: 4.8, reviewCount: 96, description: "Balloon garland, backdrop, delivery, setup, and teardown", inclusions: ["Balloon garland", "Backdrop", "Setup & teardown"], active: true, busy: [], venueIds: ["ridgeview", "crestwood", "sunroom", "oak"], minGuests: 1, maxGuests: 150, minLeadDays: 7, taxProfile: { id: "TAX-BDE-CA", label: "GST · Bright Day sample profile (5%)", rate: 0.05 } },
  { id: "decor-modern-meadow", serviceType: "decor", category: "Decorations", name: "Signature room styling", vendor: "Modern Meadow Events", invoicePrefix: "MME", pricing: { type: "flat", amount: 410 }, rating: 4.3, reviewCount: 51, description: "Styled backdrop, premium table décor, setup, teardown, and design call", inclusions: ["Design call", "Premium backdrop", "Full setup & teardown"], active: true, busy: [], venueIds: ["ridgeview", "sunroom", "oak"], minGuests: 1, maxGuests: 150, minLeadDays: 10, taxProfile: { id: "TAX-MME-CA", label: "GST · Modern Meadow sample profile (5%)", rate: 0.05 } },

  { id: "magic-prairie", serviceType: "magic", category: "Entertainment", name: "Kids' magic mini-show", vendor: "Prairie Pocket Magic", invoicePrefix: "PPM", pricing: { type: "flat", amount: 275 }, rating: 4.7, reviewCount: 84, description: "40-minute interactive show for up to 50 guests", inclusions: ["40-minute show", "Interactive finale"], active: true, busy: [{ date: "2026-10-17", start: 17, end: 21 }], venueIds: ["ridgeview", "crestwood", "sunroom", "oak"], minGuests: 1, maxGuests: 50, minLeadDays: 3, taxProfile: { id: "TAX-PPM-CA", label: "GST · Prairie Pocket sample profile (5%)", rate: 0.05 } },
  { id: "magic-wonderspark", serviceType: "magic", category: "Entertainment", name: "Family magic show", vendor: "WonderSpark Entertainment", invoicePrefix: "WSE", pricing: { type: "flat", amount: 350 }, rating: 4.9, reviewCount: 128, description: "60-minute interactive show for family celebrations", inclusions: ["60-minute show", "Audience participation", "Small souvenir"], active: true, busy: [], venueIds: ["ridgeview", "crestwood", "sunroom", "oak"], minGuests: 1, maxGuests: 120, minLeadDays: 5, taxProfile: { id: "TAX-WSE-CA", label: "GST · WonderSpark sample profile (5%)", rate: 0.05 } },
  { id: "magic-illusion-works", serviceType: "magic", category: "Entertainment", name: "Stage illusion experience", vendor: "Illusion Works Calgary", invoicePrefix: "IWC", pricing: { type: "flat", amount: 480 }, rating: 4.2, reviewCount: 36, description: "75-minute stage show with sound cues and two performers", inclusions: ["75-minute show", "Two performers", "Sound equipment"], active: true, busy: [], venueIds: ["ridgeview", "oak"], minGuests: 30, maxGuests: 150, minLeadDays: 10, taxProfile: { id: "TAX-IWC-CA", label: "GST · Illusion Works sample profile (5%)", rate: 0.05 } },

  { id: "face-palette-pop", serviceType: "face-painting", category: "Entertainment", name: "One-hour face painting", vendor: "Palette Pop Parties", invoicePrefix: "PPP", pricing: { type: "flat", amount: 190 }, rating: 4.8, reviewCount: 201, description: "One artist for up to 18 participants", inclusions: ["One artist", "Up to 18 participants", "Cosmetic-grade paints"], active: true, busy: [{ date: "2026-10-17", start: 17, end: 22 }], venueIds: ["ridgeview", "crestwood", "sunroom", "oak"], minGuests: 1, maxGuests: 18, minLeadDays: 3, taxProfile: { id: "TAX-PPP-CA", label: "GST · Palette Pop sample profile (5%)", rate: 0.05 } },
  { id: "face-colour-cloud", serviceType: "face-painting", category: "Entertainment", name: "Two-hour face painting", vendor: "Colour Cloud Studio", invoicePrefix: "CCS", pricing: { type: "flat", amount: 240 }, rating: 4.8, reviewCount: 164, description: "One artist for up to 30 participants", inclusions: ["Two hours", "Up to 30 participants", "Hygiene station"], active: true, busy: [], venueIds: ["ridgeview", "crestwood", "sunroom", "oak"], minGuests: 1, maxGuests: 30, minLeadDays: 4, taxProfile: { id: "TAX-CCS-CA", label: "GST · Colour Cloud sample profile (5%)", rate: 0.05 } },
  { id: "face-imagination", serviceType: "face-painting", category: "Entertainment", name: "Two-artist party studio", vendor: "Imagination Faces", invoicePrefix: "IMF", pricing: { type: "flat", amount: 315 }, rating: 4.3, reviewCount: 52, description: "Two artists for up to 60 participants", inclusions: ["Two artists", "Up to 60 participants", "Glitter-free option"], active: true, busy: [], venueIds: ["ridgeview", "crestwood", "oak"], minGuests: 20, maxGuests: 60, minLeadDays: 7, taxProfile: { id: "TAX-IMF-CA", label: "GST · Imagination Faces sample profile (5%)", rate: 0.05 } },

  { id: "cake-sweet-corner", serviceType: "cake", category: "Food & cake", name: "Classic celebration cake", vendor: "Sweet Corner Bakery", invoicePrefix: "SCB", pricing: { type: "flat", amount: 75 }, rating: 4.7, reviewCount: 312, description: "One-tier cake, standard flavours, inscription, and pickup", inclusions: ["Serves 40", "Custom inscription", "Pickup"], active: true, busy: [], venueIds: ["ridgeview", "crestwood", "sunroom", "oak"], minGuests: 1, maxGuests: 40, minLeadDays: 21, dietary: ["Vegetarian"], allergenNote: "Produced in a shared facility that handles common allergens.", taxProfile: { id: "TAX-SCB-CA", label: "GST · Sweet Corner sample profile (5%)", rate: 0.05 } },
  { id: "cake-prairie-sugar", serviceType: "cake", category: "Food & cake", name: "Delivered celebration cake", vendor: "Prairie Sugar Co.", invoicePrefix: "PSC", pricing: { type: "flat", amount: 95 }, rating: 4.8, reviewCount: 186, description: "Custom message, standard design, and local delivery", inclusions: ["Serves 60", "Custom message", "Local delivery"], active: true, busy: [], venueIds: ["ridgeview", "crestwood", "sunroom", "oak"], minGuests: 1, maxGuests: 60, minLeadDays: 7, dietary: ["Vegetarian", "Gluten-aware"], allergenNote: "Gluten-aware recipe available; shared kitchen and cross-contact remain possible.", taxProfile: { id: "TAX-PSC-CA", label: "GST · Prairie Sugar sample profile (5%)", rate: 0.05 } },
  { id: "cake-sugar-stone", serviceType: "cake", category: "Food & cake", name: "Premium themed cake", vendor: "Sugar & Stone Studio", invoicePrefix: "SSS", pricing: { type: "flat", amount: 145 }, rating: 4.3, reviewCount: 87, description: "Two-tier themed cake with delivery and display board", inclusions: ["Serves 75", "Theme consultation", "Delivery"], active: true, busy: [], venueIds: ["ridgeview", "sunroom", "oak"], minGuests: 1, maxGuests: 75, minLeadDays: 14, dietary: ["Vegetarian", "Vegan"], allergenNote: "Vegan option is vendor-reported; confirm allergens and cross-contact directly.", taxProfile: { id: "TAX-SSS-CA", label: "GST · Sugar & Stone sample profile (5%)", rate: 0.05 } },

  { id: "catering-neighbourhood", serviceType: "catering", category: "Catering", name: "Neighbourhood comfort buffet", vendor: "Neighbourhood Kitchen", invoicePrefix: "NKT", pricing: { type: "per_person", amount: 11, minimum: 440 }, rating: 4.8, reviewCount: 214, description: "Budget-friendly buffet or drop-off service", inclusions: ["Two mains", "Two sides", "Disposable serviceware"], active: true, busy: [{ date: "2026-10-17", start: 16, end: 23 }], venueIds: ["ridgeview", "sunroom", "oak"], minGuests: 20, maxGuests: 80, minLeadDays: 5, cuisines: ["Canadian", "Mediterranean"], menuStyles: ["Classic comfort", "Vegetarian-forward"], dietary: ["Vegetarian", "Vegan", "Gluten-aware"], allergyReview: ["gluten", "dairy"], servingStyles: ["Buffet", "Drop-off"], allergenNote: "Ingredient list available; shared kitchen handles common allergens.", deliveryWindow: "60–90 minutes before service", taxProfile: { id: "TAX-NKT-CA", label: "GST · Neighbourhood Kitchen sample profile (5%)", rate: 0.05 } },
  { id: "catering-bow-river", serviceType: "catering", category: "Catering", name: "Family buffet", vendor: "Bow River Catering", invoicePrefix: "BRC", pricing: { type: "per_person", amount: 13, minimum: 520 }, rating: 4.6, reviewCount: 128, description: "Flexible buffet with delivery, setup, and dietary substitutions", inclusions: ["Two mains", "Three sides", "Delivery & buffet setup"], active: true, busy: [], venueIds: ["ridgeview", "crestwood", "sunroom", "oak"], minGuests: 20, maxGuests: 120, minLeadDays: 7, cuisines: ["Canadian", "International"], menuStyles: ["Classic comfort", "Kids-friendly", "Vegetarian-forward"], dietary: ["Vegetarian", "Vegan", "Halal", "Gluten-aware"], allergyReview: ["nut", "gluten", "dairy"], servingStyles: ["Buffet", "Drop-off"], allergenNote: "Vendor reviews allergy requests individually; shared kitchen and cross-contact remain possible.", deliveryWindow: "45–75 minutes before service", taxProfile: { id: "TAX-BRC-CA", label: "GST · Bow River sample profile (5%)", rate: 0.05 } },
  { id: "catering-saffron", serviceType: "catering", category: "Catering", name: "South Asian celebration buffet", vendor: "Saffron Table YYC", invoicePrefix: "STY", pricing: { type: "per_person", amount: 15, minimum: 600 }, rating: 4.6, reviewCount: 93, description: "South Asian buffet with vegetarian and halal menu paths", inclusions: ["Three mains", "Rice & breads", "Buffet setup"], active: true, busy: [], venueIds: ["ridgeview", "sunroom", "oak"], minGuests: 25, maxGuests: 140, minLeadDays: 8, cuisines: ["Indian", "South Asian"], menuStyles: ["South Asian", "Vegetarian-forward"], dietary: ["Vegetarian", "Vegan", "Halal", "Gluten-aware"], allergyReview: ["nut", "gluten", "dairy"], servingStyles: ["Buffet", "Family-style"], allergenNote: "Halal ingredients available. Confirm nut, dairy, gluten, and cross-contact requirements with the vendor.", deliveryWindow: "60 minutes before service", taxProfile: { id: "TAX-STY-CA", label: "GST · Saffron Table sample profile (5%)", rate: 0.05 } },
  { id: "catering-grand", serviceType: "catering", category: "Catering", name: "Plated dinner service", vendor: "Grand Fork & Linen", invoicePrefix: "GFL", pricing: { type: "per_person", amount: 18, minimum: 900 }, rating: 4.1, reviewCount: 34, description: "Plated or family-style dinner with service staff and basic tableware", inclusions: ["Two-course menu", "Service staff", "Basic tableware"], active: true, busy: [], venueIds: ["ridgeview", "oak"], minGuests: 40, maxGuests: 150, minLeadDays: 14, cuisines: ["Canadian", "Italian"], menuStyles: ["Italian", "Canadian plated"], dietary: ["Vegetarian", "Gluten-aware"], allergyReview: ["gluten", "dairy"], servingStyles: ["Plated", "Family-style"], allergenNote: "Dietary substitutions are vendor-reported and require written confirmation before service.", deliveryWindow: "90 minutes before service", taxProfile: { id: "TAX-GFL-CA", label: "GST · Grand Fork sample profile (5%)", rate: 0.05 } },

  { id: "photo-snaplocal", serviceType: "photo-booth", category: "Entertainment", name: "Digital booth", vendor: "SnapLocal", invoicePrefix: "SNL", pricing: { type: "flat", amount: 325 }, rating: 4.7, reviewCount: 119, description: "Two-hour self-serve booth with digital gallery", inclusions: ["Two hours", "Digital gallery", "Standard backdrop"], active: true, busy: [{ date: "2026-10-17", start: 16, end: 23 }], venueIds: ["ridgeview", "sunroom", "oak"], minGuests: 1, maxGuests: 150, minLeadDays: 3, taxProfile: { id: "TAX-SNL-CA", label: "GST · SnapLocal sample profile (5%)", rate: 0.05 } },
  { id: "photo-flashbox", serviceType: "photo-booth", category: "Entertainment", name: "Staffed photo booth", vendor: "Flashbox Calgary", invoicePrefix: "FBC", pricing: { type: "flat", amount: 425 }, rating: 4.8, reviewCount: 142, description: "Three-hour staffed booth with prints and digital gallery", inclusions: ["Three hours", "Attendant", "Prints & digital gallery"], active: true, busy: [], venueIds: ["ridgeview", "crestwood", "sunroom", "oak"], minGuests: 1, maxGuests: 150, minLeadDays: 5, taxProfile: { id: "TAX-FBC-CA", label: "GST · Flashbox sample profile (5%)", rate: 0.05 } },
  { id: "photo-portrait-lounge", serviceType: "photo-booth", category: "Entertainment", name: "Portrait lounge experience", vendor: "Portrait Lounge YYC", invoicePrefix: "PLY", pricing: { type: "flat", amount: 540 }, rating: 4.2, reviewCount: 39, description: "Four-hour staffed portrait lounge with premium backdrop and live gallery", inclusions: ["Four hours", "Two attendants", "Premium backdrop & gallery"], active: true, busy: [], venueIds: ["ridgeview", "oak"], minGuests: 30, maxGuests: 150, minLeadDays: 10, taxProfile: { id: "TAX-PLY-CA", label: "GST · Portrait Lounge sample profile (5%)", rate: 0.05 } }
];

const MAX_IMAGE_BYTES = 5 * 1024 * 1024;
const MAX_IMAGE_LABEL = "5 MB";
const ACCEPTED_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

const offeringChoiceTemplates = {
  catering: ["Menu and dishes", "Serving style", "Dietary support", "Staff and tableware", "Delivery window", "Custom menu request"],
  cake: ["Size and servings", "Flavour and filling", "Icing and colours", "Design template", "Inscription", "Custom-design upload"],
  decor: ["Theme and palette", "Backdrop style", "Rental quantities", "Setup and teardown", "Signage", "Mood-board upload"],
  magic: ["Show style", "Audience age", "Performance time", "Show length", "Technical requirements"],
  "face-painting": ["Design menu", "Participant count", "Artist count", "Material preferences", "Start time"],
  "photo-booth": ["Booth style", "Backdrop", "Print package", "Template and branding", "Duration", "Logo upload"]
};

const serviceCategoryLabels = {
  catering: "Catering",
  cake: "Cakes & desserts",
  decor: "Decorations",
  magic: "Magic shows",
  "face-painting": "Face painting",
  "photo-booth": "Photo booths"
};

const app = document.querySelector("#app");
const toast = document.querySelector(".toast");
let bookingStep = 1;
let bookingData = {
  date: "2026-10-17", start: "18:00", end: "23:00", guests: 60, purposeId: "birthday-party", event: "Birthday or family celebration", contact: "Alex Morgan", email: "alex@example.com", notes: "Family birthday dinner with music and a catered buffet.", activityDescription: "", addons: [], vendorServices: [],
  eventNeeds: { food: true, onsiteCooking: false, alcohol: false, amplifiedMusic: true, children: true, publicEvent: false },
  vendorQuantities: { "face-painting": 30, cake: 60 },
  cateringPreferences: { cuisine: "any", menu: "any", dietary: [], allergies: [], servingStyle: "any", notes: "" },
  vendorConfigurations: {}
};
let addonStage = "fit";
let activeServiceType = null;
let showAllServiceTypes = false;
let autoRequiredAddonIds = new Set();
let vendorSort = "best-match";
let vendorConfirmationRequests = {};
let vendorConfirmations = {};
let organizerReferenceFiles = {};
let vendorOfferingEditor = {
  editingId: "magic-wonderspark",
  status: "published",
  image: null,
  imageError: "",
  savedAt: null,
  draft: null
};
let vendorOfferingDrafts = [];
let selectedSpaceId = "ridgeview";
let depositView = "review";
let depositDeduction = 0;
let depositClaimReason = "Additional cleaning";
let depositClaimEvidence = "Timestamped post-event photos and supporting record attached (prototype).";
let closeoutFinalized = false;
let confirmedBookingSnapshot = null;
let eventWorkspaceState = {
  bookingId: null,
  requirementOverrides: {},
  selectedMessageThread: "venue",
  messageDrafts: {},
  messages: [],
  actionView: null,
  changeDraft: null,
  submittedRequest: null
};
let bookingSequence = 1048;
let policyRevision = 1;
let feePolicy = {
  associationSubscription: 0,
  venueCommission: 0,
  vendorCommission: 12,
  processingTreatment: "deduct_from_payout",
  processingAllocation: "proportional"
};
let supportSession = null;
let supportExpiryTimer = null;
let supportAuditEvents = [
  { time: "Today · 9:42 AM", actor: "Noor Ahmed", action: "Ended read-only support session", target: "Crestwood Community Association", caseId: "SUP-2081", scope: "Read-only", reason: "Review calendar synchronization", outcome: "Ended by support user" },
  { time: "Yesterday · 3:18 PM", actor: "Taylor Chen", action: "Reviewed membership-role change", target: "Bright Day Events", caseId: "IAM-1974", scope: "Identity administration", reason: "Confirm requested membership change", outcome: "No change made" },
  { time: "Sep 26 · 11:03 AM", actor: "Riley Patel", action: "Exported reconciliation exception", target: "PST-WSE-1033", caseId: "FIN-1912", scope: "Finance record", reason: "Investigate processor allocation", outcome: "Export recorded" }
];

const onboardingDefinitions = {
  organizer: { route: "signup-organizer", label: "Organizer", title: "Create an organizer account", icon: "◎", demoRoleId: "customer-organizer", demoRoute: "customer-dashboard", steps: ["Account", "Verify email", "Booking access"] },
  operator: { route: "signup-operator", label: "Space operator", title: "Set up a space-operator account", icon: "▱", demoRoleId: "venue-admin", demoRoute: "dashboard", steps: ["Account", "Organization", "First space", "Booking readiness"] },
  vendor: { route: "signup-vendor", label: "Event-service vendor", title: "Set up a vendor account", icon: "✦", demoRoleId: "vendor-admin", demoRoute: "vendor-offerings", steps: ["Account", "Business", "Service categories", "Seller readiness"] }
};

const newOnboardingState = type => ({
  type,
  step: 1,
  completed: false,
  identity: { firstName: "", lastName: "", email: "", phone: "", consent: false, emailVerified: false, verificationCode: "" },
  organizer: { claimBooking: "yes", bookingReference: "BKG-1048" },
  operator: {
    legalName: "", publicName: "", organizationType: "community_association", organizationEmail: "", website: "", address: "", city: "Calgary", province: "Alberta", postalCode: "",
    siteName: "", spaceName: "", spaceType: "hall", capacity: "", description: "", hourlyRate: "", depositMode: "fixed", depositAmount: "300",
    weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], openTime: "08:00", closeTime: "23:00", closesNextDay: false, calendarMode: "gather", minimumNotice: "2", inviteEmail: "", inviteRole: "booking_manager", payoutAcknowledged: false
  },
  vendor: {
    legalName: "", publicName: "", businessEmail: "", phone: "", website: "", city: "Calgary", serviceArea: "Calgary", travelRadius: "25", categories: [],
    taxStatus: "not_registered", invoicePrefix: "", cancellationSummary: "Full refund until 7 days before service; changes subject to availability.", inviteEmail: "", inviteRole: "fulfilment", payoutAcknowledged: false, firstOfferingName: "", primaryCategory: ""
  }
});

let onboardingStates = {
  organizer: newOnboardingState("organizer"),
  operator: newOnboardingState("operator"),
  vendor: newOnboardingState("vendor")
};
let simulatedSignInEmail = "";

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

const completedReviewBooking = {
  bookingId: financeDemo.bookingId,
  ownerRoleId: "customer-organizer",
  status: "completed",
  completedMonth: "September 2026",
  reviewDeadline: "October 21, 2026",
  reviewDeadlineAt: "2026-10-21T23:59:59-06:00",
  eventType: "Wedding reception",
  venue: { subjectType: "space", subjectId: "ridgeview", name: "Ridgeview Community Hall", status: "completed" },
  vendorOrders: [
    { orderId: "VOR-WSE-1033", subjectType: "vendor-service", subjectId: "magic-wonderspark", vendor: "WonderSpark Entertainment", offering: "Family magic show", status: "fulfilled" }
  ]
};

const samplePublicReviews = [
  { id: "REV-SAMPLE-RIDGE-1", subjectType: "space", subjectId: "ridgeview", rating: 5, reviewer: "Amanda R.", verified: true, eventType: "Family celebration", month: "August 2026", comment: "The hall matched the listing, access instructions were clear, and the room was ready when we arrived.", highlights: ["Accurate listing", "Ready and clean", "Easy access"] },
  { id: "REV-SAMPLE-WSE-1", subjectType: "vendor-service", subjectId: "magic-wonderspark", rating: 5, reviewer: "Daniel K.", verified: true, eventType: "Birthday celebration", month: "August 2026", package: "Family magic show", comment: "WonderSpark arrived on time and kept children and adults engaged throughout the show.", highlights: ["Matched the package", "On time", "Professional"] }
];

let organizerReviews = {};
let reviewEditingTarget = null;

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
    permissionKeys: ["customer.booking.manage", "customer.documents.view", "customer.deposit.respond", "customer.reviews.create", "customer.messages"],
    permissions: ["Search and complete Instant Book checkout", "View customer invoices, receipts, statements, and deposit status", "Request permitted changes or cancellation", "Review each completed venue and fulfilled vendor order", "Respond to a documented deposit claim"],
    restrictions: ["Cannot see venue or vendor private payouts", "Cannot change availability, commercial policy, or supplier records"],
    routes: ["customer-dashboard", "customer-event", "customer-documents", "customer-deposit", "customer-reviews", "interim-statement", "final-statement"]
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
    routes: ["vendor-dashboard", "vendor-offerings", "vendor-invoice", "vendor-payout"]
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
    id: "platform-admin", accountType: "platform", role: "Platform administrator · super admin", shortRole: "Platform admin", name: "Taylor Chen", initials: "TC", organization: "Gather", landing: "platform-dashboard", workspaceLabel: "Open super-admin console",
    summary: "Oversees organizations, access policy, marketplace activity, financial health, audit history, and controlled support access.",
    permissionKeys: ["platform.access", "platform.policy", "platform.marketplace", "platform.reviews.moderate", "platform.support", "platform.support.session", "platform.finance", "platform.audit"],
    permissions: ["Administer tenants, memberships, roles, and global controls", "Review cross-organization bookings, vendor orders, deposits, and settlement health", "Moderate reported reviews under published content rules", "Create future commercial-policy versions", "Start reason-coded, expiring read-only support sessions and review audit history"],
    restrictions: ["Support access must still be time-limited and reason-coded", "Cannot silently rewrite an existing booking’s snapshotted terms"],
    routes: ["platform-dashboard", "fee-settings"]
  },
  {
    id: "platform-ops", accountType: "platform", role: "Marketplace operations / support", shortRole: "Platform ops", name: "Noor Ahmed", initials: "NA", organization: "Gather", landing: "platform-dashboard", workspaceLabel: "Open operations console",
    summary: "Handles seller onboarding, listing moderation, credential review, support, and exception queues.",
    permissionKeys: ["platform.marketplace", "platform.reviews.moderate", "platform.support"],
    permissions: ["Review operator and vendor onboarding", "Moderate listings, reported reviews, and category credentials", "Manage support and synchronization exceptions", "Request or escalate controlled support access"],
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

const publicRoutes = new Set(["home", "explore", "venue", "booking", "booking-documents", "host", "login", "create-account", "signup-organizer", "signup-operator", "signup-vendor", "sign-in"]);
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
  login: "Sign in",
  "create-account": "Create account",
  "signup-organizer": "Organizer signup",
  "signup-operator": "Space-operator onboarding",
  "signup-vendor": "Vendor onboarding",
  booking: "Instant Book checkout",
  "booking-documents": "Checkout booking documents",
  "customer-dashboard": "My bookings",
  "customer-event": "My Event",
  "customer-documents": "Customer booking documents",
  "customer-deposit": "Customer deposit response",
  "customer-reviews": "Organizer reviews",
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
  "vendor-offerings": "Vendor offerings",
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
const formatSupportTimestamp = value => new Date(value).toLocaleString("en-CA", { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });

function reviewTargetsForBooking() {
  const targets = [];
  if (completedReviewBooking.status === "completed" && completedReviewBooking.venue.status === "completed") {
    targets.push({ ...completedReviewBooking.venue, targetType: "venue", supplier: financeDemo.venueSupplier, offering: "Venue rental", criteria: ["Accurate listing", "Ready and clean", "Easy access", "Good communication", "Good value"] });
  }
  completedReviewBooking.vendorOrders.filter(order => order.status === "fulfilled").forEach(order => {
    targets.push({ ...order, targetType: "vendor", supplier: order.vendor, name: order.vendor, criteria: ["Matched the package", "On time", "Professional", "Good communication", "Good value"] });
  });
  return targets;
}

const reviewKey = target => `${completedReviewBooking.bookingId}:${target.subjectType}:${target.orderId || target.subjectId}`;
const reviewWindowOpen = () => Date.now() <= new Date(completedReviewBooking.reviewDeadlineAt).getTime();
const isBookingReviewOwner = () => activeRole()?.id === completedReviewBooking.ownerRoleId;
const canSubmitReviewFor = target => reviewWindowOpen() && isBookingReviewOwner() && hasPermission("customer.reviews.create") && reviewTargetsForBooking().some(item => reviewKey(item) === reviewKey(target));
const submittedReviews = () => Object.values(organizerReviews).filter(review => review.status === "published" && review.verified === true);

function reviewSummaryFor(subjectType, subjectId, baseRating = 0, baseCount = 0) {
  const additions = submittedReviews().filter(review => review.subjectType === subjectType && review.subjectId === subjectId);
  const count = baseCount + additions.length;
  const ratingTotal = baseRating * baseCount + additions.reduce((sum, review) => sum + review.rating, 0);
  return { rating: count ? ratingTotal / count : null, count };
}

const spaceReviewSummary = space => reviewSummaryFor("space", space.id, space.rating || 0, space.reviewCount || 0);
const vendorReviewSummary = service => reviewSummaryFor("vendor-service", service.id, service.rating || 0, service.reviewCount || 0);

function publicReviewsFor(subjectType, subjectId) {
  const created = submittedReviews().filter(review => review.subjectType === subjectType && review.subjectId === subjectId);
  return [...created, ...samplePublicReviews.filter(review => review.verified === true && review.subjectType === subjectType && review.subjectId === subjectId)];
}

function publicReviewCard(review, compact = false) {
  const stars = "★".repeat(review.rating) + "☆".repeat(5 - review.rating);
  const packageLabel = review.package ? ` · ${escapeHtml(review.package)}` : "";
  const openingTag = compact ? '<span class="public-review-card compact" aria-hidden="true">' : '<article class="public-review-card">';
  const closingTag = compact ? "</span>" : "</article>";
  const reviewFooter = compact ? `<span class="public-review-footer"><strong>${escapeHtml(review.reviewer)}</strong><span>${escapeHtml(review.eventType)} · ${escapeHtml(review.month)}${packageLabel}${review.edited ? " · Edited" : ""}</span></span>` : `<footer><strong>${escapeHtml(review.reviewer)}</strong><span>${escapeHtml(review.eventType)} · ${escapeHtml(review.month)}${packageLabel}${review.edited ? " · Edited" : ""}</span></footer>`;
  return `${openingTag}<span class="public-review-head"><span class="review-stars" aria-label="${review.rating} out of 5">${stars}</span>${review.verified === true ? '<span class="verified-review">✓ Verified booking</span>' : ""}</span>${review.comment ? `<span class="public-review-comment">“${escapeHtml(review.comment)}”</span>` : ""}${review.highlights?.length ? `<span class="review-highlights">${review.highlights.map(item => `<span>${escapeHtml(item)}</span>`).join("")}</span>` : ""}${reviewFooter}${closingTag}`;
}

function reviewSummaryText(summary) {
  return summary.count ? `${summary.rating.toFixed(1)} · ${summary.count} verified review${summary.count === 1 ? "" : "s"}` : "New · no reviews";
}

function scheduleSupportExpiry() {
  if (supportExpiryTimer) clearTimeout(supportExpiryTimer);
  supportExpiryTimer = null;
  if (!supportSession) return;
  const expectedExpiry = supportSession.expiresAt;
  const delay = Math.max(0, new Date(expectedExpiry).getTime() - Date.now());
  supportExpiryTimer = setTimeout(() => {
    if (!supportSession || supportSession.expiresAt !== expectedExpiry) return;
    if (endSupportSession("Expired automatically at the configured time")) {
      render(location.hash.slice(1) || "home");
      showToast("Read-only support access expired and was added to the audit trail.");
    }
  }, delay + 25);
}

function endSupportSession(outcome) {
  if (!supportSession) return false;
  const endedSession = supportSession;
  supportAuditEvents.unshift({
    timestamp: new Date().toISOString(),
    actor: endedSession.actor,
    action: "Ended read-only support session",
    target: endedSession.target,
    caseId: endedSession.caseId,
    scope: endedSession.scope,
    reason: endedSession.reason,
    startedAt: endedSession.startedAt,
    expiresAt: endedSession.expiresAt,
    outcome
  });
  supportSession = null;
  if (supportExpiryTimer) clearTimeout(supportExpiryTimer);
  supportExpiryTimer = null;
  return true;
}

function expireSupportSessionIfNeeded() {
  if (!supportSession || Date.now() < new Date(supportSession.expiresAt).getTime()) return false;
  return endSupportSession("Expired automatically at the configured time");
}

const timeAsHours = value => {
  const [hours, minutes] = value.split(":").map(Number);
  return hours + minutes / 60;
};

const formatTime = value => new Date(`2026-01-01T${value}:00`).toLocaleTimeString("en-CA", { hour: "numeric", minute: "2-digit" });
const formatHour = value => formatTime(`${String(Math.floor(value)).padStart(2, "0")}:${value % 1 ? "30" : "00"}`);
const currentSpace = () => spaces.find(space => space.id === selectedSpaceId) || spaces[0];
const currentAddons = () => currentSpace().addons;
const currentPurpose = () => eventPurposes.find(purpose => purpose.id === bookingData.purposeId) || eventPurposes[0];
const selectedVendorServices = () => vendorServices.filter(item => bookingData.vendorServices.includes(item.id));
const selectedBillableVendorServices = () => selectedVendorServices().filter(item => vendorAvailability(item).available);
const taxFor = (value, profile) => Math.round(value * profile.rate * 100) / 100;
const prototypeToday = new Date("2026-09-28T12:00:00-06:00");

function purposeFitAtSpace(purposeId, space = currentSpace()) {
  if ((space.purposePolicy?.allowed || []).includes(purposeId)) return { status: "allowed", label: "Fits this venue", detail: "This use is configured for Instant Book when the remaining booking requirements are satisfied." };
  if ((space.purposePolicy?.approval || []).includes(purposeId)) return { status: "approval", label: "Venue approval required", detail: "You may review compatible options, but the venue must approve this use before a booking can be confirmed." };
  return { status: "blocked", label: "Not offered at this venue", detail: `Choose a different purpose or a space that permits ${eventPurposes.find(item => item.id === purposeId)?.label.toLowerCase() || "this activity"}.` };
}

function requiredAddonsForBooking(space = currentSpace(), needs = bookingData.eventNeeds) {
  if (!needs?.onsiteCooking) return [];
  const kitchen = space.addons.find(item => item.id.includes("kitchen"));
  return kitchen ? [{ ...kitchen, reason: "Required because you selected on-site food preparation." }] : [];
}

function eventCompatibility(space = currentSpace(), purposeId = bookingData.purposeId, needs = bookingData.eventNeeds) {
  const base = purposeFitAtSpace(purposeId, space);
  if (base.status === "blocked") return base;
  const kitchenRequirement = needs?.onsiteCooking ? requiredAddonsForBooking(space, needs)[0] : null;
  if (needs?.onsiteCooking && (!kitchenRequirement || !kitchenRequirement.available)) return { status: "blocked", label: "Required facility unavailable", detail: "On-site food preparation requires an available venue kitchen for this booking." };
  if (needs?.alcohol && ["crestwood", "sunroom"].includes(space.id)) return { status: "blocked", label: "Alcohol is not permitted", detail: `${space.name} does not permit alcohol for this booking type.` };
  if (needs?.amplifiedMusic && space.id === "sunroom") return { status: "blocked", label: "Amplified music is not permitted", detail: "The Sunroom requires noise to remain within a meeting-room setting." };
  if (base.status === "approval") return base;
  if (needs?.alcohol) return { status: "approval", label: "Licence and insurance review required", detail: "The venue must verify the applicable liquor licence, insurance, and booking-contact requirements before confirmation." };
  if (needs?.publicEvent) return { status: "approval", label: "Public-event review required", detail: "The venue must review public attendance, admission, capacity, safety, and permit requirements before confirmation." };
  return { status: "allowed", label: "This venue supports your event", detail: "Instant Book remains available. Recommendations are optional unless an item is explicitly labelled Required." };
}

function ensureRequiredAddons() {
  const requiredIds = new Set(requiredAddonsForBooking().filter(item => item.available).map(item => item.id));
  autoRequiredAddonIds.forEach(id => {
    if (!requiredIds.has(id)) {
      bookingData.addons = bookingData.addons.filter(addonId => addonId !== id);
      autoRequiredAddonIds.delete(id);
    }
  });
  requiredIds.forEach(id => {
    if (!bookingData.addons.includes(id)) {
      bookingData.addons.push(id);
      autoRequiredAddonIds.add(id);
    }
  });
  bookingData.addons = [...new Set(bookingData.addons)];
}

function recommendedAddonIds() {
  return new Set(currentPurpose().recommendedAddons?.[currentSpace().id] || []);
}

function compatibleServiceTypes() {
  return vendorServiceTypes.filter(type => vendorServices.some(service => service.serviceType === type.id && (service.venueIds || []).includes(currentSpace().id)));
}

function recommendedServiceTypeIds() {
  const ids = new Set(currentPurpose().recommendedServices || []);
  if (bookingData.eventNeeds?.food) ids.add("catering");
  if (bookingData.eventNeeds?.children && bookingData.purposeId === "birthday-party") {
    ids.add("magic");
    ids.add("face-painting");
  }
  return ids;
}

const eventNeedOptionsFor = purposeId => eventNeedOptions.filter(option => option.purposes.includes(purposeId));

const cateringMenus = {
  "catering-neighbourhood": {
    mains: ["Herb-roasted chicken", "Vegetable lasagna", "Chickpea curry", "Beef meatballs"],
    sides: ["Garden salad", "Roasted potatoes", "Seasonal vegetables", "Rice pilaf", "Dinner rolls"]
  },
  "catering-bow-river": {
    mains: ["Maple chicken", "Braised beef", "Vegetable lasagna", "Lentil shepherd’s pie"],
    sides: ["Mixed greens", "Garlic mashed potatoes", "Rice pilaf", "Roasted vegetables", "Macaroni salad"]
  },
  "catering-saffron": {
    mains: ["Butter chicken", "Chana masala", "Palak paneer", "Vegetable korma", "Beef keema"],
    sides: ["Basmati rice", "Jeera rice", "Naan", "Cucumber raita", "Kachumber salad"]
  },
  "catering-grand": {
    mains: ["Herb chicken supreme", "Braised short rib", "Wild-mushroom risotto", "Eggplant parmigiana"],
    sides: ["Market greens", "Potato gratin", "Seasonal vegetables", "Rosemary potatoes", "Artisan rolls"]
  }
};

const option = (id, label, price = 0, priceType = "flat", extra = {}) => ({ id, label, price, priceType, ...extra });

function categoryConfigurationSchemaFor(service) {
  if (!service) return [];
  if (service.serviceType === "catering") {
    const menu = cateringMenus[service.id] || cateringMenus["catering-bow-river"];
    const includedMains = service.id === "catering-saffron" ? 3 : 2;
    const includedSides = service.id === "catering-neighbourhood" ? 2 : 3;
    const servingOptions = (service.servingStyles || ["Buffet"]).map((label, index) => option(label.toLowerCase().replace(/[^a-z0-9]+/g, "-"), label, index ? 2 : 0, "per_person"));
    return [
      { id: "mains", label: `Choose ${includedMains} main dishes`, help: "Included in this package", type: "multi", required: true, min: includedMains, max: includedMains, options: menu.mains.map((label, index) => option(`main-${index + 1}`, label, index === menu.mains.length - 1 ? 2 : 0, "per_person")) },
      { id: "sides", label: `Choose ${includedSides} sides`, help: "Included in this package", type: "multi", required: true, min: includedSides, max: includedSides, options: menu.sides.map((label, index) => option(`side-${index + 1}`, label, index === menu.sides.length - 1 ? 1 : 0, "per_person")) },
      { id: "serving", label: "Serving style", type: "single", required: true, options: servingOptions },
      { id: "extras", label: "Service extras", help: "Optional additions from this caterer", type: "multi", min: 0, max: 4, options: [option("reusable-tableware", "Reusable tableware", 3, "per_person"), option("service-staff", "Two service staff", 180), option("coffee-tea", "Coffee and tea station", 2.5, "per_person"), ...(service.customRequestsAllowed === false ? [] : [option("custom-menu", "Custom menu designed with the caterer", 0, "flat", { bookingMode: "quote" })])] },
      { id: "service-notes", label: "Menu and service notes", type: "textarea", required: false, placeholder: "Portions, timing, substitutions, or other details for the caterer" }
    ];
  }
  if (service.serviceType === "cake") return [
    { id: "flavour", label: "Cake flavour", type: "single", required: true, options: [option("vanilla", "Vanilla"), option("chocolate", "Chocolate"), option("red-velvet", "Red velvet", 8), option("lemon", "Lemon", 8)] },
    { id: "filling", label: "Filling", type: "single", required: true, options: [option("vanilla-buttercream", "Vanilla buttercream"), option("chocolate-ganache", "Chocolate ganache", 10), option("strawberry", "Strawberry preserve", 10), option("lemon-curd", "Lemon curd", 12)] },
    { id: "icing", label: "Icing", type: "single", required: true, options: [option("buttercream", "Buttercream"), option("fondant", "Fondant", 25), option("cream-cheese", "Cream cheese", 15)] },
    { id: "design", label: "Cake design", type: "single", required: true, options: [option("classic", "Classic vendor design"), option("floral", "Floral design", 25), option("themed", "Vendor themed design", 45), ...(service.customRequestsAllowed === false ? [] : [option("custom-reference", "Custom design from my reference", 0, "flat", { bookingMode: "quote", requiresImage: true })])] },
    { id: "colour", label: "Colours", type: "text", required: false, placeholder: "Example: sage green, ivory, and gold" },
    { id: "inscription", label: "Inscription", type: "text", required: false, maxLength: 60, placeholder: "Example: Happy birthday, Maya!" },
    { id: "fulfilment", label: "Pickup or delivery", type: "single", required: true, options: [option("pickup", "Pickup"), option("delivery", "Local delivery", 25)] }
  ];
  if (service.serviceType === "decor") return [
    { id: "theme", label: "Style", type: "single", required: true, options: [option("bright", "Bright celebration"), option("elegant", "Elegant neutral", 35), option("seasonal", "Seasonal theme", 25), ...(service.customRequestsAllowed === false ? [] : [option("custom-concept", "Custom concept from a mood board", 0, "flat", { bookingMode: "quote", requiresImage: true })])] },
    { id: "palette", label: "Colour palette", type: "text", required: false, placeholder: "Example: terracotta, cream, and eucalyptus" },
    { id: "signage", label: "Personalized welcome sign", type: "single", required: true, options: [option("none", "No sign"), option("printed", "Printed welcome sign", 45)] },
    { id: "decor-notes", label: "Room and setup notes", type: "textarea", required: false, placeholder: "Share table count, room zones, wording, or setup priorities" }
  ];
  if (service.serviceType === "magic") return [
    { id: "show-style", label: "Show style", type: "single", required: true, options: [option("family", "Family interactive"), option("children", "Children-focused"), option("stage", "Stage presentation", 75), ...(service.customRequestsAllowed === false ? [] : [option("custom-show", "Custom show concept", 0, "flat", { bookingMode: "quote" })])] },
    { id: "audience-age", label: "Audience age range", type: "single", required: true, options: [option("mixed", "Mixed ages"), option("under-8", "Mostly under 8"), option("ages-8-plus", "Mostly 8+")] },
    { id: "performance-time", label: "Preferred performance start", type: "time", required: true },
    { id: "show-length", label: "Show length", type: "single", required: true, options: [option("60-minutes", "60 minutes"), option("75-minutes", "75 minutes", 90), option("90-minutes", "90 minutes", 160)] },
    { id: "technical-needs", label: "Technical and setup notes", type: "textarea", required: false, placeholder: "Stage, sound, power, access, or other setup details" }
  ];
  if (service.serviceType === "face-painting") return [
    { id: "design-menu", label: "Design menu", type: "single", required: true, options: [option("quick", "Quick designs"), option("full", "Full-face designs", 45), option("theme", "Event-themed menu", 35), ...(service.customRequestsAllowed === false ? [] : [option("custom-art", "Custom design menu from a reference", 0, "flat", { bookingMode: "quote", requiresImage: true })])] },
    { id: "materials", label: "Material preferences", type: "multi", min: 0, max: 2, options: [option("glitter-free", "Glitter-free"), option("fragrance-free", "Fragrance-free"), option("gems", "Face gems", 25)] },
    { id: "artist-count", label: "Artist team", type: "single", required: true, options: [option("one", "One artist"), option("two", "Two artists", 140)] },
    { id: "artist-start", label: "Preferred artist start", type: "time", required: true },
    { id: "face-notes", label: "Design and participant notes", type: "textarea", required: false, placeholder: "Theme, ages, accessibility needs, or design priorities" }
  ];
  if (service.serviceType === "photo-booth") return [
    { id: "backdrop", label: "Backdrop", type: "single", required: true, options: [option("standard", "Standard neutral"), option("sequin", "Sequin backdrop", 40), option("floral", "Floral wall", 85)] },
    { id: "prints", label: "Print package", type: "single", required: true, options: [option("digital", "Digital gallery only"), option("single", "One print per session", 75), option("unlimited", "Unlimited prints", 140)] },
    { id: "template", label: "Photo template", type: "single", required: true, options: [option("vendor-template", "Vendor template"), ...(service.customRequestsAllowed === false ? [] : [option("custom-branding", "Custom logo or artwork", 0, "flat", { bookingMode: "quote", requiresImage: true })])] },
    { id: "booth-notes", label: "Branding and setup notes", type: "textarea", required: false, placeholder: "Share wording, colors, placement, or guest-flow details" }
  ];
  return [];
}

function configurationSchemaFor(service) {
  if (!service || service.bookingMode === "fixed") return [];
  if (service.bookingMode === "quote") return [{ id: "custom-brief", label: "Custom service brief", type: "textarea", required: true, placeholder: "Describe the scope, style, schedule, quantities, and anything the vendor needs to price" }];
  const source = Array.isArray(service.optionGroups) && service.optionGroups.length
    ? service.optionGroups
    : categoryConfigurationSchemaFor(service);
  const allowCustomQuote = service.bookingMode === "hybrid" || (!service.bookingMode && service.customRequestsAllowed !== false);
  return source
    .filter(group => group.enabled !== false)
    .map(group => ({
      ...group,
      options: group.options
        ? group.options.filter(choice => choice.enabled !== false && (choice.bookingMode !== "quote" || allowCustomQuote))
        : undefined
    }))
    .filter(group => !group.options || group.options.length > 0);
}

function defaultConfigurationFor(service) {
  const selections = {};
  configurationSchemaFor(service).forEach(group => {
    if (group.type === "single") selections[group.id] = group.required ? group.options[0]?.id || "" : "";
    else if (group.type === "multi") selections[group.id] = group.options.slice(0, group.min || 0).map(item => item.id);
    else if (group.type === "time") selections[group.id] = bookingData.start;
    else selections[group.id] = "";
  });
  return { selections, referenceImage: null, quote: { status: "none", amount: 0, reference: "" } };
}

function configurationFor(service) {
  if (!bookingData.vendorConfigurations[service.id]) bookingData.vendorConfigurations[service.id] = defaultConfigurationFor(service);
  return bookingData.vendorConfigurations[service.id];
}

function selectedConfigurationOptions(service, configuration = configurationFor(service)) {
  const selected = [];
  configurationSchemaFor(service).forEach(group => {
    if (!group.options) return;
    const values = Array.isArray(configuration.selections[group.id]) ? configuration.selections[group.id] : [configuration.selections[group.id]];
    values.filter(Boolean).forEach(value => {
      const chosen = group.options.find(item => item.id === value);
      if (chosen) selected.push({ groupId: group.id, groupLabel: group.label, ...chosen });
    });
  });
  return selected;
}

function configurationStatus(service) {
  const schema = configurationSchemaFor(service);
  if (!schema.length && service.bookingMode !== "quote") return { ready: true, complete: true, quoteRequired: false, message: "No package choices are required." };
  const configuration = configurationFor(service);
  const missing = [];
  schema.forEach(group => {
    const value = configuration.selections[group.id];
    if (group.type === "multi" && group.required && (!Array.isArray(value) || value.length < (group.min || 1))) missing.push(`${group.label}: choose ${group.min || 1}`);
    if (["single", "text", "time", "textarea"].includes(group.type) && group.required && !String(value || "").trim()) missing.push(group.label);
  });
  const quoteChoices = selectedConfigurationOptions(service, configuration).filter(item => item.bookingMode === "quote");
  const referenceRequired = quoteChoices.some(item => item.requiresImage);
  if (referenceRequired && !configuration.referenceImage) missing.push("Reference image");
  const quoteRequired = service.bookingMode === "quote" || quoteChoices.length > 0;
  const quoteReady = !quoteRequired || configuration.quote?.status === "quoted";
  const complete = missing.length === 0;
  const message = !complete
    ? `Complete: ${missing.join(", ")}.`
    : quoteRequired && configuration.quote?.status === "requested"
      ? "Custom request sent; payment is blocked until the vendor returns an itemized quote."
      : quoteRequired && !quoteReady
        ? "Custom work requires a vendor quote before payment."
        : quoteRequired
          ? `Vendor quote ${configuration.quote.reference} accepted for this exact configuration.`
          : "All required package choices are complete and priced.";
  return { ready: complete && quoteReady, complete, quoteRequired, referenceRequired, missing, message };
}

const baseServicePrice = service => {
  const quantity = service.pricing.type === "per_person"
    ? Number(bookingData.guests)
    : service.pricing.type === "hourly"
      ? durationHours()
      : service.pricing.type === "per_unit"
        ? serviceQuantity(service)
        : 1;
  return Math.max(service.pricing.minimum || 0, service.pricing.amount * quantity);
};

function configurationPrice(service) {
  const configuration = configurationFor(service);
  const choices = selectedConfigurationOptions(service, configuration);
  const choiceTotal = choices.reduce((sum, choice) => {
    const multiplier = choice.priceType === "per_person"
      ? Number(bookingData.guests)
      : choice.priceType === "hourly"
        ? durationHours()
        : choice.priceType === "per_unit"
          ? serviceQuantity(service)
          : 1;
    return sum + Number(choice.price || 0) * multiplier;
  }, 0);
  const quoteApplies = service.bookingMode === "quote" || choices.some(choice => choice.bookingMode === "quote");
  const quotedAmount = quoteApplies && configuration.quote?.status === "quoted" ? Number(configuration.quote.amount || 0) : 0;
  return choiceTotal + quotedAmount;
}

const servicePrice = service => baseServicePrice(service) + configurationPrice(service);

function servicePriceBreakdown(service) {
  const quantity = Number(bookingData.guests);
  const configured = configurationPrice(service);
  let baseBreakdown;
  if (service.pricing.type === "flat") baseBreakdown = `${money(baseServicePrice(service))} fixed package`;
  else {
    const pricingQuantity = service.pricing.type === "hourly" ? durationHours() : service.pricing.type === "per_unit" ? serviceQuantity(service) : quantity;
    const unitLabel = service.pricing.type === "hourly" ? "hours" : service.pricing.type === "per_unit" ? "units" : "guests";
    const calculated = service.pricing.amount * pricingQuantity;
    const minimumApplied = (service.pricing.minimum || 0) > calculated;
    baseBreakdown = minimumApplied
      ? `${money(service.pricing.amount)} × ${pricingQuantity} = ${money(calculated)} · ${money(service.pricing.minimum)} minimum applied`
      : `${money(service.pricing.amount)} × ${pricingQuantity} ${unitLabel}`;
  }
  return configured ? `${baseBreakdown} + ${money(configured)} selected options` : baseBreakdown;
}

const serviceTypeFor = service => vendorServiceTypes.find(type => type.id === service.serviceType);
const cancellationPolicyFor = service => ({
  catering: "Full refund until 14 days before service; 50% from 7–13 days; non-refundable inside 7 days after vendor confirmation.",
  cake: "Full refund until 14 days before pickup or delivery; custom-production costs are non-refundable after work begins.",
  decor: "Full refund until 7 days before service; 50% from 3–6 days; non-refundable inside 72 hours.",
  magic: "Full refund until 7 days before service; one date change is allowed subject to availability.",
  "face-painting": "Full refund until 7 days before service; 50% inside 7 days; weather or safety changes are handled with the vendor.",
  "photo-booth": "Full refund until 7 days before service; 50% from 3–6 days; non-refundable inside 72 hours."
})[service.serviceType];
const setupHoursFor = service => service.setupHours ?? ({ catering: 1.5, cake: 0.5, decor: 2, magic: 0.5, "face-painting": 0.5, "photo-booth": 1 })[service.serviceType] ?? 0;
const teardownHoursFor = service => service.teardownHours ?? ({ catering: 0.5, cake: 0, decor: 1, magic: 0.5, "face-painting": 0.5, "photo-booth": 1 })[service.serviceType] ?? 0;
const serviceQuantity = service => ["face-painting", "cake"].includes(service.serviceType)
  ? Number(bookingData.vendorQuantities[service.serviceType] || bookingData.guests)
  : Number(bookingData.guests);
const allergyConfirmationSignature = service => JSON.stringify({
  serviceId: service.id,
  spaceId: currentSpace().id,
  date: bookingData.date,
  start: bookingData.start,
  end: bookingData.end,
  guests: bookingData.guests,
  purposeId: bookingData.purposeId,
  eventType: bookingData.event,
  venueAddons: [...bookingData.addons].sort(),
  preferences: bookingData.cateringPreferences,
  selectedConfiguration: configurationFor(service)
});
const requiresAllergyConfirmation = service => service.serviceType === "catering" && bookingData.cateringPreferences.allergies.length > 0;
const hasCurrentAllergyConfirmationRequest = service => requiresAllergyConfirmation(service) && vendorConfirmationRequests[service.id] === allergyConfirmationSignature(service);
const hasCurrentAllergyConfirmation = service => !requiresAllergyConfirmation(service) || vendorConfirmations[service.id] === allergyConfirmationSignature(service);

function leadDaysUntilBooking() {
  const bookingDate = new Date(`${bookingData.date}T12:00:00-06:00`);
  return Math.floor((bookingDate - prototypeToday) / 86400000);
}

function vendorMatchesCateringPreferences(service) {
  if (service.serviceType !== "catering") return true;
  const preferences = bookingData.cateringPreferences;
  if (preferences.cuisine !== "any" && !(service.cuisines || []).includes(preferences.cuisine)) return false;
  if (preferences.menu !== "any" && !(service.menuStyles || []).includes(preferences.menu)) return false;
  if (!preferences.dietary.every(requirement => (service.dietary || []).includes(requirement))) return false;
  if (!preferences.allergies.every(requirement => (service.allergyReview || []).includes(requirement))) return false;
  if (preferences.servingStyle !== "any" && !(service.servingStyles || []).includes(preferences.servingStyle)) return false;
  return true;
}

function sortedVendorServices(services) {
  return [...services].sort((a, b) => {
    const availabilityDifference = Number(vendorAvailability(b).available) - Number(vendorAvailability(a).available);
    const aReviews = vendorReviewSummary(a);
    const bReviews = vendorReviewSummary(b);
    if (vendorSort === "price") return servicePrice(a) - servicePrice(b) || availabilityDifference;
    if (vendorSort === "rating") return (bReviews.rating || 0) - (aReviews.rating || 0) || bReviews.count - aReviews.count;
    return availabilityDifference || (bReviews.rating || 0) - (aReviews.rating || 0) || bReviews.count - aReviews.count || servicePrice(a) - servicePrice(b);
  });
}

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
  if (!(service.venueIds || []).includes(currentSpace().id)) return { available: false, message: `This package is not offered at ${currentSpace().name}.` };
  const quantity = serviceQuantity(service);
  if (quantity < service.minGuests || quantity > service.maxGuests) return { available: false, message: `Package capacity: ${service.minGuests}–${service.maxGuests}; requested quantity is ${quantity}.` };
  const leadDays = leadDaysUntilBooking();
  if (!Number.isFinite(leadDays) || leadDays < service.minLeadDays) return { available: false, message: `Requires at least ${service.minLeadDays} days’ lead time.` };
  const start = timeAsHours(bookingData.start);
  const end = timeAsHours(bookingData.end);
  const conflict = (service.busy || []).find(block => block.date === bookingData.date && start < block.end && end > block.start);
  if (conflict) return { available: false, message: `The complete ${formatHour(start)}–${formatHour(end)} provider hold—including setup and teardown—overlaps provider availability (${formatHour(conflict.start)}–${formatHour(conflict.end)}).` };
  if (!vendorMatchesCateringPreferences(service)) return { available: false, message: "This package does not match the selected catering requirements." };
  if (requiresAllergyConfirmation(service) && !hasCurrentAllergyConfirmation(service)) return hasCurrentAllergyConfirmationRequest(service)
    ? { available: true, requiresConfirmation: true, confirmationRequested: true, message: "Confirmation request sent; payment remains blocked until the vendor responds in writing." }
    : { available: true, requiresConfirmation: true, message: "Schedule fits, but written vendor confirmation of the selected allergy requirements is required before payment." };
  if (requiresAllergyConfirmation(service)) return { available: true, confirmed: true, message: "Available; vendor confirmation is recorded for the selected allergy requirements." };
  return { available: true, message: `Available for the complete ${formatHour(start)}–${formatHour(end)} provider hold, including setup and teardown within the booked venue time.` };
}

function selectedVendorAvailability() {
  const unavailable = selectedVendorServices().filter(service => !vendorAvailability(service).available);
  const pendingConfirmations = selectedVendorServices().filter(service => vendorAvailability(service).requiresConfirmation);
  const incompleteConfigurations = selectedVendorServices().filter(service => !configurationStatus(service).complete);
  const pendingQuotes = selectedVendorServices().filter(service => configurationStatus(service).quoteRequired && !configurationStatus(service).ready);
  return {
    available: unavailable.length === 0 && incompleteConfigurations.length === 0,
    ready: unavailable.length === 0 && pendingConfirmations.length === 0 && incompleteConfigurations.length === 0 && pendingQuotes.length === 0,
    unavailable,
    pendingConfirmations,
    incompleteConfigurations,
    pendingQuotes
  };
}

function pricing() {
  const rental = durationHours() * currentSpace().price;
  const addons = currentAddons().filter(item => bookingData.addons.includes(item.id)).reduce((sum, item) => sum + item.price, 0);
  const venueSubtotal = rental + addons;
  const selectedVendors = selectedBillableVendorServices();
  const vendorSubtotal = selectedVendors.reduce((sum, item) => sum + servicePrice(item), 0);
  const venueTax = taxFor(venueSubtotal, venueTaxProfileFor(currentSpace()));
  const vendorTax = selectedVendors.reduce((sum, item) => sum + taxFor(servicePrice(item), item.taxProfile), 0);
  const tax = venueTax + vendorTax;
  const servicesTotal = venueSubtotal + venueTax + vendorSubtotal + vendorTax;
  const deposit = currentSpace().deposit;
  return { rental, addons, venueSubtotal, vendorSubtotal, venueTax, vendorTax, tax, servicesTotal, rentalTotal: servicesTotal, deposit, dueNow: servicesTotal + deposit };
}

function snapshotConfigurationFor(service) {
  const configuration = configurationFor(service);
  const selections = configurationSchemaFor(service).map(group => {
    const value = configuration.selections[group.id];
    if (group.options) {
      const ids = Array.isArray(value) ? value : [value];
      const choices = ids.filter(Boolean).map(id => group.options.find(item => item.id === id)).filter(Boolean).map(item => ({
        id: item.id,
        label: item.label,
        price: Number(item.price || 0) * (item.priceType === "per_person" ? Number(bookingData.guests) : item.priceType === "hourly" ? durationHours() : item.priceType === "per_unit" ? serviceQuantity(service) : 1),
        priceBasis: item.priceType
      }));
      return { id: group.id, label: group.label, type: group.type, choices };
    }
    return { id: group.id, label: group.label, type: group.type, value: String(value || "") };
  });
  return {
    quantity: serviceQuantity(service),
    guests: bookingData.guests,
    selections,
    referenceImage: configuration.referenceImage ? { ...configuration.referenceImage } : null,
    quote: configuration.quote?.status === "quoted" ? { ...configuration.quote } : null,
    configurationAdjustment: configurationPrice(service),
    cateringRequirements: service.serviceType === "catering" ? {
      ...bookingData.cateringPreferences,
      dietary: [...bookingData.cateringPreferences.dietary],
      allergies: [...bookingData.cateringPreferences.allergies]
    } : null
  };
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
    vendors: selectedBillableVendorServices().map(item => {
      const { imagePreviewUrl, ...catalogueItem } = item;
      return {
        ...catalogueItem,
        price: servicePrice(item),
        pricingBasis: servicePriceBreakdown(item),
        cancellationPolicy: cancellationPolicyFor(item),
        serviceWindow: { start: formatTime(bookingData.start), end: formatTime(bookingData.end), setupMinutes: setupHoursFor(item) * 60, teardownMinutes: teardownHoursFor(item) * 60 },
        allergyConfirmation: requiresAllergyConfirmation(item) ? { status: "Vendor confirmed", source: "Authenticated vendor response (simulated in prototype)", signature: allergyConfirmationSignature(item) } : null,
        selectedConfiguration: snapshotConfigurationFor(item)
      };
    }),
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
  const reviews = spaceReviewSummary(space);
  return `<button class="space-card" data-space="${space.id}" aria-label="View ${space.name}">
    <div class="card-image ${space.image}"><span class="card-tag">${space.category}</span><span class="availability-badge">⚡ Instant Book · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}</span></div>
    <div class="card-body"><div class="card-topline"><div><h3>${space.name}</h3><p>${space.area}</p><span class="space-review-summary"><span aria-hidden="true">★</span> ${reviewSummaryText(reviews)}</span></div><div class="price"><strong>${money(space.price)}</strong><br><small>per hour</small></div></div>
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
  const venueReviews = spaceReviewSummary(space);
  const venueReviewCards = publicReviewsFor("space", space.id).slice(0, 2);
  const totals = pricing();
  const slot = availability();
  const vendorPreviews = vendorServiceTypes.map(type => {
    const offerings = vendorServices.filter(service => service.serviceType === type.id && (service.venueIds || []).includes(space.id));
    const available = offerings.filter(service => vendorAvailability(service).available);
    if (!offerings.length) return "";
    const lowestAvailable = available.length ? Math.min(...available.map(servicePrice)) : null;
    const topRating = Math.max(...offerings.map(service => vendorReviewSummary(service).rating || 0));
    return `<div class="addon-preview vendor-preview"><div><span class="vendor-category">${type.label}</span><strong>${offerings.length} provider option${offerings.length === 1 ? "" : "s"}</strong><small>${available.length} available now · ratings up to ${topRating.toFixed(1)}</small></div><span>${lowestAvailable === null ? "Compare" : `from ${money(lowestAvailable)}`}</span></div>`;
  }).filter(Boolean).join("");
  const selectedDate = new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric" });
  const busySlots = space.busy.filter(block => block.date === bookingData.date).map(block => `<span class="slot booked">Booked · ${formatHour(block.start)}–${formatHour(block.end)}</span>`).join("");
  const canStartBooking = !activeRole() || activeRole().accountType === "customer";
  return `<div class="venue-wrap"><div class="venue-gallery ${space.image}"><div class="window one"></div><div class="window two"></div><div class="table"></div><span class="gallery-pill">▦ View sample gallery</span></div>
    <div class="venue-content"><div><div class="venue-title"><span class="eyebrow">${space.category}</span><h1>${space.name}</h1><p class="venue-meta">${space.area} · ⚡ Instant Book · <span class="rating"><span aria-hidden="true">★</span> ${reviewSummaryText(venueReviews)}</span></p></div>
      <div class="feature-row"><span>♙ Capacity: ${space.capacity} attendees</span>${space.highlights.map(item => `<span>${item}</span>`).join("")}</div>
      <div class="content-block"><h3>${space.descriptionTitle}</h3><p>${space.description}</p></div>
      <div class="content-block"><h3>Availability for ${selectedDate}</h3><div class="slot-row"><span class="slot available">Booking hours: 8:00 AM–11:00 PM</span>${busySlots}<span class="slot ${slot.available ? "selected" : "booked"}">${slot.available ? "✓ Available" : "Not available"} · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}</span></div><p class="block-note">Booked periods are unavailable. Your selected time must include setup and cleanup.</p></div>
      <div class="content-block"><h3>Included in the hourly rate</h3><div class="amenities included">${space.included.map(item => `<span>✓ ${item}</span>`).join("")}</div></div>
      <div class="content-block"><h3>Available add-ons</h3><p>Select available add-ons at checkout.</p><div class="addon-preview-grid">${currentAddons().filter(item => item.available).slice(0, 4).map(item => `<div class="addon-preview"><div><strong>${item.name}</strong><small>${item.description}</small></div><span>+${money(item.price)}</span></div>`).join("")}</div></div>
      <div class="content-block"><h3>Compare optional services from local vendors</h3><p>Compare providers by package, availability, total price, rating, reviews, capacity, and fit before selecting an offering at checkout.</p><div class="addon-preview-grid">${vendorPreviews}</div><p class="block-note">Unavailable options remain visible during comparison. Vendor availability and compatibility are rechecked before payment. Sample ratings and reviews are fictional prototype data.</p></div>
      <div class="content-block venue-reviews"><div class="review-section-head"><div><h3>Verified organizer reviews</h3><p><strong>${venueReviews.rating?.toFixed(1) || "New"}</strong> from ${venueReviews.count} completed booking${venueReviews.count === 1 ? "" : "s"}. Reviews are supplier-specific and never require venue approval.</p></div><span class="verified-review">✓ Completed bookings only</span></div>${venueReviewCards.length ? `<div class="public-review-grid">${venueReviewCards.map(review => publicReviewCard(review)).join("")}</div>` : `<p>No published reviews yet.</p>`}<p class="block-note">Names, dates, booking details, and private issues are minimized. All review content shown in this prototype is fictional.</p></div>
      <div class="content-block"><h3>Venue rules</h3><p>${space.rules} Setup and cleanup must be completed within your booked time.</p></div>
      <div class="content-block"><h3>Refundable security deposit</h3>${space.deposit ? `<p><strong>${money(space.deposit)} is required for this sample booking.</strong> It is shown separately and collected at checkout.</p><div class="deposit-steps"><div><span>1</span><strong>Before the event</strong><small>The amount and deposit policy are accepted at checkout.</small></div><div><span>2</span><strong>After the event</strong><small>The venue team records the inspection within its configured deadline.</small></div><div><span>3</span><strong>Release or documented claim</strong><small>No issue: the full refund is initiated. Any claim requires an itemized reason and evidence.</small></div></div><p class="block-note">Refund timing after release depends on the payment provider and the customer’s bank. This is a sample policy for prototype review.</p>` : `<p><strong>No security deposit is required for this sample listing.</strong> No deposit is added at checkout and no post-event release task is created.</p>`}</div>
    </div>
    <aside class="booking-card"><div class="booking-price"><strong>${money(space.price)}</strong><span>per hour</span></div><h3>Choose a date and time</h3><div class="booking-field"><label>Date<input id="venue-date" type="date" value="${bookingData.date}"></label><label>Attendees<input id="venue-guests" type="number" value="${bookingData.guests}" min="1" max="${space.capacity}"></label></div><div class="booking-field"><label>Start<input id="venue-start" type="time" value="${bookingData.start}"></label><label>End<input id="venue-end" type="time" value="${bookingData.end}"></label></div><div class="availability-status ${slot.available ? "available" : "unavailable"}"><span>${slot.available ? "✓" : "!"}</span><div><strong>${slot.available ? "Available to book" : "This time is unavailable"}</strong><small>${slot.message}</small></div></div><div class="price-lines"><div class="price-line"><span>${durationHours()} hours × ${money(space.price)}</span><span>${money(totals.rental)}</span></div><div class="price-line"><span>Venue add-ons</span><span>${totals.addons ? money(totals.addons) : "Select at checkout"}</span></div><div class="price-line"><span>Independent vendor services</span><span>${totals.vendorSubtotal ? money(totals.vendorSubtotal) : "Optional at checkout"}</span></div><div class="price-line"><span>Estimated supplier taxes</span><span>${money(totals.tax)}</span></div><div class="price-line total"><span>Estimated services total</span><span>${money(totals.servicesTotal)}</span></div>${totals.deposit ? `<div class="price-line"><span>Refundable security deposit</span><span>${money(totals.deposit)}</span></div>` : ""}</div>${canStartBooking ? `<button class="button button-green button-wide" id="book-space" ${slot.available ? "" : "disabled"}>${slot.available ? "Book now" : "Choose another time"}</button>` : '<button class="button button-green button-wide" type="button" data-route="sign-in">Switch to a customer account</button>'}<p class="fine-print">${!canStartBooking ? "Booking checkout is available only in a customer context or as a signed-out guest." : slot.available ? "We’ll recheck venue and selected vendor availability before payment. Successful payment confirms your booking." : "Choose another available time or date."}</p></aside></div></div>`;
}

function bookingPage() {
  if (bookingStep === 4) return successPage();
  const labels = ["Booking details", "Add-ons", "Review & pay", "Confirmation"];
  const fit = eventCompatibility();
  const instantBook = fit.status === "allowed";
  const holdTitle = instantBook ? "⚡ Instant Book checkout" : fit.status === "approval" ? "! Venue approval required" : `! ${fit.label}`;
  const holdDetail = instantBook
    ? "Venue and selected vendor availability will be rechecked before payment."
    : fit.status === "approval"
      ? `${fit.detail} You may explore compatible options, but payment stays unavailable until approval is recorded.`
      : `${fit.detail} This activity cannot continue at the selected venue.`;
  return `<section class="booking-page"><div class="booking-shell"><h1 class="visually-hidden">Book ${currentSpace().name}</h1><button class="back-link" data-space="${currentSpace().id}">← Back to ${currentSpace().name}</button><div class="hold-notice ${instantBook ? "" : "warning"}"><strong>${holdTitle}</strong><span>${holdDetail}</span></div><div class="progress" role="list" aria-label="Booking progress">${labels.map((label, i) => `<div class="progress-step ${i < bookingStep ? "active" : ""}" role="listitem" ${i + 1 === bookingStep ? 'aria-current="step"' : ""}>${label}</div>`).join("")}</div>${bookingStep === 1 ? eventForm() : bookingStep === 2 ? addonForm() : reviewForm()}</div></section>`;
}

function summaryCard() {
  const totals = pricing();
  const selectedAddons = currentAddons().filter(item => bookingData.addons.includes(item.id));
  const selectedVendors = selectedBillableVendorServices();
  const bookingSubtotal = totals.venueSubtotal + totals.vendorSubtotal;
  const fit = eventCompatibility();
  return `<aside class="summary-card"><div class="mini-space"></div><h3>${currentSpace().name}</h3><p><strong>${currentPurpose().label}</strong><br>${new Date(bookingData.date + "T12:00:00").toLocaleDateString("en-CA", { weekday:"long", month:"long", day:"numeric" })}<br>${formatTime(bookingData.start)}–${formatTime(bookingData.end)} · ${bookingData.guests} attendees</p><div class="summary-available ${fit.status === "allowed" ? "" : "warning"}">${fit.status === "allowed" ? "⚡ Venue Instant Book" : `! ${fit.label}`}</div><div class="price-lines"><div class="price-line"><span>Space rental</span><span>${money(totals.rental)}</span></div>${selectedAddons.map(item => `<div class="price-line"><span>${item.name}</span><span>${money(item.price)}</span></div>`).join("")}${selectedVendors.map(item => `<div class="price-line"><span>${escapeHtml(item.name)}<small>${escapeHtml(item.vendor)} · ${servicePriceBreakdown(item)}</small></span><span>${money(servicePrice(item))}</span></div>`).join("")}<div class="price-line subtotal"><span>Booking subtotal before tax</span><span>${money(bookingSubtotal)}</span></div><div class="price-line"><span>Venue supplier tax<small>${venueTaxProfileFor(currentSpace()).id}</small></span><span>${money(totals.venueTax)}</span></div>${selectedVendors.map(item => `<div class="price-line"><span>${escapeHtml(item.vendor)} tax<small>${item.taxProfile.id}</small></span><span>${money(taxFor(servicePrice(item), item.taxProfile))}</span></div>`).join("")}<div class="price-line"><span>Total supplier taxes</span><span>${money(totals.tax)}</span></div><div class="price-line total"><span>Services total</span><span>${money(totals.servicesTotal)}</span></div>${totals.deposit ? `<div class="price-line"><span>Refundable security deposit</span><span>${money(totals.deposit)}</span></div>` : ""}<div class="price-line due"><span>Total due today (CAD)</span><span>${money(totals.dueNow)}</span></div></div></aside>`;
}
function purposePicker() {
  return `<fieldset class="purpose-picker"><legend>What are you planning?</legend><p>Purpose guides the recommendations; ${currentSpace().name}’s configured rules decide what is allowed.</p><div class="purpose-grid">${eventPurposes.map(purpose => {
    const fit = purposeFitAtSpace(purpose.id);
    const selected = bookingData.purposeId === purpose.id;
    return `<label class="purpose-card ${fit.status} ${selected ? "selected" : ""}"><input type="radio" name="event-purpose" value="${purpose.id}" ${selected ? "checked" : ""} ${fit.status === "blocked" ? "disabled" : ""}><span class="purpose-icon" aria-hidden="true">${purpose.icon}</span><span><strong>${purpose.label}</strong><small>${purpose.description}</small><em>${fit.label}</em></span></label>`;
  }).join("")}</div></fieldset>`;
}

function eventNeedsPicker() {
  const options = eventNeedOptionsFor(bookingData.purposeId);
  return `<fieldset class="event-needs"><legend>What will happen at the event?</legend><p>Select everything that applies. These answers may add a requirement or change Instant Book eligibility.</p><div class="event-needs-grid">${options.map(option => `<label><input type="checkbox" name="event-need" value="${option.id}" ${bookingData.eventNeeds?.[option.id] ? "checked" : ""}><span><strong>${option.label}</strong><small>${option.detail}</small></span></label>`).join("")}</div></fieldset>`;
}

function eventForm() {
  const fit = eventCompatibility();
  const detailsRequired = bookingData.purposeId === "other-permitted";
  const detailsValue = detailsRequired ? bookingData.activityDescription : bookingData.notes;
  return `<div class="booking-panel"><div class="form-card"><h2>Tell us what you’re planning</h2><p>We’ll first check venue fit, then show required items, relevant recommendations, and every compatible option this facility allows.</p><form id="event-form">${purposePicker()}${eventNeedsPicker()}<div class="purpose-fit ${fit.status}" role="status"><strong>${fit.label}</strong><span>${fit.detail}</span></div><div class="form-grid"><div class="form-group"><label for="headcount">Number of attendees</label><input id="headcount" type="number" value="${bookingData.guests}" min="1" max="${currentSpace().capacity}" required></div><div class="form-group"><label for="name">Booking contact</label><input id="name" value="${escapeHtml(bookingData.contact)}" required></div><div class="form-group"><label for="email">Confirmation email</label><input id="email" type="email" value="${escapeHtml(bookingData.email)}" required></div><div class="form-group full"><label for="details">${detailsRequired ? "Describe your activity" : "Event notes (optional)"}</label><textarea id="details" rows="4" placeholder="Share setup, activities, accessibility requirements, or describe another use…" ${detailsRequired ? 'required aria-required="true" aria-describedby="details-help"' : ""}>${escapeHtml(detailsValue)}</textarea>${detailsRequired ? '<small id="details-help">Required so the venue can classify and review an activity that is not listed above.</small>' : ""}</div></div><button class="button button-green" type="submit">Check venue fit and options →</button></form></div>${summaryCard()}</div>`;
}
function vendorOfferCard(item) {
  const status = vendorAvailability(item);
  const selected = bookingData.vendorServices.includes(item.id);
  const reviews = vendorReviewSummary(item);
  const recentReview = publicReviewsFor("vendor-service", item.id)[0];
  const cateringDetails = item.serviceType === "catering" ? `<div class="offer-tags">${item.cuisines.map(value => `<span>${value}</span>`).join("")}${item.menuStyles.map(value => `<span>Menu: ${value}</span>`).join("")}${item.servingStyles.map(value => `<span>${value}</span>`).join("")}${item.dietary.map(value => `<span>${value}</span>`).join("")}</div><p class="allergen-note"><strong>Allergy handling:</strong> ${item.allergenNote}</p><small class="delivery-window">Delivery/setup: ${item.deliveryWindow}</small>` : "";
  const coverImage = item.imagePreviewUrl ? `<span class="offer-cover"><img src="${item.imagePreviewUrl}" alt="${escapeHtml(item.name)} sample"></span>` : "";
  const statusHeading = !status.available ? "Unavailable for this booking" : status.confirmationRequested ? "Vendor response pending" : status.requiresConfirmation ? "Vendor confirmation required" : status.confirmed ? "✓ Vendor-confirmed for these requirements" : "✓ Available and compatible";
  return `<label class="vendor-offer-card ${status.available ? "available" : "unavailable"} ${status.requiresConfirmation ? "confirmation-required" : ""} ${selected ? "selected" : ""}">
    <input class="vendor-radio" type="radio" name="vendor-${item.serviceType}" value="${item.id}" data-service-type="${item.serviceType}" ${selected ? "checked" : ""} ${status.available ? "" : "disabled"}>
    <span class="offer-card-content">${coverImage}<span class="offer-card-top"><span><span class="vendor-category">${serviceTypeFor(item).label}</span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.vendor)}</small></span><span class="offer-price"><strong>${money(servicePrice(item))}</strong><small>${servicePriceBreakdown(item)}</small></span></span>
    <span class="offer-rating" aria-label="${reviews.rating?.toFixed(1) || "New"} out of 5 from ${reviews.count} verified prototype bookings"><span aria-hidden="true">★</span> ${reviews.rating?.toFixed(1) || "New"} <small>(${reviews.count} verified review${reviews.count === 1 ? "" : "s"})</small></span>
    <span class="offer-description">${escapeHtml(item.description)}</span>${recentReview ? publicReviewCard(recentReview, true) : ""}<span class="offer-inclusions">${item.inclusions.map(value => `<span>✓ ${escapeHtml(value)}</span>`).join("")}</span>
    <span class="offer-facts"><span>Capacity: ${item.minGuests}–${item.maxGuests}; requested ${serviceQuantity(item)}</span><span>Lead time: ${item.minLeadDays}+ days</span><span>Provider hold: ${formatTime(bookingData.start)}–${formatTime(bookingData.end)} · setup/teardown included</span></span>${cateringDetails}
    <span class="cancellation-summary"><strong>Cancellation & changes:</strong> ${cancellationPolicyFor(item)}</span>
    <span class="offer-status ${status.available ? status.requiresConfirmation ? "pending" : "" : "blocked"}"><strong>${statusHeading}</strong><small>${status.message}</small></span></span>
  </label>`;
}

function vendorComparisonGroup(type) {
  const allOfferings = vendorServices.filter(service => service.serviceType === type.id);
  const matchingOfferings = type.id === "catering" ? allOfferings.filter(vendorMatchesCateringPreferences) : allOfferings;
  let visibleOfferings = [...matchingOfferings];
  const hiddenSelected = allOfferings.find(service => bookingData.vendorServices.includes(service.id) && !visibleOfferings.includes(service));
  if (hiddenSelected) visibleOfferings = [hiddenSelected, ...visibleOfferings];
  const offerings = sortedVendorServices(visibleOfferings);
  const selected = bookingData.vendorServices.some(id => allOfferings.some(service => service.id === id));
  const quantityControl = ["face-painting", "cake"].includes(type.id) ? `<label class="vendor-quantity">${type.id === "cake" ? "Servings needed" : "Participants to serve"}<input class="vendor-quantity-input" data-quantity-type="${type.id}" type="number" min="1" max="${bookingData.guests}" value="${bookingData.vendorQuantities[type.id] || bookingData.guests}"><small>Event attendance: ${bookingData.guests}</small></label>` : "";
  return `<fieldset class="vendor-compare-group"><legend>${type.label}</legend><div class="vendor-group-head"><div><p>${type.description}</p><small>${matchingOfferings.length} matching package${matchingOfferings.length === 1 ? "" : "s"} · one package may be selected in this group</small></div><div class="vendor-group-actions">${quantityControl}<label class="skip-service"><input class="vendor-radio" type="radio" name="vendor-${type.id}" value="" data-service-type="${type.id}" ${selected ? "" : "checked"}> Skip ${type.label.toLowerCase()}</label></div></div><div class="vendor-card-grid">${offerings.map(vendorOfferCard).join("") || `<div class="no-vendor-match"><strong>No catering packages match every filter.</strong><span>Change cuisine, dietary, allergy-review, or serving-style filters to compare more providers.</span></div>`}</div></fieldset>`;
}

function cateringFilterPanel(preferences) {
  const dietaryOptions = ["Vegetarian", "Vegan", "Halal", "Gluten-aware"];
  const allergyOptions = [{ value: "nut", label: "Nut / cross-contact" }, { value: "gluten", label: "Gluten / celiac" }, { value: "dairy", label: "Dairy" }];
  return `<section class="catering-filter-panel" aria-labelledby="catering-filter-title"><div><span class="vendor-category">Catering requirements</span><h3 id="catering-filter-title">Find a catering package that fits</h3><p>Select every requirement that applies. Capabilities are vendor-reported; material allergy requests require written vendor confirmation before payment because shared-kitchen cross-contact may remain possible.</p></div><div class="catering-filter-grid"><label>Cuisine<select id="catering-cuisine"><option value="any" ${preferences.cuisine === "any" ? "selected" : ""}>Any cuisine</option><option value="Canadian" ${preferences.cuisine === "Canadian" ? "selected" : ""}>Canadian</option><option value="Indian" ${preferences.cuisine === "Indian" ? "selected" : ""}>Indian</option><option value="South Asian" ${preferences.cuisine === "South Asian" ? "selected" : ""}>South Asian</option><option value="Italian" ${preferences.cuisine === "Italian" ? "selected" : ""}>Italian</option><option value="Mediterranean" ${preferences.cuisine === "Mediterranean" ? "selected" : ""}>Mediterranean</option></select></label><label>Menu preference<select id="catering-menu"><option value="any" ${preferences.menu === "any" ? "selected" : ""}>Any menu</option><option value="Classic comfort" ${preferences.menu === "Classic comfort" ? "selected" : ""}>Classic / comfort</option><option value="Kids-friendly" ${preferences.menu === "Kids-friendly" ? "selected" : ""}>Kids-friendly</option><option value="Vegetarian-forward" ${preferences.menu === "Vegetarian-forward" ? "selected" : ""}>Vegetarian-forward</option><option value="South Asian" ${preferences.menu === "South Asian" ? "selected" : ""}>South Asian menu</option><option value="Italian" ${preferences.menu === "Italian" ? "selected" : ""}>Italian menu</option></select></label><fieldset class="filter-check-group"><legend>Dietary support · choose all</legend><div>${dietaryOptions.map(value => `<label><input class="catering-dietary" type="checkbox" value="${value}" ${preferences.dietary.includes(value) ? "checked" : ""}> ${value}</label>`).join("")}</div></fieldset><fieldset class="filter-check-group"><legend>Allergy review · choose all</legend><div>${allergyOptions.map(option => `<label><input class="catering-allergy" type="checkbox" value="${option.value}" ${preferences.allergies.includes(option.value) ? "checked" : ""}> ${option.label}</label>`).join("")}</div></fieldset><label>Serving style<select id="catering-style"><option value="any" ${preferences.servingStyle === "any" ? "selected" : ""}>Any serving style</option><option value="Buffet" ${preferences.servingStyle === "Buffet" ? "selected" : ""}>Buffet</option><option value="Drop-off" ${preferences.servingStyle === "Drop-off" ? "selected" : ""}>Drop-off</option><option value="Family-style" ${preferences.servingStyle === "Family-style" ? "selected" : ""}>Family-style</option><option value="Plated" ${preferences.servingStyle === "Plated" ? "selected" : ""}>Plated</option></select></label><label class="full">Dietary/allergy notes for vendor confirmation<textarea id="catering-notes" rows="2" placeholder="Example: one guest has a severe peanut allergy; confirm ingredients and cross-contact controls.">${escapeHtml(preferences.notes)}</textarea></label></div></section>`;
}

function configurationChoicePrice(choice) {
  if (!choice.price) return "Included";
  const suffix = choice.priceType === "per_person" ? " / guest" : choice.priceType === "hourly" ? " / hour" : choice.priceType === "per_unit" ? " / unit" : "";
  return `+${money(choice.price)}${suffix}`;
}

function organizerServiceConfigurator(service) {
  const configuration = configurationFor(service);
  const schema = configurationSchemaFor(service);
  if (!schema.length) return `<section class="service-configurator fixed-package" id="service-configurator" aria-labelledby="service-configurator-title"><div class="configurator-head"><div><span class="eyebrow">Ready-made package</span><h3 id="service-configurator-title">${escapeHtml(service.name)}</h3><p>${escapeHtml(service.vendor)} publishes this as a fixed package with no organizer choices. The displayed scope and price are what will be saved with the order.</p></div><div class="config-total"><span>Package price</span><strong>${money(servicePrice(service))}</strong><small>No configuration required</small></div></div><div class="configuration-status ready" role="status"><strong>✓ Ready for checkout</strong><span>Availability and price will be checked again before payment.</span></div></section>`;
  const status = configurationStatus(service);
  const referenceFile = organizerReferenceFiles[service.id];
  const fields = schema.map(group => {
    const value = configuration.selections[group.id];
    if (group.type === "single") return `<fieldset class="config-field config-field-wide"><legend>${group.label}${group.required ? " *" : ""}</legend>${group.help ? `<p>${group.help}</p>` : ""}<div class="config-choice-grid">${group.options.map(choice => `<label class="config-choice"><input type="radio" name="config-${service.id}-${group.id}" data-config-service="${service.id}" data-config-group="${group.id}" value="${choice.id}" ${value === choice.id ? "checked" : ""}><span><strong>${choice.label}</strong><small>${configurationChoicePrice(choice)}${choice.bookingMode === "quote" ? " · Quote required" : ""}</small></span></label>`).join("")}</div></fieldset>`;
    if (group.type === "multi") {
      const selected = Array.isArray(value) ? value : [];
      return `<fieldset class="config-field config-field-wide"><legend>${group.label}${group.required ? " *" : ""}</legend><p>${group.help || `${group.min ? `Choose at least ${group.min}` : "Optional"}${group.max ? ` and no more than ${group.max}` : ""}.`}</p><div class="config-choice-grid">${group.options.map(choice => `<label class="config-choice"><input type="checkbox" data-config-service="${service.id}" data-config-group="${group.id}" data-config-max="${group.max || ""}" value="${choice.id}" ${selected.includes(choice.id) ? "checked" : ""}><span><strong>${choice.label}</strong><small>${configurationChoicePrice(choice)}</small></span></label>`).join("")}</div></fieldset>`;
    }
    if (group.type === "textarea") return `<label class="config-field config-field-wide"><span>${group.label}${group.required ? " *" : ""}</span><textarea data-config-service="${service.id}" data-config-group="${group.id}" rows="3" placeholder="${escapeHtml(group.placeholder || "")}" ${group.required ? "required" : ""}>${escapeHtml(value || "")}</textarea></label>`;
    return `<label class="config-field"><span>${group.label}${group.required ? " *" : ""}</span><input type="${group.type === "time" ? "time" : "text"}" data-config-service="${service.id}" data-config-group="${group.id}" value="${escapeHtml(value || "")}" placeholder="${escapeHtml(group.placeholder || "")}" ${group.maxLength ? `maxlength="${group.maxLength}"` : ""} ${group.required ? "required" : ""}></label>`;
  }).join("");
  const referenceUpload = status.referenceRequired ? `<div class="config-reference config-field-wide"><div><span class="config-label">Custom design reference *</span><p>Private upload visible only to you and ${escapeHtml(service.vendor)}<br>Accepted files: JPG, PNG, or WebP; maximum ${MAX_IMAGE_LABEL}. Uploading a reference does not mean the vendor has accepted or can reproduce it.</p></div>${referenceFile ? `<div class="upload-preview"><img src="${referenceFile.previewUrl}" alt="Custom reference preview"><div><strong>${escapeHtml(configuration.referenceImage.name)}</strong><span>${(configuration.referenceImage.size / 1024 / 1024).toFixed(2)} MB · local prototype preview</span><span class="upload-actions"><label class="text-button" for="organizer-reference-${service.id}">Replace</label><button class="text-button" type="button" data-remove-reference="${service.id}">Remove</button></span></div></div>` : `<label class="upload-drop" for="organizer-reference-${service.id}"><strong>Upload reference image</strong><span>JPG, PNG, or WebP · up to ${MAX_IMAGE_LABEL}</span></label>`}<input class="visually-hidden organizer-reference-input" id="organizer-reference-${service.id}" type="file" accept="image/jpeg,image/png,image/webp" data-reference-service="${service.id}" aria-describedby="reference-help-${service.id}"><small id="reference-help-${service.id}">Client-side validation is repeated securely by the server in production.</small><div class="upload-error" id="reference-error-${service.id}" role="alert" ${configuration.imageError ? "" : "hidden"}>${escapeHtml(configuration.imageError || "")}</div></div>` : "";
  const quotePanel = status.quoteRequired ? `<div class="quote-gate config-field-wide"><div><strong>${configuration.quote.status === "quoted" ? "✓ Vendor quote accepted" : configuration.quote.status === "requested" ? "Vendor quote requested" : "Custom work needs a quote"}</strong><span>${status.message}</span>${configuration.quote.status === "quoted" ? `<small>${configuration.quote.reference} · custom-work adjustment ${money(configuration.quote.amount)}</small>` : ""}</div>${status.complete && configuration.quote.status === "none" ? `<button class="button button-dark" type="button" data-request-quote="${service.id}">Request itemized quote</button>` : status.complete && configuration.quote.status === "requested" ? `<button class="button button-dark" type="button" data-simulate-quote="${service.id}">Simulate vendor quote</button>` : ""}</div>` : "";
  return `<section class="service-configurator" id="service-configurator" aria-labelledby="service-configurator-title"><div class="configurator-head"><div><span class="eyebrow">Step 2 · Configure the selected package</span><h3 id="service-configurator-title">Customize ${escapeHtml(service.name)}</h3><p>${escapeHtml(service.vendor)} defines the available choices and prices. Required included selections may be changed without adding cost; premium choices update the total immediately.</p></div><div class="config-total"><span>Configured price</span><strong>${money(servicePrice(service))}</strong><small>${configurationPrice(service) ? `${money(configurationPrice(service))} in selected options` : "No paid options added"}</small></div></div><div class="configuration-fields">${fields}${referenceUpload}</div>${quotePanel}<div class="configuration-status ${status.ready ? "ready" : "attention"}" role="status"><strong>${status.ready ? "✓ Ready for checkout" : status.quoteRequired ? "Quote required" : "Configuration incomplete"}</strong><span>${status.message}</span></div></section>`;
}

function liveConfigurationSummary(service) {
  const configuration = configurationFor(service);
  const schema = configurationSchemaFor(service);
  const rows = schema.map(group => {
    const value = configuration.selections[group.id];
    if (group.options) {
      const values = Array.isArray(value) ? value : [value];
      const labels = values.map(id => group.options.find(item => item.id === id)?.label).filter(Boolean);
      return labels.length ? `<small><strong>${group.label}:</strong> ${labels.join(", ")}</small>` : "";
    }
    return String(value || "").trim() ? `<small><strong>${group.label}:</strong> ${escapeHtml(value)}</small>` : "";
  }).filter(Boolean).join("");
  const reference = configuration.referenceImage ? `<small><strong>Private reference:</strong> ${escapeHtml(configuration.referenceImage.name)} · ${(configuration.referenceImage.size / 1024 / 1024).toFixed(2)} MB</small>` : "";
  const quote = configuration.quote?.status === "quoted" ? `<small><strong>Accepted vendor quote:</strong> ${configuration.quote.reference} · ${money(configuration.quote.amount)}</small>` : "";
  const catering = service.serviceType === "catering" ? `<small><strong>Dietary/allergy request:</strong> ${bookingData.cateringPreferences.dietary.length ? bookingData.cateringPreferences.dietary.join(", ") : "none selected"}${bookingData.cateringPreferences.allergies.length ? ` · vendor-confirmed review: ${bookingData.cateringPreferences.allergies.join(", ")}` : ""}</small>${bookingData.cateringPreferences.notes ? `<small><strong>Organizer note:</strong> ${escapeHtml(bookingData.cateringPreferences.notes)}</small>` : ""}` : "";
  return `<div class="saved-configuration">${rows}${reference}${quote}${catering}</div>`;
}

function addonStageNav() {
  const steps = [{ id: "fit", label: "Fit & included" }, { id: "venue", label: "Venue options" }, { id: "services", label: "Event services" }];
  return `<ol class="addon-substeps" aria-label="Add-on selection steps">${steps.map((step, index) => `<li class="${step.id === addonStage ? "active" : ""}"><button type="button" data-addon-stage="${step.id}" ${step.id === addonStage ? 'aria-current="step"' : ""}><span>${index + 1}</span>${step.label}</button></li>`).join("")}</ol>`;
}

function eventPlanBanner() {
  const purpose = currentPurpose();
  const fit = eventCompatibility();
  return `<div class="event-plan-banner"><span class="purpose-icon" aria-hidden="true">${purpose.icon}</span><div><span class="vendor-category">Your event plan</span><strong>${purpose.label}</strong><small>${bookingData.guests} attendees · ${currentSpace().name}</small></div><span class="fit-chip ${fit.status}">${fit.label}</span><button class="text-button" type="button" data-change-purpose>Change purpose</button></div>`;
}

function addonFitStage() {
  const fit = eventCompatibility();
  const required = requiredAddonsForBooking();
  const conditionalItems = [
    bookingData.eventNeeds?.alcohol ? "Liquor licence, insurance, and venue verification before confirmation" : "",
    bookingData.eventNeeds?.publicEvent ? "Public-event capacity, safety, admission, and permit review" : ""
  ].filter(Boolean);
  return `<section class="addon-stage" aria-labelledby="addon-stage-title"><span class="eyebrow">Add-ons · Step 1 of 3</span><h2 id="addon-stage-title">Confirm fit and requirements</h2><p>We separate what is included, what is required, and what is optional before showing paid recommendations.</p><div class="purpose-fit ${fit.status}"><strong>${fit.label}</strong><span>${fit.detail}</span></div><div class="classification-grid"><article><span class="classification-label included">Included</span><h3>Included with the venue</h3><div class="amenities included">${currentSpace().included.map(item => `<span>✓ ${item}</span>`).join("")}</div></article><article><span class="classification-label required">Required</span><h3>Triggered by your answers</h3>${required.length ? required.map(item => `<div class="requirement-line"><span><strong>${item.name}</strong><small>${item.reason}</small></span><b>${item.available ? money(item.price) : "Unavailable"}</b></div>`).join("") : '<p class="empty-guidance">No mandatory paid venue item was triggered by your answers.</p>'}${conditionalItems.map(item => `<div class="requirement-line task"><span><strong>Venue verification</strong><small>${item}</small></span><b>Task</b></div>`).join("")}</article><article><span class="classification-label recommended">Next</span><h3>Recommendations stay optional</h3><p class="empty-guidance">Nothing optional is preselected. The next steps prioritize choices relevant to your ${currentPurpose().shortLabel.toLowerCase()}, with all facility-compatible options still available.</p></article></div><div class="booking-actions"><button class="button button-light" type="button" id="booking-back">← Edit booking details</button><button class="button button-green" type="button" data-addon-stage="venue">Choose venue options →</button></div></section>`;
}

function venueAddonOption(item, requiredIds, recommendations) {
  const required = requiredIds.has(item.id);
  const recommended = recommendations.has(item.id);
  if (required) return `<div class="option required-option ${item.available ? "" : "unavailable"}"><span><span class="required-check" aria-hidden="true">✓</span><span class="option-copy"><span class="classification-label required">Required</span><strong>${item.name}</strong><small>${item.description} · required by your event answers</small></span></span><span class="option-price">${item.available ? money(item.price) : "Not available"}</span></div>`;
  return `<label class="option ${item.available ? "" : "unavailable"}"><span><input class="addon-checkbox" type="checkbox" value="${item.id}" ${bookingData.addons.includes(item.id) ? "checked" : ""} ${item.available ? "" : "disabled"}> <span class="option-copy"><span class="classification-label ${recommended ? "recommended" : "optional"}">${recommended ? `Recommended for ${currentPurpose().shortLabel}` : "Also available"}</span><strong>${item.name}</strong><small>${item.description}</small></span></span><span class="option-price">${item.available ? `+${money(item.price)}` : "Not available"}</span></label>`;
}

function venueOptionsStage() {
  const requiredIds = new Set(requiredAddonsForBooking().map(item => item.id));
  const recommendations = recommendedAddonIds();
  const ordered = [...currentAddons()].sort((a, b) => Number(requiredIds.has(b.id)) - Number(requiredIds.has(a.id)) || Number(recommendations.has(b.id)) - Number(recommendations.has(a.id)));
  return `<section class="addon-stage" aria-labelledby="addon-stage-title"><span class="eyebrow">Add-ons · Step 2 of 3</span><h2 id="addon-stage-title">Choose venue options</h2><p>These items are provided and invoiced by ${currentSpace().name}. Recommended choices are optional and start unchecked.</p><div class="selection-key"><span><i class="required"></i>Required</span><span><i class="recommended"></i>Recommended</span><span><i class="optional"></i>Also available</span></div><form id="venue-addon-form"><div class="option-list">${ordered.map(item => venueAddonOption(item, requiredIds, recommendations)).join("")}</div><div class="booking-actions"><button class="button button-light" type="button" data-addon-stage="fit">← Fit and requirements</button><button class="button button-green" type="submit">Choose event services →</button></div></form></section>`;
}

function serviceCategoryCard(type) {
  const offerings = vendorServices.filter(service => service.serviceType === type.id && (service.venueIds || []).includes(currentSpace().id));
  const available = offerings.filter(service => vendorAvailability(service).available);
  const selected = selectedVendorServices().find(service => service.serviceType === type.id);
  const selectedStatus = selected ? vendorAvailability(selected) : null;
  const lowest = available.length ? Math.min(...available.map(servicePrice)) : null;
  const recommended = recommendedServiceTypeIds().has(type.id);
  const selectedConfigurationStatus = selected ? configurationStatus(selected) : null;
  const needsAttention = selected && (!selectedStatus.available || !selectedConfigurationStatus.ready);
  const attentionCopy = !selected ? "" : !selectedStatus.available ? `${selectedStatus.message} This item is excluded from the amount due until you replace or remove it.` : selectedConfigurationStatus.message;
  return `<button class="service-category-card ${selected ? "selected" : ""} ${needsAttention ? "attention" : ""}" type="button" data-service-category="${type.id}"><span class="classification-label ${needsAttention ? "attention" : recommended ? "recommended" : "optional"}">${needsAttention ? "Needs attention" : recommended ? `Recommended for ${currentPurpose().shortLabel}` : "Compatible option"}</span><span class="service-category-head"><strong>${type.label}</strong><b>${lowest === null ? "No current match" : `From ${money(lowest)}`}</b></span><span>${type.description}</span><small>${available.length} currently available package${available.length === 1 ? "" : "s"}${selected ? ` · Selected: ${selected.name}` : ""}</small>${needsAttention ? `<small class="attention-copy">${attentionCopy}</small>` : ""}<em>${selected ? "Review, customize, or change provider →" : "Compare providers →"}</em></button>`;
}

function eventServicesStage() {
  const preferences = bookingData.cateringPreferences;
  const compatibleTypes = compatibleServiceTypes();
  if (activeServiceType && !compatibleTypes.some(type => type.id === activeServiceType)) activeServiceType = null;
  const recommendedIds = recommendedServiceTypeIds();
  const selectedTypeIds = new Set(selectedVendorServices().map(service => service.serviceType));
  const visibleTypes = showAllServiceTypes ? compatibleTypes : compatibleTypes.filter(type => recommendedIds.has(type.id) || selectedTypeIds.has(type.id));
  const activeType = compatibleTypes.find(type => type.id === activeServiceType);
  const activeSelectedService = activeType ? selectedVendorServices().find(service => service.serviceType === activeType.id) : null;
  const vendorStatus = selectedVendorAvailability();
  const pendingConfirmation = vendorStatus.pendingConfirmations[0];
  const confirmationRequestSent = pendingConfirmation && hasCurrentAllergyConfirmationRequest(pendingConfirmation);
  const fit = eventCompatibility();
  const canReview = fit.status === "allowed" && vendorStatus.ready;
  const primaryLabel = fit.status !== "allowed" ? "Venue approval required before payment" : pendingConfirmation ? "Await vendor confirmation" : vendorStatus.pendingQuotes.length ? "Complete vendor quote" : vendorStatus.incompleteConfigurations.length ? "Complete package choices" : vendorStatus.available ? "Review and pay →" : "Resolve selected service";
  const hasHiddenTypes = visibleTypes.length < compatibleTypes.length;
  const attention = vendorStatus.unavailable.length ? `<div class="selection-attention" role="alert"><strong>${vendorStatus.unavailable.length} selected service${vendorStatus.unavailable.length === 1 ? " needs" : "s need"} attention</strong><span>${vendorStatus.unavailable.map(item => `${item.name}: ${vendorAvailability(item).message}`).join(" ")} Open the marked category to replace or remove it. It is not included in the amount due.</span></div>` : "";
  const overview = `${attention}<div class="service-category-grid">${visibleTypes.map(serviceCategoryCard).join("") || `<div class="empty-service-guidance"><strong>No service category is automatically recommended.</strong><span>That does not mean services are prohibited. Browse every option this facility supports.</span></div>`}</div>${showAllServiceTypes || !hasHiddenTypes ? '<p class="all-services-note">Showing every service category with at least one package configured for this facility.</p>' : `<button class="browse-all-services" type="button" id="browse-all-services">Browse all services allowed at this venue (${compatibleTypes.length})</button>`}`;
  const comparison = activeType ? `<div class="vendor-marketplace-head compact"><div><span class="eyebrow">Independent event-service marketplace</span><h3>${activeType.label}</h3><p>First compare provider packages. Then configure the selected package using only choices and prices published by that vendor.</p></div><label>Sort providers<select id="vendor-sort"><option value="best-match" ${vendorSort === "best-match" ? "selected" : ""}>Best match</option><option value="price" ${vendorSort === "price" ? "selected" : ""}>Price: low to high</option><option value="rating" ${vendorSort === "rating" ? "selected" : ""}>Rating: high to low</option></select></label></div>${activeType.id === "catering" ? cateringFilterPanel(preferences) : ""}<p id="vendor-filter-status" class="visually-hidden" role="status" aria-live="polite"></p><div class="vendor-comparison">${vendorComparisonGroup(activeType)}</div>${activeSelectedService ? organizerServiceConfigurator(activeSelectedService) : '<div class="configuration-empty"><strong>Select a provider package to customize it.</strong><span>Menus, designs, service options, and vendor-defined prices appear after selection.</span></div>'}<button class="button button-light service-done" type="button" data-service-done>← Back to service categories</button>` : overview;
  return `<section class="addon-stage" aria-labelledby="addon-stage-title"><span class="eyebrow">Add-ons · Step 3 of 3</span><h2 id="addon-stage-title">${activeType ? `Compare ${activeType.label.toLowerCase()}` : "Choose an event-service category"}</h2><p>${activeType ? "Choose one package or skip this category. Your selections in other categories stay saved." : `Recommended for your ${currentPurpose().shortLabel.toLowerCase()}, with a general facility-compatible catalogue available.`}</p><form id="addon-form">${comparison}<div class="vendor-policy-note"><strong>Independent suppliers</strong><span>Every selected provider remains responsible for its package, cancellation terms, availability, fulfilment, tax profile, and supplier invoice. Optional recommendations are never preselected.</span></div>${pendingConfirmation ? `<div class="confirmation-gate"><div><strong>${confirmationRequestSent ? "Vendor response pending" : "Written allergy confirmation required"}</strong><span>${confirmationRequestSent ? `The request was sent to ${pendingConfirmation.vendor}. Payment remains blocked until that vendor responds.` : `${pendingConfirmation.vendor} must confirm the selected allergy and cross-contact requirements before its order can be paid and confirmed.`}</span>${confirmationRequestSent ? '<small class="prototype-note">Prototype test control: the next action simulates a response from an authenticated vendor user. Organizers cannot approve their own request in production.</small>' : ""}</div>${confirmationRequestSent ? `<button class="button button-dark" type="button" id="simulate-vendor-confirmation" data-service-id="${pendingConfirmation.id}">Simulate vendor-confirmed response</button>` : `<button class="button button-dark" type="button" id="request-vendor-confirmation" data-service-id="${pendingConfirmation.id}">Send confirmation request</button>`}</div>` : ""}${fit.status !== "allowed" ? `<div class="checkout-block"><strong>${fit.label}</strong><span>${fit.detail}</span><button class="text-button" type="button" data-change-purpose>Change purpose or event answers</button></div>` : ""}<div class="booking-actions"><button class="button button-light" type="button" data-addon-stage="venue">← Venue options</button><button class="button button-green" type="submit" ${canReview ? "" : "disabled"}>${primaryLabel}</button></div></form></section>`;
}

function addonForm() {
  ensureRequiredAddons();
  const stageContent = addonStage === "fit" ? addonFitStage() : addonStage === "venue" ? venueOptionsStage() : eventServicesStage();
  return `<div class="booking-panel vendor-booking-panel"><div class="form-card">${eventPlanBanner()}${addonStageNav()}${stageContent}</div>${summaryCard()}</div>`;
}

function reviewForm() {
  const totals = pricing();
  const selectedAddons = currentAddons().filter(item => bookingData.addons.includes(item.id));
  const requiredAddonIds = new Set(requiredAddonsForBooking().map(item => item.id));
  const selectedNeedLabels = eventNeedOptions.filter(option => bookingData.eventNeeds?.[option.id]).map(option => option.label);
  const vendors = selectedVendorServices();
  const vendorStatus = selectedVendorAvailability();
  const fit = eventCompatibility();
  const canPay = vendorStatus.ready && fit.status === "allowed";
  const organizerDetails = bookingData.purposeId === "other-permitted" ? bookingData.activityDescription : bookingData.notes;
  const vendorReview = vendors.map(item => {
    const status = vendorAvailability(item);
    const reviews = vendorReviewSummary(item);
    const subtotal = servicePrice(item);
    const supplierTax = taxFor(subtotal, item.taxProfile);
    const configuration = configurationStatus(item);
    return `<article class="review-vendor-order"><div><span class="vendor-category">${serviceTypeFor(item).label}</span><strong>${escapeHtml(item.name)}</strong><small>${escapeHtml(item.vendor)} · ${reviews.rating?.toFixed(1) || "New"} ★ from ${reviews.count} verified prototype reviews</small><small>Pricing basis: ${servicePriceBreakdown(item)}</small>${liveConfigurationSummary(item)}<small><strong>Cancellation & changes:</strong> ${cancellationPolicyFor(item)}</small></div><div class="review-vendor-money"><span>${money(subtotal)}</span><small>${item.taxProfile.label}: ${money(supplierTax)}</small><strong>${money(subtotal + supplierTax)} supplier total</strong></div><span class="mini-status ${status.available && !status.requiresConfirmation && configuration.ready ? "" : "pending"}">${status.available && !status.requiresConfirmation && configuration.ready ? "✓ Ready" : `! ${configuration.message || status.message}`}</span></article>`;
  }).join("");
  return `<div class="booking-panel"><div class="form-card"><h2>Review and pay</h2><p>${canPay ? "The venue and every selected vendor currently show available and compatible. Any disclosed allergy review has vendor confirmation. We’ll recheck all service windows once more when you confirm and pay." : fit.status !== "allowed" ? `${fit.label}. The venue must approve this use before payment.` : "One or more selected vendor service is unavailable or still needs written confirmation. Return to provider comparison before payment."}</p><div class="content-block"><h3>Booking details</h3><p><strong>${currentPurpose().label}</strong><br>${bookingData.guests} attendees · ${formatTime(bookingData.start)}–${formatTime(bookingData.end)}${selectedNeedLabels.length ? `<br>Activity details: ${selectedNeedLabels.join(", ")}` : ""}</p>${organizerDetails ? `<p class="block-note"><strong>${bookingData.purposeId === "other-permitted" ? "Activity description" : "Organizer notes"}:</strong> ${escapeHtml(organizerDetails)}</p>` : ""}<div class="purpose-fit ${fit.status}"><strong>${fit.label}</strong><span>${fit.detail}</span></div></div><div class="content-block"><h3>Venue add-ons and requirements</h3><p>${selectedAddons.length ? selectedAddons.map(item => `✓ ${item.name}${requiredAddonIds.has(item.id) ? " · Required" : " · Optional"}`).join("<br>") : "No venue add-ons selected or required."}</p></div><div class="content-block"><h3>Independent vendor orders</h3>${vendors.length ? vendorReview : "<p>No independent vendor services selected.</p>"}<p class="block-note">Each provider issues a separate supplier invoice. Package-specific cancellation summaries are shown above; Gather’s seller-funded commission is not added as a separate customer charge.</p></div><div class="content-block"><h3>Security deposit</h3><p>${totals.deposit ? `${money(totals.deposit)} is collected separately at checkout for this sample booking. After the event, the venue team follows its configured deadline to release it or submit an itemized claim with evidence.` : "No security deposit is required for this space."}</p></div><div class="payment-panel"><div><span class="secure-icon">🔒</span><strong>Payment details (prototype)</strong><small>Demo only — no card details are collected or processed.</small></div><div class="mock-card-field">Card number &nbsp; •••• •••• •••• 4242</div><div class="mock-card-row"><span>Expiry &nbsp; 12/29</span><span>CVC &nbsp; •••</span></div><p class="prototype-note">This interactive prototype does not create a charge or reservation.</p></div><label class="option terms"><span><input id="agree" type="checkbox" required> &nbsp; I reviewed and agree to the venue rules, the visible package-specific vendor cancellation/change terms, and the security-deposit policy when applicable.</span></label><div style="margin-top:24px"><button class="button button-light" id="booking-back">← Back</button> <button class="button button-green" id="confirm-booking" ${canPay ? "" : "disabled"}>${canPay ? `Confirm and pay ${cadMoney(totals.dueNow)}` : fit.status !== "allowed" ? "Venue approval required" : "Return to provider comparison"}</button></div></div>${summaryCard()}</div>`;
}
function successPage() {
  const snapshot = confirmedBookingSnapshot || createBookingSnapshot();
  const vendorCount = snapshot.vendors.length;
  const manageAction = activeRole()?.accountType === "customer"
    ? '<button class="button button-green" data-route="customer-event">Manage My Event</button>'
    : '<button class="button button-green" type="button" data-start-onboarding="organizer" data-claim-booking="true">Create account and link this booking</button>';
  return `<div class="success-card"><div class="success-icon">✓</div><span class="eyebrow">Demo booking · ${snapshot.bookingId}</span><h1>Payment received. Booking confirmed.</h1><span class="status-pill confirmed">Venue and selected services confirmed</span><p>${snapshot.space.name} would be reserved for ${new Date(snapshot.booking.date + "T12:00:00").toLocaleDateString("en-CA", { weekday:"long", month:"long", day:"numeric" })} from ${formatTime(snapshot.booking.start)} to ${formatTime(snapshot.booking.end)}</p><p><strong>Demo total:</strong> ${money(snapshot.totals.dueNow)} CAD${snapshot.totals.deposit ? `, including the separate ${money(snapshot.totals.deposit)} refundable security deposit` : ""}.</p><div class="confirmation-docs"><strong>Documents available now</strong><span>✓ Venue supplier invoice</span>${vendorCount ? `<span>✓ ${vendorCount} vendor supplier invoice${vendorCount === 1 ? "" : "s"}</span>` : ""}<span>✓ Payment receipt</span>${snapshot.totals.deposit ? "<span>✓ Security-deposit record</span>" : ""}</div><p>Use My Event for supplier-specific status, requirements, messages, the day-of schedule, access release, and change or cancellation impact previews.</p><p><strong>Prototype only:</strong> no charge, email, message, or real reservation was created.</p><div class="button-row">${manageAction}<button class="button button-light" data-route="booking-documents">View booking documents</button><button class="button button-light" data-route="home">Browse more spaces</button></div></div>`;
}

function vendorInvoiceDocument(item, snapshot) {
  const vendorTax = taxFor(item.price, item.taxProfile);
  const selectedConfiguration = item.selectedConfiguration || {};
  const configurationRows = (selectedConfiguration.selections || []).map(group => {
    const value = group.choices?.length ? group.choices.map(choice => `${choice.label}${choice.price ? ` (+${money(choice.price)})` : ""}`).join(", ") : group.value;
    return value ? `<div class="key-value"><span>${escapeHtml(group.label)}</span><strong>${escapeHtml(value)}</strong></div>` : "";
  }).join("");
  const referenceConfiguration = selectedConfiguration.referenceImage ? `<div class="key-value"><span>Private reference image</span><strong>${escapeHtml(selectedConfiguration.referenceImage.name)} · ${(selectedConfiguration.referenceImage.size / 1024 / 1024).toFixed(2)} MB</strong></div>` : "";
  const quoteConfiguration = selectedConfiguration.quote ? `<div class="key-value"><span>Accepted vendor quote</span><strong>${escapeHtml(selectedConfiguration.quote.reference)} · ${money(selectedConfiguration.quote.amount)}</strong></div>` : "";
  const cateringRequirements = selectedConfiguration.cateringRequirements;
  const cateringConfiguration = cateringRequirements ? `<div class="key-value"><span>Dietary requirements</span><strong>${cateringRequirements.dietary.length ? cateringRequirements.dietary.join(", ") : "None selected"}</strong></div><div class="key-value"><span>Allergy review</span><strong>${cateringRequirements.allergies.length ? `${cateringRequirements.allergies.join(", ")} · vendor-confirmed` : "None requested"}</strong></div>${cateringRequirements.notes ? `<p>Organizer note: ${escapeHtml(cateringRequirements.notes)}</p>` : ""}<p>${escapeHtml(item.allergenNote || "")}</p>` : "";
  const setupMinutes = item.serviceWindow?.setupMinutes || 0;
  const teardownMinutes = item.serviceWindow?.teardownMinutes || 0;
  const confirmation = item.allergyConfirmation ? `<div class="key-value"><span>Requirement confirmation</span><strong>${item.allergyConfirmation.status} · ${item.allergyConfirmation.source}</strong></div>` : "";
  return `<article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Supplier invoice · Independent vendor</span><h2>${escapeHtml(item.vendor)}</h2><p>Invoice INV-${item.invoicePrefix}-${snapshot.reference} · Issued at booking · ${item.taxProfile.id}</p></div><strong>${money(item.price + vendorTax)}</strong></div><div class="statement-section"><div class="key-value"><span>Bill to</span><strong>${escapeHtml(snapshot.booking.contact)}</strong></div></div><div class="money-table"><div><span>${escapeHtml(item.name)}</span><span>${money(item.price)}</span></div><div><span>${item.taxProfile.label}</span><span>${money(vendorTax)}</span></div><div class="money-total"><span>Vendor invoice total</span><span>${money(item.price + vendorTax)}</span></div></div><div class="statement-section"><h3>Saved service configuration</h3><div class="key-value"><span>Pricing basis</span><strong>${item.pricingBasis}</strong></div><div class="key-value"><span>Selected quantity</span><strong>${selectedConfiguration.quantity || selectedConfiguration.guests}</strong></div><div class="key-value"><span>Provider hold</span><strong>${item.serviceWindow.start}–${item.serviceWindow.end}</strong></div><div class="key-value"><span>Setup / teardown inside hold</span><strong>${setupMinutes} / ${teardownMinutes} minutes</strong></div>${configurationRows}${referenceConfiguration}${quoteConfiguration}${cateringConfiguration}${confirmation}<p><strong>Cancellation & changes:</strong> ${item.cancellationPolicy}</p></div><p class="document-footnote">This invoice preserves the package version, organizer choices, price adjustments, and accepted quote used at confirmation. Later catalogue edits do not rewrite it.</p></article>`;
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
    ${vendors.map(item => vendorInvoiceDocument(item, snapshot)).join("")}
    <article class="statement-sheet"><div class="statement-head"><div><span class="document-type">Payment receipt</span><h2>Gather checkout</h2><p>Receipt ${snapshot.receiptNumber} · Demo transaction •••• 4242</p></div><strong>${money(totals.dueNow)}</strong></div><div class="money-table"><div><span>Supplier invoices paid</span><span>${money(totals.servicesTotal)}</span></div>${totals.deposit ? `<div><span>Refundable security deposit held separately</span><span>${money(totals.deposit)}</span></div>` : ""}<div class="money-total"><span>Total payment recorded</span><span>${money(totals.dueNow)}</span></div></div><p class="document-footnote">Prototype only. No invoice, receipt, charge, or reservation was actually created. Snapshot event note: ${escapeHtml((snapshot.booking.purposeId === "other-permitted" ? snapshot.booking.activityDescription : snapshot.booking.notes) || "None supplied")}</p></article>
    <div class="document-actions"><button class="button button-light" data-document="Booking document download simulated">Download all (demo)</button><button class="button button-dark" data-route="sign-in">Explore demo accounts</button></div></div></section>`;
}

function roleContextNotice() {
  const role = activeRole();
  if (!role) return "";
  const context = accountContext(role.accountType);
  return `<div class="role-context-notice"><span class="role-icon" aria-hidden="true">${context.icon}</span><div><strong>${role.shortRole} view</strong><span>${role.summary}</span></div><button class="text-button" type="button" data-route="role-home">View permissions</button></div>`;
}

function onboardingBoundary() {
  return `<div class="onboarding-boundary" role="note"><strong>Prototype only</strong><span>These forms demonstrate onboarding. They do not create an account, send email, verify identity, connect a payout account, publish a real listing, invite a teammate, or move money. Please use fictional information.</span></div>`;
}

function loginPage() {
  const sentState = simulatedSignInEmail ? `<div class="auth-result" role="status"><span class="success-icon small">✓</span><div><strong>Sign-in link simulated</strong><p>A production system would send a secure link to <b>${escapeHtml(simulatedSignInEmail)}</b>. No email was sent and no session was created.</p></div></div>` : "";
  return `<section class="auth-page"><div class="auth-shell"><div class="auth-intro"><span class="eyebrow">Account access</span><h1>Sign in to Gather.</h1><p>Customers, space operators, and vendors use one personal identity, then switch between the organizations and roles they belong to.</p><div class="auth-tabs" role="navigation" aria-label="Account access"><button class="active" type="button" aria-current="page">Sign in</button><button type="button" data-route="create-account">Create account</button></div>${onboardingBoundary()}</div><div class="auth-panel"><span class="account-icon" aria-hidden="true">◎</span><h2>Email sign-in</h2><p>This concept uses a secure email link so the prototype never asks for or stores a password.</p><form id="prototype-signin-form" class="onboarding-form"><label class="onboarding-field"><span>Email address *</span><input name="email" type="email" autocomplete="email" value="${escapeHtml(simulatedSignInEmail)}" required></label><button class="button button-green button-wide" type="submit">Simulate secure sign-in link</button></form>${sentState}<div class="auth-reviewer"><strong>Reviewing the platform?</strong><span>Use the fictional role workspaces without signing in.</span><button class="button button-light button-wide" type="button" data-route="sign-in">Explore demo roles</button></div></div></div></section>`;
}

function createAccountPage() {
  const cards = [
    { type: "organizer", title: "Book a space", copy: "Browse and book without an account. Create one to manage bookings, documents, changes, deposits, and reviews.", action: "Create organizer account", secondary: '<button class="text-button" type="button" data-route="explore">Continue as guest</button>' },
    { type: "operator", title: "List a space", copy: "Set up a space-operator organization, your first listing, availability, policies, and payout readiness.", action: "Start operator setup", secondary: "" },
    { type: "vendor", title: "Offer event services", copy: "Set up a vendor business, choose any supported service categories, and prepare configurable offerings.", action: "Start vendor setup", secondary: "" }
  ];
  const cardMarkup = cards.map(card => { const state = onboardingStates[card.type]; const started = state.step > 1 || state.completed; return `<article class="signup-choice-card"><span class="account-icon" aria-hidden="true">${onboardingDefinitions[card.type].icon}</span><span class="account-badge">${onboardingDefinitions[card.type].label}</span><h2>${card.title}</h2><p>${card.copy}</p><button class="button button-dark button-wide" type="button" data-start-onboarding="${card.type}">${started ? `Resume ${onboardingDefinitions[card.type].label.toLowerCase()} setup` : card.action}</button>${card.secondary}</article>`; }).join("");
  return `<section class="signup-page"><div class="signup-hero"><span class="eyebrow">Create account</span><h1>How will you use Gather?</h1><p>One sign-in can be used for personal bookings and for space-operator or vendor organizations you join later. Choose the journey you want to review first.</p><div class="auth-tabs" role="navigation" aria-label="Account access"><button type="button" data-route="login">Sign in</button><button class="active" type="button" aria-current="page">Create account</button></div></div><div class="signup-content">${onboardingBoundary()}<div class="signup-choice-grid">${cardMarkup}</div><aside class="reviewer-entry"><div><span class="eyebrow">Reviewer shortcut</span><h2>Explore every permission role.</h2><p>Open the twelve fictional customer, operator, vendor, and Gather platform workspaces without completing onboarding.</p></div><button class="button button-light" type="button" data-route="sign-in">Explore demo roles →</button></aside><p class="platform-signup-note"><strong>Platform administrators do not sign up publicly.</strong> Gather team access would be internally provisioned, protected with strong authentication, and audited.</p></div></section>`;
}

function onboardingProgress(definition, state) {
  return `<ol class="onboarding-progress" aria-label="${definition.label} onboarding progress">${definition.steps.map((label, index) => { const number = index + 1; const status = state.completed || number < state.step ? "complete" : number === state.step ? "current" : ""; return `<li class="${status}" ${number === state.step && !state.completed ? 'aria-current="step"' : ""}><span>${state.completed || number < state.step ? "✓" : number}</span><strong>${label}</strong></li>`; }).join("")}</ol>`;
}

function onboardingButtons(type, state, finalLabel = "Continue") {
  const back = state.step === 1 ? '<button class="button button-light" type="button" data-route="create-account">← Account choices</button>' : '<button class="button button-light" type="button" data-onboarding-back>← Back</button>';
  return `<div class="onboarding-actions">${back}<button class="button button-green" type="submit">${finalLabel}</button></div>`;
}

function sharedIdentityStep(type, state) {
  const definition = onboardingDefinitions[type];
  const emailCopy = type === "organizer" ? "We use this address to secure booking access and customer documents." : "This becomes the initial owner identity for the organization you set up.";
  return `<form id="onboarding-form" class="onboarding-form" data-onboarding-type="${type}" data-onboarding-step="1"><div class="onboarding-section-head"><span class="account-badge">Step 1</span><h2>Create your personal identity</h2><p>One identity can later hold customer, space-operator, and vendor memberships. You will not need separate credentials for every organization.</p></div><div class="onboarding-field-grid"><label class="onboarding-field"><span>First name *</span><input name="firstName" autocomplete="given-name" value="${escapeHtml(state.identity.firstName)}" required></label><label class="onboarding-field"><span>Last name *</span><input name="lastName" autocomplete="family-name" value="${escapeHtml(state.identity.lastName)}" required></label><label class="onboarding-field"><span>Email address *</span><input name="email" type="email" autocomplete="email" value="${escapeHtml(state.identity.email)}" aria-describedby="onboarding-email-help" required><small id="onboarding-email-help">${emailCopy}</small></label><label class="onboarding-field"><span>Phone <small>optional</small></span><input name="phone" type="tel" autocomplete="tel" value="${escapeHtml(state.identity.phone)}"></label></div><label class="onboarding-consent"><input name="consent" type="checkbox" value="yes" ${state.identity.consent ? "checked" : ""} required><span><strong>Continue with fictional prototype data</strong><small>I understand that this does not create an account or send a verification message.</small></span></label>${onboardingButtons(type, state, type === "organizer" ? "Continue to email verification" : "Continue and simulate verified email")}</form>`;
}

function organizerStep(state) {
  if (state.step === 1) return sharedIdentityStep("organizer", state);
  if (state.step === 2) return `<form id="onboarding-form" class="onboarding-form" data-onboarding-type="organizer" data-onboarding-step="2"><div class="onboarding-section-head"><span class="account-badge">Step 2</span><h2>Verify your email</h2><p>A production system would send a short-lived code or secure link to <strong>${escapeHtml(state.identity.email)}</strong>. No email was sent by this prototype.</p></div><div class="demo-code"><span>Prototype verification code</span><strong>246810</strong><small>Visible only so a reviewer can complete the journey.</small></div><label class="onboarding-field compact"><span>Six-digit code *</span><input name="verificationCode" inputmode="numeric" autocomplete="one-time-code" pattern="[0-9]{6}" maxlength="6" value="${escapeHtml(state.identity.verificationCode)}" aria-describedby="verification-error" required><small id="verification-error" class="field-error" role="alert" hidden>Enter the prototype code 246810.</small></label>${onboardingButtons("organizer", state, "Verify in prototype")}</form>`;
  const snapshot = confirmedBookingSnapshot;
  const reference = snapshot?.bookingId || state.organizer.bookingReference || "BKG-1048";
  const claimDetail = snapshot ? `${escapeHtml(snapshot.space.name)} · ${formatTime(snapshot.booking.start)}–${formatTime(snapshot.booking.end)} · ${money(snapshot.totals.dueNow)}` : "Ridgeview Community Hall · fictional reviewer example";
  return `<form id="onboarding-form" class="onboarding-form" data-onboarding-type="organizer" data-onboarding-step="3"><div class="onboarding-section-head"><span class="account-badge">Step 3</span><h2>Choose booking access</h2><p>Creating an account remains optional for booking. A guest booking can be linked only after control of its confirmation email is proven.</p></div><fieldset class="onboarding-choice-fieldset"><legend>What would you like to do?</legend><label class="onboarding-choice"><input type="radio" name="claimBooking" value="yes" ${state.organizer.claimBooking === "yes" ? "checked" : ""}><span><strong>Link a booking in this prototype</strong><small>Secure email proof would be required before access is granted.</small></span></label><label class="onboarding-choice"><input type="radio" name="claimBooking" value="no" ${state.organizer.claimBooking === "no" ? "checked" : ""}><span><strong>Create the account without linking a booking</strong><small>You can browse now and link a future booking later.</small></span></label></fieldset><div class="claim-preview"><span class="account-badge">Prototype match</span><h3>${escapeHtml(reference)}</h3><p>${claimDetail}</p><p>Account email: <strong>${escapeHtml(state.identity.email)}</strong></p><small id="booking-email-error" class="field-error" role="alert" hidden>This sample booking belongs to a different email. Go back and use its booking email, or continue without linking.</small><label class="onboarding-field"><span>Booking reference *</span><input name="bookingReference" value="${escapeHtml(reference)}" aria-describedby="booking-reference-error" required><small id="booking-reference-error" class="field-error" role="alert" hidden>Use the matched prototype reference shown above.</small></label><p><strong>Security boundary:</strong> A booking reference and email alone never grant access. Production would use a signed, expiring link delivered to the booking email.</p></div>${onboardingButtons("organizer", state, "Finish organizer demo")}</form>`;
}

function operatorStep(state) {
  const operator = state.operator;
  if (state.step === 1) return sharedIdentityStep("operator", state);
  if (state.step === 2) return `<form id="onboarding-form" class="onboarding-form" data-onboarding-type="operator" data-onboarding-step="2"><div class="onboarding-section-head"><span class="account-badge">Step 2</span><h2>Your organization</h2><p>The person creating the organization receives the Owner / account administrator membership. Staff join later through invitations.</p></div><div class="onboarding-field-grid"><label class="onboarding-field"><span>Legal organization name *</span><input name="legalName" value="${escapeHtml(operator.legalName)}" required></label><label class="onboarding-field"><span>Public or trading name *</span><input name="publicName" value="${escapeHtml(operator.publicName)}" required></label><label class="onboarding-field"><span>Organization type *</span><select name="organizationType" required><option value="community_association" ${operator.organizationType === "community_association" ? "selected" : ""}>Community association</option><option value="nonprofit" ${operator.organizationType === "nonprofit" ? "selected" : ""}>Non-profit or registered charity</option><option value="business" ${operator.organizationType === "business" ? "selected" : ""}>Business</option><option value="public_body" ${operator.organizationType === "public_body" ? "selected" : ""}>Municipality or public body</option><option value="other" ${operator.organizationType === "other" ? "selected" : ""}>Other</option></select></label><label class="onboarding-field"><span>Organization email *</span><input name="organizationEmail" type="email" value="${escapeHtml(operator.organizationEmail || state.identity.email)}" required></label><label class="onboarding-field full"><span>Street address *</span><input name="address" autocomplete="street-address" value="${escapeHtml(operator.address)}" required></label><label class="onboarding-field"><span>City *</span><input name="city" value="${escapeHtml(operator.city)}" required></label><label class="onboarding-field"><span>Province *</span><input name="province" value="${escapeHtml(operator.province)}" required></label><label class="onboarding-field"><span>Postal code *</span><input name="postalCode" autocomplete="postal-code" value="${escapeHtml(operator.postalCode)}" required></label><label class="onboarding-field"><span>Website <small>optional</small></span><input name="website" type="url" value="${escapeHtml(operator.website)}" placeholder="https://"></label></div>${onboardingButtons("operator", state)}</form>`;
  if (state.step === 3) return `<form id="onboarding-form" class="onboarding-form" data-onboarding-type="operator" data-onboarding-step="3"><div class="onboarding-section-head"><span class="account-badge">Step 3</span><h2>Your first bookable space</h2><p>Start with one space. Additional halls, rooms, kitchens, rinks, courts, studios, and outdoor areas can be added later.</p></div><div class="onboarding-field-grid"><label class="onboarding-field"><span>Venue or site name *</span><input name="siteName" value="${escapeHtml(operator.siteName)}" required></label><label class="onboarding-field"><span>Bookable space name *</span><input name="spaceName" value="${escapeHtml(operator.spaceName)}" required></label><label class="onboarding-field"><span>Space type *</span><select name="spaceType" required><option value="hall" ${operator.spaceType === "hall" ? "selected" : ""}>Hall</option><option value="meeting_room" ${operator.spaceType === "meeting_room" ? "selected" : ""}>Meeting room</option><option value="kitchen" ${operator.spaceType === "kitchen" ? "selected" : ""}>Kitchen</option><option value="rink" ${operator.spaceType === "rink" ? "selected" : ""}>Rink or court</option><option value="studio" ${operator.spaceType === "studio" ? "selected" : ""}>Studio</option><option value="outdoor" ${operator.spaceType === "outdoor" ? "selected" : ""}>Outdoor area</option><option value="other" ${operator.spaceType === "other" ? "selected" : ""}>Other</option></select></label><label class="onboarding-field"><span>Maximum attendees *</span><input name="capacity" type="number" min="1" step="1" value="${escapeHtml(operator.capacity)}" required></label><label class="onboarding-field full"><span>Short description *</span><textarea name="description" rows="4" required>${escapeHtml(operator.description)}</textarea></label></div><div class="readiness-note"><strong>Listing setup continues after onboarding</strong><span>Photos, amenities, accessibility, permitted event types, insurance rules, add-ons, and detailed venue policies must be completed before the listing can become bookable.</span></div>${onboardingButtons("operator", state)}</form>`;
  const weekdayOptions = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map(day => `<label><input type="checkbox" name="weekdays" value="${day}" ${operator.weekdays.includes(day) ? "checked" : ""}> ${day}</label>`).join("");
  return `<form id="onboarding-form" class="onboarding-form" data-onboarding-type="operator" data-onboarding-step="4"><div class="onboarding-section-head"><span class="account-badge">Step 4</span><h2>Booking and payout readiness</h2><p>Set an initial availability and price outline. Production identity, tax, and payout setup must be completed before accepting live payment.</p></div><fieldset class="onboarding-choice-fieldset"><legend>Bookable days *</legend><div class="weekday-grid">${weekdayOptions}</div><small id="weekday-error" class="field-error" role="alert" hidden>Select at least one bookable day.</small></fieldset><div class="onboarding-field-grid"><label class="onboarding-field"><span>Opens *</span><input name="openTime" type="time" value="${escapeHtml(operator.openTime)}" required></label><div class="onboarding-field"><label class="field-label" for="operator-close-time">Closes *</label><input id="operator-close-time" name="closeTime" type="time" value="${escapeHtml(operator.closeTime)}" aria-describedby="time-error" required><small id="time-error" class="field-error" role="alert" hidden>Closing time must be later than opening time, or marked as next day.</small><label class="inline-checkbox"><input name="closesNextDay" type="checkbox" value="yes" ${operator.closesNextDay ? "checked" : ""}><span>Closes next calendar day</span></label></div><label class="onboarding-field"><span>Base hourly rate (CAD) *</span><input name="hourlyRate" type="number" min="0" step="0.01" value="${escapeHtml(operator.hourlyRate)}" required></label><label class="onboarding-field"><span>Refundable deposit</span><input name="depositAmount" type="number" min="0" step="0.01" value="${escapeHtml(operator.depositAmount)}"></label><label class="onboarding-field"><span>Minimum notice (days) *</span><input name="minimumNotice" type="number" min="0" step="1" value="${escapeHtml(operator.minimumNotice)}" required></label><label class="onboarding-field"><span>Optional teammate email</span><input name="inviteEmail" type="email" value="${escapeHtml(operator.inviteEmail)}"></label><label class="onboarding-field"><span>Optional teammate role</span><select name="inviteRole"><option value="booking_manager" ${operator.inviteRole === "booking_manager" ? "selected" : ""}>Booking manager</option><option value="operations" ${operator.inviteRole === "operations" ? "selected" : ""}>Operations / inspection staff</option><option value="finance" ${operator.inviteRole === "finance" ? "selected" : ""}>Finance and settlement</option><option value="viewer" ${operator.inviteRole === "viewer" ? "selected" : ""}>Board / auditor — read only</option></select></label></div><fieldset class="onboarding-choice-fieldset"><legend>Availability source *</legend><label class="onboarding-choice"><input type="radio" name="calendarMode" value="gather" ${operator.calendarMode === "gather" ? "checked" : ""}><span><strong>Use Gather as the source of truth</strong><small>Recommended for the pilot.</small></span></label><label class="onboarding-choice"><input type="radio" name="calendarMode" value="manual" ${operator.calendarMode === "manual" ? "checked" : ""}><span><strong>Manually update another calendar</strong><small>Every confirmed booking must be copied promptly. Manual double entry increases conflict risk.</small></span></label></fieldset><div class="commercial-defaults"><div><span>Subscription</span><strong>$0 default</strong></div><div><span>Venue commission</span><strong>0% default</strong></div><div><span>Processing</span><strong>Separate actual cost</strong></div></div><label class="onboarding-consent"><input name="payoutAcknowledged" type="checkbox" value="yes" ${operator.payoutAcknowledged ? "checked" : ""} required><span><strong>Simulate seller readiness</strong><small>I understand no identity check, bank connection, invitation, or payout setup occurs here.</small></span></label>${onboardingButtons("operator", state, "Finish operator demo")}</form>`;
}

function vendorStep(state) {
  const vendor = state.vendor;
  if (state.step === 1) return sharedIdentityStep("vendor", state);
  if (state.step === 2) return `<form id="onboarding-form" class="onboarding-form" data-onboarding-type="vendor" data-onboarding-step="2"><div class="onboarding-section-head"><span class="account-badge">Step 2</span><h2>Your vendor business</h2><p>The creator receives the Vendor owner / administrator membership. Team members join later through scoped invitations.</p></div><div class="onboarding-field-grid"><label class="onboarding-field"><span>Legal business name *</span><input name="legalName" value="${escapeHtml(vendor.legalName)}" required></label><label class="onboarding-field"><span>Public or trading name *</span><input name="publicName" value="${escapeHtml(vendor.publicName)}" required></label><label class="onboarding-field"><span>Business email *</span><input name="businessEmail" type="email" value="${escapeHtml(vendor.businessEmail || state.identity.email)}" required></label><label class="onboarding-field"><span>Business phone *</span><input name="phone" type="tel" value="${escapeHtml(vendor.phone || state.identity.phone)}" required></label><label class="onboarding-field"><span>Primary service area *</span><input name="serviceArea" value="${escapeHtml(vendor.serviceArea)}" required></label><label class="onboarding-field"><span>Travel radius (km) *</span><input name="travelRadius" type="number" min="0" step="1" value="${escapeHtml(vendor.travelRadius)}" required></label><label class="onboarding-field"><span>City *</span><input name="city" value="${escapeHtml(vendor.city)}" required></label><label class="onboarding-field"><span>Website <small>optional</small></span><input name="website" type="url" value="${escapeHtml(vendor.website)}" placeholder="https://"></label></div>${onboardingButtons("vendor", state)}</form>`;
  if (state.step === 3) {
    const categories = Object.entries(serviceCategoryLabels).map(([id, label]) => `<label class="category-selection"><input type="checkbox" name="categories" value="${id}" ${vendor.categories.includes(id) ? "checked" : ""}><span><strong>${label}</strong><small>${offeringChoiceTemplates[id].slice(0, 3).join(" · ")}</small></span></label>`).join("");
    return `<form id="onboarding-form" class="onboarding-form" data-onboarding-type="vendor" data-onboarding-step="3"><div class="onboarding-section-head"><span class="account-badge">Step 3</span><h2>Select any supported category you want to serve</h2><p>Choose one or several. This personalizes offering templates; it is not an approval request. You can add, remove, or change categories later.</p></div><fieldset class="category-selection-fieldset"><legend>Currently supported categories *</legend><div class="category-selection-grid">${categories}</div><small id="category-selection-error" class="field-error" role="alert" hidden>Select at least one service category.</small></fieldset><div class="readiness-note"><strong>No category gate in this prototype</strong><span>Selected means available for your setup—not requested, pending, or approved. Each offering still uses one primary category so organizers receive the correct choices.</span></div>${onboardingButtons("vendor", state)}</form>`;
  }
  const categoryOptions = vendor.categories.map(id => `<option value="${id}" ${vendor.primaryCategory === id ? "selected" : ""}>${serviceCategoryLabels[id]}</option>`).join("");
  return `<form id="onboarding-form" class="onboarding-form" data-onboarding-type="vendor" data-onboarding-step="4"><div class="onboarding-section-head"><span class="account-badge">Step 4</span><h2>Seller readiness and first offering</h2><p>Drafts may be prepared now. Identity and payout readiness—not category approval—would be required before accepting live payment.</p></div><div class="onboarding-field-grid"><label class="onboarding-field"><span>GST/HST status *</span><select name="taxStatus" required><option value="not_registered" ${vendor.taxStatus === "not_registered" ? "selected" : ""}>Not registered / confirm with adviser</option><option value="registered" ${vendor.taxStatus === "registered" ? "selected" : ""}>Registered</option><option value="unsure" ${vendor.taxStatus === "unsure" ? "selected" : ""}>Not sure yet</option></select></label><label class="onboarding-field"><span>Invoice prefix *</span><input name="invoicePrefix" maxlength="6" pattern="[A-Za-z0-9-]{2,6}" value="${escapeHtml(vendor.invoicePrefix)}" placeholder="ABC" required></label><label class="onboarding-field"><span>First offering category *</span><select name="primaryCategory" required>${categoryOptions}</select></label><label class="onboarding-field"><span>First offering name *</span><input name="firstOfferingName" value="${escapeHtml(vendor.firstOfferingName)}" placeholder="Example: Family celebration buffet" required></label><label class="onboarding-field full"><span>Default cancellation and refund summary *</span><textarea name="cancellationSummary" rows="4" required>${escapeHtml(vendor.cancellationSummary)}</textarea></label><label class="onboarding-field"><span>Optional teammate email</span><input name="inviteEmail" type="email" value="${escapeHtml(vendor.inviteEmail)}"></label><label class="onboarding-field"><span>Optional teammate role</span><select name="inviteRole"><option value="fulfilment" ${vendor.inviteRole === "fulfilment" ? "selected" : ""}>Order / fulfilment staff</option><option value="finance" ${vendor.inviteRole === "finance" ? "selected" : ""}>Vendor finance</option><option value="admin" ${vendor.inviteRole === "admin" ? "selected" : ""}>Vendor owner / administrator</option></select></label></div><label class="onboarding-consent"><input name="payoutAcknowledged" type="checkbox" value="yes" ${vendor.payoutAcknowledged ? "checked" : ""} required><span><strong>Simulate seller and payout readiness</strong><small>No tax identifier, bank information, identity evidence, or invitation is collected or sent.</small></span></label>${onboardingButtons("vendor", state, "Finish vendor demo")}</form>`;
}

function onboardingCompletion(type, state) {
  const definition = onboardingDefinitions[type];
  const name = `${state.identity.firstName} ${state.identity.lastName}`.trim();
  const common = `<li>✓ Email verified in this browser-only simulation</li><li>✓ ${escapeHtml(name || definition.label)} recorded as the initial account owner</li>`;
  const details = type === "organizer"
    ? `${common}<li>✓ Organizer account outline complete</li><li>${state.organizer.claimBooking === "yes" ? `✓ Secure claim simulated for ${escapeHtml(state.organizer.bookingReference)}` : "— No booking linked"}</li>`
    : type === "operator"
      ? `${common}<li>✓ ${escapeHtml(state.operator.publicName)} organization profile prepared</li><li>✓ ${escapeHtml(state.operator.spaceName)} listing outline prepared</li><li>✓ Availability, price, deposit, and payout-readiness choices recorded</li><li>— Production identity and bank payout connection still required</li>`
      : `${common}<li>✓ ${escapeHtml(state.vendor.publicName)} business profile prepared</li><li>✓ ${state.vendor.categories.map(id => serviceCategoryLabels[id]).join(", ")} selected with no category approval gate</li><li>✓ First offering outline prepared</li><li>— Production identity and bank payout connection still required</li>`;
  const primaryAction = type === "vendor"
    ? '<button class="button button-green" type="button" data-open-first-offering>Continue to the representative offering builder</button>'
    : `<button class="button button-green" type="button" data-preview-role="${definition.demoRoleId}" data-preview-route="${definition.demoRoute}">Open representative ${definition.label.toLowerCase()} workspace</button>`;
  const accessState = type === "organizer" ? (state.organizer.claimBooking === "yes" ? "Secure claim simulated" : "No booking linked") : "Draft · not live";
  const handoffBoundary = type === "vendor"
    ? "The representative workspace is fictional. The offering-builder handoff copies only the first-offering name and category into an in-memory draft; nothing is submitted or published."
    : "The representative workspace is fictional and does not use the information entered above.";
  return `<div class="onboarding-complete"><span class="success-icon">✓</span><span class="eyebrow">${definition.label} onboarding · simulated</span><h2>Your setup outline is ready.</h2><p>Nothing was submitted or created. This completion summarizes what the production onboarding journey would collect before handing off to a real workspace.</p><ul>${details}</ul><div class="readiness-status"><div><span>Account</span><strong>Outline complete</strong></div><div><span>${type === "organizer" ? "Booking access" : type === "operator" ? "Listing" : "Marketplace"}</span><strong>${accessState}</strong></div><div><span>${type === "organizer" ? "Email" : "Payout"}</span><strong>${type === "organizer" ? "Not sent" : "Not connected"}</strong></div></div><div class="onboarding-actions">${primaryAction}<button class="button button-light" type="button" data-restart-onboarding="${type}">Restart this demo</button><button class="text-button" type="button" data-route="sign-in">Explore all demo roles</button></div><p class="sample-workspace-warning">${handoffBoundary}</p></div>`;
}

function onboardingPage(type) {
  const definition = onboardingDefinitions[type];
  const state = onboardingStates[type];
  const stepBody = state.completed ? onboardingCompletion(type, state) : type === "organizer" ? organizerStep(state) : type === "operator" ? operatorStep(state) : vendorStep(state);
  return `<section class="onboarding-page"><div class="onboarding-wrap"><button class="back-link" type="button" data-route="create-account">← All account types</button><header class="onboarding-hero"><div><span class="eyebrow">${definition.label} onboarding</span><h1>${definition.title}</h1><p>${type === "organizer" ? "Create an optional account for bookings, documents, changes, deposits, and reviews. Guest booking remains available." : type === "operator" ? "Create an organization, outline the first space, and review what is required before accepting bookings." : "Create a vendor business, choose any supported categories, and prepare the first configurable offering."}</p></div><span class="account-icon large" aria-hidden="true">${definition.icon}</span></header>${onboardingProgress(definition, state)}${onboardingBoundary()}<div class="onboarding-card">${stepBody}</div><aside class="onboarding-help"><strong>Need to review permissions instead?</strong><span>The demo-role selector remains separate from account creation.</span><button class="text-button" type="button" data-route="sign-in">Explore demo roles</button></aside></div></section>`;
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
    vendor: [["role-home", "◎", "Role & permissions"], ["vendor-dashboard", "▦", "Vendor overview"], ["vendor-offerings", "✦", "Offerings"], ["vendor-invoice", "▤", "Supplier invoice"], ["vendor-payout", "◇", "Payout statement"]],
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

function managedEventDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-CA", { weekday: "long", month: "long", day: "numeric", year: "numeric" });
}

function managedEventShortDate(date) {
  return new Date(`${date}T12:00:00`).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" });
}

function sampleManagedEvent() {
  return {
    source: "sample",
    bookingId: "BKG-1048",
    reference: 1048,
    purpose: "Birthday or family celebration",
    date: "2026-10-17",
    start: "18:00",
    end: "23:00",
    guests: 60,
    capacity: 120,
    owner: activeRole()?.name || "Priya Shah",
    address: "100 Ridgeview Way NW, Calgary, AB · fictional prototype address",
    venue: {
      name: "Ridgeview Community Hall",
      supplier: "Ridgeview Community Association",
      orderId: "BKG-1048",
      invoiceId: "INV-RCA-1048",
      status: "Confirmed",
      statusClass: "confirmed",
      hourlyRate: 48,
      rental: 240,
      addons: [{ name: "Kitchen access", price: 45 }],
      addonTotal: 45,
      tax: 14.25,
      total: 299.25,
      cancellationPolicy: "Full venue-rental refund through October 10; later requests require venue review. Issued invoices are preserved and any approved adjustment uses a credit or supplemental invoice."
    },
    vendors: [
      {
        threadId: "vendor-decor",
        orderId: "ORD-BDE-1048",
        invoiceId: "INV-BDE-1048",
        supplier: "Bright Day Events",
        offering: "Celebration décor package",
        category: "Decorations",
        status: "Confirmed",
        statusClass: "confirmed",
        serviceWindow: "6:00–10:30 p.m.",
        price: 285,
        tax: 14.25,
        total: 299.25,
        pricing: { type: "flat", amount: 285 },
        cancellationPolicy: "Full refund until 7 days before service; 50% from 3–6 days; non-refundable inside 72 hours."
      },
      {
        threadId: "vendor-magic",
        orderId: "ORD-WSE-1048",
        invoiceId: "INV-WSE-1048",
        supplier: "WonderSpark Entertainment",
        offering: "Family magic show",
        category: "Entertainment",
        status: "Details required",
        statusClass: "attention",
        serviceWindow: "Proposed show · 7:15–8:15 p.m.",
        price: 350,
        tax: 17.5,
        total: 367.5,
        pricing: { type: "flat", amount: 350 },
        cancellationPolicy: "Full refund until 7 days before service; 50% from 3–6 days; non-refundable inside 72 hours."
      }
    ],
    totals: { servicesTotal: 966, deposit: 300, dueNow: 1266 },
    receiptId: "RCT-1048",
    alcoholRequired: false
  };
}

function snapshotManagedEvent(snapshot) {
  const venueAddons = snapshot.addons || [];
  return {
    source: "checkout",
    bookingId: snapshot.bookingId,
    reference: snapshot.reference,
    purpose: snapshot.booking.event || eventPurposes.find(item => item.id === snapshot.booking.purposeId)?.label || "Private event",
    date: snapshot.booking.date,
    start: snapshot.booking.start,
    end: snapshot.booking.end,
    guests: snapshot.booking.guests,
    capacity: snapshot.space.capacity,
    owner: snapshot.booking.contact,
    address: `${snapshot.space.name} · ${snapshot.space.area} · address shown in the accepted venue instructions`,
    venue: {
      name: snapshot.space.name,
      supplier: snapshot.space.operator,
      orderId: snapshot.bookingId,
      invoiceId: snapshot.venueInvoiceNumber,
      status: "Confirmed",
      statusClass: "confirmed",
      hourlyRate: snapshot.space.price,
      rental: snapshot.totals.rental,
      addons: venueAddons,
      addonTotal: snapshot.totals.addons,
      tax: snapshot.totals.venueTax,
      total: snapshot.totals.venueSubtotal + snapshot.totals.venueTax,
      cancellationPolicy: "The accepted venue policy applies supplier-by-supplier. Availability, price, tax, requirements, and deposit treatment are rechecked before any change is accepted."
    },
    vendors: snapshot.vendors.map((item, index) => ({
      threadId: `vendor-${item.id || index}`,
      orderId: `ORD-${item.invoicePrefix}-${snapshot.reference}`,
      invoiceId: `INV-${item.invoicePrefix}-${snapshot.reference}`,
      supplier: item.vendor,
      offering: item.name,
      category: item.category,
      status: "Confirmed",
      statusClass: "confirmed",
      serviceWindow: `${item.serviceWindow?.start || formatTime(snapshot.booking.start)}–${item.serviceWindow?.end || formatTime(snapshot.booking.end)}`,
      price: item.price,
      tax: taxFor(item.price, item.taxProfile),
      total: item.price + taxFor(item.price, item.taxProfile),
      pricing: item.pricing,
      cancellationPolicy: item.cancellationPolicy
    })),
    totals: { ...snapshot.totals },
    receiptId: snapshot.receiptNumber,
    alcoholRequired: Boolean(snapshot.booking.eventNeeds?.alcohol)
  };
}

function activeManagedEvent() {
  return confirmedBookingSnapshot ? snapshotManagedEvent(confirmedBookingSnapshot) : sampleManagedEvent();
}

function createEventMessages(event) {
  const messages = [{
    id: "MSG-VENUE-1",
    threadId: "venue",
    sender: event.venue.supplier,
    role: "Venue booking",
    time: "Sep 28 · 10:15 a.m.",
    body: "Your venue time is confirmed. Please complete the insurance requirement so we can release the final access instructions.",
    delivery: "Received"
  }];
  event.vendors.forEach((vendor, index) => messages.push({
    id: `MSG-VENDOR-${index + 1}`,
    threadId: vendor.threadId,
    sender: vendor.supplier,
    role: `${vendor.category} order · ${vendor.orderId}`,
    time: index ? "Sep 29 · 8:40 a.m." : "Sep 28 · 2:05 p.m.",
    body: index ? "Please confirm whether the proposed performance time works with your event schedule." : "Our team has the venue window and will coordinate delivery within your booked access time.",
    delivery: "Received"
  }));
  return messages;
}

function defaultEventChangeDraft(event) {
  const nextDate = new Date(`${event.date}T12:00:00`);
  nextDate.setDate(nextDate.getDate() + 7);
  return { date: nextDate.toISOString().slice(0, 10), start: event.start, end: event.end, guests: event.guests, reason: "" };
}

function ensureEventWorkspaceState(event) {
  if (eventWorkspaceState.bookingId !== event.bookingId) {
    eventWorkspaceState = {
      bookingId: event.bookingId,
      requirementOverrides: {},
      selectedMessageThread: "venue",
      messageDrafts: {},
      messages: createEventMessages(event),
      actionView: null,
      changeDraft: defaultEventChangeDraft(event),
      submittedRequest: null
    };
  }
  return eventWorkspaceState;
}

function resetEventWorkspaceState() {
  eventWorkspaceState = { bookingId: null, requirementOverrides: {}, selectedMessageThread: "venue", messageDrafts: {}, messages: [], actionView: null, changeDraft: null, submittedRequest: null };
}

function eventRequirementDueDate(event, daysBefore) {
  const date = new Date(`${event.date}T12:00:00`);
  date.setDate(date.getDate() - daysBefore);
  return managedEventShortDate(date.toISOString().slice(0, 10));
}

function eventRequirements(event) {
  const requirements = [
    { id: "venue-rules", title: "Venue rules and booking terms", status: "Accepted", statusClass: "confirmed", source: "Venue policy", owner: "Organizer", due: "Accepted at checkout", consequence: "Saved with the confirmed booking snapshot.", action: null },
    { id: "insurance", title: "Event liability insurance certificate", status: "Action required", statusClass: "attention", source: "Venue policy", owner: "Organizer", due: eventRequirementDueDate(event, 7), consequence: "Final door instructions remain locked until the venue accepts the document.", action: "Attach demo certificate" },
    { id: "headcount", title: "Confirm final attendee count", status: "Action required", statusClass: "pending", source: "Venue and supplier planning", owner: "Organizer", due: eventRequirementDueDate(event, 5), consequence: "Suppliers use the final count for setup and service planning.", action: "Confirm demo count" },
    { id: "liquor", title: "Liquor licence and service evidence", status: event.alcoholRequired ? "Action required" : "Not required", statusClass: event.alcoholRequired ? "attention" : "neutral", source: "Venue and regulatory requirement", owner: event.alcoholRequired ? "Organizer" : "Not applicable", due: event.alcoholRequired ? eventRequirementDueDate(event, 10) : "No alcohol selected", consequence: event.alcoholRequired ? "Alcohol service is not permitted until the venue accepts the required evidence." : "This booking does not include alcohol service.", action: event.alcoholRequired ? "Add demo evidence" : null }
  ];
  return requirements.map(item => eventWorkspaceState.requirementOverrides[item.id] ? { ...item, ...eventWorkspaceState.requirementOverrides[item.id] } : item);
}

function eventMessageThreads(event) {
  return [
    { id: "venue", label: "Venue", recipient: event.venue.supplier, reference: event.bookingId },
    ...event.vendors.map(vendor => ({ id: vendor.threadId, label: vendor.category, recipient: vendor.supplier, reference: vendor.orderId }))
  ];
}

function eventTimeOffset(start, end, minutesFromStart, minutesBeforeEnd = 0) {
  const startMinutes = Math.round(timeAsHours(start) * 60);
  const endMinutes = Math.round(timeAsHours(end) * 60);
  const targetMinutes = Math.min(startMinutes + minutesFromStart, Math.max(startMinutes, endMinutes - minutesBeforeEnd));
  const hours = String(Math.floor(targetMinutes / 60)).padStart(2, "0");
  const minutes = String(targetMinutes % 60).padStart(2, "0");
  return formatTime(`${hours}:${minutes}`);
}

function eventTimeBeforeEnd(end, minutesBeforeEnd) {
  const targetMinutes = Math.max(0, Math.round(timeAsHours(end) * 60) - minutesBeforeEnd);
  const hours = String(Math.floor(targetMinutes / 60)).padStart(2, "0");
  const minutes = String(targetMinutes % 60).padStart(2, "0");
  return formatTime(`${hours}:${minutes}`);
}

function eventSchedule(event) {
  const startLabel = formatTime(event.start);
  const endLabel = formatTime(event.end);
  const vendorEntries = event.vendors.map((vendor, index) => ({
    time: eventTimeOffset(event.start, event.end, 10 + index * 20, 45),
    title: `${vendor.supplier} · ${vendor.offering}`,
    detail: index ? "Supplier arrival and service preparation inside the venue booking window." : "Delivery and setup inside the venue booking window.",
    type: "Vendor order"
  }));
  return [
    { time: startLabel, title: "Venue access and organizer setup", detail: "The booked time includes setup; entry is not available before this time.", type: "Venue" },
    ...vendorEntries,
    { time: eventTimeOffset(event.start, event.end, 45, 45), title: "Guest arrival", detail: "Organizer-managed event begins after initial setup.", type: "Organizer" },
    { time: eventTimeBeforeEnd(event.end, 45), title: "Cleanup and supplier teardown", detail: "All cleanup and teardown must remain inside the booked time.", type: "Shared" },
    { time: endLabel, title: "Vacate venue and return access items", detail: "Organizer confirms the hall is secured; post-event inspection follows.", type: "Venue" }
  ];
}

function eventChangeImpact(event, draft) {
  const hours = Math.max(0, timeAsHours(draft.end) - timeAsHours(draft.start));
  const proposedRental = hours * event.venue.hourlyRate;
  const proposedVenueSubtotal = proposedRental + event.venue.addonTotal;
  const proposedVenueTax = Math.round(proposedVenueSubtotal * 0.05 * 100) / 100;
  const proposedVenueTotal = proposedVenueSubtotal + proposedVenueTax;
  const vendorRows = event.vendors.map(vendor => {
    const proposedPrice = vendor.pricing?.type === "per_person"
      ? Math.max(vendor.pricing.minimum || 0, (vendor.pricing.amount || 0) * Number(draft.guests))
      : vendor.price;
    const proposedTax = Math.round(proposedPrice * 0.05 * 100) / 100;
    return { ...vendor, proposedPrice, proposedTax, proposedTotal: proposedPrice + proposedTax, difference: proposedPrice + proposedTax - vendor.total };
  });
  const currentVendorTotal = event.vendors.reduce((sum, vendor) => sum + vendor.total, 0);
  const proposedVendorTotal = vendorRows.reduce((sum, vendor) => sum + vendor.proposedTotal, 0);
  return {
    proposedRental,
    proposedVenueTax,
    proposedVenueTotal,
    venueDifference: proposedVenueTotal - event.venue.total,
    vendorRows,
    totalDifference: proposedVenueTotal + proposedVendorTotal - event.venue.total - currentVendorTotal
  };
}

function eventDocumentButton(event, label = "View booking documents") {
  return event.source === "checkout"
    ? `<button class="button button-light" type="button" data-route="booking-documents">${label}</button>`
    : `<button class="button button-light" type="button" data-document="Sample booking documents opened; no real file was downloaded.">${label}</button>`;
}

function eventStatusPill(status, statusClass = "") {
  return `<span class="event-status ${statusClass}"><span aria-hidden="true">${statusClass === "confirmed" ? "✓" : statusClass === "attention" ? "!" : statusClass === "pending" ? "◷" : "•"}</span>${escapeHtml(status)}</span>`;
}

function eventNextAction(event, requirements) {
  const requirement = requirements.find(item => ["Action required", "Due soon"].includes(item.status));
  if (requirement) return {
    eyebrow: `${requirement.source} · due ${requirement.due}`,
    title: requirement.title,
    detail: requirement.consequence,
    section: "event-requirements",
    action: requirement.action || "Review requirement"
  };
  const vendor = event.vendors.find(item => item.statusClass === "attention");
  if (vendor) return { eyebrow: `${vendor.category} order · ${vendor.orderId}`, title: `Reply to ${vendor.supplier}`, detail: `${vendor.offering} needs an operational detail before the event.`, section: "event-messages", action: "Open supplier thread", threadId: vendor.threadId };
  return { eyebrow: "Event preparation", title: "Review the day-of schedule", detail: "Your required organizer actions are complete. Confirm arrival, setup, cleanup, and access timing before event day.", section: "event-schedule", action: "View schedule" };
}

function eventOrderCard(order, type, event) {
  const isVenue = type === "venue";
  const reference = isVenue ? event.bookingId : order.orderId;
  const messageThread = isVenue ? "venue" : order.threadId;
  const supplierLabel = isVenue ? "Venue booking" : `Independent ${order.category.toLowerCase()} order`;
  const title = isVenue ? order.name : order.offering;
  const serviceWindow = isVenue ? `${managedEventDate(event.date)} · ${formatTime(event.start)}–${formatTime(event.end)} Mountain Time` : `${managedEventDate(event.date)} · ${order.serviceWindow}`;
  return `<article class="event-order-card"><div class="event-order-head"><div><span class="vendor-category">${supplierLabel}</span><h3>${escapeHtml(title)}</h3><p>${escapeHtml(order.supplier)} · ${escapeHtml(reference)}</p></div>${eventStatusPill(order.status, order.statusClass)}</div><dl class="event-order-facts"><div><dt>Service window</dt><dd>${escapeHtml(serviceWindow)}</dd></div><div><dt>Supplier total</dt><dd>${moneyExact(order.total)}</dd></div><div><dt>Invoice</dt><dd>${escapeHtml(order.invoiceId)}</dd></div></dl><p class="event-order-policy"><strong>Changes and cancellation:</strong> ${escapeHtml(order.cancellationPolicy)}</p><div class="event-card-actions"><button class="button button-light" type="button" data-event-message-thread="${escapeHtml(messageThread)}">Message ${isVenue ? "venue" : "supplier"}</button>${eventDocumentButton(event, `View ${isVenue ? "venue" : "supplier"} invoice`)}</div></article>`;
}

function eventRequirementsSection(event, requirements) {
  return `<section class="event-section" id="event-requirements" aria-labelledby="event-requirements-title"><div class="event-section-head"><div><span class="eyebrow">Before event day</span><h2 id="event-requirements-title" tabindex="-1">Requirements and documents</h2><p>Required evidence is separate from optional services. Each item shows who requested it, who owns it, and what happens if it remains incomplete.</p></div>${eventDocumentButton(event)}</div><div class="event-requirement-list">${requirements.map(item => `<article class="event-requirement-row"><div class="event-requirement-main">${eventStatusPill(item.status, item.statusClass)}<div><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.consequence)}</p></div></div><dl><div><dt>Source</dt><dd>${escapeHtml(item.source)}</dd></div><div><dt>Responsible</dt><dd>${escapeHtml(item.owner)}</dd></div><div><dt>Due</dt><dd>${escapeHtml(item.due)}</dd></div></dl>${item.action ? `<button class="button button-light" type="button" data-event-requirement="${item.id}">${escapeHtml(item.action)}</button>` : ""}</article>`).join("")}</div><p class="event-prototype-note">Prototype only: the actions above update this browser view. No document is uploaded, reviewed, accepted, or sent.</p></section>`;
}

function eventMessagesSection(event) {
  const threads = eventMessageThreads(event);
  const state = eventWorkspaceState;
  const selected = threads.find(thread => thread.id === state.selectedMessageThread) || threads[0];
  const messages = state.messages.filter(message => message.threadId === selected.id);
  const draft = state.messageDrafts[selected.id] || "";
  const activity = [
    { time: "Sep 28", title: "Venue payment and reservation recorded", detail: `${event.venue.invoiceId} · ${event.venue.status}` },
    { time: "Sep 28", title: "Supplier orders created separately", detail: `${event.vendors.length} independent vendor order${event.vendors.length === 1 ? "" : "s"}` },
    { time: "Sep 29", title: "Insurance reminder", detail: `Action required by ${eventRequirementDueDate(event, 7)}` }
  ];
  return `<section class="event-section" id="event-messages" aria-labelledby="event-messages-title"><div class="event-section-head"><div><span class="eyebrow">Booking-linked communication</span><h2 id="event-messages-title" tabindex="-1">Messages and notifications</h2><p>Each thread belongs to one supplier order. Venue staff and independent vendors cannot see one another’s messages.</p></div></div><div class="event-message-layout"><div><div class="event-thread-tabs" role="tablist" aria-label="Supplier message threads">${threads.map(thread => `<button type="button" role="tab" aria-selected="${thread.id === selected.id}" class="${thread.id === selected.id ? "active" : ""}" data-event-message-thread="${escapeHtml(thread.id)}"><span>${escapeHtml(thread.label)}</span><small>${escapeHtml(thread.recipient)}</small></button>`).join("")}</div><div class="event-thread" role="tabpanel" aria-label="${escapeHtml(selected.recipient)} message thread"><div class="event-thread-recipient"><strong>${escapeHtml(selected.recipient)}</strong><span>This message goes only to ${escapeHtml(selected.recipient)} about ${escapeHtml(selected.reference)}.</span></div><div class="event-message-list">${messages.map(message => `<article class="event-message"><div><strong>${escapeHtml(message.sender)}</strong><span>${escapeHtml(message.role)} · ${escapeHtml(message.time)}</span></div><p>${escapeHtml(message.body)}</p><small>${escapeHtml(message.delivery)}</small></article>`).join("") || '<p class="empty-guidance">No messages in this supplier thread yet.</p>'}</div><form id="event-message-form" class="event-message-form"><input type="hidden" name="threadId" value="${escapeHtml(selected.id)}"><label for="event-message-body">Message ${escapeHtml(selected.recipient)}</label><textarea id="event-message-body" name="message" rows="4" maxlength="600" placeholder="Ask about this supplier order only…">${escapeHtml(draft)}</textarea><div class="event-form-error" id="event-message-error" tabindex="-1" hidden></div><div class="event-card-actions"><button class="button button-green" type="submit">Send demo message</button><span>Prototype only — nothing is sent outside this browser.</span></div></form></div><p class="event-safety-note"><strong>Immediate safety emergency?</strong> Messages are not monitored continuously. Call 911.</p></div><aside class="event-activity"><h3>System activity</h3><p>Non-replyable status updates stay separate from supplier conversations.</p>${activity.map(item => `<div><time>${item.time}</time><span><strong>${escapeHtml(item.title)}</strong><small>${escapeHtml(item.detail)}</small></span></div>`).join("")}</aside></div></section>`;
}

function eventScheduleSection(event) {
  const releaseDate = new Date(`${event.date}T12:00:00`);
  releaseDate.setDate(releaseDate.getDate() - 1);
  const releaseLabel = `${managedEventShortDate(releaseDate.toISOString().slice(0, 10))} at 6:00 p.m. Mountain Time`;
  return `<section class="event-section" id="event-schedule" aria-labelledby="event-schedule-title"><div class="event-section-head"><div><span class="eyebrow">Day-of coordination</span><h2 id="event-schedule-title" tabindex="-1">Schedule and access</h2><p>Venue access, supplier arrival, guest time, cleanup, and lockup share one timeline without changing any supplier’s separate order.</p></div><button class="button button-light" type="button" data-task="Calendar file creation simulated; no calendar was changed.">Add to calendar (demo)</button></div><div class="event-schedule-grid"><ol class="event-timeline">${eventSchedule(event).map(item => `<li><time>${escapeHtml(item.time)}</time><div><span>${escapeHtml(item.type)}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.detail)}</p></div></li>`).join("")}</ol><aside class="event-access-card"><span class="event-status pending"><span aria-hidden="true">◷</span>Access pending</span><h3>Door instructions release later</h3><p>The booking owner can view the final entry instructions after the insurance requirement is accepted.</p><dl><div><dt>Release</dt><dd>${escapeHtml(releaseLabel)}</dd></div><div><dt>Location</dt><dd>${escapeHtml(event.address)}</dd></div><div><dt>Parking and loading</dt><dd>Use the signed west loading area during the booked setup window.</dd></div><div><dt>Accessibility</dt><dd>Step-free entrance and accessible washroom are included.</dd></div><div><dt>On-site contact</dt><dd>Released with the final access instructions.</dd></div></dl><p class="event-prototype-note">No door code is exposed in this prototype or in notification previews.</p></aside></div></section>`;
}

function eventChangeForm(event) {
  const draft = eventWorkspaceState.changeDraft;
  return `<form id="event-change-form" class="event-action-form"><div class="event-action-head"><div><span class="eyebrow">Non-destructive preview</span><h3>Preview a booking change</h3><p>Choose a proposed date, time, or attendance. The venue and every independent vendor are rechecked separately.</p></div><button class="text-button" type="button" data-event-action-close>Close preview</button></div><div class="event-change-columns"><fieldset><legend>Original booking</legend><dl><div><dt>Date</dt><dd>${managedEventShortDate(event.date)}</dd></div><div><dt>Time</dt><dd>${formatTime(event.start)}–${formatTime(event.end)}</dd></div><div><dt>Attendees</dt><dd>${event.guests}</dd></div></dl></fieldset><fieldset><legend>Proposed booking</legend><div class="event-form-grid"><label>Date<input type="date" name="date" value="${escapeHtml(draft.date)}" required></label><label>Start time<input type="time" name="start" value="${escapeHtml(draft.start)}" required></label><label>End time<input type="time" name="end" value="${escapeHtml(draft.end)}" required></label><label>Attendees<input type="number" name="guests" min="1" max="${event.capacity}" value="${draft.guests}" required></label><label class="full">Reason for the request<textarea name="reason" rows="3" maxlength="300" placeholder="Optional context for affected suppliers">${escapeHtml(draft.reason || "")}</textarea></label></div></fieldset></div><div class="event-form-error" id="event-change-error" tabindex="-1" hidden></div><div class="event-card-actions"><button class="button button-green" type="submit">Calculate impact</button><button class="button button-light" type="button" data-event-action-close>Keep current booking</button></div></form>`;
}

function eventChangePreview(event) {
  const draft = eventWorkspaceState.changeDraft;
  const impact = eventChangeImpact(event, draft);
  const direction = impact.totalDifference > 0 ? `${moneyExact(impact.totalDifference)} estimated additional amount` : impact.totalDifference < 0 ? `${moneyExact(Math.abs(impact.totalDifference))} estimated credit` : "No known price difference";
  return `<div class="event-action-form"><div class="event-action-head"><div><span class="eyebrow">Change impact preview</span><h3>Every supplier must recheck the proposal</h3><p>Nothing changes until the request is accepted under each affected supplier’s terms.</p></div><button class="text-button" type="button" data-event-action="change">Edit proposal</button></div><div class="event-impact-summary"><div><span>Original</span><strong>${managedEventShortDate(event.date)}</strong><small>${formatTime(event.start)}–${formatTime(event.end)} · ${event.guests} attendees</small></div><span aria-hidden="true">→</span><div><span>Proposed</span><strong>${managedEventShortDate(draft.date)}</strong><small>${formatTime(draft.start)}–${formatTime(draft.end)} · ${draft.guests} attendees</small></div></div><div class="event-impact-list"><article><div><span class="vendor-category">Venue booking</span><h4>${escapeHtml(event.venue.supplier)}</h4><p>Availability and venue requirements must be rechecked. Issued invoice ${escapeHtml(event.venue.invoiceId)} remains unchanged.</p></div><div><span class="event-status pending"><span aria-hidden="true">◷</span>Reconfirmation required</span><strong>${impact.venueDifference >= 0 ? "+" : "−"}${moneyExact(Math.abs(impact.venueDifference))}</strong></div></article>${impact.vendorRows.map(vendor => `<article><div><span class="vendor-category">${escapeHtml(vendor.category)} order</span><h4>${escapeHtml(vendor.supplier)}</h4><p>${escapeHtml(vendor.offering)} · availability, service window, configuration, and policy recheck required.</p></div><div><span class="event-status pending"><span aria-hidden="true">◷</span>Reconfirmation required</span><strong>${vendor.difference >= 0 ? "+" : "−"}${moneyExact(Math.abs(vendor.difference))}</strong></div></article>`).join("")}<article><div><span class="vendor-category">Security deposit</span><h4>Separate refundable amount</h4><p>The deposit is not supplier revenue and stays separate unless the accepted change alters the venue’s configured requirement.</p></div><div><span class="event-status neutral"><span aria-hidden="true">•</span>Unchanged estimate</span><strong>${moneyExact(event.totals.deposit)}</strong></div></article></div><div class="event-impact-total"><span>Known price impact</span><strong>${direction}</strong><small>Tax is recalculated supplier-by-supplier. Unknown changes remain subject to review.</small></div><form id="event-request-form"><input type="hidden" name="requestType" value="change"><label class="event-acknowledgement"><input type="checkbox" name="acknowledge" value="yes"> <span>I understand this is only a request and my original booking remains confirmed until every affected supplier accepts the change.</span></label><div class="event-form-error" id="event-request-error" tabindex="-1" hidden></div><div class="event-card-actions"><button class="button button-green" type="submit">Submit change request (demo)</button><button class="button button-light" type="button" data-event-action-close>Keep current booking</button></div></form><p class="event-prototype-note">Prototype only: no supplier is contacted, no availability is held, no invoice or credit is issued, and no money moves.</p></div>`;
}

function eventCancellationPreview(event) {
  const supplierRows = [
    { type: "Venue booking", name: event.venue.supplier, reference: event.bookingId, policy: event.venue.cancellationPolicy, fee: 0, refund: event.venue.total },
    ...event.vendors.map(vendor => ({ type: `${vendor.category} order`, name: vendor.supplier, reference: vendor.orderId, policy: vendor.cancellationPolicy, fee: 0, refund: vendor.total }))
  ];
  const supplierRefund = supplierRows.reduce((sum, row) => sum + row.refund, 0);
  const estimatedRefund = supplierRefund + event.totals.deposit;
  return `<div class="event-action-form cancellation-preview"><div class="event-action-head"><div><span class="eyebrow">Cancellation impact preview</span><h3>Review each supplier separately</h3><p>This sample estimate assumes a request on September 29, 2026. A venue cancellation does not silently cancel or refund independent vendor orders.</p></div><button class="text-button" type="button" data-event-action-close>Close preview</button></div><div class="document-notice warning"><strong>Estimate only</strong><span>Each supplier applies its accepted policy. Refunds remain pending until cancellation acceptance and payment-provider confirmation.</span></div><div class="event-impact-list">${supplierRows.map(row => `<article><div><span class="vendor-category">${escapeHtml(row.type)}</span><h4>${escapeHtml(row.name)}</h4><p>${escapeHtml(row.reference)} · ${escapeHtml(row.policy)}</p></div><dl><div><dt>Estimated fee</dt><dd>${moneyExact(row.fee)}</dd></div><div><dt>Estimated refund</dt><dd>${moneyExact(row.refund)}</dd></div><div><dt>Status</dt><dd>Supplier review required</dd></div></dl></article>`).join("")}<article><div><span class="vendor-category">Security deposit · separate ledger</span><h4>Refundable security deposit</h4><p>No event inspection has occurred. Release still requires the accepted cancellation and payment-provider confirmation.</p></div><dl><div><dt>Estimated fee</dt><dd>${moneyExact(0)}</dd></div><div><dt>Estimated release</dt><dd>${moneyExact(event.totals.deposit)}</dd></div><div><dt>Status</dt><dd>Release pending</dd></div></dl></article></div><div class="event-impact-total"><span>Estimated total returned</span><strong>${moneyExact(estimatedRefund)}</strong><small>${moneyExact(supplierRefund)} supplier payments + ${moneyExact(event.totals.deposit)} separate deposit. Method and timing remain unconfirmed.</small></div><form id="event-request-form"><input type="hidden" name="requestType" value="cancel"><label class="event-acknowledgement danger"><input type="checkbox" name="acknowledge" value="yes"> <span>I understand this submits a cancellation request for separate supplier review. It does not cancel the booking, cancel vendor orders, issue a refund, or move the deposit.</span></label><div class="event-form-error" id="event-request-error" tabindex="-1" hidden></div><div class="event-card-actions"><button class="button button-danger" type="submit">Submit cancellation request (demo)</button><button class="button button-light" type="button" data-event-action-close>Keep current booking</button></div></form><p class="event-prototype-note">Prototype only: no booking or order is cancelled and no refund is initiated.</p></div>`;
}

function eventChangeCancelSection(event) {
  const request = eventWorkspaceState.submittedRequest;
  let content = `<div class="event-action-choices"><button type="button" data-event-action="change"><span aria-hidden="true">↻</span><strong>Preview a change</strong><small>Compare a proposed date, time, or attendance before requesting supplier reconfirmation.</small></button><button type="button" data-event-action="cancel"><span aria-hidden="true">×</span><strong>Review cancellation impact</strong><small>Estimate each supplier’s fee or refund and the separate deposit treatment.</small></button></div>`;
  if (eventWorkspaceState.actionView === "change") content = eventChangeForm(event);
  if (eventWorkspaceState.actionView === "change-preview") content = eventChangePreview(event);
  if (eventWorkspaceState.actionView === "cancel") content = eventCancellationPreview(event);
  if (request) content = `<div class="event-request-record" role="status"><span class="event-status pending"><span aria-hidden="true">◷</span>Request recorded</span><h3>${request.type === "change" ? "Change request awaiting supplier review" : "Cancellation request awaiting separate supplier reviews"}</h3><p>${escapeHtml(request.summary)}</p><dl><div><dt>Current booking</dt><dd>Still confirmed and unchanged</dd></div><div><dt>Payments and deposit</dt><dd>No money moved</dd></div><div><dt>Prototype delivery</dt><dd>No supplier was contacted</dd></div></dl><button class="button button-light" type="button" data-event-request-withdraw>Withdraw demo request</button></div>`;
  return `<section class="event-section" id="event-change" aria-labelledby="event-change-title"><div class="event-section-head"><div><span class="eyebrow">Before anything changes</span><h2 id="event-change-title" tabindex="-1">Change or cancel</h2><p>Start with a reversible impact preview. The confirmed snapshot and issued supplier invoices are never overwritten.</p></div></div>${content}</section>`;
}

function customerEventPage() {
  const event = activeManagedEvent();
  ensureEventWorkspaceState(event);
  const requirements = eventRequirements(event);
  const nextAction = eventNextAction(event, requirements);
  const completedRequirements = requirements.filter(item => ["Accepted", "Submitted", "Not required"].includes(item.status)).length;
  const confirmedVendors = event.vendors.filter(item => item.status === "Confirmed").length;
  const summaryStatus = `Venue confirmed · ${confirmedVendors} of ${event.vendors.length} vendor order${event.vendors.length === 1 ? "" : "s"} confirmed · ${requirements.filter(item => ["Action required", "Due soon"].includes(item.status)).length} requirement${requirements.filter(item => ["Action required", "Due soon"].includes(item.status)).length === 1 ? "" : "s"} due`;
  return `<section class="my-event-page"><div class="my-event-wrap"><button class="back-link" type="button" data-route="customer-dashboard">← Back to My bookings</button><header class="my-event-hero"><div><span class="eyebrow">My Event · ${escapeHtml(event.bookingId)}</span><h1>${escapeHtml(event.purpose)}</h1><p>${escapeHtml(event.venue.name)} · <time datetime="${event.date}">${managedEventDate(event.date)}</time> · ${formatTime(event.start)}–${formatTime(event.end)} Mountain Time · ${event.guests} attendees</p><div class="event-summary-status">${escapeHtml(summaryStatus)}</div></div><div class="event-hero-actions"><span class="status-pill confirmed">Venue confirmed</span><button class="button button-light" type="button" data-route="customer-dashboard">All bookings</button></div></header>${roleContextNotice()}<ol class="event-stage-strip" aria-label="Event progress"><li class="complete"><span>1</span><strong>Booked</strong><small>Payment recorded</small></li><li class="current"><span>2</span><strong>Prepare</strong><small>Requirements due</small></li><li><span>3</span><strong>Event day</strong><small>Schedule and access</small></li><li><span>4</span><strong>Closeout</strong><small>Deposit and reviews</small></li></ol><article class="event-next-action"><div><span class="eyebrow">Next action · ${escapeHtml(nextAction.eyebrow)}</span><h2>${escapeHtml(nextAction.title)}</h2><p>${escapeHtml(nextAction.detail)}</p><small>Your venue reservation remains confirmed while this preparation item is open.</small></div><button class="button button-green" type="button" data-event-section="${nextAction.section}" ${nextAction.threadId ? `data-event-thread-target="${escapeHtml(nextAction.threadId)}"` : ""}>${escapeHtml(nextAction.action)}</button></article><nav class="event-local-nav" aria-label="My Event sections"><button type="button" data-event-section="event-overview">Overview</button><button type="button" data-event-section="event-orders">Supplier orders</button><button type="button" data-event-section="event-requirements">Requirements</button><button type="button" data-event-section="event-messages">Messages</button><button type="button" data-event-section="event-schedule">Schedule & access</button><button type="button" data-event-section="event-change">Change or cancel</button></nav><div class="event-workspace-grid"><main class="event-sections"><section class="event-section" id="event-overview" aria-labelledby="event-overview-title"><div class="event-section-head"><div><span class="eyebrow">Operational snapshot</span><h2 id="event-overview-title" tabindex="-1">Overview</h2><p>The venue reservation, independent supplier orders, requirements, and deposit keep their own status.</p></div></div><div class="event-readiness-grid"><article><span>Venue booking</span><strong>${event.venue.status}</strong><small>${event.venue.supplier}</small></article><article><span>Vendor orders</span><strong>${confirmedVendors}/${event.vendors.length} confirmed</strong><small>${event.vendors.some(item => item.statusClass === "attention") ? "One supplier needs a detail" : "No supplier action due"}</small></article><article><span>Requirements</span><strong>${completedRequirements}/${requirements.length} ready</strong><small>${requirements.find(item => item.status === "Action required")?.title || "No required action"}</small></article><article><span>Security deposit</span><strong>${moneyExact(event.totals.deposit)}</strong><small>Held separately · not supplier revenue</small></article></div><div class="event-overview-notes"><div><strong>What is confirmed</strong><span>Your venue time and the supplier orders marked Confirmed are reserved in this fictional sample.</span></div><div><strong>What still needs attention</strong><span>Complete the listed requirements and reply only within the affected supplier thread.</span></div><div><strong>What happens later</strong><span>Event completion, supplier fulfilment, deposit release or claim, and reviews are separate post-event steps.</span></div></div></section><section class="event-section" id="event-orders" aria-labelledby="event-orders-title"><div class="event-section-head"><div><span class="eyebrow">Separate supplier records</span><h2 id="event-orders-title" tabindex="-1">Venue and vendor orders</h2><p>One status never stands in for the whole event. Each supplier keeps its own order, invoice, messages, service window, and accepted policy.</p></div></div><div class="event-order-list">${eventOrderCard(event.venue, "venue", event)}${event.vendors.map(vendor => eventOrderCard(vendor, "vendor", event)).join("")}</div></section>${eventRequirementsSection(event, requirements)}${eventMessagesSection(event)}${eventScheduleSection(event)}${eventChangeCancelSection(event)}</main><aside class="event-booking-summary"><span class="eyebrow">Booking summary</span><h2>${escapeHtml(event.venue.name)}</h2><dl><div><dt>Date</dt><dd>${managedEventShortDate(event.date)}</dd></div><div><dt>Booked time</dt><dd>${formatTime(event.start)}–${formatTime(event.end)} MT</dd></div><div><dt>Attendees</dt><dd>${event.guests}</dd></div><div><dt>Booking owner</dt><dd>${escapeHtml(event.owner)}</dd></div><div><dt>Venue and services paid</dt><dd>${moneyExact(event.totals.servicesTotal)}</dd></div><div><dt>Refundable deposit</dt><dd>${moneyExact(event.totals.deposit)}</dd></div><div class="total"><dt>Total paid</dt><dd>${moneyExact(event.totals.dueNow)}</dd></div></dl><div class="event-summary-docs"><strong>Customer-visible records</strong><span>${escapeHtml(event.venue.invoiceId)} · venue invoice</span>${event.vendors.map(vendor => `<span>${escapeHtml(vendor.invoiceId)} · ${escapeHtml(vendor.category.toLowerCase())} invoice</span>`).join("")}<span>${escapeHtml(event.receiptId)} · grouped receipt</span></div>${eventDocumentButton(event)}<p>Supplier-private payout, commission, bank, tax-registration, and reconciliation details are intentionally excluded.</p></aside></div><p class="event-workspace-boundary">Interactive prototype · All people, bookings, suppliers, requirements, messages, addresses, documents, and amounts are fictional. Browser refresh resets My Event activity. This workspace coordinates the booking; it is not an attendee ticketing, RSVP, seating, check-in, or public event-site system.</p></div></section>`;
}

function customerDashboardPage() {
  const role = activeRole();
  const deposit = depositStatus();
  const upcomingEvent = activeManagedEvent();
  ensureEventWorkspaceState(upcomingEvent);
  const upcomingRequirements = eventRequirements(upcomingEvent);
  const upcomingNextAction = eventNextAction(upcomingEvent, upcomingRequirements);
  const confirmedVendorCount = upcomingEvent.vendors.filter(item => item.status === "Confirmed").length;
  const checkoutTotal = financeDemo.association.gross + financeDemo.vendor.gross + financeDemo.deposit;
  const documentCount = 8 + upcomingEvent.vendors.length + (hasIssuedSupplementalClaim() ? 1 : 0);
  const reviewTargets = reviewTargetsForBooking();
  const reviewedCount = reviewTargets.filter(target => organizerReviews[reviewKey(target)]).length;
  const reviewStatus = reviewedCount === reviewTargets.length ? "Reviews complete" : !reviewWindowOpen() ? "Review window closed" : `${reviewTargets.length - reviewedCount} review${reviewTargets.length - reviewedCount === 1 ? "" : "s"} remaining`;
  const reviewButtonLabel = reviewedCount === reviewTargets.length ? (reviewWindowOpen() ? "View or edit reviews" : "View submitted reviews") : reviewWindowOpen() ? `Leave reviews · ${reviewedCount}/${reviewTargets.length}` : "View review status";
  return `<section class="customer-dashboard"><div class="customer-dashboard-head"><div><span class="eyebrow">Customer account</span><h1>My bookings</h1><p>Welcome back, ${role.name}. Open an upcoming event to manage supplier orders, requirements, messages, day-of access, and safe change or cancellation previews.</p></div><div class="avatar large">${role.initials}</div></div>${roleContextNotice()}<div class="customer-metrics"><div><span>Recent bookings</span><strong>2 bookings</strong><small>1 upcoming · 1 completed</small></div><div><span>Customer documents</span><strong>${documentCount} available</strong><small>${hasIssuedSupplementalClaim() ? "Includes approved supplemental invoice" : "Supplier invoices, receipts + statements"}</small></div><div><span>Upcoming supplier orders</span><strong>${confirmedVendorCount + 1}/${upcomingEvent.vendors.length + 1} confirmed</strong><small>Venue and vendors tracked separately</small></div><div><span>Verified reviews</span><strong>${reviewedCount} of ${reviewTargets.length}</strong><small>${reviewStatus}</small></div></div><article class="customer-booking-card upcoming"><div class="customer-booking-title"><div><span class="account-badge">Upcoming · ${upcomingEvent.bookingId}</span><h2>${escapeHtml(upcomingEvent.purpose)}</h2><p>${escapeHtml(upcomingEvent.venue.name)} · ${managedEventDate(upcomingEvent.date)} · ${formatTime(upcomingEvent.start)}–${formatTime(upcomingEvent.end)} Mountain Time</p></div><strong>${moneyExact(upcomingEvent.totals.dueNow)} paid</strong></div><div class="customer-booking-grid"><div><span>Venue booking</span><strong>${upcomingEvent.venue.status}</strong><small>${escapeHtml(upcomingEvent.venue.supplier)}</small></div><div><span>Independent vendors</span><strong>${confirmedVendorCount} of ${upcomingEvent.vendors.length} confirmed</strong><small>Each service has its own order, messages, invoice, and policy</small></div><div><span>Next action</span><strong>${escapeHtml(upcomingNextAction.title)}</strong><small>${escapeHtml(upcomingNextAction.eyebrow)}</small></div></div><div class="button-row"><button class="button button-green" data-route="customer-event">Open My Event</button>${eventDocumentButton(upcomingEvent)}</div></article><article class="customer-booking-card completed"><div class="customer-booking-title"><div><span class="account-badge">Completed · ${financeDemo.bookingId}</span><h2>${financeDemo.event}</h2><p>Ridgeview Community Hall · ${financeDemo.eventDate} · event completed</p></div><strong>${moneyExact(checkoutTotal)} paid</strong></div><div class="customer-booking-grid"><div><span>Venue supplier</span><strong>${financeDemo.venueSupplier}</strong><small>Venue rental, venue-owned add-ons, and refundable deposit record</small></div><div><span>Independent vendor</span><strong>${financeDemo.vendorSupplier}</strong><small>Family magic show · separately supplied and invoiced</small></div><div><span>Next step</span><strong>${depositView === "customer_review" ? "Review documented deposit claim" : deposit.label}</strong><small>${deposit.detail}</small></div></div><div class="button-row"><button class="button button-dark" data-route="customer-documents">View booking documents</button><button class="button button-light" data-route="${closeoutFinalized ? "final-statement" : "interim-statement"}">View current statement</button><button class="button button-light" data-route="customer-deposit">View deposit status</button></div></article><article class="customer-review-card"><div><span class="account-badge">Verified post-event reviews</span><h2>Help future organizers choose with confidence</h2><p>Review the venue and each fulfilled vendor separately. Your deposit case, private support messages, and supplier settlement details stay outside the public review.</p></div><button class="button button-green" data-route="customer-reviews">${reviewButtonLabel}</button></article>${customerDepositCard()}<div class="privacy-boundary"><strong>Customer privacy boundary</strong><span>You can see what you bought, paid, and may receive back. Venue and vendor bank details, platform fees, processing allocations, and private payout statements are intentionally excluded.</span></div></section>`;
}

function reviewRatingFieldset(target, existing) {
  const key = reviewKey(target);
  const safeId = key.replace(/[^a-z0-9]/gi, "-");
  return `<fieldset class="star-rating" id="rating-group-${safeId}" aria-describedby="rating-help-${safeId}"><legend>Overall rating <span aria-hidden="true">*</span></legend><p id="rating-help-${safeId}">Choose one rating for this ${target.targetType === "venue" ? "venue" : "vendor service"}.</p><div>${[1, 2, 3, 4, 5].map(value => `<input id="rating-${safeId}-${value}" type="radio" name="rating" value="${value}" ${existing?.rating === value ? "checked" : ""} required><label for="rating-${safeId}-${value}"><span aria-hidden="true">★</span><span class="visually-hidden">${value} out of 5</span><small aria-hidden="true">${value}</small></label>`).join("")}</div></fieldset>`;
}

function reviewTargetPanel(target) {
  const key = reviewKey(target);
  const existing = organizerReviews[key];
  const canSubmit = canSubmitReviewFor(target);
  const editing = canSubmit && (!existing || reviewEditingTarget === key);
  const safeId = key.replace(/[^a-z0-9]/gi, "-");
  const targetLabel = target.targetType === "venue" ? "Venue" : "Independent vendor";
  const identifier = target.orderId || completedReviewBooking.bookingId;
  if (!existing && !canSubmit) {
    return `<article class="review-target-card"><div class="review-target-head"><div><span class="vendor-category">${targetLabel} · review window closed</span><h2>${escapeHtml(target.name)}</h2><p>${escapeHtml(target.offering)} · ${escapeHtml(identifier)}</p></div><span class="status-pill">Expired</span></div><p class="review-window-closed">The 30-day review window ended on ${completedReviewBooking.reviewDeadline}. No rating was added for this supplier.</p></article>`;
  }
  if (!editing) {
    return `<article class="review-target-card review-published" data-review-record="${safeId}"><div class="review-target-head"><div><span class="vendor-category">${targetLabel} · reviewed</span><h2>${escapeHtml(target.name)}</h2><p>${escapeHtml(target.offering)} · ${escapeHtml(identifier)}</p></div><span class="status-pill confirmed">Published</span></div>${publicReviewCard(existing)}${existing.privateFeedback ? '<p class="review-private-note"><strong>Private feedback saved.</strong> It is visible only to authorized Gather support and is never added to the public review.</p>' : ""}<div class="button-row">${canSubmit ? `<button class="button button-light" type="button" data-review-edit="${escapeHtml(key)}">Edit this review</button>` : ""}${target.targetType === "venue" ? '<button class="button button-light" type="button" data-route="venue">View public venue listing</button>' : `<button class="button button-light" type="button" data-review-vendor-comparison="${escapeHtml(target.subjectId)}">View vendor comparison</button>`}</div></article>`;
  }
  const publicComment = existing?.comment || "";
  const privateFeedback = existing?.privateFeedback || "";
  return `<article class="review-target-card"><div class="review-target-head"><div><span class="vendor-category">${targetLabel} · ${existing ? "editing published review" : "eligible to review"}</span><h2>${escapeHtml(target.name)}</h2><p>${escapeHtml(target.offering)} · ${escapeHtml(identifier)} · completed or fulfilled</p></div><span class="verified-review">✓ Verified booking</span></div><form class="review-form" data-review-form data-review-target="${escapeHtml(key)}" novalidate><div class="review-error" id="review-error-${safeId}" role="alert" tabindex="-1" hidden></div>${reviewRatingFieldset(target, existing)}<fieldset class="review-highlight-fieldset"><legend>What stood out? <span>Optional · choose all that apply</span></legend><div class="review-highlight-options">${target.criteria.map((criterion, index) => `<label for="highlight-${safeId}-${index}"><input id="highlight-${safeId}-${index}" type="checkbox" name="highlights" value="${escapeHtml(criterion)}" ${existing?.highlights?.includes(criterion) ? "checked" : ""}> ${escapeHtml(criterion)}</label>`).join("")}</div></fieldset><label class="review-textarea" for="public-comment-${safeId}"><span>Public review <small>Optional · 20–600 characters when provided</small></span><textarea id="public-comment-${safeId}" name="publicComment" rows="5" maxlength="600" data-character-count="public-count-${safeId}" placeholder="Share what future organizers should know about this specific ${target.targetType === "venue" ? "space" : "service"}.">${escapeHtml(publicComment)}</textarea><small id="public-count-${safeId}" class="character-count">${publicComment.length}/600</small></label><label class="review-textarea private" for="private-feedback-${safeId}"><span>Private feedback to Gather <small>Optional · never published</small></span><textarea id="private-feedback-${safeId}" name="privateFeedback" rows="3" maxlength="600" data-character-count="private-count-${safeId}" placeholder="Share a concern that should not appear publicly.">${escapeHtml(privateFeedback)}</textarea><small id="private-count-${safeId}" class="character-count">${privateFeedback.length}/600</small></label><label class="review-guidelines"><input id="guidelines-${safeId}" type="checkbox" name="reviewGuidelines" value="accepted" required> <span>I confirm this is my honest experience with this completed booking and does not include private contact, payment, medical, or dispute evidence.</span></label><div class="review-policy-note"><strong>How publication works</strong><span>This prototype publishes the review immediately for demonstration. The supplier does not approve it. Production would apply content safeguards, reporting, appeal, and moderation without removing a review merely because a supplier disagrees.</span></div><div class="button-row"><button class="button button-green" type="submit">${existing ? "Save review changes" : `Publish ${target.targetType === "venue" ? "venue" : "vendor"} review`}</button>${existing ? `<button class="button button-light" type="button" data-review-cancel="${escapeHtml(key)}">Cancel editing</button>` : ""}</div></form></article>`;
}

function customerReviewsPage() {
  const targets = reviewTargetsForBooking();
  const reviewedCount = targets.filter(target => organizerReviews[reviewKey(target)]).length;
  const reviewOpen = reviewWindowOpen() && isBookingReviewOwner();
  return `<section class="review-page"><div class="review-page-wrap"><button class="back-link" type="button" data-route="customer-dashboard">← Back to My bookings</button><header class="review-page-head"><div><span class="eyebrow">Completed booking · ${completedReviewBooking.bookingId}</span><h1>Review your event</h1><p>Rate the venue and every fulfilled vendor separately so future organizers can compare the exact suppliers they may book.</p></div><div class="review-progress" aria-label="${reviewedCount} of ${targets.length} review targets complete"><strong>${reviewedCount}/${targets.length}</strong><span>reviews complete</span></div></header>${roleContextNotice()}<div class="document-notice ${reviewOpen ? "" : "warning"}"><strong>${reviewOpen ? `Eligible until ${completedReviewBooking.reviewDeadline}` : `Review window closed ${completedReviewBooking.reviewDeadline}`}</strong><span>A venue becomes reviewable after the booking is completed; a vendor becomes reviewable after its order is fulfilled. Deposit, payout, invoice, and complaint status do not block an eligible review.</span></div><div class="review-boundaries"><div><strong>Public</strong><span>Your rating, optional comment and highlights, first name with last initial, event type, month/year, and verified-booking badge.</span></div><div><strong>Private</strong><span>Exact booking date and ID, contact details, allergy or medical information, private notes, dispute evidence, and private feedback to authorized Gather support.</span></div><div><strong>One per supplier</strong><span>Editing replaces the existing review and does not add another rating or increase the review count.</span></div></div><div class="review-target-grid">${targets.map(reviewTargetPanel).join("")}</div><aside class="review-support"><div><strong>Need to report a safety, payment, deposit, or service issue?</strong><span>Use a private support case. A public review is not the investigation or dispute channel.</span></div><button class="button button-light" type="button" data-task="Private issue reporting would open here; no complaint details were published.">Report a private issue</button></aside><p class="prototype-note">All bookings, ratings, names, suppliers, and review content shown here are fictional. Review changes live only in this browser memory and reset when the page is refreshed.</p></div></section>`;
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
  const isSuperAdmin = role.id === "platform-admin";
  const deposit = depositStatus();
  const supportPanel = supportSession ? `<div class="support-session active"><div><span class="status-pill confirmed">Read-only support session active</span><h3>${supportSession.target}</h3><p><strong>${supportSession.actor}</strong> remains the identified platform actor · ${supportSession.caseId} · ${supportSession.reason}</p><small>Started ${formatSupportTimestamp(supportSession.startedAt)} · expires ${formatSupportTimestamp(supportSession.expiresAt)}. Passwords, API keys, full payment credentials, bank details, tax identifiers, refunds, payout edits, deposit decisions, and role changes remain unavailable.</small></div><button class="button button-dark" type="button" id="end-support-session">End access</button></div>` : `<form class="support-session-form" id="support-session-form"><div><span class="vendor-category">Controlled support access</span><h3>Start a read-only support session</h3><p>This does not switch identities. The platform administrator remains visible as the actor and the session is added to the audit history.</p></div><div class="support-form-grid"><label>Support case<input id="support-case" value="SUP-2104" pattern="[A-Za-z]+-[0-9]+" required></label><label>Organization<select id="support-target"><option>Ridgeview Community Association</option><option>WonderSpark Entertainment</option><option>Crestwood Community Association</option></select></label><label>Reason<select id="support-reason"><option>Investigate booking issue</option><option>Assist with listing configuration</option><option>Review calendar synchronization</option><option>Investigate payment reconciliation</option></select></label><label>Expires after<select id="support-duration"><option value="15">15 minutes</option><option value="30" selected>30 minutes</option></select></label></div><button class="button button-dark" type="submit">Start audited read-only session</button></form>`;
  const adminModules = isSuperAdmin ? `<section class="super-admin-area"><div class="super-admin-title"><div><span class="eyebrow">Platform administrator · super admin</span><h2>Global oversight with controlled access</h2><p>Representative cross-organization records are visible for operations and support. Sensitive credentials remain masked, and tenant changes require a permitted workflow rather than silent impersonation.</p></div><span class="read-only-label">Sample data</span></div><div class="admin-module-grid"><article class="dash-card admin-wide"><div class="card-heading-row"><div><h3>Organizations and access</h3><p>Operator and vendor status, membership count, catalog size, and payout readiness.</p></div><button class="text-button" data-task="Organization directory filters opened">Filter directory</button></div><div class="admin-table" role="table" aria-label="Sample organizations"><div class="admin-table-head" role="row"><span>Organization</span><span>Type</span><span>Members</span><span>Supply</span><span>Status</span></div><div role="row"><strong>Ridgeview Community Association</strong><span>Space operator</span><span>5</span><span>1 listing</span><span class="mini-status">Active · payout ready</span></div><div role="row"><strong>WonderSpark Entertainment</strong><span>Vendor</span><span>3</span><span>4 packages</span><span class="mini-status">Active · payout ready</span></div><div role="row"><strong>Crestwood Community Association</strong><span>Space operator</span><span>4</span><span>1 listing</span><span class="mini-status pending">Credential review</span></div></div></article><article class="dash-card"><h3>Linked booking and vendor orders</h3><div class="admin-record"><strong>BKG-1033 · completed</strong><span>Ridgeview Community Hall</span><small>Customer contact and private event notes redacted by default</small><div><span>Venue invoice paid</span><span>Vendor order fulfilled</span><span>Deposit · ${deposit.label}</span></div></div><div class="admin-record"><strong>BKG-1048 · confirmed</strong><span>Ridgeview Community Hall · October 17</span><small>Selected supplier orders remain legally and financially separate</small><div><span>Venue confirmed</span><span>1 vendor order</span><span>Deposit held</span></div></div></article><article class="dash-card"><h3>Money and deposit health</h3><div class="terms-list"><div><span>Processor-to-ledger exceptions</span><strong>3</strong></div><div><span>Transfers awaiting approval</span><strong>2</strong></div><div><span>Deposits held</span><strong>${moneyExact(18400)}</strong></div><div><span>Customer responses due</span><strong>4</strong></div></div><p class="document-footnote">Deposits are held customer funds, not platform revenue. Full bank, card, and tax credentials are never displayed here.</p></article><article class="dash-card admin-wide">${supportPanel}</article><article class="dash-card admin-wide"><div class="card-heading-row"><div><h3>Recent privileged-access audit</h3><p>Actor, reason, scope, time window, target, case, and outcome remain attributable.</p></div><span class="read-only-label">Append-only demo</span></div><div class="audit-list">${supportAuditEvents.map(event => `<div><span>${event.timestamp ? formatSupportTimestamp(event.timestamp) : event.time}</span><strong>${event.actor}</strong><span>${event.action}<small>${[event.scope, event.reason, event.startedAt ? `Started ${formatSupportTimestamp(event.startedAt)}` : "", event.expiresAt ? `Expires ${formatSupportTimestamp(event.expiresAt)}` : "", event.outcome].filter(Boolean).join(" · ")}</small></span><span>${event.target}</span><code>${event.caseId}</code></div>`).join("")}</div></article></div></section>` : "";
  const content = `<header class="dash-head"><div><span class="eyebrow">Gather platform console · ${role.shortRole}${isSuperAdmin ? " · super admin" : ""}</span><h1>Platform operations</h1><p>Cross-organization health is visible without silently becoming a customer, venue user, or vendor.</p></div><div class="avatar">${role.initials}</div></header>${roleContextNotice()}<div class="metric-grid"><div class="metric"><span>Active operators</span><strong>18</strong><em>Sample pilot data</em></div><div class="metric"><span>Active vendors</span><strong>27</strong><em>8 categories</em></div><div class="metric"><span>${isFinance ? "Reconciliation exceptions" : "Onboarding reviews"}</span><strong>${isFinance ? "3" : "6"}</strong><em>${isFinance ? "Needs investigation" : "Oldest: 2 days"}</em></div><div class="metric"><span>${isOps ? "Support queue" : "Fee documents"}</span><strong>${isOps ? "9" : "14"}</strong><em>${isOps ? "2 high priority" : "Current settlement cycle"}</em></div></div><div class="platform-grid"><section class="dash-card"><div class="card-heading-row"><div><h3>${isFinance ? "Money-movement controls" : "Marketplace and support"}</h3><p>Only queues permitted for this role are shown.</p></div>${canEditPolicy ? '<button class="text-button" data-route="fee-settings">Commercial terms</button>' : ""}</div>${isFinance ? `<div class="platform-queue"><span class="task-icon">◇</span><div><strong>Processor-to-ledger mismatch</strong><small>CHG-1033 · grouped payment allocations require review</small></div><button data-task="Reconciliation case opened">Review</button></div><div class="platform-queue"><span class="task-icon">$</span><div><strong>Transfer not generated</strong><small>PST-WSE-1033 · approval and transfer are separate states</small></div><button data-task="Transfer exception opened">Review</button></div>` : ""}${isOps ? `<div class="platform-queue"><span class="task-icon">▱</span><div><strong>Operator onboarding</strong><small>2 listings need identity or payout-readiness checks</small></div><button data-task="Operator onboarding queue opened">Review</button></div><div class="platform-queue"><span class="task-icon">✦</span><div><strong>Vendor credentials</strong><small>Food service and personal-service records due</small></div><button data-task="Vendor credential queue opened">Review</button></div><div class="platform-queue"><span class="task-icon">↻</span><div><strong>Calendar sync exception</strong><small>Communal update requires operator follow-up</small></div><button data-task="Synchronization exception opened">Review</button></div>` : ""}</section><aside class="dash-card"><h3>Privileged-access boundary</h3><p>Platform roles do not silently become customers, venue staff, or vendors. Support access is reason-coded, time-limited, read-only by default, and fully audited.</p><div class="policy-callout"><strong>Booking snapshots remain immutable</strong><span>A new commercial-policy version cannot rewrite an existing booking’s saved supplier, tax, or fee terms.</span></div><button class="button button-light button-wide" data-route="sign-in">Compare another demo role</button></aside></div>${adminModules}`;
  const categoryCountLabel = `${Object.keys(serviceCategoryLabels).length} supported categories`;
  const currentPlatformContent = content
    .replace("8 categories", categoryCountLabel)
    .replace("<strong>Vendor credentials</strong><small>Food service and personal-service records due</small>", "<strong>Future category safeguards</strong><small>Production concept · not enforced in this prototype</small>");
  return dashboardShell("platform-dashboard", currentPlatformContent);
}

function vendorOptionGroupsTemplate(serviceType, customRequestsAllowed = true) {
  const syntheticService = {
    id: `vendor-template-${serviceType}`,
    serviceType,
    customRequestsAllowed,
    servingStyles: ["Buffet", "Drop-off", "Plated"]
  };
  return JSON.parse(JSON.stringify(categoryConfigurationSchemaFor(syntheticService))).map(group => ({
    ...group,
    enabled: true,
    options: group.options?.map(choice => ({ ...choice, enabled: true }))
  }));
}

function cloneOptionGroups(groups) {
  return JSON.parse(JSON.stringify(groups || []));
}

function offeringDraftFromService(service) {
  const customRequestsAllowed = service.customRequestsAllowed ?? ["cake", "decor", "photo-booth", "catering"].includes(service.serviceType);
  return {
    id: service.id,
    sourceId: service.id,
    name: service.name,
    serviceType: service.serviceType,
    sellingMode: service.bookingMode || "configurable",
    description: service.description,
    pricingType: service.pricing.type,
    amount: service.pricing.amount,
    minimum: service.pricing.minimum || 0,
    inclusions: service.inclusions.join("\n"),
    customRequestsAllowed,
    optionGroups: cloneOptionGroups(service.optionGroups?.length ? service.optionGroups : vendorOptionGroupsTemplate(service.serviceType, true)),
    minGuests: service.minGuests,
    maxGuests: service.maxGuests,
    minLeadDays: service.minLeadDays,
    venueIds: [...service.venueIds],
    image: service.image || null
  };
}

function blankOfferingDraft() {
  return {
    id: null,
    sourceId: null,
    name: "",
    serviceType: "catering",
    sellingMode: "hybrid",
    description: "",
    pricingType: "per_person",
    amount: 15,
    minimum: 300,
    inclusions: "",
    customRequestsAllowed: true,
    optionGroups: vendorOptionGroupsTemplate("catering", true),
    minGuests: 10,
    maxGuests: 120,
    minLeadDays: 7,
    venueIds: spaces.map(space => space.id),
    image: null
  };
}

function ensureVendorOfferingEditor() {
  if (vendorOfferingEditor.draft) return vendorOfferingEditor.draft;
  const role = activeRole();
  const service = vendorServices.find(item => item.id === vendorOfferingEditor.editingId && item.vendor === role?.organization);
  vendorOfferingEditor.draft = service ? offeringDraftFromService(service) : blankOfferingDraft();
  vendorOfferingEditor.status = service ? "published" : "draft";
  vendorOfferingEditor.image = null;
  vendorOfferingEditor.imageError = "";
  return vendorOfferingEditor.draft;
}

function managedVendorOfferings() {
  const organization = activeRole()?.organization;
  return vendorServices.filter(service => service.vendor === organization);
}

function validateImageUpload(file) {
  if (!file || file.size === 0) return "Choose a non-empty image file.";
  if (!ACCEPTED_IMAGE_TYPES.has(file.type)) return "Use a JPG, PNG, or WebP image. GIF, SVG, PDF, and other files are not accepted.";
  if (file.size > MAX_IMAGE_BYTES) return `Image must be ${MAX_IMAGE_LABEL} or smaller. This file is ${(file.size / 1024 / 1024).toFixed(2)} MB.`;
  return "";
}

function captureVendorOfferingDraft(form) {
  const data = new FormData(form);
  const current = ensureVendorOfferingEditor();
  const hasRenderedOptionGroups = Boolean(form.querySelector('[name^="groupEnabled:"]'));
  const optionGroups = hasRenderedOptionGroups ? cloneOptionGroups(current.optionGroups).map(group => {
    const groupKey = group.id;
    const required = data.get(`groupRequired:${groupKey}`) === "yes";
    const min = group.type === "multi" ? Math.max(0, Number(data.get(`groupMin:${groupKey}`) || 0)) : group.min;
    const max = group.type === "multi" ? Math.max(min, Number(data.get(`groupMax:${groupKey}`) || Math.max(min, group.options?.length || 1))) : group.max;
    return {
      ...group,
      label: String(data.get(`groupLabel:${groupKey}`) || group.label).trim(),
      enabled: data.get(`groupEnabled:${groupKey}`) === "yes",
      required,
      ...(group.type === "multi" ? { min, max } : {}),
      options: group.options?.map(choice => ({
        ...choice,
        label: String(data.get(`optionLabel:${groupKey}:${choice.id}`) || choice.label).trim(),
        enabled: data.get(`optionEnabled:${groupKey}:${choice.id}`) === "yes",
        price: choice.bookingMode === "quote" ? 0 : Math.max(0, Number(data.get(`optionPrice:${groupKey}:${choice.id}`) || 0)),
        priceType: String(data.get(`optionPriceType:${groupKey}:${choice.id}`) || choice.priceType || "flat")
      }))
    };
  }) : cloneOptionGroups(current.optionGroups);
  vendorOfferingEditor.draft = {
    ...current,
    name: String(data.get("name") || "").trim(),
    serviceType: String(data.get("serviceType") || "catering"),
    sellingMode: String(data.get("sellingMode") || "fixed"),
    description: String(data.get("description") || "").trim(),
    pricingType: String(data.get("pricingType") || "flat"),
    amount: Number(data.get("amount") || 0),
    minimum: Number(data.get("minimum") || 0),
    inclusions: String(data.get("inclusions") || "").trim(),
    customRequestsAllowed: data.get("customRequestsAllowed") === "yes",
    optionGroups,
    minGuests: Number(data.get("minGuests") || 1),
    maxGuests: Number(data.get("maxGuests") || 1),
    minLeadDays: Number(data.get("minLeadDays") || 0),
    venueIds: data.getAll("venueIds").map(String),
    image: vendorOfferingEditor.image?.metadata || current.image || null
  };
  return vendorOfferingEditor.draft;
}

function offeringValidationErrors(draft) {
  const errors = [];
  if (!draft.name) errors.push("Add an offering title");
  if (!draft.description) errors.push("Add a description");
  if (!draft.inclusions.split("\n").some(line => line.trim())) errors.push("Add at least one included item");
  if (!Number.isFinite(draft.amount) || draft.amount < 0) errors.push("Enter a valid base price");
  if (!Number.isFinite(draft.minimum) || draft.minimum < 0) errors.push("Enter a valid minimum order");
  if (!Number.isInteger(draft.minGuests) || !Number.isInteger(draft.maxGuests) || draft.minGuests < 1 || draft.maxGuests < draft.minGuests) errors.push("Maximum guests or units must be at least the minimum");
  if (!draft.venueIds.length) errors.push("Select at least one venue served");
  if (["configurable", "hybrid"].includes(draft.sellingMode)) {
    const enabledGroups = draft.optionGroups.filter(group => group.enabled);
    if (!enabledGroups.length) errors.push("Enable at least one organizer option group");
    enabledGroups.forEach(group => {
      if (!group.label) errors.push("Add a label for every enabled option group");
      const enabledOptions = group.options?.filter(choice => choice.enabled) || [];
      if (group.options && !enabledOptions.length) errors.push(`${group.label || "An option group"} needs at least one available choice`);
      if (group.type === "multi" && group.required && group.min > enabledOptions.length) errors.push(`${group.label || "A multiple-choice group"} needs at least ${group.min} available choices`);
    });
  }
  if (draft.sellingMode === "hybrid" && !draft.customRequestsAllowed) errors.push("Enable custom requests for the configurable + custom quote model");
  return errors;
}

function publishedServiceFromDraft(draft) {
  const existing = vendorServices.find(service => service.id === draft.sourceId && service.vendor === activeRole()?.organization);
  const id = existing?.id || `vendor-${draft.serviceType}-${Date.now()}`;
  const organization = activeRole().organization;
  const invoicePrefix = organization.split(/\s+/).map(word => word[0]).join("").slice(0, 3).toUpperCase() || "VEN";
  const common = {
    id,
    serviceType: draft.serviceType,
    category: draft.serviceType === "cake" ? "Food & cake" : ["magic", "face-painting", "photo-booth"].includes(draft.serviceType) ? "Entertainment" : serviceCategoryLabels[draft.serviceType],
    name: draft.name,
    vendor: organization,
    invoicePrefix,
    pricing: { type: draft.pricingType, amount: draft.amount, ...(draft.minimum ? { minimum: draft.minimum } : {}) },
    rating: existing?.rating || 0,
    reviewCount: existing?.reviewCount || 0,
    description: draft.description,
    inclusions: draft.inclusions.split("\n").map(line => line.trim()).filter(Boolean),
    active: true,
    busy: existing?.busy || [],
    venueIds: [...draft.venueIds],
    minGuests: draft.minGuests,
    maxGuests: draft.maxGuests,
    minLeadDays: draft.minLeadDays,
    bookingMode: draft.sellingMode,
    customRequestsAllowed: draft.customRequestsAllowed,
    optionGroups: cloneOptionGroups(draft.optionGroups),
    catalogVersion: (existing?.catalogVersion || 0) + 1,
    catalogPublishedAt: new Date().toISOString(),
    image: draft.image ? { ...draft.image } : null,
    imagePreviewUrl: vendorOfferingEditor.image?.previewUrl || (draft.image ? existing?.imagePreviewUrl || null : null),
    taxProfile: existing?.taxProfile || { id: `TAX-${invoicePrefix}-CA`, label: `GST · ${organization} sample profile (5%)`, rate: 0.05 }
  };
  if (draft.serviceType === "catering") Object.assign(common, {
    cuisines: existing?.cuisines || ["Canadian", "International"],
    menuStyles: existing?.menuStyles || ["Classic comfort", "Vegetarian-forward"],
    dietary: existing?.dietary || ["Vegetarian", "Vegan", "Gluten-aware"],
    allergyReview: existing?.allergyReview || ["nut", "gluten", "dairy"],
    servingStyles: existing?.servingStyles || ["Buffet", "Drop-off"],
    allergenNote: existing?.allergenNote || "Allergy requests require written vendor confirmation; shared-kitchen cross-contact may remain possible.",
    deliveryWindow: existing?.deliveryWindow || "60–90 minutes before service"
  });
  return common;
}

function vendorOfferingImageMarkup(draft) {
  const image = vendorOfferingEditor.image;
  const metadata = image?.metadata || draft.image;
  return `<section class="offering-upload" aria-labelledby="offering-image-title"><div><span class="vendor-category">Offering media</span><h3 id="offering-image-title">Cover image</h3><p>One JPG, PNG, or WebP image up to ${MAX_IMAGE_LABEL}. A clear landscape image helps organizers understand the package.</p></div>${image?.previewUrl ? `<div class="upload-preview offering-image-preview"><img src="${image.previewUrl}" alt="Offering cover preview"><div><strong>${escapeHtml(metadata.name)}</strong><span>${(metadata.size / 1024 / 1024).toFixed(2)} MB · ${escapeHtml(metadata.type)}</span><span class="upload-actions"><label class="text-button" for="offering-cover-image">Replace</label><button class="text-button" type="button" id="remove-offering-image">Remove image</button></span></div></div>` : metadata ? `<div class="stored-image-note"><strong>Saved image metadata</strong><span>${escapeHtml(metadata.name)} · ${(metadata.size / 1024 / 1024).toFixed(2)} MB</span><label class="text-button" for="offering-cover-image">Choose replacement</label></div>` : `<label class="upload-drop offering-drop" for="offering-cover-image"><strong>Choose cover image</strong><span>JPG, PNG, or WebP · maximum ${MAX_IMAGE_LABEL}</span></label>`}<input class="visually-hidden" id="offering-cover-image" type="file" accept="image/jpeg,image/png,image/webp" aria-describedby="offering-upload-help offering-upload-error"><small id="offering-upload-help">Prototype: previewed locally only. Production repeats MIME validation, scanning, metadata removal, and safe re-encoding on the server.</small><div class="upload-error" id="offering-upload-error" tabindex="-1" role="alert" ${vendorOfferingEditor.imageError ? "" : "hidden"}>${escapeHtml(vendorOfferingEditor.imageError)}</div></section>`;
}

function vendorOptionGroupEditor(draft) {
  if (draft.sellingMode === "fixed") return `<section class="builder-option-editor"><div class="builder-section-head"><div><span class="vendor-category">Organizer configuration</span><h3>Pre-made package</h3><p>The organizer receives the published scope at one price; no choices are required.</p></div><span class="mini-status">No option groups</span></div></section>`;
  if (draft.sellingMode === "quote") return `<section class="builder-option-editor"><div class="builder-section-head"><div><span class="vendor-category">Organizer configuration</span><h3>Custom quote brief</h3><p>The organizer describes the requested scope. Payment stays blocked until the vendor returns an itemized quote.</p></div><span class="mini-status pending">Quote required</span></div></section>`;
  const priceTypeLabels = { flat: "per booking", per_person: "per guest", hourly: "per hour", per_unit: "per unit" };
  const groups = cloneOptionGroups(draft.optionGroups);
  const cards = groups.map(group => {
    const visibleChoices = group.options?.filter(choice => choice.bookingMode !== "quote" || draft.sellingMode === "hybrid");
    const options = visibleChoices?.map(choice => `<div class="builder-option-row"><label class="builder-available"><input type="checkbox" name="optionEnabled:${group.id}:${choice.id}" value="yes" ${choice.enabled !== false ? "checked" : ""}> <span>Available</span></label><label><span>Choice shown to organizer</span><input name="optionLabel:${group.id}:${choice.id}" value="${escapeHtml(choice.label)}" required></label>${choice.bookingMode === "quote" ? `<div class="builder-quote-choice"><strong>Custom quote</strong><small>${choice.requiresImage ? "Private reference image required" : "Vendor prices after review"}</small></div>` : `<label><span>Price adjustment</span><input name="optionPrice:${group.id}:${choice.id}" type="number" min="0" step="0.01" value="${Number(choice.price || 0)}"></label><label><span>Adjustment basis</span><select name="optionPriceType:${group.id}:${choice.id}">${Object.entries(priceTypeLabels).map(([value, label]) => `<option value="${value}" ${choice.priceType === value ? "selected" : ""}>${label}</option>`).join("")}</select></label>`}</div>`).join("") || `<p class="builder-entry-note">The organizer enters ${group.type === "time" ? "a preferred time" : group.type === "textarea" ? "details in a larger text field" : "text"}. This field has no automatic price adjustment.</p>`;
    const multiRules = group.type === "multi" ? `<label><span>Minimum choices</span><input name="groupMin:${group.id}" type="number" min="0" max="${group.options?.length || 0}" value="${Number(group.min || 0)}"></label><label><span>Maximum choices</span><input name="groupMax:${group.id}" type="number" min="1" max="${group.options?.length || 1}" value="${Number(group.max || group.options?.length || 1)}"></label>` : "";
    const typeLabel = group.type === "single" ? "Choose one" : group.type === "multi" ? "Choose several" : group.type === "time" ? "Time" : group.type === "textarea" ? "Long answer" : "Short answer";
    return `<article class="builder-option-group ${group.enabled === false ? "disabled" : ""}"><div class="builder-option-title"><label><input type="checkbox" name="groupEnabled:${group.id}" value="yes" ${group.enabled !== false ? "checked" : ""}> <span><strong>${escapeHtml(group.label)}</strong><small>${typeLabel}</small></span></label><code>${escapeHtml(group.id)}</code></div><div class="builder-group-settings"><label><span>Organizer-facing group label</span><input name="groupLabel:${group.id}" value="${escapeHtml(group.label)}" required></label><label class="builder-required"><input type="checkbox" name="groupRequired:${group.id}" value="yes" ${group.required ? "checked" : ""}> <span>Required before checkout</span></label>${multiRules}</div><div class="builder-option-rows">${options}</div></article>`;
  }).join("");
  return `<section class="builder-option-editor" aria-labelledby="option-editor-title"><div class="builder-section-head"><div><span class="vendor-category">Organizer configuration</span><h3 id="option-editor-title">Published choices and price adjustments</h3><p>Enable only the groups this package supports. Rename choices and set each automatic price adjustment; the organizer sees this exact structure after selecting the package.</p></div><span class="mini-status">${groups.filter(group => group.enabled !== false).length} enabled</span></div><div class="builder-option-groups">${cards}</div></section>`;
}

function cataloguePriceLabel(pricing) {
  const suffix = pricing.type === "per_person" ? " / guest" : pricing.type === "hourly" ? " / hour" : pricing.type === "per_unit" ? " / unit" : "";
  const minimum = pricing.minimum ? ` · ${money(pricing.minimum)} minimum` : "";
  return `${money(pricing.amount)}${suffix}${minimum}`;
}

function vendorOfferingsPage() {
  const role = activeRole();
  const draft = ensureVendorOfferingEditor();
  const published = managedVendorOfferings();
  const categoryChoices = offeringChoiceTemplates[draft.serviceType] || [];
  const catalogueCards = [...published.map(service => ({ id: service.id, name: service.name, serviceType: service.serviceType, priceLabel: cataloguePriceLabel(service.pricing), status: "Published", mode: service.bookingMode || "configurable" })), ...vendorOfferingDrafts.filter(item => !published.some(service => service.id === item.id)).map(item => ({ id: item.id, name: item.name || "Untitled offering", serviceType: item.serviceType, priceLabel: cataloguePriceLabel({ type: item.pricingType, amount: Number(item.amount || 0), minimum: Number(item.minimum || 0) }), status: "Draft", mode: item.sellingMode }))];
  const catalog = catalogueCards.map(item => `<button type="button" class="managed-offering-card ${vendorOfferingEditor.editingId === item.id ? "selected" : ""}" data-edit-offering="${item.id}"><span><span class="vendor-category">${serviceCategoryLabels[item.serviceType] || item.serviceType}</span><strong>${escapeHtml(item.name)}</strong><small>${item.mode === "fixed" ? "Pre-made package" : item.mode === "quote" ? "Custom quote" : item.mode === "hybrid" ? "Configurable + custom quote" : "Configurable package"}</small></span><span><b>${item.priceLabel}</b><em>${item.status}</em></span></button>`).join("");
  const pricingUnit = draft.pricingType === "per_person" ? "per guest" : draft.pricingType === "hourly" ? "per hour" : draft.pricingType === "per_unit" ? "per unit" : "package";
  const content = `<header class="dash-head"><div><span class="eyebrow">Independent vendor portal · Offering catalogue</span><h1>Packages, choices, and pricing</h1><p>Publish pre-made packages, configurable offerings, or custom-quote services. Organizers see only published versions.</p></div><button class="button button-dark" type="button" id="new-vendor-offering">+ New offering</button></header>${roleContextNotice()}<div class="metric-grid"><div class="metric"><span>Published</span><strong>${published.length}</strong><em>Live in marketplace</em></div><div class="metric"><span>Drafts</span><strong>${vendorOfferingDrafts.length}</strong><em>Private to vendor admins</em></div><div class="metric"><span>Image limit</span><strong>5 MB</strong><em>JPG, PNG, WebP</em></div><div class="metric"><span>Custom requests</span><strong>${published.filter(item => item.customRequestsAllowed).length}</strong><em>Quote-controlled</em></div></div><div class="offering-workspace"><aside class="dash-card offering-catalog"><div class="card-heading-row"><div><h2>Your offerings</h2><p>Published items can be selected by organizers. Drafts remain private.</p></div></div><div class="managed-offering-list">${catalog || '<p class="empty-guidance">No offerings yet.</p>'}</div><div class="policy-callout"><strong>Versioned publishing</strong><span>Confirmed orders keep their accepted package, options, prices, terms, and image reference even after you publish a later version.</span></div></aside><section class="dash-card offering-builder"><div class="builder-title"><div><span class="vendor-category">${draft.id ? "Edit offering" : "New offering"}</span><h2>${draft.id ? escapeHtml(draft.name || "Untitled offering") : "Create an offering"}</h2><p>${vendorOfferingEditor.status === "published" ? "Editing a published package creates the next catalogue version when published." : "This draft is not visible to organizers."}</p></div><span class="status-pill ${vendorOfferingEditor.status === "published" ? "confirmed" : ""}">${vendorOfferingEditor.status === "published" ? "Published" : "Draft"}</span></div><form id="vendor-offering-form"><div class="offering-form-grid"><label class="config-field"><span>Offering title *</span><input name="name" value="${escapeHtml(draft.name)}" placeholder="Example: Family celebration buffet" required></label><label class="config-field"><span>Service category *</span><select name="serviceType" id="offering-service-type">${Object.entries(serviceCategoryLabels).map(([id, label]) => `<option value="${id}" ${draft.serviceType === id ? "selected" : ""}>${label}</option>`).join("")}</select></label><label class="config-field config-field-wide"><span>Description *</span><textarea name="description" rows="3" placeholder="Describe the package scope, style, and ideal event" required>${escapeHtml(draft.description)}</textarea></label><label class="config-field"><span>Selling model *</span><select name="sellingMode" id="offering-selling-mode"><option value="fixed" ${draft.sellingMode === "fixed" ? "selected" : ""}>Pre-made fixed package</option><option value="configurable" ${draft.sellingMode === "configurable" ? "selected" : ""}>Configurable package</option><option value="hybrid" ${draft.sellingMode === "hybrid" ? "selected" : ""}>Configurable + custom quote</option><option value="quote" ${draft.sellingMode === "quote" ? "selected" : ""}>Custom quote only</option></select></label><label class="config-field"><span>Pricing method *</span><select name="pricingType" id="offering-pricing-type"><option value="flat" ${draft.pricingType === "flat" ? "selected" : ""}>Flat package</option><option value="per_person" ${draft.pricingType === "per_person" ? "selected" : ""}>Per guest</option><option value="hourly" ${draft.pricingType === "hourly" ? "selected" : ""}>Per hour</option><option value="per_unit" ${draft.pricingType === "per_unit" ? "selected" : ""}>Per unit</option></select></label><label class="config-field"><span>Base price (${pricingUnit}) *</span><input name="amount" type="number" min="0" step="0.01" value="${draft.amount}" required></label><label class="config-field"><span>Minimum order</span><input name="minimum" type="number" min="0" step="0.01" value="${draft.minimum}"></label><label class="config-field config-field-wide"><span>What the package includes *</span><textarea name="inclusions" rows="5" placeholder="One included item per line" required>${escapeHtml(draft.inclusions)}</textarea></label></div><fieldset class="builder-choice-fieldset"><legend>Category capability checklist</legend><p>Use these prompts while designing the package. Configure the organizer-facing fields and price adjustments in the structured editor below.</p><div class="builder-choice-grid builder-capability-tags">${categoryChoices.map(label => `<span>${escapeHtml(label)}</span>`).join("")}</div><label class="custom-request-toggle"><input type="checkbox" name="customRequestsAllowed" value="yes" ${draft.customRequestsAllowed ? "checked" : ""} ${draft.sellingMode === "hybrid" ? "" : "disabled"}> <span><strong>Accept custom requests and private reference images</strong><small>${draft.sellingMode === "hybrid" ? "Custom work changes the organizer flow to Quote required; upload alone never confirms the request." : "Choose Configurable + custom quote to enable this path."}</small></span></label></fieldset>${vendorOptionGroupEditor(draft)}${vendorOfferingImageMarkup(draft)}<fieldset class="builder-choice-fieldset"><legend>Availability and booking rules</legend><div class="offering-form-grid"><label class="config-field"><span>Minimum guests / units *</span><input name="minGuests" type="number" min="1" value="${draft.minGuests}" required></label><label class="config-field"><span>Maximum guests / units *</span><input name="maxGuests" type="number" min="1" value="${draft.maxGuests}" required></label><label class="config-field"><span>Minimum lead time (days) *</span><input name="minLeadDays" type="number" min="0" value="${draft.minLeadDays}" required></label><div class="config-field config-field-wide"><span>Venues served *</span><div class="builder-choice-grid">${spaces.map(space => `<label><input type="checkbox" name="venueIds" value="${space.id}" ${draft.venueIds.includes(space.id) ? "checked" : ""}> <span>${space.name}</span></label>`).join("")}</div></div></div></fieldset><div class="offering-publish-check"><strong>Before publishing</strong><span>Verify scope, option prices, service area, taxes, capacity, lead time, cancellation terms, and image rights. Production publishing creates a new immutable catalogue version.</span></div><div class="booking-actions"><button class="button button-light" type="submit" value="draft" name="offeringAction">Save draft</button><button class="button button-green" type="submit" value="publish" name="offeringAction">Publish offering</button></div>${vendorOfferingEditor.savedAt ? `<p class="saved-at" role="status">Last saved in this prototype at ${vendorOfferingEditor.savedAt}.</p>` : ""}</form></section></div>`;
  const openCategoryNotice = `<div class="category-access-notice" role="note"><strong>Choose any supported category</strong><span>Vendor admins can create and publish separate offerings in any category shown in the service-category list. No category approval is required in this prototype; selecting a category loads its organizer-choice template.</span></div>`;
  return dashboardShell("vendor-offerings", content.replace('<div class="metric-grid">', `${openCategoryNotice}<div class="metric-grid">`));
}

function vendorDashboardPage() {
  const role = activeRole();
  const financeAccess = hasPermission("vendor.finance") || hasPermission("vendor.documents");
  const fulfilmentAccess = hasPermission("vendor.fulfilment");
  const featuredService = vendorServices.find(item => item.id === "magic-wonderspark");
  const featuredReviews = vendorReviewSummary(featuredService);
  const latestReview = publicReviewsFor("vendor-service", featuredService.id)[0];
  const financePanel = financeAccess ? `<h3>Completed-order documents</h3><button class="document-link" type="button" data-route="vendor-invoice"><span><strong>${financeDemo.vendorInvoice}</strong><small>Vendor supplier invoice and payment allocation</small></span><b>→</b></button><button class="document-link" type="button" data-route="vendor-payout"><span><strong>PST-WSE-1033</strong><small>Payout statement + Gather fee invoice</small></span><b>→</b></button>` : `<span class="read-only-label">Fulfilment access</span><h3>Financial details are restricted</h3><p>This role can complete assigned orders but cannot see commission invoices, calculated payouts, bank destinations, or vendor tax details.</p><div class="policy-callout"><strong>Why?</strong><span>Operational staff receive only the information needed to deliver the service.</span></div>`;
  const content = `<header class="dash-head"><div><span class="eyebrow">Independent vendor portal · ${role.shortRole}</span><h1>Good morning, ${role.name.split(" ")[0]}.</h1><p>${role.organization} · entertainment services</p></div>${hasPermission("vendor.settings") ? '<button class="button button-dark" type="button" data-route="vendor-offerings">Manage offerings</button>' : `<div class="avatar">${role.initials}</div>`}</header>${roleContextNotice()}<div class="metric-grid"><div class="metric"><span>Upcoming orders</span><strong>4</strong><em>Next 30 days</em></div><div class="metric"><span>Fulfilment due</span><strong>1</strong><em>Confirm after service</em></div><div class="metric"><span>${financeAccess ? "Calculated payout" : "Orders this month"}</span><strong>${financeAccess ? money(financeDemo.vendor.net) : "6"}</strong><em>${financeAccess ? "Transfer not simulated" : "Assigned to team"}</em></div><div class="metric"><span>Verified rating</span><strong>${featuredReviews.rating?.toFixed(1) || "New"}</strong><em>${featuredReviews.count} completed order${featuredReviews.count === 1 ? "" : "s"}</em></div></div><div class="settlement-layout"><section class="dash-card"><div class="card-heading-row"><div><h3>Service orders</h3><p>Vendor fulfilment is tracked separately from venue closeout.</p></div></div><div class="vendor-order"><div><span class="supplier-mark vendor">W</span><div><strong>Family magic show</strong><small>${financeDemo.bookingId} · ${financeDemo.eventDate} · Ridgeview Community Hall</small></div></div><span class="mini-status">Fulfilled</span></div><div class="vendor-order"><div><span class="supplier-mark vendor">W</span><div><strong>Family magic show</strong><small>BKG-1048 · October 17, 2026 · booking confirmed</small></div></div>${fulfilmentAccess ? '<button class="compact-button" data-task="Fulfilment checklist opened">Open checklist</button>' : '<span class="mini-status pending">Upcoming</span>'}</div><div class="policy-callout"><strong>Independent settlement</strong><span>The completed order can become payout-ready even if the venue’s separate security-deposit case is still open. Approval and transfer keep their own statuses.</span></div>${latestReview ? `<div class="vendor-review-preview"><div><strong>Latest verified organizer review</strong><span>Public feedback is read-only here; suppliers do not approve or remove reviews.</span></div>${publicReviewCard(latestReview, true)}</div>` : ""}</section><aside class="dash-card">${hasPermission("vendor.settings") ? '<h3>Offering catalogue</h3><p>Create fixed packages, configurable choices, custom-quote services, prices, availability, and validated images.</p><button class="button button-green button-wide" type="button" data-route="vendor-offerings">Open offerings</button>' : ""}${financePanel}<button class="button button-light button-wide" type="button" data-route="sign-in">Compare another demo role</button></aside></div>`;
  return dashboardShell("vendor-dashboard", content.replace(" · entertainment services</p>", " · event services</p>"));
}

function hostPage() {
  return `<div class="host-page"><section class="host-hero"><div class="host-copy"><span class="eyebrow">For space operators · starting with community associations</span><h1>Make every available space easier to rent.</h1><p>List halls, meeting rooms, kitchens, rinks, courts, studios, and other bookable spaces—each with live availability, included amenities, venue add-ons, independent vendor services, policies, and an optional security deposit.</p><button class="button button-dark" data-route="sign-in">Explore operator demo roles →</button></div><div class="host-visual"><div class="dashboard-preview"><div class="preview-top"><strong>Weekly overview</strong><span>Demo</span></div><div class="preview-boxes"><div class="preview-box"></div><div class="preview-box"></div><div class="preview-box"></div></div><div class="preview-line short"></div><div class="preview-row"></div><div class="preview-row"></div><div class="preview-row"></div></div></div></section><section class="host-features"><div class="section-heading"><div><span class="eyebrow">A focused first market</span><h2>Built first for association-managed spaces.</h2></div><p>The platform can support any short-term rentable space; the initial pitch helps Calgary community associations publish availability and run booking, fulfilment, deposit, and payout workflows in one place.</p></div><div class="card-grid"><div class="feature-card"><div class="feature-icon">▱</div><h3>List every rentable space</h3><p>Give each hall, room, rink, court, or kitchen its own schedule, capacity, included amenities, and venue-owned add-ons.</p></div><div class="feature-card"><div class="feature-icon">◷</div><h3>Publish real availability</h3><p>Use Gather as the source of truth for operating hours, bookable hours, blackouts, and buffers. Existing systems can be updated manually in the pilot and connected later where a dependable API is available.</p></div><div class="feature-card"><div class="feature-icon">✦</div><h3>Add independent vendors</h3><p>Offer catering, decoration, entertainment, cakes, photography, staffing, rentals, and other event services with separate supplier records.</p></div><div class="feature-card"><div class="feature-icon">$</div><h3>Settle every party clearly</h3><p>Close customer accounts, deposits, association payouts, vendor commissions, and vendor payouts with linked documents.</p></div></div></section><section class="host-commercial"><div><span class="eyebrow">Configurable pilot terms</span><h2>A low-friction launch for associations.</h2><p>The current prototype defaults to no subscription fee and no venue commission. Standard payment-processing costs remain separate and transparent.</p></div><div class="commercial-cards"><div><strong>${money(0)}</strong><span>monthly subscription<br><small>current default</small></span></div><div><strong>0.00%</strong><span>venue commission<br><small>current default</small></span></div><div><strong>Actual cost</strong><span>payment processing<br><small>deducted once by default</small></span></div></div><p>All values are configurable commercial terms and may change for future bookings. Existing bookings retain their saved policy version.</p><button class="button button-dark" data-route="sign-in">Explore all demo accounts →</button></section></div>`;
}

function setActiveRole(roleId) {
  const nextRole = demoRoles.find(role => role.id === roleId);
  if (!nextRole) return;
  if (activeRoleId !== nextRole.id) {
    const preserveSignedOutCheckout = !activeRoleId && nextRole.accountType === "customer" && Boolean(confirmedBookingSnapshot);
    if (!preserveSignedOutCheckout) confirmedBookingSnapshot = null;
    resetEventWorkspaceState();
    reviewEditingTarget = null;
    endSupportSession("Ended automatically when the demo role changed");
  }
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
  endSupportSession("Ended automatically when the demo session signed out");
  activeRoleId = null;
  confirmedBookingSnapshot = null;
  resetEventWorkspaceState();
  reviewEditingTarget = null;
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
  const createAccountButton = document.querySelector("#create-account-button");
  const mobileSignIn = document.querySelector("#mobile-signin-nav");
  const workspaceNav = document.querySelector("#workspace-nav");
  const footerWorkspace = document.querySelector("#footer-workspace");
  const sessionContext = document.querySelector("#session-context");
  if (!role) {
    sessionButton.textContent = "Sign in";
    sessionButton.dataset.route = "login";
    signOutButton.hidden = true;
    createAccountButton.hidden = false;
    mobileSignIn.hidden = false;
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
  createAccountButton.hidden = true;
  mobileSignIn.hidden = true;
  workspaceNav.textContent = "My demo workspace";
  workspaceNav.dataset.route = role.landing;
  footerWorkspace.textContent = "My demo workspace";
  footerWorkspace.dataset.route = role.landing;
  sessionContext.hidden = false;
  const supportBanner = role.id === "platform-admin" && supportSession ? `<div class="support-access-banner" role="status"><div><strong>Read-only support access authorized</strong><span>${supportSession.target} · ${supportSession.caseId} · expires ${formatSupportTimestamp(supportSession.expiresAt)}</span></div><button type="button" data-end-global-support>End access</button></div>` : "";
  sessionContext.innerHTML = `<div class="session-context-inner"><div class="session-identity"><span class="session-dot" aria-hidden="true">${context.icon}</span><div><strong>Viewing as ${role.name}</strong><span>${role.organization} · ${role.role}</span></div></div><div class="session-actions"><button type="button" data-session-route="role-home">Permissions</button><button type="button" data-session-route="sign-in">Switch role</button><button type="button" data-session-signout>Sign out</button></div></div>${supportBanner}`;
  sessionContext.querySelectorAll("[data-session-route]").forEach(button => button.addEventListener("click", () => navigate(button.dataset.sessionRoute)));
  sessionContext.querySelector("[data-session-signout]")?.addEventListener("click", signOut);
  sessionContext.querySelector("[data-end-global-support]")?.addEventListener("click", () => {
    if (!endSupportSession("Ended by the platform administrator")) return;
    render(location.hash.slice(1) || "platform-dashboard");
    showToast("Support access ended and was added to the demo audit trail.");
  });
}

function render(route = location.hash.slice(1) || "home") {
  expireSupportSessionIfNeeded();
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
    "vendor-offerings": vendorOfferingsPage,
    "customer-dashboard": customerDashboardPage,
    "customer-event": customerEventPage,
    "customer-reviews": customerReviewsPage,
    "customer-documents": customerDocumentsPage,
    "customer-deposit": customerDepositPage,
    "platform-dashboard": platformDashboardPage,
    "venue-terms": venueTermsPage,
    "role-home": roleHomePage,
    login: loginPage,
    "create-account": createAccountPage,
    "signup-organizer": () => onboardingPage("organizer"),
    "signup-operator": () => onboardingPage("operator"),
    "signup-vendor": () => onboardingPage("vendor"),
    "sign-in": signInPage,
    host: hostPage
  };
  const titles = {
    home: "Book spaces in Calgary",
    explore: "Available spaces",
    venue: currentSpace().name,
    booking: eventCompatibility().status === "allowed" ? "Instant Book checkout" : "Booking eligibility",
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
    "vendor-offerings": "Vendor offerings",
    "customer-dashboard": "My bookings",
    "customer-event": "My Event",
    "customer-reviews": "Review your event",
    "customer-documents": "Customer booking documents",
    "customer-deposit": "Customer deposit response",
    "platform-dashboard": "Platform console",
    "venue-terms": "Venue commercial terms",
    "role-home": "Role and permissions",
    login: "Sign in",
    "create-account": "Create account",
    "signup-organizer": "Organizer signup",
    "signup-operator": "Space-operator onboarding",
    "signup-vendor": "Vendor onboarding",
    "sign-in": "Choose a demo account",
    host: "For space operators"
  };
  const resolvedRoute = routes[route] ? route : "home";
  const permitted = canAccessRoute(resolvedRoute);
  let pageMarkup = permitted ? routes[resolvedRoute]() : accessRestrictedPage(resolvedRoute);
  if (permitted && resolvedRoute === "host") pageMarkup = pageMarkup.replace('<button class="button button-dark" data-route="sign-in">Explore operator demo roles →</button>', '<button class="button button-dark" data-route="signup-operator">Start operator setup →</button>');
  app.innerHTML = pageMarkup;
  document.title = `${permitted ? titles[resolvedRoute] : "Access restricted"} — Gather`;
  updateSessionChrome();
  window.scrollTo({ top: 0 });
  bindPageEvents();
  requestAnimationFrame(() => {
    const heading = resolvedRoute === "booking" && bookingStep === 2
      ? app.querySelector("#addon-stage-title")
      : app.querySelector("h1");
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

function captureOnboardingForm(type, step, form) {
  if (!form) return;
  const values = new FormData(form);
  const read = name => String(values.get(name) || "").trim();
  const state = onboardingStates[type];
  if (step === 1) {
    state.identity = { ...state.identity, firstName: read("firstName"), lastName: read("lastName"), email: read("email"), phone: read("phone"), consent: values.has("consent") };
    return;
  }
  if (type === "organizer") {
    if (step === 2) state.identity.verificationCode = read("verificationCode");
    if (step === 3) state.organizer = { claimBooking: read("claimBooking") || "no", bookingReference: read("bookingReference").toUpperCase() };
    return;
  }
  if (type === "operator") {
    if (step === 2) Object.assign(state.operator, { legalName: read("legalName"), publicName: read("publicName"), organizationType: read("organizationType"), organizationEmail: read("organizationEmail"), address: read("address"), city: read("city"), province: read("province"), postalCode: read("postalCode"), website: read("website") });
    if (step === 3) Object.assign(state.operator, { siteName: read("siteName"), spaceName: read("spaceName"), spaceType: read("spaceType"), capacity: read("capacity"), description: read("description") });
    if (step === 4) Object.assign(state.operator, { weekdays: values.getAll("weekdays").map(String), openTime: read("openTime"), closeTime: read("closeTime"), closesNextDay: values.has("closesNextDay"), hourlyRate: read("hourlyRate"), depositAmount: read("depositAmount"), minimumNotice: read("minimumNotice"), inviteEmail: read("inviteEmail"), inviteRole: read("inviteRole"), calendarMode: read("calendarMode"), payoutAcknowledged: values.has("payoutAcknowledged") });
    return;
  }
  if (step === 2) Object.assign(state.vendor, { legalName: read("legalName"), publicName: read("publicName"), businessEmail: read("businessEmail"), phone: read("phone"), serviceArea: read("serviceArea"), travelRadius: read("travelRadius"), city: read("city"), website: read("website") });
  if (step === 3) {
    state.vendor.categories = values.getAll("categories").map(String);
    if (!state.vendor.categories.includes(state.vendor.primaryCategory)) state.vendor.primaryCategory = state.vendor.categories[0] || "";
  }
  if (step === 4) Object.assign(state.vendor, { taxStatus: read("taxStatus"), invoicePrefix: read("invoicePrefix").toUpperCase(), primaryCategory: read("primaryCategory"), firstOfferingName: read("firstOfferingName"), cancellationSummary: read("cancellationSummary"), inviteEmail: read("inviteEmail"), inviteRole: read("inviteRole"), payoutAcknowledged: values.has("payoutAcknowledged") });
}

function onboardingFormIsValid(type, step, form) {
  form.querySelectorAll("input,select,textarea").forEach(control => { control.setCustomValidity(""); control.removeAttribute("aria-invalid"); });
  form.querySelectorAll(".field-error").forEach(error => { error.hidden = true; });
  const emptyRequired = [...form.querySelectorAll("input[required]:not([type='checkbox']):not([type='radio']),textarea[required]")].find(control => !control.value.trim());
  if (emptyRequired) {
    emptyRequired.setCustomValidity("Complete this required field.");
    emptyRequired.setAttribute("aria-invalid", "true");
  }
  if (!form.reportValidity()) return false;
  if (type === "organizer" && step === 2) {
    const code = form.elements.verificationCode;
    const error = form.querySelector("#verification-error");
    if (code.value !== "246810") {
      code.setAttribute("aria-invalid", "true");
      error.hidden = false;
      code.focus();
      return false;
    }
  }
  if (type === "organizer" && step === 3 && new FormData(form).get("claimBooking") === "yes") {
    const reference = form.elements.bookingReference;
    const expectedReference = confirmedBookingSnapshot?.bookingId || "BKG-1048";
    const expectedEmail = confirmedBookingSnapshot?.booking.email || bookingData.email;
    if (onboardingStates.organizer.identity.email.trim().toLowerCase() !== expectedEmail.trim().toLowerCase()) {
      form.querySelector("#booking-email-error").hidden = false;
      form.querySelector("[data-onboarding-back]").focus();
      return false;
    }
    if (reference.value.trim().toUpperCase() !== expectedReference.toUpperCase()) {
      reference.setAttribute("aria-invalid", "true");
      form.querySelector("#booking-reference-error").hidden = false;
      reference.focus();
      return false;
    }
  }
  if (type === "operator" && step === 4) {
    const days = [...form.querySelectorAll('[name="weekdays"]:checked')];
    const dayError = form.querySelector("#weekday-error");
    if (!days.length) {
      dayError.hidden = false;
      const firstDay = form.querySelector('[name="weekdays"]');
      firstDay.setAttribute("aria-invalid", "true");
      firstDay.focus();
      return false;
    }
    const open = form.elements.openTime;
    const close = form.elements.closeTime;
    const closesNextDay = form.elements.closesNextDay.checked;
    if (close.value <= open.value && !closesNextDay) {
      const timeError = form.querySelector("#time-error");
      timeError.hidden = false;
      close.setAttribute("aria-invalid", "true");
      close.focus();
      return false;
    }
  }
  if (type === "vendor" && step === 3) {
    const categories = [...form.querySelectorAll('[name="categories"]:checked')];
    if (!categories.length) {
      const error = form.querySelector("#category-selection-error");
      error.hidden = false;
      const first = form.querySelector('[name="categories"]');
      first.setAttribute("aria-invalid", "true");
      first.focus();
      return false;
    }
  }
  return true;
}

function navigate(route) {
  closeMobileMenu();
  if (location.hash === `#${route}`) render(route);
  else location.hash = route;
}

function bindPageEvents() {
  app.querySelectorAll(".admin-table-head > *").forEach(cell => cell.setAttribute("role", "columnheader"));
  app.querySelectorAll('.admin-table > [role="row"]:not(.admin-table-head) > *').forEach(cell => cell.setAttribute("role", "cell"));
  app.querySelectorAll("[data-route]").forEach(el => el.addEventListener("click", () => navigate(el.dataset.route)));
  app.querySelectorAll("[data-demo-role]").forEach(button => button.addEventListener("click", () => setActiveRole(button.dataset.demoRole)));
  app.querySelectorAll("[data-sign-out]").forEach(button => button.addEventListener("click", signOut));
  app.querySelector("#prototype-signin-form")?.addEventListener("submit", event => {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    simulatedSignInEmail = String(new FormData(event.currentTarget).get("email") || "").trim();
    render("login");
    showToast("Prototype sign-in link simulated. No email was sent.");
  });
  app.querySelectorAll("[data-start-onboarding]").forEach(button => button.addEventListener("click", () => {
    const type = button.dataset.startOnboarding;
    const definition = onboardingDefinitions[type];
    if (!definition) return;
    let state = onboardingStates[type];
    if (button.dataset.claimBooking === "true") {
      state = newOnboardingState("organizer");
      onboardingStates.organizer = state;
      const contactParts = (confirmedBookingSnapshot?.booking.contact || bookingData.contact || "").trim().split(/\s+/);
      state.identity.firstName = contactParts.shift() || "";
      state.identity.lastName = contactParts.join(" ");
      state.identity.email = confirmedBookingSnapshot?.booking.email || bookingData.email || "";
      state.organizer.claimBooking = "yes";
      state.organizer.bookingReference = confirmedBookingSnapshot?.bookingId || state.organizer.bookingReference;
    }
    navigate(definition.route);
  }));
  app.querySelector("#onboarding-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const type = form.dataset.onboardingType;
    const step = Number(form.dataset.onboardingStep);
    if (!onboardingFormIsValid(type, step, form)) return;
    captureOnboardingForm(type, step, form);
    const state = onboardingStates[type];
    if (step === 1 && type !== "organizer") state.identity.emailVerified = true;
    if (type === "organizer" && step === 2) state.identity.emailVerified = true;
    const lastStep = onboardingDefinitions[type].steps.length;
    if (step >= lastStep) state.completed = true;
    else state.step = step + 1;
    render(onboardingDefinitions[type].route);
    showToast(state.completed ? `${onboardingDefinitions[type].label} onboarding demo completed. Nothing was submitted.` : `Step ${state.step} of ${lastStep}`);
  });
  const claimBookingControls = [...app.querySelectorAll('[name="claimBooking"]')];
  const syncClaimPanel = () => {
    if (!claimBookingControls.length) return;
    const shouldClaim = claimBookingControls.find(control => control.checked)?.value === "yes";
    const panel = app.querySelector(".claim-preview");
    const reference = panel?.querySelector('[name="bookingReference"]');
    if (panel) panel.hidden = !shouldClaim;
    if (reference) { reference.disabled = !shouldClaim; reference.required = shouldClaim; }
  };
  claimBookingControls.forEach(control => control.addEventListener("change", syncClaimPanel));
  syncClaimPanel();
  app.querySelector("[data-onboarding-back]")?.addEventListener("click", () => {
    const form = app.querySelector("#onboarding-form");
    const type = form?.dataset.onboardingType;
    if (!type) return;
    captureOnboardingForm(type, Number(form.dataset.onboardingStep), form);
    onboardingStates[type].step = Math.max(1, onboardingStates[type].step - 1);
    render(onboardingDefinitions[type].route);
  });
  app.querySelectorAll("[data-restart-onboarding]").forEach(button => button.addEventListener("click", () => {
    const type = button.dataset.restartOnboarding;
    onboardingStates[type] = newOnboardingState(type);
    render(onboardingDefinitions[type].route);
    showToast(`${onboardingDefinitions[type].label} onboarding demo restarted.`);
  }));
  app.querySelectorAll("[data-preview-role]").forEach(button => button.addEventListener("click", () => {
    const roleId = button.dataset.previewRole;
    const route = button.dataset.previewRoute;
    setActiveRole(roleId);
    requestAnimationFrame(() => navigate(route));
  }));
  app.querySelector("[data-open-first-offering]")?.addEventListener("click", () => {
    const state = onboardingStates.vendor;
    const serviceType = state.vendor.primaryCategory || state.vendor.categories[0] || "catering";
    const draft = blankOfferingDraft();
    draft.name = state.vendor.firstOfferingName || `New ${serviceCategoryLabels[serviceType]} offering`;
    draft.serviceType = serviceType;
    draft.optionGroups = vendorOptionGroupsTemplate(serviceType, true);
    draft.customRequestsAllowed = ["catering", "cake", "decor", "photo-booth"].includes(serviceType);
    vendorOfferingEditor = { editingId: null, status: "draft", image: null, imageError: "", savedAt: null, draft };
    setActiveRole("vendor-admin");
    requestAnimationFrame(() => navigate("vendor-offerings"));
  });
  const revokePreview = preview => {
    if (!preview?.previewUrl?.startsWith("blob:")) return;
    if (vendorServices.some(service => service.imagePreviewUrl === preview.previewUrl)) return;
    URL.revokeObjectURL(preview.previewUrl);
  };
  app.querySelector("#new-vendor-offering")?.addEventListener("click", () => {
    revokePreview(vendorOfferingEditor.image);
    vendorOfferingEditor = { editingId: null, status: "draft", image: null, imageError: "", savedAt: null, draft: blankOfferingDraft() };
    render("vendor-offerings");
    requestAnimationFrame(() => app.querySelector('[name="name"]')?.focus({ preventScroll: true }));
  });
  app.querySelectorAll("[data-edit-offering]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.editOffering;
    const published = managedVendorOfferings().find(service => service.id === id);
    const savedDraft = vendorOfferingDrafts.find(item => item.id === id);
    if (!published && !savedDraft) return;
    revokePreview(vendorOfferingEditor.image);
    vendorOfferingEditor = {
      editingId: id,
      status: published ? "published" : "draft",
      image: published?.imagePreviewUrl ? { file: null, metadata: published.image, previewUrl: published.imagePreviewUrl } : null,
      imageError: "",
      savedAt: null,
      draft: published ? offeringDraftFromService(published) : JSON.parse(JSON.stringify(savedDraft))
    };
    render("vendor-offerings");
  }));
  const offeringForm = app.querySelector("#vendor-offering-form");
  app.querySelector("#offering-service-type")?.addEventListener("change", event => {
    const draft = captureVendorOfferingDraft(offeringForm);
    draft.serviceType = event.currentTarget.value;
    draft.customRequestsAllowed = ["catering", "cake", "decor", "photo-booth"].includes(draft.serviceType);
    draft.optionGroups = vendorOptionGroupsTemplate(draft.serviceType, true);
    render("vendor-offerings");
  });
  app.querySelector("#offering-selling-mode")?.addEventListener("change", () => {
    captureVendorOfferingDraft(offeringForm);
    render("vendor-offerings");
  });
  app.querySelector("#offering-pricing-type")?.addEventListener("change", () => {
    captureVendorOfferingDraft(offeringForm);
    render("vendor-offerings");
  });
  app.querySelector("#offering-cover-image")?.addEventListener("change", event => {
    captureVendorOfferingDraft(offeringForm);
    const file = event.currentTarget.files?.[0];
    const error = validateImageUpload(file);
    if (error) {
      vendorOfferingEditor.imageError = error;
      event.currentTarget.value = "";
      render("vendor-offerings");
      requestAnimationFrame(() => app.querySelector("#offering-upload-error")?.focus({ preventScroll: true }));
      return;
    }
    revokePreview(vendorOfferingEditor.image);
    const metadata = { name: file.name, type: file.type, size: file.size, lastModified: file.lastModified };
    vendorOfferingEditor.image = { file, metadata, previewUrl: URL.createObjectURL(file) };
    vendorOfferingEditor.draft.image = metadata;
    vendorOfferingEditor.imageError = "";
    render("vendor-offerings");
    showToast("Image accepted for local preview. Nothing was uploaded to a server.");
  });
  app.querySelector("#remove-offering-image")?.addEventListener("click", () => {
    captureVendorOfferingDraft(offeringForm);
    revokePreview(vendorOfferingEditor.image);
    vendorOfferingEditor.image = null;
    vendorOfferingEditor.draft.image = null;
    vendorOfferingEditor.imageError = "";
    render("vendor-offerings");
    showToast("Offering image removed from this draft.");
  });
  offeringForm?.addEventListener("submit", event => {
    event.preventDefault();
    if (!hasPermission("vendor.settings")) { showToast("Only a vendor administrator can change offerings."); return; }
    const draft = captureVendorOfferingDraft(event.currentTarget);
    const errors = offeringValidationErrors(draft);
    if (errors.length) { showToast(errors.join(". ")); return; }
    const action = event.submitter?.value || "draft";
    if (action === "draft") {
      const draftId = draft.id?.startsWith("draft-") ? draft.id : `draft-${Date.now()}`;
      const record = { ...JSON.parse(JSON.stringify(draft)), id: draftId, sourceId: draft.sourceId || (draft.id && !draft.id.startsWith("draft-") ? draft.id : null) };
      const existingIndex = vendorOfferingDrafts.findIndex(item => item.id === draftId);
      if (existingIndex >= 0) vendorOfferingDrafts.splice(existingIndex, 1, record);
      else vendorOfferingDrafts.push(record);
      vendorOfferingEditor.draft = { ...record };
      vendorOfferingEditor.editingId = draftId;
      vendorOfferingEditor.status = "draft";
      vendorOfferingEditor.savedAt = new Date().toLocaleTimeString("en-CA", { hour: "numeric", minute: "2-digit" });
      render("vendor-offerings");
      showToast("Draft saved locally. It is not visible to organizers.");
      return;
    }
    const service = publishedServiceFromDraft(draft);
    const existingIndex = vendorServices.findIndex(item => item.id === service.id && item.vendor === activeRole().organization);
    const previousPreviewUrl = existingIndex >= 0 ? vendorServices[existingIndex].imagePreviewUrl : null;
    if (existingIndex >= 0) vendorServices.splice(existingIndex, 1, service);
    else vendorServices.push(service);
    if (previousPreviewUrl?.startsWith("blob:") && previousPreviewUrl !== service.imagePreviewUrl) URL.revokeObjectURL(previousPreviewUrl);
    vendorOfferingDrafts = vendorOfferingDrafts.filter(item => item.id !== draft.id && item.sourceId !== service.id);
    delete bookingData.vendorConfigurations[service.id];
    vendorOfferingEditor.editingId = service.id;
    vendorOfferingEditor.draft = offeringDraftFromService(service);
    vendorOfferingEditor.image = service.imagePreviewUrl ? { file: vendorOfferingEditor.image?.file || null, metadata: service.image, previewUrl: service.imagePreviewUrl } : null;
    vendorOfferingEditor.status = "published";
    vendorOfferingEditor.imageError = "";
    vendorOfferingEditor.savedAt = new Date().toLocaleTimeString("en-CA", { hour: "numeric", minute: "2-digit" });
    render("vendor-offerings");
    showToast("Offering published. Organizers can now find this package when it matches their booking.");
  });
  const focusEventSection = (sectionId, selector = "h2") => requestAnimationFrame(() => {
    const section = app.querySelector(`#${CSS.escape(sectionId)}`);
    const target = section?.querySelector(selector) || section;
    section?.scrollIntoView({ behavior: "smooth", block: "start" });
    target?.focus({ preventScroll: true });
  });
  app.querySelectorAll("[data-event-section]").forEach(button => button.addEventListener("click", () => {
    const threadTarget = button.dataset.eventThreadTarget;
    if (threadTarget) {
      eventWorkspaceState.selectedMessageThread = threadTarget;
      render("customer-event");
      focusEventSection(button.dataset.eventSection);
      return;
    }
    focusEventSection(button.dataset.eventSection);
  }));
  app.querySelectorAll("[data-event-message-thread]").forEach(button => button.addEventListener("click", () => {
    eventWorkspaceState.selectedMessageThread = button.dataset.eventMessageThread;
    render("customer-event");
    focusEventSection("event-messages", `[data-event-message-thread="${CSS.escape(eventWorkspaceState.selectedMessageThread)}"]`);
  }));
  app.querySelector("#event-message-body")?.addEventListener("input", event => {
    eventWorkspaceState.messageDrafts[eventWorkspaceState.selectedMessageThread] = event.currentTarget.value;
  });
  app.querySelector("#event-message-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.currentTarget;
    const threadId = String(new FormData(form).get("threadId") || "");
    const message = String(new FormData(form).get("message") || "").trim();
    const error = form.querySelector("#event-message-error");
    if (!message) {
      error.hidden = false;
      error.textContent = "Write a message before saving it to this demo thread.";
      error.focus();
      return;
    }
    eventWorkspaceState.messages.push({ id: `MSG-DEMO-${eventWorkspaceState.messages.length + 1}`, threadId, sender: activeRole()?.name || "Organizer", role: "Organizer", time: "Just now", body: message, delivery: "Saved in prototype · not sent" });
    eventWorkspaceState.messageDrafts[threadId] = "";
    render("customer-event");
    focusEventSection("event-messages");
    showToast("Demo message saved in this browser; nothing was sent.");
  });
  app.querySelectorAll("[data-event-requirement]").forEach(button => button.addEventListener("click", () => {
    const requirementId = button.dataset.eventRequirement;
    const isCount = requirementId === "headcount";
    eventWorkspaceState.requirementOverrides[requirementId] = {
      status: "Submitted",
      statusClass: "pending",
      due: "Awaiting venue review",
      consequence: isCount ? "The demo attendee count was saved for supplier planning; no supplier was notified." : "A demo evidence record was added for review; no file was uploaded or sent.",
      action: null
    };
    render("customer-event");
    focusEventSection("event-requirements");
    showToast(isCount ? "Demo attendee count saved; no supplier was notified." : "Demo evidence recorded; no file was uploaded.");
  }));
  app.querySelectorAll("[data-event-action]").forEach(button => button.addEventListener("click", () => {
    eventWorkspaceState.actionView = button.dataset.eventAction;
    render("customer-event");
    focusEventSection("event-change");
  }));
  app.querySelectorAll("[data-event-action-close]").forEach(button => button.addEventListener("click", () => {
    eventWorkspaceState.actionView = null;
    render("customer-event");
    focusEventSection("event-change");
    showToast("Preview closed. The confirmed booking was not changed.");
  }));
  app.querySelector("#event-change-form")?.addEventListener("input", event => {
    if (!event.currentTarget.matches("form")) return;
    const data = new FormData(event.currentTarget);
    eventWorkspaceState.changeDraft = { date: String(data.get("date") || ""), start: String(data.get("start") || ""), end: String(data.get("end") || ""), guests: Number(data.get("guests") || 0), reason: String(data.get("reason") || "") };
  });
  app.querySelector("#event-change-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const draft = { date: String(data.get("date") || ""), start: String(data.get("start") || ""), end: String(data.get("end") || ""), guests: Number(data.get("guests") || 0), reason: String(data.get("reason") || "").trim() };
    const error = event.currentTarget.querySelector("#event-change-error");
    if (!draft.date || !Number.isFinite(timeAsHours(draft.start)) || !Number.isFinite(timeAsHours(draft.end)) || timeAsHours(draft.end) <= timeAsHours(draft.start) || !Number.isInteger(draft.guests) || draft.guests < 1) {
      error.hidden = false;
      error.textContent = "Choose a valid proposed date, an end time after the start time, and at least one attendee.";
      error.focus();
      return;
    }
    eventWorkspaceState.changeDraft = draft;
    eventWorkspaceState.actionView = "change-preview";
    render("customer-event");
    focusEventSection("event-change");
  });
  app.querySelector("#event-request-form")?.addEventListener("submit", event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const error = event.currentTarget.querySelector("#event-request-error");
    if (data.get("acknowledge") !== "yes") {
      error.hidden = false;
      error.textContent = "Confirm that you understand this demo request does not change the booking or move money.";
      error.focus();
      return;
    }
    const type = String(data.get("requestType") || "change");
    const eventRecord = activeManagedEvent();
    const draft = eventWorkspaceState.changeDraft;
    eventWorkspaceState.submittedRequest = {
      type,
      summary: type === "change"
        ? `Proposed ${managedEventShortDate(draft.date)}, ${formatTime(draft.start)}–${formatTime(draft.end)}, ${draft.guests} attendees. The original ${eventRecord.bookingId} remains confirmed.`
        : `${eventRecord.bookingId} and ${eventRecord.vendors.length} independent vendor order${eventRecord.vendors.length === 1 ? "" : "s"} would require separate review. The original booking remains confirmed.`
    };
    eventWorkspaceState.actionView = null;
    render("customer-event");
    focusEventSection("event-change");
    showToast("Demo request recorded; no supplier was contacted and nothing changed.");
  });
  app.querySelector("[data-event-request-withdraw]")?.addEventListener("click", () => {
    eventWorkspaceState.submittedRequest = null;
    eventWorkspaceState.actionView = null;
    render("customer-event");
    focusEventSection("event-change");
    showToast("Demo request removed. The confirmed booking remains unchanged.");
  });
  app.querySelectorAll("[data-review-edit]").forEach(button => button.addEventListener("click", () => {
    reviewEditingTarget = button.dataset.reviewEdit;
    render("customer-reviews");
    requestAnimationFrame(() => app.querySelector(`[data-review-target="${CSS.escape(reviewEditingTarget)}"] input[name="rating"]:checked`)?.focus({ preventScroll: true }));
  }));
  app.querySelectorAll("[data-review-cancel]").forEach(button => button.addEventListener("click", () => {
    reviewEditingTarget = null;
    render("customer-reviews");
    showToast("Review changes were not saved.");
  }));
  app.querySelectorAll("[data-review-vendor-comparison]").forEach(button => button.addEventListener("click", () => {
    const service = vendorServices.find(item => item.id === button.dataset.reviewVendorComparison);
    bookingStep = 2;
    addonStage = "services";
    activeServiceType = service?.serviceType || null;
    showAllServiceTypes = true;
    navigate("booking");
  }));
  app.querySelectorAll("[data-character-count]").forEach(textarea => textarea.addEventListener("input", () => {
    const counter = app.querySelector(`#${textarea.dataset.characterCount}`);
    if (counter) counter.textContent = `${textarea.value.length}/600`;
  }));
  app.querySelectorAll("[data-review-form]").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const role = activeRole();
    const target = reviewTargetsForBooking().find(item => reviewKey(item) === form.dataset.reviewTarget);
    if (!role || !target || !canSubmitReviewFor(target)) {
      showToast(reviewWindowOpen() ? "Only the booking owner can review that supplier." : `The review window closed on ${completedReviewBooking.reviewDeadline}.`);
      return;
    }
    const formData = new FormData(form);
    const rating = Number(formData.get("rating"));
    const comment = String(formData.get("publicComment") || "").trim();
    const privateFeedback = String(formData.get("privateFeedback") || "").trim();
    const errors = [];
    if (!Number.isInteger(rating) || rating < 1 || rating > 5) errors.push("Choose an overall rating from 1 to 5.");
    if (comment && comment.length < 20) errors.push("Write at least 20 characters for a public comment, or leave it blank.");
    if (comment.length > 600 || privateFeedback.length > 600) errors.push("Keep each feedback field within 600 characters.");
    if (formData.get("reviewGuidelines") !== "accepted") errors.push("Confirm that the review follows the content and privacy guidelines.");
    const errorBox = form.querySelector(".review-error");
    const ratingGroup = form.querySelector(".star-rating");
    const guidelineInput = form.querySelector('[name="reviewGuidelines"]');
    const publicCommentInput = form.querySelector('[name="publicComment"]');
    const privateFeedbackInput = form.querySelector('[name="privateFeedback"]');
    if (errors.length) {
      errorBox.hidden = false;
      errorBox.innerHTML = `<strong>Review not published</strong><ul>${errors.map(error => `<li>${escapeHtml(error)}</li>`).join("")}</ul>`;
      const errorId = errorBox.id;
      const ratingInvalid = !Number.isInteger(rating) || rating < 1 || rating > 5;
      const guidelineInvalid = formData.get("reviewGuidelines") !== "accepted";
      const commentInvalid = Boolean(comment && comment.length < 20) || comment.length > 600;
      const privateInvalid = privateFeedback.length > 600;
      const setAriaInvalid = (input, invalid) => invalid ? input.setAttribute("aria-invalid", "true") : input.removeAttribute("aria-invalid");
      setAriaInvalid(ratingGroup, ratingInvalid);
      setAriaInvalid(guidelineInput, guidelineInvalid);
      setAriaInvalid(publicCommentInput, commentInvalid);
      setAriaInvalid(privateFeedbackInput, privateInvalid);
      ratingGroup.setAttribute("aria-describedby", `${ratingGroup.querySelector("p").id}${ratingInvalid ? ` ${errorId}` : ""}`);
      [guidelineInput, publicCommentInput, privateFeedbackInput].forEach(input => {
        if (input.getAttribute("aria-invalid") === "true") input.setAttribute("aria-describedby", errorId);
        else input.removeAttribute("aria-describedby");
      });
      errorBox.focus();
      return;
    }
    errorBox.hidden = true;
    ratingGroup.removeAttribute("aria-invalid");
    guidelineInput.removeAttribute("aria-invalid");
    publicCommentInput.removeAttribute("aria-invalid");
    privateFeedbackInput.removeAttribute("aria-invalid");
    const key = reviewKey(target);
    const existing = organizerReviews[key];
    const nameParts = role.name.trim().split(/\s+/);
    const reviewer = `${nameParts[0]} ${nameParts.length > 1 ? `${nameParts[nameParts.length - 1][0]}.` : ""}`.trim();
    organizerReviews[key] = {
      id: existing?.id || `REV-${completedReviewBooking.bookingId}-${target.orderId || target.subjectId}`,
      bookingId: completedReviewBooking.bookingId,
      subjectType: target.subjectType,
      subjectId: target.subjectId,
      targetType: target.targetType,
      supplier: target.supplier,
      orderId: target.orderId || null,
      package: target.targetType === "vendor" ? target.offering : "",
      rating,
      reviewer,
      verified: true,
      eventType: completedReviewBooking.eventType,
      month: completedReviewBooking.completedMonth,
      comment,
      highlights: formData.getAll("highlights").map(String),
      privateFeedback,
      status: "published",
      submittedAt: existing?.submittedAt || new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      edited: Boolean(existing)
    };
    reviewEditingTarget = null;
    render("customer-reviews");
    showToast(existing ? "Review updated without adding a duplicate rating." : `${target.targetType === "venue" ? "Venue" : "Vendor"} review published in this demo.`);
  }));
  app.querySelectorAll("[data-space]").forEach(el => el.addEventListener("click", () => {
    const changedVenue = selectedSpaceId !== el.dataset.space;
    const retainedServices = changedVenue && bookingData.vendorServices.length > 0;
    if (changedVenue) {
      bookingData.addons = [];
      autoRequiredAddonIds.clear();
    }
    selectedSpaceId = el.dataset.space;
    navigate("venue");
    if (retainedServices) showToast("Vendor selections were retained and will be rechecked for this venue.");
  }));
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
    addonStage = "fit";
    activeServiceType = null;
    showAllServiceTypes = false;
    navigate("booking");
  });
  const captureEventBasics = () => {
    bookingData.guests = Number(app.querySelector("#headcount")?.value || bookingData.guests);
    bookingData.contact = app.querySelector("#name")?.value.trim() || bookingData.contact;
    bookingData.email = app.querySelector("#email")?.value.trim() || bookingData.email;
    const details = app.querySelector("#details")?.value.trim() || "";
    if (bookingData.purposeId === "other-permitted") bookingData.activityDescription = details;
    else bookingData.notes = details;
  };
  app.querySelectorAll('[name="event-purpose"]').forEach(input => input.addEventListener("change", event => {
    captureEventBasics();
    const currentValues = new Set([...app.querySelectorAll('[name="event-need"]:checked')].map(item => item.value));
    bookingData.purposeId = event.currentTarget.value;
    bookingData.event = currentPurpose().label;
    const relevantIds = new Set(eventNeedOptionsFor(bookingData.purposeId).map(option => option.id));
    bookingData.eventNeeds = Object.fromEntries(eventNeedOptions.map(option => [option.id, relevantIds.has(option.id) && currentValues.has(option.id)]));
    ensureRequiredAddons();
    render("booking");
    requestAnimationFrame(() => app.querySelector(`[name="event-purpose"][value="${CSS.escape(bookingData.purposeId)}"]`)?.focus({ preventScroll: true }));
  }));
  app.querySelectorAll('[name="event-need"]').forEach(input => input.addEventListener("change", event => {
    const previousScroll = window.scrollY;
    const changedNeedId = event.currentTarget.value;
    captureEventBasics();
    bookingData.eventNeeds[changedNeedId] = event.currentTarget.checked;
    ensureRequiredAddons();
    render("booking");
    requestAnimationFrame(() => {
      window.scrollTo({ top: previousScroll });
      app.querySelector(`[name="event-need"][value="${CSS.escape(changedNeedId)}"]`)?.focus({ preventScroll: true });
    });
  }));
  app.querySelector("#event-form")?.addEventListener("submit", e => {
    e.preventDefault();
    captureEventBasics();
    const purposeId = app.querySelector('[name="event-purpose"]:checked')?.value;
    if (!purposeId) { showToast("Choose a permitted event purpose to continue."); return; }
    bookingData.purposeId = purposeId;
    bookingData.event = currentPurpose().label;
    if (purposeId === "other-permitted" && !bookingData.activityDescription) {
      app.querySelector("#details")?.focus();
      showToast("Describe the activity so the venue can review it.");
      return;
    }
    const selectedNeeds = new Set([...app.querySelectorAll('[name="event-need"]:checked')].map(input => input.value));
    bookingData.eventNeeds = Object.fromEntries(eventNeedOptions.map(option => [option.id, selectedNeeds.has(option.id)]));
    ["face-painting", "cake"].forEach(type => { bookingData.vendorQuantities[type] = Math.min(bookingData.vendorQuantities[type] || bookingData.guests, bookingData.guests); });
    const fit = eventCompatibility();
    if (fit.status === "blocked") { render("booking"); showToast(`${fit.label}: ${fit.detail}`); return; }
    ensureRequiredAddons();
    addonStage = "fit";
    activeServiceType = null;
    showAllServiceTypes = false;
    bookingStep = 2;
    render("booking");
  });
  const captureVendorFormState = () => {
    const addonInputs = [...app.querySelectorAll(".addon-checkbox")];
    if (addonInputs.length) {
      const requiredIds = requiredAddonsForBooking().filter(item => item.available).map(item => item.id);
      bookingData.addons = [...new Set([...requiredIds, ...addonInputs.filter(input => input.checked && !input.disabled).map(input => input.value)])];
    }
    if (activeServiceType) {
      const typeServiceIds = new Set(vendorServices.filter(service => service.serviceType === activeServiceType).map(service => service.id));
      const selectedValue = app.querySelector(`.vendor-radio[data-service-type="${CSS.escape(activeServiceType)}"]:checked`)?.value || "";
      bookingData.vendorServices = bookingData.vendorServices.filter(id => !typeServiceIds.has(id));
      if (selectedValue) bookingData.vendorServices.push(selectedValue);
    }
  };
  app.querySelectorAll("[data-change-purpose]").forEach(button => button.addEventListener("click", () => { bookingStep = 1; render("booking"); }));
  app.querySelectorAll("[data-addon-stage]").forEach(button => button.addEventListener("click", () => {
    captureVendorFormState();
    addonStage = button.dataset.addonStage;
    activeServiceType = null;
    render("booking");
  }));
  app.querySelector("#venue-addon-form")?.addEventListener("submit", event => {
    event.preventDefault();
    captureVendorFormState();
    addonStage = "services";
    activeServiceType = null;
    render("booking");
  });
  app.querySelector("#browse-all-services")?.addEventListener("click", () => { showAllServiceTypes = true; render("booking"); });
  app.querySelectorAll("[data-service-category]").forEach(button => button.addEventListener("click", () => { activeServiceType = button.dataset.serviceCategory; render("booking"); }));
  app.querySelectorAll("[data-service-done]").forEach(button => button.addEventListener("click", () => { captureVendorFormState(); activeServiceType = null; render("booking"); }));
  const updateBookingSelectionUi = () => {
    app.querySelectorAll(".vendor-offer-card").forEach(card => card.classList.toggle("selected", Boolean(card.querySelector(".vendor-radio:checked"))));
    const currentSummary = app.querySelector(".summary-card");
    if (currentSummary) currentSummary.outerHTML = summaryCard();
  };
  app.querySelectorAll(".vendor-radio").forEach(input => input.addEventListener("change", event => {
    const previousScroll = window.scrollY;
    const selectedValue = event.currentTarget.value;
    const serviceType = event.currentTarget.dataset.serviceType;
    captureVendorFormState();
    render("booking");
    requestAnimationFrame(() => {
      window.scrollTo({ top: previousScroll });
      const replacement = [...app.querySelectorAll(`.vendor-radio[data-service-type="${serviceType}"]`)].find(item => item.value === selectedValue);
      replacement?.focus({ preventScroll: true });
    });
  }));
  app.querySelectorAll("[data-config-service][data-config-group]").forEach(input => input.addEventListener("change", event => {
    const control = event.currentTarget;
    const service = vendorServices.find(item => item.id === control.dataset.configService);
    if (!service) return;
    const configuration = configurationFor(service);
    const groupId = control.dataset.configGroup;
    const group = configurationSchemaFor(service).find(item => item.id === groupId);
    if (!group) return;
    const previousScroll = window.scrollY;
    if (control.type === "checkbox") {
      const selector = `[data-config-service="${CSS.escape(service.id)}"][data-config-group="${CSS.escape(groupId)}"]:checked`;
      const checked = [...app.querySelectorAll(selector)];
      if (group.max && checked.length > group.max) {
        control.checked = false;
        showToast(`Choose no more than ${group.max} for ${group.label.toLowerCase()}.`);
        return;
      }
      configuration.selections[groupId] = checked.map(item => item.value);
    } else configuration.selections[groupId] = control.value;
    configuration.quote = { status: "none", amount: 0, reference: "" };
    const updatedStatus = configurationStatus(service);
    if (!updatedStatus.referenceRequired && configuration.referenceImage) {
      revokePreview(organizerReferenceFiles[service.id]);
      delete organizerReferenceFiles[service.id];
      configuration.referenceImage = null;
      configuration.imageError = "";
    }
    const focus = { groupId, value: control.value, type: control.type };
    render("booking");
    requestAnimationFrame(() => {
      window.scrollTo({ top: previousScroll });
      const candidates = [...app.querySelectorAll(`[data-config-service="${CSS.escape(service.id)}"][data-config-group="${CSS.escape(focus.groupId)}"]`)];
      const replacement = ["radio", "checkbox"].includes(focus.type) ? candidates.find(item => item.value === focus.value) : candidates[0];
      replacement?.focus({ preventScroll: true });
    });
  }));
  app.querySelectorAll(".organizer-reference-input").forEach(input => input.addEventListener("change", event => {
    const service = vendorServices.find(item => item.id === event.currentTarget.dataset.referenceService);
    if (!service) return;
    const configuration = configurationFor(service);
    const file = event.currentTarget.files?.[0];
    const error = validateImageUpload(file);
    if (error) {
      configuration.imageError = error;
      event.currentTarget.value = "";
      render("booking");
      showToast(error);
      return;
    }
    revokePreview(organizerReferenceFiles[service.id]);
    const metadata = { name: file.name, type: file.type, size: file.size, lastModified: file.lastModified };
    organizerReferenceFiles[service.id] = { file, previewUrl: URL.createObjectURL(file) };
    configuration.referenceImage = metadata;
    configuration.imageError = "";
    configuration.quote = { status: "none", amount: 0, reference: "" };
    render("booking");
    showToast("Reference image accepted. It remains private and still requires vendor review.");
  }));
  app.querySelectorAll("[data-remove-reference]").forEach(button => button.addEventListener("click", () => {
    const service = vendorServices.find(item => item.id === button.dataset.removeReference);
    if (!service) return;
    const configuration = configurationFor(service);
    revokePreview(organizerReferenceFiles[service.id]);
    delete organizerReferenceFiles[service.id];
    configuration.referenceImage = null;
    configuration.imageError = "";
    configuration.quote = { status: "none", amount: 0, reference: "" };
    render("booking");
    showToast("Custom-design reference removed.");
  }));
  app.querySelectorAll("[data-request-quote]").forEach(button => button.addEventListener("click", () => {
    const service = vendorServices.find(item => item.id === button.dataset.requestQuote);
    if (!service || !configurationStatus(service).complete) { showToast("Complete the required custom-service details first."); return; }
    configurationFor(service).quote = { status: "requested", amount: 0, reference: "" };
    render("booking");
    showToast(`Quote request sent to ${service.vendor}. Payment remains blocked.`);
  }));
  app.querySelectorAll("[data-simulate-quote]").forEach(button => button.addEventListener("click", () => {
    const service = vendorServices.find(item => item.id === button.dataset.simulateQuote);
    if (!service || configurationFor(service).quote?.status !== "requested") return;
    const quoteAmounts = { catering: 150, cake: 65, decor: 120, "photo-booth": 55, magic: 90, "face-painting": 60 };
    configurationFor(service).quote = { status: "quoted", amount: quoteAmounts[service.serviceType] || 75, reference: `QTE-${service.invoicePrefix}-${bookingSequence}` };
    render("booking");
    showToast("Prototype vendor quote accepted for the exact saved configuration.");
  }));
  app.querySelectorAll(".addon-checkbox").forEach(input => input.addEventListener("change", event => {
    const previousScroll = window.scrollY;
    const changedAddon = event.currentTarget.value;
    captureVendorFormState();
    if (selectedVendorServices().some(requiresAllergyConfirmation)) {
      render("booking");
      requestAnimationFrame(() => {
        window.scrollTo({ top: previousScroll });
        app.querySelector(`.addon-checkbox[value="${changedAddon}"]`)?.focus({ preventScroll: true });
      });
      return;
    }
    updateBookingSelectionUi();
  }));
  const refreshVendorComparison = event => {
    const previousScroll = window.scrollY;
    const changedControl = event?.currentTarget;
    const focusKey = changedControl?.id ? { id: changedControl.id } : changedControl?.dataset.quantityType ? { quantityType: changedControl.dataset.quantityType } : { className: changedControl?.className, value: changedControl?.value };
    captureVendorFormState();
    app.querySelectorAll(".vendor-quantity-input").forEach(input => { bookingData.vendorQuantities[input.dataset.quantityType] = Number(input.value); });
    vendorSort = app.querySelector("#vendor-sort")?.value || vendorSort;
    if (app.querySelector("#catering-cuisine")) {
      bookingData.cateringPreferences = {
        cuisine: app.querySelector("#catering-cuisine").value,
        menu: app.querySelector("#catering-menu").value,
        dietary: [...app.querySelectorAll(".catering-dietary:checked")].map(input => input.value),
        allergies: [...app.querySelectorAll(".catering-allergy:checked")].map(input => input.value),
        servingStyle: app.querySelector("#catering-style").value,
        notes: app.querySelector("#catering-notes")?.value.trim() || ""
      };
    }
    render("booking");
    requestAnimationFrame(() => {
      window.scrollTo({ top: previousScroll });
      const replacement = focusKey.id ? app.querySelector(`#${focusKey.id}`) : focusKey.quantityType ? app.querySelector(`[data-quantity-type="${focusKey.quantityType}"]`) : [...app.querySelectorAll(`.${String(focusKey.className || "").split(" ")[0]}`)].find(input => input.value === focusKey.value);
      replacement?.focus({ preventScroll: true });
      const matchingCount = vendorServices.filter(service => service.serviceType === "catering" && vendorMatchesCateringPreferences(service)).length;
      const status = app.querySelector("#vendor-filter-status");
      if (status) status.textContent = `${matchingCount} catering package${matchingCount === 1 ? "" : "s"} match the selected filters. Existing selections are retained when they need attention.`;
    });
  };
  ["#vendor-sort", "#catering-cuisine", "#catering-menu", "#catering-style"].forEach(selector => app.querySelector(selector)?.addEventListener("change", refreshVendorComparison));
  app.querySelectorAll(".catering-dietary,.catering-allergy,.vendor-quantity-input").forEach(input => input.addEventListener("change", refreshVendorComparison));
  app.querySelector("#catering-notes")?.addEventListener("input", event => { bookingData.cateringPreferences.notes = event.currentTarget.value; });
  app.querySelector("#catering-notes")?.addEventListener("change", refreshVendorComparison);
  app.querySelector("#request-vendor-confirmation")?.addEventListener("click", event => {
    const previousScroll = window.scrollY;
    captureVendorFormState();
    bookingData.cateringPreferences.notes = app.querySelector("#catering-notes")?.value.trim() || "";
    const service = vendorServices.find(item => item.id === event.currentTarget.dataset.serviceId);
    if (!service || !vendorAvailability(service).available) { showToast("This package must be updated before confirmation can be requested."); return; }
    vendorConfirmationRequests[service.id] = allergyConfirmationSignature(service);
    render("booking");
    requestAnimationFrame(() => {
      window.scrollTo({ top: previousScroll });
      app.querySelector("#simulate-vendor-confirmation")?.focus({ preventScroll: true });
    });
    showToast("Confirmation request sent. Payment remains blocked until the vendor responds.");
  });
  app.querySelector("#simulate-vendor-confirmation")?.addEventListener("click", event => {
    const previousScroll = window.scrollY;
    captureVendorFormState();
    bookingData.cateringPreferences.notes = app.querySelector("#catering-notes")?.value.trim() || "";
    const service = vendorServices.find(item => item.id === event.currentTarget.dataset.serviceId);
    if (!service || !vendorAvailability(service).available || !hasCurrentAllergyConfirmationRequest(service)) { showToast("Send a current confirmation request before simulating the vendor response."); return; }
    vendorConfirmations[service.id] = allergyConfirmationSignature(service);
    render("booking");
    requestAnimationFrame(() => {
      window.scrollTo({ top: previousScroll });
      app.querySelector("#addon-form button[type='submit']")?.focus({ preventScroll: true });
    });
    showToast("Prototype-only vendor response recorded for these exact allergy requirements.");
  });
  app.querySelector("#addon-form")?.addEventListener("submit", e => {
    e.preventDefault();
    captureVendorFormState();
    if (app.querySelector("#catering-notes")) bookingData.cateringPreferences.notes = app.querySelector("#catering-notes").value.trim();
    const fit = eventCompatibility();
    if (fit.status !== "allowed") { showToast(`${fit.label}. Change the purpose or event answers before payment.`); return; }
    ensureRequiredAddons();
    const vendorStatus = selectedVendorAvailability();
    if (vendorStatus.unavailable.length) { showToast(`${vendorStatus.unavailable.map(item => item.name).join(", ")} no longer matches this booking. Choose an available package.`); return; }
    if (vendorStatus.incompleteConfigurations.length) { showToast(`Complete the required choices for ${vendorStatus.incompleteConfigurations.map(item => item.name).join(", ")}.`); return; }
    if (vendorStatus.pendingQuotes.length) { showToast(`An accepted vendor quote is required for ${vendorStatus.pendingQuotes.map(item => item.name).join(", ")} before payment.`); return; }
    if (!vendorStatus.ready) { render("booking"); showToast("Written vendor confirmation is required for the selected allergy requirements before payment."); return; }
    bookingStep = 3;
    render("booking");
  });
  app.querySelector("#booking-back")?.addEventListener("click", () => {
    if (bookingStep === 3) {
      bookingStep = 2;
      addonStage = "services";
      activeServiceType = null;
    } else bookingStep = Math.max(1, bookingStep - 1);
    render("booking");
  });
  app.querySelector("#confirm-booking")?.addEventListener("click", () => { if (!app.querySelector("#agree").checked) { showToast("Please accept the applicable booking policies to continue."); return; } const fit = eventCompatibility(); if (fit.status !== "allowed") { showToast(`${fit.label}. The venue must approve this use before payment.`); bookingStep = 2; addonStage = "fit"; render("booking"); return; } ensureRequiredAddons(); if (!availability().available) { showToast("That venue time is no longer available. Please choose another time."); navigate("venue"); return; } const vendorStatus = selectedVendorAvailability(); if (!vendorStatus.ready) { const message = vendorStatus.pendingQuotes.length ? "An accepted vendor quote is required before payment." : vendorStatus.incompleteConfigurations.length ? "Complete every required package choice before payment." : vendorStatus.pendingConfirmations.length ? "Vendor allergy confirmation is required before payment." : `${vendorStatus.unavailable.map(item => item.name).join(", ")} is no longer available. Please update vendor services.`; showToast(message); bookingStep = 2; addonStage = "services"; activeServiceType = null; render("booking"); return; } confirmedBookingSnapshot = createBookingSnapshot(); resetEventWorkspaceState(); bookingSequence += 1; bookingStep = 4; render("booking"); });
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
  app.querySelector("#support-session-form")?.addEventListener("submit", e => {
    e.preventDefault();
    const caseId = app.querySelector("#support-case").value.trim().toUpperCase();
    const target = app.querySelector("#support-target").value;
    const reason = app.querySelector("#support-reason").value;
    const duration = Number(app.querySelector("#support-duration").value);
    const startedAt = new Date();
    const expiresAt = new Date(startedAt.getTime() + duration * 60000);
    supportSession = { caseId, target, reason, duration, actor: activeRole().name, scope: "Read-only tenant support", startedAt: startedAt.toISOString(), expiresAt: expiresAt.toISOString() };
    supportAuditEvents.unshift({ timestamp: startedAt.toISOString(), actor: supportSession.actor, action: `Started ${duration}-minute read-only support session`, target, caseId, scope: supportSession.scope, reason, startedAt: supportSession.startedAt, expiresAt: supportSession.expiresAt, outcome: "Access authorized" });
    scheduleSupportExpiry();
    render("platform-dashboard");
    showToast("Audited read-only support session started in this demo.");
  });
  app.querySelector("#end-support-session")?.addEventListener("click", () => {
    if (!endSupportSession("Ended by the platform administrator")) return;
    render("platform-dashboard");
    showToast("Support access ended and was added to the demo audit trail.");
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
