import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Register, Gender, Skills, Specialization, DegreeQual } from '../shared/register';
import { AuthService } from '../services/auth.service';


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

  constructor(private rg: FormBuilder, private _auth: AuthService) {
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

  onSubmit(){
    this.register = this.registerForm.value;
    this._auth.registerUser(this.register).subscribe(
      res=> console.log(res),
      err=> console.log(err)
    )
    this.registerForm.reset();
    
  }
}
