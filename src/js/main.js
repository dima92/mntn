import "../styles/main.scss";

import { initBurger } from "./burger";
import { initSmoothScroll } from "./smooth";

document.addEventListener("DOMContentLoaded", () => {
  initBurger();
  initSmoothScroll();
});
