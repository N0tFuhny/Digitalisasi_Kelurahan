const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

if (hamburger) {
  hamburger.onclick = () => navbarNav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const loginLink = document.getElementById("loginLink");

  // Load Config Data (if KELURAHAN_CONFIG is defined in HTML)
  if (typeof KELURAHAN_CONFIG !== "undefined") {
    // Inject names
    document.title = KELURAHAN_CONFIG.namaKelurahan;
    const logos = document.querySelectorAll(".navbar-logo span");
    logos.forEach(el => el.textContent = KELURAHAN_CONFIG.namaKelurahan);

    // Inject Logo Images
    const imgLogos = document.querySelectorAll(".navbar-logo img");
    imgLogos.forEach(img => img.src = KELURAHAN_CONFIG.logoPath);

    // Inject Hero info if existing
    const heroTitle = document.querySelector(".hero main h1");
    if (heroTitle) heroTitle.textContent = KELURAHAN_CONFIG.heroTitle + " " + KELURAHAN_CONFIG.namaKelurahan;

    const heroDesc = document.querySelector(".hero main p");
    if (heroDesc) heroDesc.textContent = KELURAHAN_CONFIG.heroDescription;

    // Inject Map iframe if exists
    const mapFrame = document.querySelector(".map");
    if (mapFrame) mapFrame.src = KELURAHAN_CONFIG.kontak.mapEmbedUrl;

    // Inject Sejarah / Profil if element exists
    const sejarahContainer = document.getElementById("sejarah-content");
    if (sejarahContainer && KELURAHAN_CONFIG.sejarah) {
      sejarahContainer.innerHTML = KELURAHAN_CONFIG.sejarah;
    }

    // Inject Social Media Links if elements exist
    if (KELURAHAN_CONFIG.sosialMedia) {
      const linkIg = document.getElementById("link-ig");
      const linkTw = document.getElementById("link-tw");
      const linkFb = document.getElementById("link-fb");

      if (linkIg && KELURAHAN_CONFIG.sosialMedia.instagram) linkIg.href = KELURAHAN_CONFIG.sosialMedia.instagram;
      else if (linkIg) linkIg.style.display = 'none';

      if (linkTw && KELURAHAN_CONFIG.sosialMedia.twitter) linkTw.href = KELURAHAN_CONFIG.sosialMedia.twitter;
      else if (linkTw) linkTw.style.display = 'none';

      if (linkFb && KELURAHAN_CONFIG.sosialMedia.facebook) linkFb.href = KELURAHAN_CONFIG.sosialMedia.facebook;
      else if (linkFb) linkFb.style.display = 'none';
    }
  }

  if (isAdmin && loginLink) {
    loginLink.textContent = "Dashboard";
    loginLink.href = "admin-dashboard.html";
  }
});
