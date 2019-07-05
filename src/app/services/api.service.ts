import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {appUrl} from '../common/api-endpoints';
import {logging} from 'selenium-webdriver';
import Level = logging.Level;
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }


  getStudyLevels(): Observable<any> {
    return this.http.get<any>(appUrl.STUDY_LEVEL);
  }

  createStudyLevel(data: any): Observable<any> {
    return this.http.post<any>(appUrl.STUDY_LEVEL, data);
  }

  updateStudyLevel(data: any): Observable<any> {
    return this.http.put<any>(`${appUrl.UPDATE_LEVEL}/${data.id}`, {title: data.title});
  }


  getCourses(): Observable<any> {
    return this.http.get<any>(appUrl.COURSES);
  }

  createCourse(data: any): Observable<any> {
    return this.http.post<any>(appUrl.COURSES, data);
  }

  updateCourse(data: any): Observable<any> {
    return this.http.put<any>(`${appUrl.COURSES}/${data.id}`, data);
  }


}
