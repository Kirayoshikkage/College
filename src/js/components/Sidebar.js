import { toggleScrollPadding } from "../functions/toggleScrollPadding";
import { toggleZIndex } from "../functions/toggleZIndex";

class Sidebar {
  constructor(selector, trigger) {
    this.sidebar = document.querySelector(selector);
    this.trigger = document.querySelector(trigger);

    this._status = false;
    this._sidebarStyle = getComputedStyle(this.sidebar);
    this._animationDuration =
      parseFloat(this._sidebarStyle.transitionDuration) * 1000;
  }

  init() {
    this.trigger.addEventListener("click", (e) => {
      if (e.target.disabled) return;

      e.preventDefault();
      this.toggleSidebar();
      this._toggleDisabledTrigger();
    });

    this.sidebar.addEventListener("click", (e) => {
      if (e.target === this.sidebar) this.toggleSidebar();
    });
  }

  toggleSidebar() {
    this._status = !this._status;

    toggleScrollPadding(this.sidebar, this._status);

    toggleScrollPadding(document.body, this._status);

    toggleZIndex({
      element: this.sidebar,
      boolean: this._status,
      duration: this._animationDuration,
      value: 100,
    });

    document.body.classList.toggle("overflow-hidden");
    this.sidebar.classList.toggle("sidebar_open");
    this.trigger.classList.toggle("sidebar-trigger_active");
  }

  _toggleDisabledTrigger() {
    this.trigger.disabled = true;

    setTimeout(() => {
      this.trigger.disabled = false;
    }, this._animationDuration);
  }
}

export { Sidebar };
