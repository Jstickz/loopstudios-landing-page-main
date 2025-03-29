const openSidebar = document.getElementById("nav__mobile__hamburger");
const closeSidebar = document.getElementById("hero__close__icon");
const sidebar = document.querySelector(".hero__sidebar");

openSidebar.addEventListener("click", () => {
  sidebar.classList.add("openSidebar");
});

closeSidebar.addEventListener("click", () => {
  sidebar.classList.remove("openSidebar");
});
