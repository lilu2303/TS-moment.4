import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { Sort } from '@angular/material/sort';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private url: string = "assets/ramschema_ht23.json";
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

}
