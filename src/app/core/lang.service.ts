import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, forkJoin, pipe } from 'rxjs';
import { share } from 'rxjs/operators';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LangService {

  constructor(private http:HttpClient) {

   }

   url=environment.i18nUrl;
   getLangData(locale: string, flow?:string): Observable<any> {
     console.log(locale,'locale')
     let fullUrl;
    switch(flow){
      case "fs":
      fullUrl = `${this.url}/flightstatus/${locale}_flightstatus.json`;
      break;
      case "checkin":
      fullUrl = `${this.url}/checkin_landing/${locale}_checkin_landing.json`;
      break;
    }
    const headers = new Headers();
    headers.append('Content-Type', 'application/json; charset=utf-8');
    return this.http.get(fullUrl).pipe(share());
  }
}
