export default class Element {
  constructor(tag = null, className = null) {
    if (tag) this.element = document.createElement(tag);

    if (className) this.element.classList.add(className);
  }
}
