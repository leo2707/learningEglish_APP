import {Question} from '../_beans/question';

export class ExamToScoreEvent {
  questions: Question[];
  countAnswer: number;
  correctAnswers: number;
  mistakes: number;
}