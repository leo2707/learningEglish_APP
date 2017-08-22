import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/publishReplay';

import { Theme } from '../_beans/theme';
import { GetAllThemesRq } from '../_beans.model/GetAllThemesRq';
import { GetAllThemesRs } from '../_beans.model/GetAllThemesRs';
import {Status} from '../_beans/_generic/status';

@Injectable()
export class ThemeService {

  private headers = new Headers({'Content-Type':'application/json'});
  //private url = "http://localhost:8080/RestProvider/rest/learningEnglish";
  private url = "http://192.168.1.103:8080/RestProvider/rest/learningEnglish";

  getAllThemesRs: GetAllThemesRs;
  status: Status;

  constructor(private http:Http) { }

  getAllThemes(request:GetAllThemesRq):Observable<GetAllThemesRs> {
    return this.http.post(this.url + "/getAllThemes", JSON.stringify(request), {headers: this.headers})
      .map((response: Response) => response.json())
      .catch(this.handleError);
  }

  // getThemesMock(request:GetAllThemesRq):Promise<GetAllThemesRs> {
  //   this.getAllThemesRs = new GetAllThemesRs();
  //   this.getAllThemesRs.themes = THEMES;

  //   this.status = new Status;
  //   this.status.code = "SUCCESS";
  //   this.getAllThemesRs.status = this.status;

  //   return Promise.resolve(this.getAllThemesRs);
  // }

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
