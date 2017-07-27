import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';
import 'rxjs/add/operator/toPromise';

import { Lesson } from '../_beans/lesson';
import { GetLessonRq } from '../_beans.model/getLessonRq';
import { GetLessonRs } from '../_beans.model/getLessonRs';
import {Status} from '../_beans/_generic/status';

@Injectable()
export class LessonService {

  private headers = new Headers({'Content-Type':'application/json'});
  private url = "http://localhost:8080/RestProvider/rest/learningEnglish";

  getLessonRs: GetLessonRs;
  status: Status;

  constructor(private http:Http) { }

  getLesson(request:GetLessonRq):Observable<GetLessonRs> {
    return this.http.post(this.url + "/getLesson", JSON.stringify(request), {headers: this.headers})
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getLesson2(request:GetLessonRq):Promise<GetLessonRs> {
    return this.http.post(this.url + "/getLesson", JSON.stringify(request), {headers: this.headers})
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
        let body = res.json();
        return body || {};
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
