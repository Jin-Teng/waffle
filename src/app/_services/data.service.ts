import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from '../_shared/data';
import { DatePipe } from '@angular/common';

const API_URL = 'http://localhost:3000/';

@Injectable({
    providedIn: 'root'
})
export class DataService {
  currentDate: Date = new Date();
  today;

  constructor(
    private http: HttpClient,
    private datePipe: DatePipe
  ) {
    // console.log(datePipe.transform(Date.now(),'yyyy-MM-dd'));
  }

  getPosts(): Observable<Data> {
    return this.http.get<Data>(API_URL + 'posts');
  }

  getDayPostsCounts(date: string): Observable<Data> {
    let url= API_URL + 'posts/counts' + '?date=' + date ;
    return this.http.get<Data>(url);
  }

  getDaysPostsCounts(begin: string, end: string): Observable<Data> {
    let url= API_URL + 'posts/counts' + '?begin_timestamp=' + begin + '&end_timestamp=' + end ;
    return this.http.get<Data>(url);
  }

}
