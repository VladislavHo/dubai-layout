import "./style.scss";

import Header from "./js/components/header/header";
import Main from "./js/components/main";
import ActionPopapOrder from "./js/utilites/actionPopapOrder";
import OrderCallDOM from "./js/components/header/order-call";
import Survey from "./js/components/survey/Survey";
import Apartments from "./js/components/apartments/apartments";
import Parnters from "./js/components/partners/partners";

new Header({
  btn: document.querySelector(".header__menu-btn"),
  box: document.querySelector(".menu__box"),
});

new ActionPopapOrder({
  body: document.body,
  openPopapBtn: document.querySelector(".order__btn"),
  popap: new OrderCallDOM(),
});

new Main({
  btn: document.querySelector(".main__modal-close"),
  modal: document.querySelector(".main__modal"),
});

document.querySelector(".main__selection__project-btn").addEventListener("click", () => {
  document.body.append(new Survey().render());
  document.body.style.overflow = "hidden";
});



document
  .querySelector(".apartments")
  .append(
    new Apartments({
      container: document.querySelector(".l-apartments")
    }).render()
  );


  document.querySelector('.partners').append(new Parnters(
    {container: document.querySelector('.partners__content')}
  ).render())


  document.querySelector(".survey__block").append(new Survey().renderBlock())