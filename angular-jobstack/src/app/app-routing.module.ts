import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PostJobComponent } from './post-job/post-job.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CompanyComponent } from './company/company.component';

const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'post-job', component: PostJobComponent},
  {path:'sign-up', component: SignUpComponent},
  {path:'company', component:CompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
