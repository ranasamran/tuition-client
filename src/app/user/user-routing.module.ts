import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';


import {extract} from '@app/core';
import {Shell} from '@app/shell/shell.service';
import {UserComponent} from '@app/user/user.component';

const routes: Routes = [
  Shell.childRoutes([{path: 'users', component: UserComponent, data: {title: extract('Users')}}])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
