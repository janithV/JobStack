import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RecommendService } from '../../services/recommend.service';
import { ProfileService } from '../../services/profile.service';

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
  skills = [];
  specializations = [];

  id = window.sessionStorage.getItem("email");

  constructor(private userService: UserService, private recommendService: RecommendService, private profileService: ProfileService) { }

  ngOnInit() {
    console.log(this.id);
    this.profileService.getProfile(this.id).subscribe(
      data=> {
        console.log(data);
        this.user.id = data.id;
        this.user.username = data.email;
        this.user.fname = data.userFirstName;
        this.user.lname = data.userLastName;
        this.user.name = data.userFirstName + " " + data.userLastName;
        this.user.dob = data.dateOfBirth;
        this.user.gender = data.gender;
        this.user.school = data.school;
        this.user.university = data.university;
        this.user.codingSkill = data.codingSkill;
        this.user.socialSkill = data.socialSkill;
        this.user.languageSkill = data.languageSkill;
        this.user.programDevelopment = data.programDevelopment;
        //this.user.specialization = data.frontEndDevelopment + data.backEndDevelopment + data.fullStack + data.mobileDevelopment + data.webDevelopment + data.uiUx;
        this.user.frontEndDevelopment = data.frontEndDevelopment;
        this.user.backEndDevelopment = data.backEndDevelopment;
        this.user.fullStack = data.fullStack;
        this.user.mobileDevelopment = data.mobileDevelopment;
        this.user.webDevelopment = data.webDevelopment;
        this.user.uiUx = data.uiUx;

        if(data.degreeId == 'DID01'){
          this.user.degree = 'Computer Science';
        }
        if(data.degreeId == 'DID02'){
          this.user.degree = 'Software Engineering';
        }
        if(data.degreeId == 'DID03'){
          this.user.degree = 'Business Information Systems';
        }
        if(data.degreeId == 'DID04'){
          this.user.degree = 'Information Systems';
        }

        if(this.user.codingSkill == '1'){
          this.skills.push("Coding Skill");
        }
        if(this.user.socialSkill == '1'){
          this.skills.push("Social Skill");
        }
        if(this.user.languageSkill == '1'){
          this.skills.push("Language Skill");
        }
        if(this.user.programDevelopment == '1'){
          this.skills.push("Program Development Skill");
        }

        if(this.user.frontEndDevelopment == '1'){
          this.specializations.push("Front End Development");
        }
        if(this.user.backEndDevelopment == '1'){
          this.specializations.push("Back End Development");
        }
        if(this.user.fullStack == '1'){
          this.specializations.push("Full Stack Development");
        }
        if(this.user.mobileDevelopment == '1'){
          this.specializations.push("Mobile Development");
        }
        if(this.user.webDevelopment == '1'){
          this.specializations.push("Web Development");
        }
        if(this.user.uiUx == '1'){
          this.specializations.push("UI/UX");
        }
        
      },
      err=> {this.user = JSON.parse(err.error).message;}
      
    )
    //console.log(this.user);
  }

  getRecommend(){
    this.recommendService.getRecommendation(this.id).subscribe(
      res => {
        console.log(res);
      }
    )
  }
  

  

}
