import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class RestService {
  private url = '';

  constructor(private http: HttpClient, private cfg: ConfigService) {
    console.log(this.cfg);
    this.url = this.cfg.apiBaseUrl;
  }

  getIdOne(): Observable<boolean> {
    const url = this.url + '1';
    return this.http.get(url).pipe(
      map((resp: any) => {
        console.log(resp);
        return resp;
      }),
      catchError((error) => {
        console.log(error);
        return of(error);
      })
    );
  }
}
