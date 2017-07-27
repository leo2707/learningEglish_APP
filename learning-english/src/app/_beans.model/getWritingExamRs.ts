import {GenericResponse} from '../_beans/_generic/generic.response';
import {Question} from '../_beans/question';

export class GetWritingExamRs extends GenericResponse {
    questions: Question[];
}