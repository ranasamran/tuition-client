import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourseclassRoutingModule } from './courseclass-routing.module';
import { CourseclassComponent } from './courseclass.component';

@NgModule({
  declarations: [CourseclassComponent],
  imports: [
    CommonModule,
    CourseclassRoutingModule
  ]
})
export class CourseclassModule { }
