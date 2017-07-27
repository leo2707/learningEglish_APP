import {GenericResponse} from '../_beans/_generic/generic.response';
import {Vocabulary} from '../_beans/vocabulary';

export class GetVocabularyRs extends GenericResponse {
    listVocabulary: Vocabulary[];
}