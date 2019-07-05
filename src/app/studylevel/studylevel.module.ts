import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {StudylevelRoutingModule} from './studylevel-routing.module';
import {StudylevelComponent} from './studylevel.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [StudylevelComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SweetAlert2Module,
    StudylevelRoutingModule
  ]
})
export class StudylevelModule {
}
