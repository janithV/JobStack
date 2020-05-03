import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { User } from '../auth/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private authService : AuthService) { }

  user : User;

  userProfile = {

    username:'',
    name:'',
    dob:'',
    gender:'',
    nameOfSchool:'',
    nameOfUniversity:'',
    skills:'',
    specialization:'',
    degree:'',
  }

  ngOnInit() {

    this.authService.getProfile().subscribe(res =>{
      
    })


    
  }




  
}
