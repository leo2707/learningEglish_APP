import {GenericResponse} from '../_beans/_generic/generic.response';
import {Theme} from '../_beans/theme';

export class GetAllThemesRs extends GenericResponse {
    themes: Theme[];
}