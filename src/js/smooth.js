import SmoothScroll from "smooth-scroll";

export function initSmoothScroll() {
  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
  });

  const sections = document.querySelectorAll("main section[id]");
  const sliderItems = document.querySelectorAll(".slider__item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute("id");

          const activeLink = document.querySelector(
            `.slider__link[href="#${activeId}"]`,
          );

          if (activeLink) {
            sliderItems.forEach((item) =>
              item.classList.remove("slider__item--active"),
            );

            activeLink
              .closest(".slider__item")
              .classList.add("slider__item--active");
          }
        }
      });
    },
    {
      threshold: 0.4,
    },
  );

  sections.forEach((section) => observer.observe(section));
}
