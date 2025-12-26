import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UsersComponent } from './shared/component/users/users.component';
import { StudentsComponent } from './shared/component/students/students.component';
import { NavbarComponent } from './shared/component/navbar/navbar.component';
import { DashboardComponent } from './shared/component/dashboard/dashboard.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { GetConfirmComponent } from './shared/component/get-confirm/get-confirm.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PageNotFoundComponent } from './shared/component/page-not-found/page-not-found.component';
import { StudentFormComponent } from './shared/component/students/student-form/student-form.component';
import { StudentComponent } from './shared/component/students/student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    StudentsComponent,
    NavbarComponent,
    DashboardComponent,
    GetConfirmComponent,
    PageNotFoundComponent,
    StudentFormComponent,
    StudentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
MatDialogModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
