export default class ActionPopapOrder{
  constructor({body, openPopapBtn, popap}){
    this.body = body
    this.openPopapBtn = openPopapBtn,
    this.popap = popap

    // this.a = new OrderCallDOM()


    this.openPopapBtn.addEventListener("click", () => {
      this.popap.popapOrderContainerInfo.innerHTML = '';
      this.body.append(this.popap.render());
    });
    
    this.popap.close.addEventListener('click', () => {
      this.popap.render().remove();
    });




  }
}
