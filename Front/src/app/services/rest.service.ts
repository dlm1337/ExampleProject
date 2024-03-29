import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NameAndAddress } from '../types/nameAndAddress';
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

  getIdOne(req: String): Observable<NameAndAddress> {
    const url = this.url + 'api/todoitems/' + req;

    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError((error) => {
        console.log(error);
        return of(error);
      })
    );
  }

  saveNameAndAddress(req: NameAndAddress): Observable<NameAndAddress> {
    const url = this.url + 'api/NameAndAddress';
    console.log(req);
    return this.http.post(url, req).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError((error) => {
        console.log(error);
        return of(error);
      })
    );
  }

  getLatestNameAndAddress(): Observable<NameAndAddress> {
    const url = this.url + 'api/NameAndAddress/Latest';
    return this.http.get(url).pipe(
      map((resp: any) => {
        return resp;
      }),
      catchError((error) => {
        console.log(error);
        return of(error);
      })
    );
  }
}