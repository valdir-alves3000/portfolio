const menu = document.querySelector("#menu-open");
const menuResponsive = document.querySelector("#menu-responsive");

menu.addEventListener("click", menuToggle);
menuResponsive.addEventListener("click", () => {
  menuResponsive.classList.remove("active");
  menu.style.display = "block";
});

function menuToggle() {
  if (menuResponsive.classList.contains("active")) {
    menuResponsive.classList.remove("active");

    return;
  }
  menuResponsive.classList.add("active");
  menu.style.display = "none";
}
