import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { extract } from '@app/core';
import { Shell } from '@app/shell/shell.service';

import { StudylevelComponent } from './studylevel.component';

const routes: Routes = [
  Shell.childRoutes([{ path: 'studylevels', component: StudylevelComponent, data: { title: extract('Study Level') } }])

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudylevelRoutingModule { }
