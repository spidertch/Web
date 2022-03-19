const body = document.querySelector("body"),
  sidebar = body.querySelector(".sidebar"),
  toggle = body.querySelector(".toggle"),
  searchBtn = body.querySelector(".search-box"),
  modeSwtich = body.querySelector(".toggle-switch"),
  modeText = body.querySelector(".mode-text");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
})
searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("close");
})
modeSwtich.addEventListener("click", () => {
  var tmp = localStorage.getItem('darkMode');
  console.log(tmp);
  localStorage.removeItem('darkMode');
  if (tmp == "true") {
    localStorage.setItem('darkMode', false);
    body.classList.toggle("dark");
  } else {
    localStorage.setItem('darkMode', true);
    body.classList.toggle("dark");
  }
})
document.addEventListener("DOMContentLoaded", function (event) {
  checkMode();
})
function checkMode() {
  console.log(localStorage.getItem('darkMode'))
  if (localStorage.getItem('darkMode') == "true" &&
    !body.classList.contains("dark")) {
    modeText.innerText = "Light Mode"
    body.classList.add("dark");
    localStorage.setItem('darkMode', true);
    console.log("Modo oscuro activado")
  } else {
    modeText.innerText = "Dark Mode"
    body.classList.remove("dark");
    localStorage.setItem('darkMode', false);
    console.log("Modo oscuro desactivado")
  }
}
