import Element from "../../utilites/Element";
import TakeSurvey from "./TakeSurvey";
import { survey_db } from "../../../db/survey_db";
import { survey_db_img } from "../../../db/survey_db_img";

export default class Survey {
  constructor() {
    this.$surveyWindow = new Element("div", "survey__window").element;
    this.$closeSurveyWindowBtn = new Element(
      "button",
      "close-survey__window-btn"
    ).element;
    this.$nextAnswer = new Element("button", "next__answer").element;
    this.$prevAnswer = new Element("button", "prev__answer").element;
    this.$takeSurveyBtn = new Element(
      "button",
      "survey__content-block__take-survey-btn"
    ).element;
    this.survey_db = survey_db;
    this.survey_db_img = survey_db_img;

    this.$closeSurveyWindowBtn.addEventListener("click", () => {
      document.body.style.overflow = "auto";
      this.$surveyWindow.remove();
    });

    this.$takeSurveyBtn.addEventListener("click", () => {
      this.$surveyWindow.innerHTML = "";
      this.$surveyWindow.append(
        new TakeSurvey({
          btnNext: this.$nextAnswer,
          btnPrev: this.$prevAnswer,
          questionsBD: this.survey_db,
          questionsBDImages: this.survey_db_img,
        }).render()
      );
    });
  }

  bg() {
    const $surveyBG = new Element("div", "survey__window-bg").element;
    const $surveyBGBlur = new Element("div", "survey__window-bg__blur").element;
    const $surveyBGBlurImage = new Element(
      "div",
      "survey__window-bg__blur-image"
    ).element;

    $surveyBGBlur.appendChild($surveyBGBlurImage);
    $surveyBG.appendChild($surveyBGBlur);

    return $surveyBG;
  }

  getImageBigTitle(){
    const img = new Image()
    img.src = './public/img/big_logo_white.png'
    img.alt = 'big_logo_white'
    img.classList.add("big__title-img_white")


    return img
  }

  getImagePresentIcon(){
    const img = new Image();

    img.src = `./public/img/survey/present.svg`;
    img.alt = "present";

    return img
  }

  surveyContent() {
    // create element
    const $survey = new Element("div", "survey").element;
    const $surveyContent = new Element("div", "survey__content").element;
    const $surveyContentBlock = new Element("div", "survey__content-block")
      .element;
    const $surveyContentBlockCard = new Element(
      "div",
      "survey__content-block__card"
    ).element;
    const $surveyContentBlockCardIcon = new Element(
      "div",
      "survey__content-block__card-icon"
    ).element;
    this.$closeSurveyWindowBtn.textContent = "x";
    const $title = document.createElement("h3");
    const $supTitle = document.createElement("p");
    //

    $title.textContent = "Подберите вариант недвижимости в ОАЭ за 1 минуту";
    $supTitle.innerHTML = `Ответьте на несколько вопросов и <b>получите подборку с лучшими предложениями</b> на рынке
    недвижимости Дубая по вашим параметрам`;

    const $cardText = document.createElement("p");


    $cardText.innerHTML = `<b>А также вы получите скидку 5% на покупку недвижимости</b>`;
    const arrowRight = new Element("div", "arrow__right").element
    const takeBtnText = new Element("span").element
    takeBtnText.textContent = "пройти опрос"  
    
    this.$takeSurveyBtn.append(takeBtnText, arrowRight);

    $surveyContentBlockCardIcon.append(this.getImagePresentIcon());

    $surveyContentBlockCard.append($surveyContentBlockCardIcon, $cardText);


    const btnContaienr = document.createElement('div')


    btnContaienr.append(this.$takeSurveyBtn)
    $surveyContentBlock.append(
      $title,
      $supTitle,
      $surveyContentBlockCard,
      btnContaienr
    );

    $surveyContent.append($surveyContentBlock);

// this.$closeSurveyWindowBtn,
    $survey.append( $surveyContent);

    return $survey;
  }

  close() {}

  renderBlock() {
    this.$surveyWindow.append(this.bg(), this.surveyContent());
    this.$closeSurveyWindowBtn.remove();
    return this.$surveyWindow;
  }

  render() {
    this.$surveyWindow.append(this.bg(),this.getImageBigTitle(), this.surveyContent());
    return this.$surveyWindow;
  }
}
