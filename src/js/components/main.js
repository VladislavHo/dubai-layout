export default class Main{
  constructor({btn, modal}){
    this.btn = btn
    this.modal = modal


    this.btn.addEventListener('click', ()=>{
      this.modal.remove()
    })

  }
}