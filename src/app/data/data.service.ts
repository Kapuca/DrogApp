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

  getData(type: string): Observable<object[]>{
    const tmp = this.http.get<object[]>( this.url + type + this.endParam).pipe(map(arr => {
      return arr.map(obj => {
        const newObj = {};
        Object.keys(obj).forEach(key => newObj[key.substring(1).toLowerCase()] = obj[key]);
        console.log('newObj:', newObj);
        return newObj;
      });
    }));
    console.log(typeof tmp, tmp);
    return tmp;
  }

}
