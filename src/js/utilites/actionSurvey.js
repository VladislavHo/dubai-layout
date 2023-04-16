import Survey from "../components/survey/survey-window";
import Surveys from "../components/survey/surveys";
import { survey_db } from "../../db/survey_db.js";


export default class ActionSurvey {
  constructor({ $surveyContainer, btnSurvey }) {
    this.$surveyContainer = $surveyContainer;
    this.btnSurvey = btnSurvey;
    this.survey = new Survey();
    this.survey_db = survey_db;
    this.windowPageSurvey = document.createElement("div");
    this.windowPageSurvey.classList.add("window__page-survey");

    this.btnPrev = document.createElement("button");
    this.btnNext = document.createElement("button");

    this.btnPrev.innerText = "prev";
    this.btnNext.innerText = "next";

    this.pageCount = 0;

    // this.surveys = new Surveys()

    this.btnSurvey.addEventListener("click", () => {
      this.survey.$windowSurvey.innerHTML = "";
      this.$surveyContainer.append(this.survey.render());
    });

    this.survey.$closeSurveyBtn.addEventListener("click", () => {
      this.survey.$windowSurvey.remove();
    });

    this.survey.$takeSurveyBtn.addEventListener("click", () => {
      this.survey.$windowSurvey.innerHTML = "";
      this.survey.$windowSurvey.append(
        new Surveys({ el: this.survey_db[this.pageCount], btn: this.checkedBtn() }).render() 
      )
      
      // this.pageCount++
    });

    this.btnNext.addEventListener('click', ()=>{
      this.survey.$windowSurvey.innerHTML = "";
      this.pageCount++
      this.survey.$windowSurvey.append(
        new Surveys({ el: this.survey_db[this.pageCount], btn: this.checkedBtn() }).render() 
      )
    })

    this.btnPrev.addEventListener('click', ()=>{
      this.survey.$windowSurvey.innerHTML = "";
      this.pageCount--
      this.survey.$windowSurvey.append(
        new Surveys({ el: this.survey_db[this.pageCount], btn: this.checkedBtn() }).render() 
      )
    })
  }





  checkedBtn(){
    console.log(this.pageCount, this.survey_db.length);
    if(this.pageCount == 0){
      return {
        btnNext: this.btnNext,
        btnPrev: null
      }
    }else if(this.pageCount == this.survey_db.length - 1){
      ;
      return {
        btnNext: null,
        btnPrev: this.btnPrev
      }
    }else{
     return {
        btnNext: this.btnNext,
        btnPrev: this.btnPrev
      }
    }
  }


}
