const toggleSwitch = document.getElementById("darkModeSwitch");
const mode = document.querySelector(".mode");
const body = document.body;

if (toggleSwitch && mode) {
  toggleSwitch.addEventListener("change", () => {
    const isDark = toggleSwitch.checked;
    body.classList.toggle("dark-mode", isDark);
    mode.textContent = isDark ? "dark" : "light";
  });
}
