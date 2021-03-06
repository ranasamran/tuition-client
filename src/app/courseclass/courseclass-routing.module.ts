import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {extract} from '@app/core';
import {Shell} from '@app/shell/shell.service';
import {CourseclassComponent} from '@app/courseclass/courseclass.component';

const routes: Routes = [
  Shell.childRoutes([{path: 'classes', component: CourseclassComponent, data: {title: extract('Classes')}}])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseclassRoutingModule {
}
