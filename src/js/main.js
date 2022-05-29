import { Sidebar } from "./components/Sidebar";
import { OurSpecialtiesModal } from "./components/Modal";
import { insertTextInHTML } from "./functions/insertTextInHTML";
import {
  settingsOurSpecialSlider,
  settingsNewsSlider,
} from "./functions/settingsSliders";
import { smoothScroll } from "./functions/smoothScroll";

initApp();

function initApp() {
  const dataForSpeciality = {
    one: {
      img: "./img/our-specialties__img.png",
      tabs: {
        desc: {
          key: "Описание",
          data: `
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid iure
            minus aperiam, quia adipisci aut unde ducimus fugiat saepe consequatur?
            Dolorem, delectus ea atque esse ut voluptates nemo? Inventore.
          </p>
        `,
        },
        title: {
          key: "Заголовок",
          data: `
    <p>
      Lorem 
    </p>
    `,
        },
        documents: {
          key: "Документы",
          data: `
    <p>
      da 
    </p>
    `,
        },
        lorem: {
          key: "Lorem",
          data: `
    <p>
      net
    </p>
    `,
        },
        ipsum: {
          key: "Ipsum",
          data: `
    <p>
      net
    </p>
    `,
        },
      },
    },
    two: {
      img: "./img/our-specialties__img.png",
      tabs: {
        desc: {
          key: "Описание",
          data: `
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid iure
            minus aperiam, quia adipisci aut unde ducimus fugiat saepe consequatur?
            Dolorem, delectus ea atque esse ut voluptates nemo? Inventore.
          </p>
        `,
        },
        title: {
          key: "Заголовок",
          data: `
    <p>
      Lorem 
    </p>
    `,
        },
      },
    },
    three: {
      img: "./img/our-specialties__img.png",
      tabs: {
        desc: {
          key: "Описание",
          data: `
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid iure
      minus aperiam, quia adipisci aut unde ducimus fugiat saepe consequatur?
      Dolorem, delectus ea atque esse ut voluptates nemo? Inventore.
    </p>
        `,
        },
        title: {
          key: "Заголовок",
          data: `
    <p>
      Lorem 
    </p>
    `,
        },
      },
    },
    four: {
      img: "./img/our-specialties__img.png",
      tabs: {
        desc: {
          key: "Описание",
          data: `
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid iure
      minus aperiam, quia adipisci aut unde ducimus fugiat saepe consequatur?
      Dolorem, delectus ea atque esse ut voluptates nemo? Inventore.
    </p>
        `,
        },
        title: {
          key: "Заголовок",
          data: `
    <p>
      Lorem 
    </p>
    `,
        },
      },
    },
    five: {
      img: "./img/our-specialties__img.png",
      tabs: {
        desc: {
          key: "Описание",
          data: `
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid iure
            minus aperiam, quia adipisci aut unde ducimus fugiat saepe consequatur?
            Dolorem, delectus ea atque esse ut voluptates nemo? Inventore.
          </p>
        `,
        },
        title: {
          key: "Заголовок",
          data: `
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas aliquid iure
            minus aperiam, quia adipisci aut unde ducimus fugiat saepe consequatur?
            Dolorem, delectus ea atque esse ut voluptates nemo? Inventore.
          </p>
          `,
        },
      },
    },
  };

  settingsOurSpecialSlider();

  settingsNewsSlider();

  smoothScroll(".smooth-scroll");

  const mainMenuSidebar = new Sidebar(".main-menu-sidebar", ".sidebar-trigger");
  mainMenuSidebar.init();

  const ourSpecialtiesModal = new OurSpecialtiesModal(
    ".our-specialties__modal",
    ".our-specialties .speciality__link"
  );
  ourSpecialtiesModal.init();

  const ourSpecialtiesSTriggers = document.querySelectorAll(
    ".our-specialties .speciality__link"
  );
  ourSpecialtiesSTriggers.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      let dataAttrValue =
          e.target.closest("[data-speciality]").dataset.speciality,
        content = dataForSpeciality[dataAttrValue];

      ourSpecialtiesModal.changeContent(content);
    });
  });

  const ourSpecialtiesDesc = document.querySelectorAll(
    ".our-specialties .speciality__desc"
  );
  ourSpecialtiesDesc.forEach((item) => {
    let dataAttr = item.closest(".swiper-slide").dataset.speciality,
      data = dataForSpeciality[dataAttr]["tabs"]["desc"]["data"];

    insertTextInHTML(item, data);
  });
}
