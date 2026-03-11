// Check from config.js
function loginAdmin() {
  if (username.value === KELURAHAN_CONFIG.admin.username && password.value === KELURAHAN_CONFIG.admin.password) {
    localStorage.setItem("isAdmin", "true");
    location.href = "admin-dashboard.html";
  } else {
    alert("Login gagal. Periksa username dan password.");
  }
  return false;
}
