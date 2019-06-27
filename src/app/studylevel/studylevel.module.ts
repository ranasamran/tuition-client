import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudylevelRoutingModule} from './studylevel-routing.module';
import {StudylevelComponent} from './studylevel.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [StudylevelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    StudylevelRoutingModule
  ]
})
export class StudylevelModule {
}
