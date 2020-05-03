import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.scss']
})
export class BoardUserComponent implements OnInit {

  user = {
    id:'',
    username:'',
    name:'',
    fname:'',
    lname:'',
    dob:'',
    gender:'',
    school:'',
    university:'',
    degree:'',
    skills:'',
    codingSkill:'',
    socialSkill:'',
    languageSkill:'',
    programDevelopment:'',
    specialization:'',
    frontEndDevelopment:'',
    backEndDevelopment: '',
    fullStack: '',
    mobileDevelopment:'',
    webDevelopment: '',
    uiUx: '',
  }

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserBoard().subscribe(
      data=> {
        console.log(data);
        this.user.id = data.id;
        this.user.username = data.email;
        this.user.fname = data.userFirstName;
        this.user.lname = data.userLastName;
        this.user.name = data.userFirstName + " " + data.LastName;
        this.user.dob = data.dateOfBirth;
        this.user.gender = data.gender;
        this.user.school = data.school;
        this.user.university = data.university;
        this.user.degree = data.degreeId;
        this.user.skills = data.codingSkill + data.socialSkill + data.languageSkill + data.programDevelopment;
        this.user.codingSkill = data.codingSkill;
        this.user.socialSkill = data.socialSkill;
        this.user.languageSkill = data.languageSkill;
        this.user.programDevelopment = data.programDevelopment;
        this.user.specialization = data.frontEndDevelopment + data.backEndDevelopment + data.fullStack + data.mobileDevelopment + data.webDevelopment + data.uiUx;
        this.user.frontEndDevelopment = data.frontEndDevelopment;
        this.user.backEndDevelopment = data.backEndDevelopment;
        this.user.fullStack = data.fullStack;
        this.user.mobileDevelopment = data.mobileDevelopment;
        this.user.webDevelopment = data.webDevelopment;
        this.user.uiUx = data.uiUx;
      },
      err=> {this.user = JSON.parse(err.error).message;}
      
    )
    console.log(this.user);
  }

}
