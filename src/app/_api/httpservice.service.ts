import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class HttpserviceService {
  private _url: string =  'https://jsonplaceholder.typicode.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.httpClient.get(`${this._url}/users`)
                  .map(data => data);
  }

  get(id: string): Observable<any> {
    return this.httpClient.get(`${this._url}/posts?userId=${id}`)
                  .map(data => data);
  }

}
