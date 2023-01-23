/**
  * Виджет collapsible, воссоздаёт сам себя, конструктор принимает строку в качестве контента
  * выпадающего блока виджета.
  */
export default class Collapse {
  constructor(content = '') {
    this.container = null;
    this.btn = null;
    this.wrapText = null;
    this.text = null;
    this.content = content;

    this.onClick = this.onClick.bind(this);
  }

  init() {
    this.checkBinding();
    this.container.insertAdjacentHTML('beforeend', Collapse.markUp);
    this.btn = this.container.querySelector('.widget__btn');
    this.wrapText = this.container.querySelector('.widget__wrap-text');
    this.text = this.container.querySelector('.widget__text');
    this.text.textContent = this.content;
    this.btn.addEventListener('click', this.onClick);
  }

  onClick() {
    this.wrapText.classList.toggle('collapse');
    this.btn.classList.toggle('active');
  }

  static get markUp() {
    return `<div class="widget">
    <div class="widget__wrap-btn">
      <button class="widget__btn">Collapse</button>
    </div>
    <div class="widget__wrap-text">
      <div class="widget__text"></div>
    </div>
  </div>`;
  }

  bindToDOM(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error('container is not HTMLElement');
    }
    this.container = container;
  }

  checkBinding() {
    if (this.container === null) {
      throw new Error('container not bind to DOM');
    }
  }
}