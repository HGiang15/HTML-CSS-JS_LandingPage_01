document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll(".navbar .item-link");

  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      links.forEach((link) => link.classList.remove("active"));
      event.target.classList.add("active");
    });
  });
});
