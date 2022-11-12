const headerBurger = document.querySelector(".header__burger");
const itemHeaderBurger = document.querySelectorAll(".header__burger-btn");
const menuBurger = document.querySelector(".header__list");

headerBurger.addEventListener("click", clickBurgerBtn);

function clickBurgerBtn(event) {
  event.preventDefault();

  itemHeaderBurger.forEach((item) => item.classList.toggle("active"));
  menuBurger.classList.toggle("show");
  document.addEventListener("click", closeMenuOutside);
}

function closeMenuOutside(event) {
  const target = event.target;
  const isMenuItemLink = document.getElementById(
    `${target.dataset.burgerLinkMenu}`
  );

  const clickOnButtonBurgerMenu = event.composedPath().includes(headerBurger);

  if (!clickOnButtonBurgerMenu) {
    const clickMenuLink = event.composedPath().includes(isMenuItemLink);
    if (!clickMenuLink) {
      itemHeaderBurger.forEach((item) => item.classList.remove("active"));
      menuBurger.classList.remove("show");
      document.removeEventListener("click", closeMenuOutside);
    }
  }
}
