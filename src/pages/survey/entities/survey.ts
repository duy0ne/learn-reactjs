import EAnswer from "./answer";
import EPersonInfo from "./personInfo";

export default class ESurvey {
  personInfo?: EPersonInfo;
  firstAgree?: boolean;
  answers: Array<Array<EAnswer>> = [];
  lastAgree?: boolean;
}