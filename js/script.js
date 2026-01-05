const hamburger = document.querySelector("#hamburger-menu");
const navbarNav = document.querySelector(".navbar-nav");

if (hamburger) {
  hamburger.onclick = () => navbarNav.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", () => {
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  const loginLink = document.getElementById("loginLink");

  if (isAdmin && loginLink) {
    loginLink.textContent = "Logout";
    loginLink.onclick = () => {
      localStorage.removeItem("isAdmin");
      location.reload();
    };
  }
});
