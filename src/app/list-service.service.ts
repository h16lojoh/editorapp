import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IObject } from './object';


@Injectable({
  providedIn: 'root'
})
export class ListServiceService {

  private _url: string = 'assets/data/test.json';
  
  /**http://localhost:1337/list */
  constructor(private http: HttpClient) { }

  getList(): Observable<IObject[]> {
    return this.http.get<IObject[]>(this._url);
  }
}
