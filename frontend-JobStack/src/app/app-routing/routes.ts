import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { LoginComponent } from '../login/login.component';


export const routes: Routes = [

    {path :'home', component: HomeComponent},
    {path :'register', component: RegisterComponent},
    {path :'profile', component:ProfileComponent},
    {path :'login', component: LoginComponent},
    {path :'', redirectTo: '/home', pathMatch: 'full' }
    
    
    

]

    

