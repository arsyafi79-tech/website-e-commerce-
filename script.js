document.addEventListener("DOMContentLoaded", () => {
  const user = sessionStorage.getItem("loggedInUser");
  if (!user && !window.location.href.includes("login.html") && !window.location.href.includes("register.html")) {
    window.location.href = "login.html";
  }
});