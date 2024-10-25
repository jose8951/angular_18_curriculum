import { HttpClient } from '@angular/common/http'
import { inject, Injectable } from '@angular/core'
import { Observable } from 'rxjs'
//import datos from '../../assets/json/db.json'

@Injectable({
  providedIn: 'root',
})
export class CurriculumService {
  private readonly _http = inject(HttpClient)

  getDatos(): Observable<any> {
    return this._http.get<any>('assets/json/db.json')
  }
}
