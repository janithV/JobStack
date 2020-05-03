import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { LoginComponent } from '../authentication/login/login.component';
import { ProfileComponent } from '../authentication/profile/profile.component';
import { CompanyComponent } from '../company/company.component';
import { Wso2ProfileComponent } from '../wso2-profile/wso2-profile.component';
import { SyscolabsProfileComponent } from '../syscolabs-profile/syscolabs-profile.component';
import { VirtusaProfileComponent } from '../virtusa-profile/virtusa-profile.component';
import { AddReviewComponent } from '../add-review/add-review.component';
import { BoardUserComponent } from '../authentication/board-user/board-user.component';


export const routes: Routes = [

    {path :'home', component: HomeComponent},
    {path :'register', component: RegisterComponent},
    {path: 'login', component: LoginComponent},
    {path :'profile', component:ProfileComponent},
    // {path :'', redirectTo: '/home', pathMatch: 'full' },
    {path :'company', component:CompanyComponent},
    {path :'wso2-profile', component:Wso2ProfileComponent},
    {path :'syscolabs-profile', component:SyscolabsProfileComponent},
    {path :'virtusa-profile', component:VirtusaProfileComponent},
    {path :'add-review', component:AddReviewComponent},
    {path: 'user', component: BoardUserComponent },

    
    

]

    

