import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';

import { Question } from '../_beans/question';
import { QuestionMultichoice } from '../_beans/questionMultichoice';
import { GetWritingExamRq } from '../_beans.model/getWritingExamRq';
import { GetWritingExamRs } from '../_beans.model/getWritingExamRs';
import { GetMultichoiceExamRq } from '../_beans.model/getMultichoiceExamRq';
import { GetMultichoiceExamRs } from '../_beans.model/getMultichoiceExamRs';
import {Status} from '../_beans/_generic/status';

@Injectable()
export class ExamService {

  private headers = new Headers({'Content-Type':'application/json'});
  private url = "http://localhost:8080/RestProvider/rest/learningEnglish";

  getWritingExamRs: GetWritingExamRs;
  getMultichoiceExamRs: GetMultichoiceExamRs;
  status: Status;

  constructor(private http:Http) { }

  getWritingExam(request:GetWritingExamRq):Observable<GetWritingExamRs> {
    console.log("RQ: "+JSON.stringify(request));
    return this.http.post(this.url + "/getWritingExam", JSON.stringify(request), {headers: this.headers})
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  getMultichoiceExam(request:GetMultichoiceExamRq):Observable<GetMultichoiceExamRs> {
    return this.http.post(this.url + "/getMultichoiceExam", JSON.stringify(request), {headers: this.headers})
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
