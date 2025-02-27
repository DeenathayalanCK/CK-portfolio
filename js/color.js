// script.js
document.addEventListener("DOMContentLoaded", function () {
    const themeSwitch = document.getElementById("theme-switch");
  
    if (localStorage.getItem("darkMode") === "enabled") {
      document.body.classList.add("dark-mode");
      themeSwitch.checked = true;
    }
  
    themeSwitch.addEventListener("change", function () {
      if (themeSwitch.checked) {
        document.body.classList.add("dark-mode");
        localStorage.setItem("darkMode", "enabled");
      } else {
        document.body.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "disabled");
      }
    });
  });
  