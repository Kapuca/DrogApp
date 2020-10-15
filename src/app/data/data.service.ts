import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://drogapp.drogart.org/';
  private endParam = '.php?type=json';

  constructor(private http: HttpClient) { }

  getData(type: string, id?: number): Observable<any[]>{
    try {
      const tmp = this.http.get<any[]>( this.url + type + this.endParam).pipe(map(arr => {
        if (type === 'opozorila') { return arr; }
        return arr.map(obj => {
          const newObj = {};
          Object.keys(obj).forEach(key => newObj[key.substring(1).toLowerCase()] = obj[key]);
          return newObj;
        });
      }),
      catchError(error => {
        throw new Error('Endpoint' + this.url + ' not reachable');
      }));
      if (id) { return tmp.pipe(map(arr => {
        arr = arr.filter(obj => +obj['id'] === id);
        if(arr.length > 0) { return arr; }
        else { throw new Error('Data with ' + id + ' not found.'); }
      })); }
      return tmp;

    } catch (error) {
      return null;
    }
  }

}
