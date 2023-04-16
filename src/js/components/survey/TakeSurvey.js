import Element from "../../utilites/Element";

export default class TakeSurvey {
  constructor({ btnNext, btnPrev, questionsBD, questionsBDImages }) {
    this.btnNext = btnNext;
    this.btnPrev = btnPrev;
    this.questionsBD = questionsBD;
    this.questionsBDImages = questionsBDImages;
    this.checked = false;
    this.$surveyElement = new Element("div", "questions").element;
    this.$surveyContainer = new Element("div", "survey__container").element;
    this.toGetConsultationBtn = new Element(
      "button",
      "get__consultation"
    ).element;
    this.page = 0;

    this.btnNext.addEventListener("click", () => {
      this.page >= this.questionsBD.at(-1)
        ? (this.page = this.questionsBD.at(-1))
        : this.page++;
      this.renderNewQuestions();
    });

    this.btnPrev.addEventListener("click", () => {
      this.page <= 0 ? (this.page = 0) : this.page--;
      this.renderNewQuestions();
    });

    this.toGetConsultationBtn.textContent = "получить консультацию";

    this.toGetConsultationBtn.addEventListener("click", () => {
      this.$surveyContainer.innerHTML = "the end!";
    });
  }

  getImageName(id) {
    if (!id) return null;

    const image = this.questionsBDImages.find((el) => el.id === id);

    return image ? `${image.name}.${image.format}` : null;
  }

  getBtnNav() {
    const btnContainer = new Element("div", "btn__nav-container").element;
    btnContainer.innerHTML = "";
    this.btnNext.innerHTML = "";
    this.btnPrev.innerHTML = "";
    const arrowLeft = new Element("div", "arrow__left").element;
    const arrowRight = new Element("div", "arrow__right").element;
    const titleBtnNext = new Element("span").element;

    titleBtnNext.textContent = "следующий вопрос";

    this.btnNext.append(titleBtnNext, arrowRight);

    this.btnPrev.append(arrowLeft);

    btnContainer.append(
      this.page <= 0 ? "" : this.btnPrev,
      this.page >= this.questionsBD.length - 1
        ? this.toGetConsultationBtn
        : this.btnNext
    );

    return btnContainer;
  }

  renderNewQuestions() {
    this.$surveyContainer.innerHTML = "";
    const survey = this.questionsBD[this.page];
    const form = new Element("form", "form-survey").element;
    const title = new Element("h3").element;

    title.textContent = survey.question;
    form.append(title);

    survey.answers.forEach((el, i) => {
      const labelContainer = new Element("div", "label__container").element;
      const label = new Element("label").element;
      const input = new Element("input").element;
      const span = new Element("span").element;
      input.value = el.id;

      input.checked = el.checked;

      input.type = survey.multiple ? "checkbox" : "radio";

      input.name = el.name;

      const nameImg = this.getImageName(el.imgID);

      const img = new Image();
      if (el.imgID) {
        img.src = `./public/img/survey/img/${nameImg}`;
        label.append(img);
      } else {
        labelContainer.style.cssText = `width: 45%;margin: 20px;`;
        span.style.cssText = `padding: 26px`;
      }

      if (survey.answers.length === 3) {
        labelContainer.style.cssText = `width: 45%;margin: 20px; `;
        form.style.justifyContent = "";
        form.style.cssText = `align-content: flex-start; justify-content: flex-start;`;
      }

      span.textContent = el.a;
      span.append(input);
      label.append(span);
      labelContainer.append(label);
      form.append(labelContainer);
    });

    this.$surveyContainer.append(title, form, this.takeSurveyFooter());

    this.$surveyElement.append(this.$surveyContainer);
  }

  getCountPage() {
    const countContainer = new Element("div", "take__survey-count").element;

    const numberPageContainer = new Element("div", "number__page-container")
      .element;
    const numberPage = new Element("span", "number__page").element;
    const allNumberPage = new Element("span", "all__number__page").element;

    numberPage.textContent = `0${this.page + 1}`;
    allNumberPage.textContent = `0${this.questionsBD.length}`;

    const lienerContainer = new Element("div", "lienter__contaienr").element;
    const countLienter = new Element("div", "count__liener").element;

    countLienter.style.width = `${
      (100 / this.questionsBD.length) * (this.page + 1)
    }%`;

    lienerContainer.append(countLienter);

    numberPageContainer.append(numberPage, "/", allNumberPage);

    countContainer.append(numberPageContainer, lienerContainer);

    return countContainer;
  }

  takeSurveyFooter() {
    const footer = new Element("div", "take__survey-footer").element;

    footer.append(this.getCountPage(), this.getBtnNav());

    return footer;
  }

  render() {
    this.renderNewQuestions();
    return this.$surveyElement;
  }
}
