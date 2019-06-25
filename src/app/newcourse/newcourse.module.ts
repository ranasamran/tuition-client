import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewcourseRoutingModule } from './newcourse-routing.module';
import { NewcourseComponent } from './newcourse.component';

@NgModule({
  declarations: [NewcourseComponent],
  imports: [
    CommonModule,
    NewcourseRoutingModule
  ]
})
export class NewcourseModule { }
