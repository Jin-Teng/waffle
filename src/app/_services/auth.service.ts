import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../_shared/data';

const AUTH_API = 'http://localhost:3000/users/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<Data> {
    return this.http.post<Data>(AUTH_API + 'login', {
      phone: credentials.phone,
      password: credentials.password
    }, httpOptions);
  }

  logout(): Observable<Data> {
    return this.http.post<Data>(AUTH_API + 'logout', { responseType: 'text' }, httpOptions);
  }


}
