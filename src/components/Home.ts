export class Home {
  private container = document.createElement("div");

  render() {
    const pageLabel = document.createElement("label");
    pageLabel.innerText = "Welcome to the Homepage!";
    this.container.append(pageLabel);
    return this.container;
  }
}
