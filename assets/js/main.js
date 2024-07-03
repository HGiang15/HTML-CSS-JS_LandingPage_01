// Active menu onclick
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar .item-link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      links.forEach((link) => link.classList.remove("active"));
      event.target.classList.add("active");
    });
  });
});

// cop menu PC to menu Mobile
const pcNav = document.querySelector("#pc-nav");
const mobileNav = document.querySelector("#mobile-nav");

// cop from PC nav to Mobile nav
mobileNav.innerHTML = pcNav.innerHTML;
