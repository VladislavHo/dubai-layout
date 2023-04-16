import Element from "../../utilites/Element.js";
import { partners_db } from "../../../db/partners_db.js";
import { partners_db_img } from "../../../db/partners_db_img.js";

export default class Parnters {
  constructor({ container }) {
    this.partners = container;
    this.layout = new Element("div", "l-partners").element;
    this.db = [...partners_db, { name: "sobha" }];
    this.imgDB = partners_db_img;
  }

  titleDOM() {
    const title = new Element("h3").element;
    const suptitle = new Element("p").element;

    title.textContent = "Мы являемся партнерами ведущих застройщиков";
    suptitle.textContent =
      "Но и ваш уютный дом, который часто при получении ключей наши клиенты не хотят перепродавать. Квартиры и проекты идеальны";

    return { title, suptitle };
  }

  getPartnersDOM() {
    const logoContaner = new Element("div", "partners__container").element
    const logoPartners = new Element("div", "partners__logo").element;

    this.db.forEach(({ id, name, logoID }) => {
      const logo = new Element("div", "logo").element;

      const img = new Image();

      img.src = `./public/img/partners/${name}.svg`;
      img.alt = name;

      logo.append(img);
      logoPartners.append(logo);
      logoContaner.append(logoPartners)
    });

    return logoContaner;
  }


  render() {
    document
      .querySelector(".partners")
      .append(this.titleDOM().title, this.titleDOM().suptitle);
    this.layout.append(this.getPartnersDOM());
    this.partners.append(this.layout);

    return this.partners;
  }
}
