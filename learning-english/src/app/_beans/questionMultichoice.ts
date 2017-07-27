import {Question} from '../_beans/question';

export class QuestionMultichoice {
  question: Question;
  options:
  {
    key: string;
    value: string;
  }[];
}