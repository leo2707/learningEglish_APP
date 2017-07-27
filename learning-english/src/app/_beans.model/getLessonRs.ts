import {GenericResponse} from '../_beans/_generic/generic.response';
import {Lesson} from '../_beans/lesson';

export class GetLessonRs extends GenericResponse {
    lesson: Lesson;
}