/* ===========================================================
   HURGHADA BLUE — Main JS
   - Edit WHATSAPP_NUMBER below to change booking number
   - Edit the trips array to add/remove trips
   =========================================================== */

/* ============ CONFIG (easy to edit) ============ */
const WHATSAPP_NUMBER = "01017873626"; // ← change to your real WhatsApp number (international format, no + or 00)

/* ============ TRIPS DATA ============
   Add, remove or edit trips here.
   category: "sea" | "desert" | "city" | "diving"
*/
const trips = [
  {
    title: "Orange Bay Island",
    category: "sea",
    duration: "FULL DAY",
    price: 25,
    image: "images/Orange.jpeg.webp",
   description: `
<h4>Orange Bay Island Program</h4>
<ul>
  <li>✔ Hotel pick-up & drop-off</li>
  <li>✔ 2H on the island</li>
  <li>✔ 2 stops snorkeling</li>
  <li>✔ Professional guide snorkeling with you</li>
  <li>✔ Lunch on the boat</li>
  <li>✔ Water and soft drinks</li>
</ul>
`
  },
  {
    title: "Hula Hula Island",
    category: "sea",
    duration: "FULL DAY",
    price: 25,
    image: "images/Hula_Hula.webp",
    description: `
<h4>Hula Hula Island Program</h4>
<ul>
  <li>✔ Hotel pick-up & drop-off</li>
  <li>✔ 2H on the island</li>
  <li>✔ 2 stops snorkeling</li>
  <li>✔ Professional guide snorkeling with you</li>
  <li>✔ Lunch on the boat</li>
  <li>✔ Water and soft drinks</li>
</ul>
`
  },
  {
    title: "Dolphin House",
    category: "sea",
    duration: "FULL DAY",
    price: 25,
    image: "images/Dolphin.webp", 
    description: `
<h4>Dolphin House By Boat from Hurghada</h4>
<ul>
  <li>✔ Hotel Pick up & Drop off by Air-conditioned vehicle</li>
  <li>✔ 8 Hours Boat Trip with two guided snorkeling stops</li>
  <li>✔ Visit Hurghada Dolphin House</li>
  <li>✔ Use of Snorkelling equipment</li>
  <li>✔ Lunch & Soft Drinks on boat</li>
</ul>
`
  },
  {
    title: "Mahmya Island",
    category: "sea",
    duration: "FULL DAY",
    price: 85,
    image: "images/Mahmya.webp",
    description: `
<h4>Mahmya Island</h4>
<ul>
  <li>✔ Pick up & Drop off</li>
  <li>✔ Snorkeling Gear (Mask, Fins, snorkel)</li>
  <li>✔ Lunch Open Buffet</li>
  <li>✔ Open soft drinks and water</li>
  <li>✔ Pick up & Drop off</li>
</ul>
`  },
  {
    title: "Turkish bath",
    category: "city",
    duration: "90 Minutes",
    price: 30,
    image: "images/Turkish_path.jpeg",
description: `
<h4>Turkish Bath Program</h4>

✔ Introduction & Program Briefing<br>
✔ Sauna (10–15 minutes)<br>
✔ Steam Bath (10–15 minutes)<br>
✔ Peeling Treatment & Soap/Foam Massage (20–25 minutes)<br>
✔ Relaxation Time with Hot Drinks (10–15 minutes)<br>
✔ Free Access to Sauna, Steam Bath & Jacuzzi<br>

<p><strong>Duration:</strong> Approximately 90 minutes</p>
`  },
  {
    title: "Dolphin Hause with private speed boat",
    category: "sea",
    duration: "Custom",
    price: "variable",
    image: "images/Private_yacht.webp",
    description: `
<h4>Dolphin House with Private Speed Boat</h4>
<ul>
  <li>✔ 4 Hours Speed Boat</li>
  <li>✔ White Island Visit 🏝️</li>
  <li>✔ Dolphin Searching 🐬</li>
  <li>✔ Snacks & Soft Drinks</li>
  <li>✔ Fresh Fruit Plate 🍉🍍</li>
  <li>✔ Snorkeling Stops 🤿</li>
  <li>✔ Transfers from & to hotel 🚐</li>
</ul>
`
  },
  {
    title: "Horse Riding by the Sea",
    category: "desert",
    duration: "2 Hours",
    price: 30,
    image: "images/Horse_riding_by_the_see.webp",
    description: `
<h4>Horse Riding by the Sea</h4>
<ul>
  <li>✔ Romantic horseback ride along the Red Sea shore</li>
  <li>✔ Into the desert — sunset option available</li>
</ul>
`
  },
  {
    title: "Desert Safari Adventure",
    category: "desert",
    duration: "6 Hours",
    price: 25,
    image: "images/Desert_safari.webp",
    description: `
<h4>Desert Safari Adventure</h4>
<ul>
  <li>✔ Hotel pick-up & drop-off</li>
  <li>✔ Quad bike ride</li>
  <li>✔ Spider buggy ride</li>
  <li>✔ Transported by a safari jeep to Bedouin village</li>
  <li>✔ Camel ride</li>
  <li>✔ Traditional dinner & show</li>
  <li>✔ Water and soft drinks</li>
</ul>
`
  },


  {
    title: "Parasailing Experience",
    category: "sea",
    duration: "",
    price: 22,
    image: "images/Parasailing.jpeg",
    description: `
<h4>Parasailing Experience</h4>
<ul>
  <li>✔ Pick up & Drop off</li>
  <li>✔ All transfers by an air-conditioned vehicle</li>
  <li>✔ Enjoy a Parasailing experience</li>
</ul>
`
  },

  {
    title: "Quad Bike Adventure",
    category: "desert",
    duration: "3 Hours",
    price: 25,
    image: "images/Quad_adventure.webp",
    description: `
<h4>Quad Bike Adventure</h4>
<ul>
  <li>✔ Hotel Pick-up & Drop-off</li>
  <li>✔ Quad Bike Ride to the Bedouin Village (25 km each way)</li>
  <li>✔ Camel Ride</li>
  <li>✔ Traditional Bedouin Bread & Tea</li>
  <li>✔ Bottled Water</li>
</ul>
`
  },
  {
    title: "Marsa Alam abu Dabbab Beach",
    category: "sea",
    duration: "Full Day",
    price: 80,
    image: "images/MarsaAlam.jpeg",
    description: `
<h4>Marsa Alam abu Dabbab Beach</h4>
<ul>
  <li>✔ Air-conditioned vehicle</li>
  <li>✔ Bottled water</li>
  <li>✔ Use of Snorkelling equipment</li>
  <li>✔ Snorkeling guide</li>
  <li>✔ Entrance fee Beach</li>
</ul>
`
  },
  {
    title: "Stargazing Desert Safari",
    category: "desert",
    duration: "full night",
    price: 35,
    image: "images/Stargazing.jpeg",
description: `
<h4>Stargazing Safari Experience</h4>
<ul>
  <li>✔ Jeep off-roading (17 km)</li>
  <li>✔ Welcome drink</li>
  <li>✔ Camel ride</li>
  <li>✔ Farm tour (plants & farm animals)</li>
  <li>✔ Sunset from a high hill</li>
  <li>✔ Horse ride</li>
  <li>✔ Dinner</li>
  <li>✔ Stargazing experience</li>
  <li>✔ Telescope viewing</li>
</ul>
`  },
  {
    title: "Diving Program",
    category: "diving",
    duration: "Full Day",
    price: 30,
    image: "images/Diving.webp",
    description: `
<h4>Scuba Diving Full Day Boat Trip for Beginners</h4>
<ul>
  <li>✔ With Lunch & Transfer – Hurghadaincluded</li>
  <li>✔ Hotel Pick up & Drop off & Air-conditioned vehicle</li>
  <li>✔ 8 hours Diving boat trip</li>
  <li>✔ Use of Diving equipment</li>
  <li>✔ Two Scuba Diving stops & Professional Instructor</li>
  <li>✔ Professional diving instructor and Safety equipment</li>
  <li>✔ Lunch Open Buffet and water, soft drinks, and hot drinks</li>
</ul>
`
  },
  {
    title: "Submarine & Glass-Bottom Boat",
    category: "sea",
    duration: "2Hours",
    price: 22,
    image: "images/Glass_boot.webp",
    description: `
<h4>Submarine & Glass-Bottom Boat</h4>
<ul>
  <li>✔ Pickup and drop-off</li>
  <li>✔ Semi-Submarine trip</li>
  <li>✔ Transportation</li>
  <li>✔ Snorkeling guide</li>
  <li>✔ Free drink</li>
  <li>✔ Entry/Admission - Hurghada Marina</li>
</ul>
`},
  {
    title: "Hurghada City Tour",
    category: "city",
    duration: "4 Hours",
    price: 15,
    image: "images/Hurghada_toure.webp",
    description: `
<h4>City Tour Experience</h4>
<ul>
  <li>✔ Visit the marina</li>
  <li>✔ Explore the old city</li>
  <li>✔ Visit mosques</li>
  <li>✔ Walk through traditional bazaars</li>
  <li>✔ Discover authentic local restaurants</li>
</ul>
`
  },
  {
    title: "Hurghada Aquarium",
    category: "city",
    duration: "4 Hours",
    price: 45,
    image: "images/Hurghada_Aquarium1.webp",
    description: `
<h4>Hurghada Aquarium</h4>
<ul>
  <li>✔ Walk through tunnels surrounded by sharks</li>
  <li>✔ See rays and colorful Red Sea marine life</li>
</ul>
`
  },
  {
    title: "Cairo Day mini van Tour",
    category: "city",
    duration: "Full Day",
    price: 95,
    image: "images/Cairo1.webp",
    description: `
<h4>Cairo VIP Trip – Private Mini Van</h4>

<p>Perfect for families or guests looking for more comfort, faster transfer, and flexible timing.</p>

<ul>
  <li>✔ Departure: Flexible around 01:00 – 02:00 AM</li>
  <li>✔ VIP Program Includes:</li>
  <li>✔ Private modern air-conditioned mini van</li>
  <li>✔ Faster journey with fewer stops</li>
  <li>✔ Visit the Pyramids & Sphinx + Egyptian Museum</li>
  <li>✔ Professional guide</li>
  <li>✔ Lunch included</li>
  <li>✔ Flexible photo stops</li>
  <li>✔ More relaxed schedule</li>
  <li>✔ Private hotel transfers</li>
  <li>✔ Return: Around 09:00 PM – 10:00 PM</li>
</ul>

<p><strong>Price: 95€ per person</strong></p>
`
  },
  {
    title: "Paradise Island",
    category: "sea",
    duration: "Full Day",
    price: 40,
    image: "images/Paradise.jpeg",
   description: `
<h4>Paradise Island By Boat from Hurghada</h4>
<ul>
  <li>✔ Hotel pick-up & drop-off</li>
  <li>✔ 3H on the island</li>
  <li>✔ Stops snorkeling</li>
  <li>✔ Professional guide snorkeling with you</li>
  <li>✔ Lunch on the island</li>
  <li>✔ Water and soft drinks</li>
</ul>
`
  },
  {
    title: "Luxor Vip Trip Private Mini van",
    category: "city",
    duration: "Full Day",
    price: 90,
    image: "images/Luxor.jpeg",
  description: `
<h4>Luxor VIP Trip – Semi-Private Mini Van</h4>

<p>Perfect for families or guests looking for more comfort, faster transfer, and a smaller group experience.</p>

<ul>
  <li>✔ Departure: Around 04:00 – 05:00 AM</li>
  <li>✔ VIP Program Includes:</li>
  <li>✔ Modern air-conditioned mini van (maximum 8 guests)</li>
  <li>✔ Faster journey with fewer stops</li>
  <li>✔ Visit the Valley of the Kings</li>
  <li>✔ Visit the Temple of Queen Hatshepsut</li>
  <li>✔ Photo stop at the Colossi of Memnon</li>
  <li>✔ Visit Karnak Temple</li>
  <li>✔ Professional Egyptologist guide</li>
  <li>✔ Lunch included</li>
  <li>✔ Optional Nile Boat Trip available</li>
  <li>✔ More relaxed schedule</li>
  <li>✔ Hotel pickup and drop-off included</li>
  <li>✔ Return: Around 08:00 PM – 09:00 PM</li>
</ul>
`
  },
];

/* ============ RENDER TRIPS ============ */
const tripsGrid = document.getElementById("tripsGrid");
function renderTrips(filter = "all") {
  tripsGrid.innerHTML = "";
  const list = filter === "all" ? trips : trips.filter(t => t.category === filter);
  list.forEach((t, i) => {
    const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  `Hello 

I would like to book the "${t.title}" trip.

 Price: €${t.price} per person

Please send me more details and availability.`
)}`;
    const card = document.createElement("article");
    card.className = "trip-card reveal";
    card.style.transitionDelay = (i * 60) + "ms";
    card.innerHTML = `
      <div class="trip-img">
        <span class="trip-tag">${t.category}</span>
        <span class="trip-duration"><i class="fa-regular fa-clock"></i> ${t.duration}</span>
        <img src="${t.image}" alt="${t.title}" loading="lazy"/>
      </div>
      <div class="trip-body">
        <h3>${t.title}</h3>
       <div class="trip-description">${t.description}</div>
        <div class="trip-foot">
          <div class="trip-price"><small>From</small><strong>€${t.price} <span>/ person</span></strong></div>
          <a class="book-btn" href="${waLink}" target="_blank" rel="noopener">Book Now <i class="fa-brands fa-whatsapp"></i></a>
        </div>
      </div>
    `;
    tripsGrid.appendChild(card);
  });
  observeReveals();
}
renderTrips();

/* ============ FILTERS ============ */
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderTrips(btn.dataset.filter);
  });
});

/* ============ NAVBAR scroll & mobile menu ============ */
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open");
});
navLinks.querySelectorAll("a").forEach(a => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuToggle.classList.remove("open");
}));

/* ============ HERO SLIDER ============ */
const slides = document.querySelectorAll(".slide");
let currentSlide = 0;
setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 5500);

/* ============ SCROLL REVEAL ============ */
function observeReveals() {
  const reveals = document.querySelectorAll(".reveal:not(.visible)");
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  reveals.forEach(r => obs.observe(r));
}
observeReveals();

/* ============ FAQ accordion ============ */
document.querySelectorAll(".faq-item").forEach(item => {
  const q = item.querySelector(".faq-q");
  const a = item.querySelector(".faq-a");
  q.addEventListener("click", () => {
    const open = item.classList.toggle("open");
    a.style.maxHeight = open ? a.scrollHeight + "px" : 0;
  });
});

/* ============ WhatsApp links ============ */
const waBase = `https://wa.me/${WHATSAPP_NUMBER}`;
document.getElementById("floatWa").href = `${waBase}?text=${encodeURIComponent("Hello! I'd like to know more about your Hurghada trips.")}`;
document.getElementById("contactWa").href = waBase;
document.getElementById("contactWa").textContent = "+" + WHATSAPP_NUMBER.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, "$1 $2 $3 $4");

/* ============ Contact form → WhatsApp ============ */
function sendContact(form) {
  const name = form.elements.name.value;
  const trip = form.elements.trip.value;
  const message = form.elements.message.value;
  const rawText = `Hello, my name is ${name}.\n${trip ? "I'm interested in: " + trip + "\n" : ""}${message}`;
  const text = encodeURIComponent(rawText);
  window.open(`${waBase}?text=${text}`, "_blank");
  form.reset();
}

/* ============ Misc ============ */
document.getElementById("year").textContent = new Date().getFullYear();
window.addEventListener("load", () => {
  document.getElementById("loader").classList.add("hide");
});
