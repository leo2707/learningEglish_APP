import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';

import { Vocabulary } from '../_beans/vocabulary';
import { GetVocabularyRq } from '../_beans.model/getVocabularyRq';
import { GetVocabularyRs } from '../_beans.model/getVocabularyRs';
import {Status} from '../_beans/_generic/status';

@Injectable()
export class LessonService {

  private headers = new Headers({'Content-Type':'application/json'});
  private url = "http://localhost:8080/RestProvider/rest/learningEnglish";

  getVocabularyRs: GetVocabularyRs;
  status: Status;

  constructor(private http:Http) { }

  getVocabulary(request:GetVocabularyRq):Observable<GetVocabularyRs> {
    return this.http.post(this.url + "/getVocabulary", JSON.stringify(request), {headers: this.headers})
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  private handleError(error:Response | any){
    let errorMsg:string;
    if(error instanceof Response){
      let body = error.json() || '';
      let err = body.error || JSON.stringify(body);
      errorMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errorMsg = error.message ? error.message : error.toString();
    }
    return Observable.throw(errorMsg);
  }

}
