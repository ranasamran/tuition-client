import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';
import { CourseComponent } from './course.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'courses', component: CourseComponent, data: { title: extract('Courses') } }])

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
