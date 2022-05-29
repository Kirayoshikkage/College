function smoothScroll(selector) {
  const smoothLinks = document.querySelectorAll(selector);

  smoothLinks.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      const id = item.getAttribute("href");

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
}

export { smoothScroll };
