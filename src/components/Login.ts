export class Login {
  private container = document.createElement("div");

  render() {
    const pageLabel = document.createElement("label");
    pageLabel.innerText = "Login!";
    this.container.append(pageLabel);
    return this.container;
  }
}
