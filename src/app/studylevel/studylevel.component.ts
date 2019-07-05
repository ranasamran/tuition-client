import {Component, PipeTransform, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import Swal from 'sweetalert2';

import {ApiService} from '../services/api.service';
// import {Observable} from 'rxjs/Observable';
// import {map, startWith} from 'rxjs/operators';

interface Level {
  id: number;
  title: string;
}


@Component({
  selector: 'app-studylevel',
  templateUrl: './studylevel.component.html',
  styleUrls: ['./studylevel.component.scss']
})
export class StudylevelComponent implements OnInit {
  levelObj: Level = {id: null, title: ''};

  studyLevels: object[];
  studyLevelForm: FormGroup;
  isLoading = false;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {
    this.createForm(this.levelObj);
  }

  ngOnInit() {
    // this.studyLevelForm.valueChanges.subscribe(data => {
    //   console.log(data);
    //   alert(JSON.stringify(data));
    // });
    this.getStudyLevels();
  }

  createStudyLevel() {

    if (this.studyLevelForm.value.id) {
      this.updateStudyLevel();
      return;
    }

    this.isLoading = true;
    console.log(JSON.stringify(this.studyLevelForm.value));

    this.apiService.createStudyLevel(this.studyLevelForm.value).subscribe(
      (response) => {
        if (response) {
          Swal.fire({title: 'Study Level', text: 'Study Level Created Successfully', type: 'success'});
          this.isLoading = false;
        }
      }
    );
  }

  updateStudyLevel() {
    this.isLoading = true;
    console.log(JSON.stringify(this.studyLevelForm.value));

    this.apiService.updateStudyLevel(this.studyLevelForm.value).subscribe(
      (response) => {
        if (response) {
          Swal.fire({title: 'Study Level', text: 'Study Level Updated Successfully', type: 'success'});
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

  editStudyLevel(levelObj: Level) {
    this.createForm(levelObj);
  }

  private createForm(levelObj: Level) {
    this.studyLevelForm = this.formBuilder.group({
      ...levelObj,
      ...{
        title: [levelObj.title, Validators.required]
      }
    });
  }
}
