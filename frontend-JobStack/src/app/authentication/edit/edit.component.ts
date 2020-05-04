import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private profileService: ProfileService, private router: Router) { }

  id = window.sessionStorage.getItem("userId");
  email = window.sessionStorage.getItem("email");
  form: any = {};

  ngOnInit() {
    this.profileService.getProfile(this.email).subscribe(
      data => {
        this.form.username = data.email;
        this.form.firstname = data.userFirstName;
        this.form.lastname = data.userLastName;
        this.form.birthDate = data.dateOfBirth;
        this.form.gender = data.gender;
        this.form.nameOfSchool = data.school;
        this.form.nameOfUni = data.university;
        this.form.degreeQual = data.degreeId;
        this.form.codingSkill = data.codingSkill;
        this.form.socialSkill = data.socialSkill;
        this.form.langSkill = data.languageSkill;
        this.form.programDev = data.programDevelopment;
        this.form.frontend = data.frontEndDevelopment;
        this.form.backend = data.backEndDevelopment;
        this.form.fullstack = data.fullStack;
        this.form.mobile = data.mobileDevelopment;
        this.form.webDev = data.webDevelopment;
        this.form.uiux = data.uiUx;
        
      },
    )
   
  }

  onSubmit(){
    this.profileService.editProfile(this.form, this.id).subscribe(
      res => {
        console.log(this.form);
        console.log(res);
        this.router.navigateByUrl('/user');
        
      }
    )
  }

}
