import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { NewcourseComponent } from './newcourse.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'newcourse', component: NewcourseComponent, data: { title: extract('New Course') } }])

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewcourseRoutingModule { }
