const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check for stored theme preference
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
    themeToggle.textContent = "☀️"; // Sun icon for dark mode
}

// Toggle between light and dark mode
themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    // Update button icon based on mode
    if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️"; // Sun icon for dark mode
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙"; // Moon icon for light mode
        localStorage.setItem("theme", "light");
    }
});
