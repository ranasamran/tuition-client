import {Component, PipeTransform, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';

// import {Observable} from 'rxjs/Observable';
// import {map, startWith} from 'rxjs/operators';

interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}


@Component({
  selector: 'app-studylevel',
  templateUrl: './studylevel.component.html',
  styleUrls: ['./studylevel.component.scss']
})
export class StudylevelComponent implements OnInit {

  studyLevelForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {
    this.studyLevelForm.valueChanges.subscribe(data => {
      console.log(data);
      alert(JSON.stringify(data));
    });
  }

  onSave() {
    console.log(JSON.stringify(this.studyLevelForm.value));

    // alert(JSON.stringify(data));
  }
  private createForm() {
    this.studyLevelForm = this.formBuilder.group({
      title: ['', Validators.required],
      title2: ['', Validators.required]
    });
  }
}
