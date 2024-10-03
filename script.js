const toggleSwitch = document.getElementById("darkModeSwitch");
const mode = document.querySelector(".mode");
const firstSection = document.querySelector(".sc-section");
const body = document.body;
const projects = document.querySelectorAll(".cont22");

toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    mode.innerHTML = "dark";
    firstSection.classList.remove("bg-body-tertiary");
    firstSection.classList.add("new");
    body.classList.add("new");
    projects.forEach((project) => {
      project.classList.add("new2");
    });
  } else {
    mode.innerHTML = "light";
    firstSection.classList.add("bg-body-tertiary");
    firstSection.classList.remove("new");
    body.classList.add();
    body.classList.remove("new");
    projects.forEach((project) => {
      project.classList.remove("new2");
    });
  }
});
