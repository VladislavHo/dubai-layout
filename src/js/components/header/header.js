export default class Header{
  constructor({btn, box}){
    this.btn = btn
    this.box = box
    this.info = document.querySelector('.header__info')
    this.link = document.querySelector('.header__link')
    this.action = false


    this.btn.addEventListener("click", ()=>{
      if(!this.action){
        this.info.style.display = 'none'
        this.link.style.display = 'flex'

          document.querySelector('header').style.cssText = `  background: none;
          box-shadow: none;`
 

      }else{
        this.info.style.display = 'flex'
        this.link.style.display = 'none'
        document.querySelector('header').style.cssText = `  background-color: #fff;
        box-shadow: 0px 8px 26px 19px rgba(255, 255, 255, 1);`
      }

      if(window.innerWidth >= 1024){
        document.querySelector('header').style.cssText = `  background-color: #fff;
        box-shadow: 0px 8px 26px 19px rgba(255, 255, 255, 1);`
      }

      this.btn.classList.toggle('btn-circle');
      this.action = !this.action;
    });
  }


}

// nav__start-ponel