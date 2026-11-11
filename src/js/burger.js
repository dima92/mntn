export const initBurger = () => {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".header__nav");
  const body = document.body;

  if (burger && nav) {
    burger.addEventListener("click", () => {
      burger.classList.toggle("is-open");
      nav.classList.toggle("is-open");

      body.classList.toggle("disable-scroll");
    });

    const navItems = document.querySelectorAll(".header__link, .header__btn");
    navItems.forEach((item) => {
      item.addEventListener("click", () => {
        burger.classList.remove("is-open");
        nav.classList.remove("is-open");
        body.classList.remove("disable-scroll");
      });
    });
  }
};
