import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {Topnavbar} from "./components/topnavbar/topnavbar.component";
import {Navigation} from "./components/navigation/navigation.component";
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {HomeComponent} from "./pages/home/home.component";
import {UserComponent} from "./pages/user/user.component";
import {CourseComponent} from "./pages/course/course.component";
import {SignComponent} from "./pages/sign/sign.component";
import {GradeComponent} from "./pages/grade/grade.component";
import {SpareComponent} from "./pages/spare/spare.component";
import {Spare2Component} from "./pages/spare2/spare2.component";
import {RoleComponent} from "./pages/role/role.component";

@NgModule({
  declarations: [
    AppComponent,
    Navigation,
    Topnavbar,
    HomeComponent,
    UserComponent,
    CourseComponent,
    SignComponent,
    GradeComponent,
    SpareComponent,
    Spare2Component,
    RoleComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
