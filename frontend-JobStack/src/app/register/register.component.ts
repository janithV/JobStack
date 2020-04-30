import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Register, Gender, Skills, Specialization, DegreeQual } from '../shared/register';
import { AuthService } from '../services/auth.service';
import { User } from '../auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  register: Register;
  gender = Gender;
  degreeQual = DegreeQual;
  skills = Skills;
  specialization = Specialization;

  constructor(
    private rg: FormBuilder, 
    private authService: AuthService, 
    private router: Router) {
      
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){

    this.registerForm = this.rg.group({
    username: '',
    password:'',
    firstname: '',
    lastname: '',
    birthDate: '',
    gender: 'Male',
    companyName: '',
    jobTitle: '',
    nameOfSchool: '',
    nameOfUni: '',
    degreeQual: 'Software Engineering',
    skills: 'Coding skills',
    specialization: 'Back-End Development',
    })
  }

  onSubmit(register){
    register = this.registerForm.value;
    console.log(this.register);
    this.authService.register(register).subscribe((res) => {
      this.router.navigateByUrl('profile');
    });
    this.registerForm.reset();
    
  }
}
