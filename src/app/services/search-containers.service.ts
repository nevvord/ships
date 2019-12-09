import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchContainersService {

  private _GetContainersURL: string = 'http://www.mocky.io/v2/5ddbad8a3400005200eadd4a?numer='

  constructor( private _Http: HttpClient) { }

  getContainers(number): Observable<any>{
    return this._Http.get<any>(this._GetContainersURL + number)
  }
}
