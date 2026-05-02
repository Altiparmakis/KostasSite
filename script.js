document.addEventListener("DOMContentLoaded", () => {
  const toggleSwitch = document.getElementById("darkModeSwitch");
  const mode = document.querySelector(".mode");
  const body = document.body;
  const savedTheme = localStorage.getItem("theme");
  const isDark = savedTheme === "dark";

  body.classList.toggle("dark-mode", isDark);

  if (toggleSwitch) {
    toggleSwitch.checked = isDark;
  }

  if (mode) {
    mode.textContent = isDark ? "dark" : "light";
  }

  if (toggleSwitch) {
    toggleSwitch.addEventListener("change", () => {
      const shouldUseDarkMode = toggleSwitch.checked;

      body.classList.toggle("dark-mode", shouldUseDarkMode);
      localStorage.setItem("theme", shouldUseDarkMode ? "dark" : "light");

      if (mode) {
        mode.textContent = shouldUseDarkMode ? "dark" : "light";
      }
    });
  }
});
