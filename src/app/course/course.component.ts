import {Component, PipeTransform, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

import {ApiService} from '../services/api.service';
// import {Observable} from 'rxjs/Observable';
// import {map, startWith} from 'rxjs/operators';

interface Course {
  id: number;
  title: string;
  fk_study_level_id: number;
}



@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courseObj: Course = {id: null, fk_study_level_id: null, title: ''};

  studyLevels: object[];
  courses: object[];
  courseForm: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.createForm(this.courseObj);
  }

  ngOnInit() {
    this.courseForm.valueChanges.subscribe(data => {
      console.log(data);
    });
    this.getStudyLevels();
    this.getCourses();
  }

  createCourse() {

    if (this.courseForm.value.id) {
      this.updateCourse();
      return;
    }

    this.isLoading = true;
    console.log(JSON.stringify(this.courseForm.value));

    this.apiService.createCourse(this.courseForm.value).subscribe(
      (response) => {
        if (response) {
          Swal.fire({title: 'Study Level', text: 'Course Created Successfully', type: 'success'});
          this.isLoading = false;
        }
      }
    );
  }

  updateCourse() {
    this.isLoading = true;
    console.log(JSON.stringify(this.courseForm.value));

    this.apiService.updateCourse(this.courseForm.value).subscribe(
      (response) => {
        if (response) {
          Swal.fire({title: 'Study Level', text: 'Course Updated Successfully', type: 'success'});
          this.isLoading = false;
        }
      }
    );
  }

  getStudyLevels() {
    this.apiService.getStudyLevels().subscribe(
      (data) => {
        if (data) {
          this.studyLevels = data;
        }
      }
    );
  }
  getCourses() {
    this.apiService.getCourses().subscribe(
      (data) => {
        if (data) {
          this.courses = data;
        }
      }
    );
  }

  editCourse(courseObj: Course) {
    this.createForm(courseObj);
  }

  private createForm(courseObj: Course) {
    this.courseForm = this.formBuilder.group({
      ...courseObj,
      ...{
        title: [courseObj.title, Validators.required],
        fk_study_level_id: [courseObj.fk_study_level_id, Validators.required]
      }
    });
  }

}
