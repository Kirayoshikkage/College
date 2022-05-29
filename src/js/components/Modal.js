import { toggleScrollPadding } from "../functions/toggleScrollPadding";
import { toggleZIndex } from "../functions/toggleZIndex";
import { Tabs } from "./Tabs";

class Modal {
  constructor(selector, triggers) {
    this.modal = document.querySelector(selector);
    this.triggers = document.querySelectorAll(triggers);

    this._status = false;
    this._buttonClose = this.modal.querySelector(".modal__close");
    this._modalStyle = getComputedStyle(this.modal);
    this._animationDuration =
      parseFloat(this._modalStyle.transitionDuration) * 1000;
  }

  init() {
    this.triggers.forEach((item) =>
      item.addEventListener("click", (e) => {
        e.preventDefault();
        this.toggleModal();
      })
    );

    this._buttonClose.addEventListener("click", () => {
      this.toggleModal();
    });

    this.modal.addEventListener("click", (e) => {
      if (e.target === this.modal) this.toggleModal();
    });
  }

  toggleModal() {
    this._status = !this._status;

    toggleScrollPadding(this.modal, this._status);

    toggleScrollPadding(document.body, this._status);

    toggleZIndex({
      element: this.modal,
      boolean: this._status,
      duration: this._animationDuration,
      value: 100,
    });

    document.body.classList.toggle("overflow-hidden");
    this.modal.classList.toggle("modal_open");
  }
}

class OurSpecialtiesModal extends Modal {
  constructor(selector, triggers) {
    super(selector, triggers);
    this.data = null;
    this.contentImg = this.modal.querySelector(".modal__item_img");
    this.contentTabs = this.modal.querySelector(".our-specialties__tabs");
  }

  changeContent(data) {
    if (this.data === data) return;

    this.clearContent();

    this.data = data;

    let { img, tabs } = this.data,
      modalTabs = new Tabs(".our-specialties__tabs", tabs);

    this.contentImg.style.cssText = `
    background: url(${img}) no-repeat;
    background-size: cover;
    `;

    modalTabs.init();
  }

  clearContent() {
    this.contentTabs.textContent = "";
    this.contentTabs.insertAdjacentHTML(
      "beforeend",
      `          
      <ul class="tabs__triggers"></ul>
      <div class="tabs__body"></div>`
    );
  }
}

export { Modal, OurSpecialtiesModal };
