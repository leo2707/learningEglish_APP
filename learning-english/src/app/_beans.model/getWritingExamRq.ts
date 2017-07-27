import {GenericRequest} from '../_beans/_generic/generic.request';
import {ConfigExam} from '../_beans/configExam';

export class GetWritingExamRq  extends GenericRequest {
    lessonId: string;
    vocabularyType: string;
    configExam: ConfigExam;
}