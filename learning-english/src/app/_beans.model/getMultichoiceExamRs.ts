import {GenericResponse} from '../_beans/_generic/generic.response';
import {QuestionMultichoice} from '../_beans/questionMultichoice';

export class GetMultichoiceExamRs extends GenericResponse {
    questions: QuestionMultichoice[];
}