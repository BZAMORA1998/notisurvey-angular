import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotisurveyRoutingModule } from './notisurvey-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [LoginComponent, HomeComponent],
  imports: [
    CommonModule,
    NotisurveyRoutingModule
  ]
})
export class NotisurveyModule { }
