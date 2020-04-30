import { Component, OnInit, ViewChild } from '@angular/core';
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
  @ViewChild ('rform') registerFormDirective;

  formErrors = {
    'username' : '',
     'password' : '',
      'firstname':'',
      'lastname': '',
      
  };

  validationMessages = {
    'username' :{
      'required' : 'username is required.',
      'minlength': 'username must be atleast 2 characters',
      'maxlength': 'username cannot be more that 25 characters'
    },

    'password' :{
      'required' : 'password is required.',
      'minlength': 'password must be atleast 2 characters',
      'maxlength': 'password cannot be more that 6 characters'
    },
    'firstname' :{
      'required' : 'first name is required.',
      'minlength': 'first name must be atleast 2 characters',
      'maxlength': 'first name cannot be more that 25 characters'
    },

    'lastname' :{
      'required' : 'last name is required.',
      'minlength': 'last name must be atleast 2 characters',
      'maxlength': 'last name cannot be more that 25 characters'
    },
  };

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
    username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    password:['', [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
    firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    birthDate: '',
    gender: 'Male',
    companyName: '',
    jobTitle: '',
    nameOfSchool: '',
    nameOfUni: '',
    degreeQual: 'Software Engineering',
    skills: 'Coding skills',
    specialization: 'Back-End Development',
    });

    this.registerForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  onSubmit(register){
    register = this.registerForm.value;
    console.log(this.register);
    this.authService.register(register).subscribe((res) => {
      this.router.navigateByUrl('profile');
    });
    this.registerForm.reset({
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

    this.registerFormDirective.resetForm();
    
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

}
