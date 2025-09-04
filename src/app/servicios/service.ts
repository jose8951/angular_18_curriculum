import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  private readonly _http=inject(HttpClient)

  getDatos():Observable<any>{
    return this._http.get<any>('assets/json/db.json')
  }
}
