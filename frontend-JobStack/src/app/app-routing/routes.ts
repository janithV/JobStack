import { Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { RegisterComponent } from '../register/register.component';
import { ProfileComponent } from '../profile/profile.component';
import { CompanyComponent } from '../company/company.component';
import { Wso2ProfileComponent } from '../wso2-profile/wso2-profile.component';
import { SyscolabsProfileComponent } from '../syscolabs-profile/syscolabs-profile.component';
import { VirtusaProfileComponent } from '../virtusa-profile/virtusa-profile.component';
import { AddReviewComponent } from '../add-review/add-review.component';


export const routes: Routes = [

    {path :'home', component: HomeComponent},
    {path :'register', component: RegisterComponent},
    {path :'profile', component:ProfileComponent},
    {path :'company', component:CompanyComponent},
    {path :'wso2-profile', component:Wso2ProfileComponent},
    {path :'syscolabs-profile', component:SyscolabsProfileComponent},
    {path :'virtusa-profile', component:VirtusaProfileComponent},
    {path :'add-review', component:AddReviewComponent}
    
    

]

    

