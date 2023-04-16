export default class OrderCallDOM {
  constructor() {
    this.popapOrder = document.createElement("div");
    this.popapOrderContainer = document.createElement("div");
    this.popapOrderContainerInfo = document.createElement("div");
    this.form = document.createElement("form");
    this.name = document.createElement("input");
    this.phone = document.createElement("input");
    this.sendOrder = document.createElement("button");

    this.close = document.createElement("button");

    // this.regNunber()
  }

  closeDOM() {
    const contaienrBtn = document.createElement("div");
    contaienrBtn.classList.add("popap-order-container-close");
    this.close.classList.add("popap-order-container-close-btn");
    const span = document.createElement("span");

    this.close.append(span);
    contaienrBtn.append(this.close);


    return contaienrBtn;
  }

  regNunber(val) {
    const num = new RegExp(
      /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
    );
    console.log("12312342".includes(num));
  }

  formRender() {
    this.name.setAttribute("type", "text");
    this.name.setAttribute("placeholder", "Введите ваше имя");
    this.phone.setAttribute("type", "number");
    this.phone.setAttribute("placeholder", "(___) ___-___-__");
    this.sendOrder.innerText = "Отправить заявку";

    this.form.append(this.name, this.phone, this.sendOrder);

    return this.form;
  }

  infoRender() {
    const title = document.createElement("h3");
    const subtitle = document.createElement("p");

    title.innerText = "Обратный звонок";
    subtitle.innerText =
      "Оставьте ваши контактные данные и наш менеджер с вами свяжется";

    this.popapOrderContainerInfo.append(title, subtitle, this.formRender());

    return this.popapOrderContainerInfo;
  }

  render() {
    this.popapOrder.classList.add("popap-order");
    this.popapOrderContainer.classList.add("popap-order-container");
    this.popapOrderContainerInfo.classList.add("popap-order-container-info");

    this.popapOrderContainer.append(this.infoRender(), this.closeDOM());

    this.popapOrder.append(this.popapOrderContainer);
    return this.popapOrder;
  }
}


