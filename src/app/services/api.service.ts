import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getDoctorsList(){
    return this.http.get('assets/doctors.json')
      .pipe(
        map(list => {
          return list;
        }),
        catchError((err) => {
          return throwError(err);
        })
      )
  }
 
}
