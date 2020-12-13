import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private url = 'https://drogapp.drogart.org/backend/';
  private endParam = '.php?type=json';
  private subscription: PushSubscription;
  private publicKey = 'BCmA9Ore3MvD5aK6Pscbr2iYgNm-O2RWE7bGKTZaClnOvcD1dIqpgzcqNraTNgyoVM3-CO7VwlOy-VcGwKS8Ly4';

  constructor(private http: HttpClient) {}

  getData(type: string, id?: number): Observable<any[]>{
    try {
      const tmp = this.http.get<any[]>( this.url + type + this.endParam).pipe(map(arr => this.sanitize(arr, type)),
      catchError(error => {
        throw new Error('Endpoint' + this.url + ' not reachable');
      }));
      if (id) { return this.filter(tmp, id); }
      return tmp;

    } catch (error) {
      console.log(error);
      return null;
    }
  }

  sanitize(arr: any[], type: string) {
    if (type === 'opozorila') { return arr; }
    return arr.map(obj => {
      const newObj = {};
      Object.keys(obj).forEach(key => newObj[key.substring(1).toLowerCase()] = obj[key]);
      return newObj;
    });
  }

  filter(tmp: Observable<any[]>, id: number) {
    return tmp.pipe(map(arr => {
      arr = arr.filter(obj => +obj.id === id);
      if (arr.length > 0) { return arr; }
      else { throw new Error('Data with ' + id + ' not found.'); }
    }));
  }

  getKitty() {
    try {
      return this.http.get<any[]>('https://api.thecatapi.com/v1/images/search?mime_types=gif&size=full').pipe(map(res => res[0].url),
      catchError(error => {
        throw new Error('Error on thecatapi.com');
      }));
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  getSubscribed() {
    if ('serviceWorker' in navigator) {
      console.log('getSubscribed');
      Notification.requestPermission().then(res => { console.log('permiss', res); }, err => { console.log('denid?', err); } );
      navigator.serviceWorker.getRegistration().then( reg => {
        reg.pushManager.getSubscription().then( sub => {
			
          const tmp = () =>  {
            reg.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: this.urlBase64ToUint8Array(this.publicKey)
            })
            .then( newSub => {

              this.http.post(
                this.url + 'push.php',
                JSON.stringify(newSub.toJSON()),
                {headers: {'Content-Type': 'application/json'}}
              ).subscribe( res => console.log('save sub res', res));

              console.log('new sub', newSub.toJSON());
              this.subscription = newSub;
            })
            .catch( e => {
                if (Notification.permission === 'denied') {
                  console.warn('Permission for notifications was denied');
                } else {
                  console.error('Unable to subscribe to push', e);
                }
            });
          };

          if (sub === null) {
            console.log('sub nonexistent');
            tmp();
          } else {
            console.log('sub exists', sub.toJSON());
            if (!this.subscription){ this.subscription = sub; }
          }

        });
      }).catch(err => {
        console.log('Service Worker registration failed: ', err);
      });
    }
  }

/*   notifPermissStatus() {
    console.log(Notification.permission);
    return Notification.permission;
  } */

  urlBase64ToUint8Array(base64String: string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  resubscribe() {
    console.log('resubscribe');
    if (this.subscription){
      this.subscription.unsubscribe().then(val => this.getSubscribed());
    }else{
      this.getSubscribed();
    }
  }

  unsubscribe() {
    if (this.subscription){
      this.subscription.unsubscribe().then(val => console.log('unsubscribing', val));
      this.subscription = null;
    }else{
      console.log('not subscribed');
    }
  }

  isOnline(): boolean {
    return navigator.onLine;
  }

  onStatusChange(callback: (isOnline: boolean) => void) {
    const func = () => callback(this.isOnline());
    window.addEventListener('online',  func );
    window.addEventListener('offline', func );
  }


}
