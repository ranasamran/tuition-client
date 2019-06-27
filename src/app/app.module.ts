import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {TranslateModule} from '@ngx-translate/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import {CoreModule} from '@app/core';
import {SharedModule} from '@app/shared';
import {HomeModule} from './home/home.module';
import {ShellModule} from './shell/shell.module';
import {AboutModule} from './about/about.module';
import {LoginModule} from './login/login.module';
import {StudylevelModule} from './studylevel/studylevel.module';
import {NewcourseModule} from './newcourse/newcourse.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot(),
    NgbModule,
    CoreModule,
    SharedModule,
    ShellModule,
    HomeModule,
    AboutModule,
    LoginModule,
    NewcourseModule,
    StudylevelModule,
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
