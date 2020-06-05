import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotisurveyComponent } from './notisurvey.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [ {
  path: '', component: NotisurveyComponent, children: [
    { 
      path: 'login', component: LoginComponent
    },
    {
      path: 'home' , loadChildren:()=> import('./home/home.module').then(m => m.HomeModule)
    },
    {
      path: '**', redirectTo: 'login' 
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotisurveyRoutingModule { }
