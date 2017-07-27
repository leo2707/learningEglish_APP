import {GenericResponse} from '../_beans/_generic/generic.response';
import {Verb} from '../_beans/verb';

export class GetVerbsRs extends GenericResponse {
    verbs: Verb[];
}