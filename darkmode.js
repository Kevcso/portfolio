// Dark Mode Toggle
const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;

// Check for saved dark mode preference in localStorage
const isDarkMode = localStorage.getItem("darkMode") === "enabled";
if (isDarkMode) {
  body.classList.add("dark-mode");
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}

// Toggle Dark Mode
darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  // Update button text and save preference to localStorage
  if (body.classList.contains("dark-mode")) {
    darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
    localStorage.setItem("darkMode", "enabled");
  } else {
    darkModeToggle.innerHTML = '<i class="fas fa-moon"></i> Dark Mode';
    localStorage.setItem("darkMode", "disabled");
  }
});

// Check for system preference
const prefersDarkMode = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
if (prefersDarkMode && !localStorage.getItem("darkMode")) {
  body.classList.add("dark-mode");
  darkModeToggle.innerHTML = '<i class="fas fa-sun"></i> Light Mode';
}
