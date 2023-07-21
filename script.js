console.log('Hello!');

class TodoItem extends HTMLElement {
  constructor () {
    super()
    this.innerHTML = "My first web component"
  }
}

customElements.define("todo-item", TodoItem)
