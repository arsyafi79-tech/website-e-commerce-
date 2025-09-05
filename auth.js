document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");
  const loginForm = document.getElementById("loginForm");

  if (registerForm) {
    registerForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("regUsername").value;
      const password = document.getElementById("regPassword").value;
      if (localStorage.getItem(username)) {
        alert("Username sudah terdaftar!");
      } else {
        localStorage.setItem(username, password);
        alert("Registrasi berhasil! Silakan login.");
        window.location.href = "login.html";
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const username = document.getElementById("loginUsername").value;
      const password = document.getElementById("loginPassword").value;
      const storedPassword = localStorage.getItem(username);
      if (storedPassword && storedPassword === password) {
        sessionStorage.setItem("loggedInUser", username);
        window.location.href = "index.html";
      } else {
        alert("Username atau password salah!");
      }
    });
  }
});