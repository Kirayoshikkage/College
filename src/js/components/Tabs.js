class Tabs {
  constructor(selector, obj) {
    this.selector = document.querySelector(selector);
    this.triggers = this.selector.querySelector(".tabs__triggers");
    this.body = this.selector.querySelector(".tabs__body");
    this.data = obj;
    this.currentContent = null;
    this.currentTrigger = null;
  }

  init() {
    this._createElement(this._createTabTrigger, this.triggers);

    this._createElement(this._createContentTrigger, this.body);

    this._changeContent(this.triggers.querySelector(".tabs__trigger"));

    this.triggers.addEventListener("click", (e) => {
      this._changeContent(e.target);
    });
  }

  _createElement(cb, parent) {
    let fragment = ``;

    for (let key in this.data) {
      fragment += cb(key, this.data[key]);
    }

    parent.insertAdjacentHTML("beforeend", fragment);
  }

  _createTabTrigger(key, value) {
    return `
    <li data-trigger="${key}" class="tabs__trigger">
      ${value["key"]}
    </li>
    `;
  }

  _createContentTrigger(key, value) {
    return `          
    <div data-content="${key}" class="tabs__content">
      ${value["data"]}
    </div>`;
  }

  _changeContent(element) {
    let dataAttr = element.dataset.trigger;

    this._toggleContent(dataAttr);
    this._toggleTrigger(element);
  }

  _toggleContent(dataAttr) {
    if (this.currentContent) this._hideElement(this.currentContent);

    let element = this.body.querySelector(`[data-content='${dataAttr}']`);

    this.currentContent = element;

    this._showElement(element);
  }

  _toggleTrigger(item) {
    this.currentTrigger?.classList.toggle("tabs__trigger_active");

    this.currentTrigger = item;

    this.currentTrigger.classList.toggle("tabs__trigger_active");
  }

  _hideElement(element) {
    element.style.cssText = `
      max-height:0;
      overflow:hidden;
    `;
  }

  _showElement(element) {
    element.style.cssText = `
      max-height:${element.scrollHeight}px;
      overflow:;
    `;
  }
}

export { Tabs };
