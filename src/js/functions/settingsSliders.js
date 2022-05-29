import Swiper from "swiper/bundle";

function settingsOurSpecialSlider() {
  const slidesPerViewDesctop = 2,
    slidesPerViewPortretDesctop = 1;

  const ourSpecialtiesSlider = new Swiper(".our-specialties__slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    direction: "vertical",
    pagination: {
      el: ".our-specialties__pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
        direction: "horizontal",
      },
      425: {
        direction: "horizontal",
        slidesPerView: slidesPerViewDesctop,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: slidesPerViewDesctop,
        spaceBetween: 30,
        direction: "vertical",
      },
    },
  });

  changeSlidesPerView();
  ourSpecialtiesSlider.update();

  ourSpecialtiesSlider.on("changeDirection", () => {
    let pagination = document.querySelector(".our-specialties__pagination");

    pagination.classList.toggle("swiper-pagination-horizontal");
    pagination.classList.toggle("swiper-pagination-vertical");
  });

  window.addEventListener("orientationchange", () => {
    changeSlidesPerView();
    ourSpecialtiesSlider.update();
  });

  window.addEventListener("resize", () => {
    changeSlidesPerView();
    ourSpecialtiesSlider.update();
  });

  function changeSlidesPerView() {
    let windowHeight = document.body.offsetHeight,
      windowWidth = document.body.offsetWidth;

    if (windowHeight < 600 && windowWidth >= 768) {
      ourSpecialtiesSlider.params.slidesPerView = 1;
    } else if (windowHeight > 600 && windowWidth >= 768) {
      ourSpecialtiesSlider.params.slidesPerView = 2;
    }
  }
}

function settingsNewsSlider() {
  const heroNewsSlider = new Swiper(".news", {
    loop: true,
    pagination: {
      el: ".news__pagination",
      clickable: true,
    },
  });
}

export { settingsOurSpecialSlider, settingsNewsSlider };
