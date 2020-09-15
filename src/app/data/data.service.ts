import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://littlechick-design.com/CLIENT/DA-backend/';
  private endParam = '.php?type=json';

  constructor(private http: HttpClient) { }

  getData(type: string, id?: number): Observable<any[]>{
    const tmp = this.http.get<any[]>( this.url + type + this.endParam).pipe(map(arr => {
      return arr.map(obj => {
        const newObj = {};
        Object.keys(obj).forEach(key => newObj[key.substring(1).toLowerCase()] = obj[key]);
        return newObj;
      });
    }));
    if (id) { return tmp.pipe(map(arr => arr.filter(obj => +obj['id'] === id))); }
    return tmp;
  }

}
