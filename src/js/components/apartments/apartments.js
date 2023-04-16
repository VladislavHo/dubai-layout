import Element from "../../utilites/Element";
import { apartments_db } from "../../../db/apartments_db";
import { apartments_img_db } from "../../../db/apartments_img_db";
import ApartmentsSVG from "./apartomentsSVG";

export default class Apartments {
  #low = 150.0;
  #medium = 300.0;
  #high = 700.0;
  #more = 999.999999;

  #lowColor = "#D9B474";
  #mediumColor = "#D97A74";
  #highColor = "#B874D9";

  constructor({ container }) {
    this.$apartments = container;
    this.apartments_db = apartments_db;
    this.apartments_img_db = apartments_img_db;
  }

  toggleImageButtons(){
    const prevBtn = new Element('button', 'prev-btn').element
    const nextBtn = new Element('button', 'next-btn').element


    prevBtn



    return {
      prevBtn,
      nextBtn
    }

  }


  lowDOM() {
    const lowContainer = new Element("div", "apartments__low").element;
    const lowActive = new Element("div", "apartments__low-active").element;
    const title = new Element("h3").element;
    title.textContent = "Недвижимость от $150,000";

    const ul = this.searchApartments(this.#low, this.#medium, this.#lowColor);



    lowActive.append(ul)
    lowContainer.append(title, lowActive);
    
    return lowContainer;
  }

  mediumDOM() {
    const mediumContainer = new Element("div", "apartments__medium").element;
    const mediumActive = new Element("div", "apartments__medium-active").element;
    const title = new Element("h3").element;
    title.textContent = "Недвижимость от $300,000";

    const ul = this.searchApartments(
      this.#medium,
      this.#high,
      this.#mediumColor
    );

    mediumActive.append(ul)
    mediumContainer.append(title, mediumActive);

    return mediumContainer;
  }
  highDOM() {
    const highContainer = new Element("div", "apartments__high").element;
    const highActive = new Element("div", "apartments__high-active").element;

    const title = new Element("h3").element;
    title.textContent = "Недвижимость от $700,000";

    const ul = this.searchApartments(this.#high, this.#more, this.#highColor);

    highActive.append(ul)
    highContainer.append(title, highActive);

    return highContainer;
  }

  searchApartments(start, end, color) {
    const card = new Element("div", "apartment__card").element;

    const svg = new ApartmentsSVG(color);

    this.apartments_db.forEach((el) => {
      const cardContent = new Element("div", "apartment__card-content").element;

      if (el.info.price >= start && el.info.price <= end) {
        const img = new Image();
        const { name, format } = this.searchImg(el.imgID);

        img.src = `./public/img/apartments/${name}.${format}`;

        const ul = new Element("ul").element;
        const { company, title, rooms, sizeAport, price } = el.info;

        // company
        const companyLi = new Element("li", "apartment__card-company").element;
        companyLi.textContent = company;

        // title
        const titleLi = new Element("li", "apartment__card-title").element;
        titleLi.textContent = title;

        // info
        const infoLi = new Element("li", "apartment__card-info").element;
        const roomSvg = svg.renderSVGroom();
        const sizeSvg = svg.renderSVGsize();
        const correctWorld = this.pluralizeWord(rooms, "комнат");
        const spanRooms = new Element("span").element;
        const spanSize = new Element("span").element;
        const totalRooms = correctWorld;
        const totalSize = `${sizeAport} кв.м.`;

        spanSize.append(sizeSvg, totalSize);
        spanRooms.append(roomSvg, totalRooms);
        infoLi.append(spanRooms, spanSize);

        // price
        const priceLi = new Element("li", "apartment__card-price").element;
        priceLi.textContent = ` ${price}`;



        ul.append(companyLi, titleLi, infoLi, priceLi);

        cardContent.append(img, ul);
        card.append(cardContent);
      }

    });
    return card;
  }

  searchImg(id) {
    const imgName = this.apartments_img_db.filter((el) =>
      el.id === id ? { name: el.name, format: el.format } : ""
    )[0];

    return imgName;
  }

  pluralizeWord(number, word) {
    // определяем остаток от деления на 10 и 100
    const mod10 = number % 10;
    const mod100 = number % 100;
    // если число заканчивается на 1 и не заканчивается на 11
    if (mod10 === 1 && mod100 !== 11) {
      return `${number} ${word}a`;
    }

    // если число заканчивается на 2, 3, 4 и не заканчивается на 12, 13, 14
    if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) {
      return `${number} ${word}ы`;
    }

    // во всех остальных случаях
    return `${number} ${word}`;
  }

  render() {
    this.$apartments.append(this.lowDOM(), this.mediumDOM(), this.highDOM());

    return this.$apartments;
  }
}
