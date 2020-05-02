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

  users : User;

  userProfile = {

    username:'',
    name:'',
    dob:'',
    skills:'',
    specialization:'',
    degree:'',
  }

  ngOnInit() {

    
  }




  
}
