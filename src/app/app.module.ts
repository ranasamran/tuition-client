import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {SweetAlert2Module} from '@sweetalert2/ngx-sweetalert2';


import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {HomeModule} from './home/home.module';
import {ShellModule} from './shell/shell.module';
import {AboutModule} from './about/about.module';
import {LoginModule} from './login/login.module';
import {StudylevelModule} from './studylevel/studylevel.module';
import {CourseModule} from './course/course.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {CourseclassModule} from '@app/courseclass/courseclass.module';
import { UserComponent } from './user/user.component';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
    }),
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    LoginModule,
    StudylevelModule,
    CourseModule,
    CourseclassModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent, UserComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
