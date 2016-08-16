import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Data {

  static BASE_URL: string = 'https://bgg-json.azurewebsites.net';

  constructor(public http: Http) {
  }

  query(URL: string): Observable<any[]> {
    let queryString = `${Data.BASE_URL}${URL}`;

    return this.http.get(queryString).map((res: any) => {
      return res.json();
    });

  }

  getCollection(userName: string, grouped: boolean = true): Observable<any> {
    return this.query(`/collection/${userName}?grouped=${grouped.toString()}`);
  }

  getHot(): Observable<any> {
    return this.query('/hot');
  }

  getThing(id: string): Observable<any> {
    return this.query(`/thing/${id}`);
  }

}

