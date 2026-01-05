function loginAdmin() {
  if (username.value === "admin" && password.value === "admin123") {
    localStorage.setItem("isAdmin", "true");
    location.href = "informasi.html";
  } else {
    alert("Login gagal");
  }
  return false;
}
