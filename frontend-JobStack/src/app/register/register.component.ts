import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators} from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { User, Gender, Specialization, DegreeQual } from '../auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  gender = Gender;
  degreeQual = DegreeQual;
  specialization = Specialization;
  user: User;
  @ViewChild ('rform') registerFormDirective;

  constructor(
    private rg: FormBuilder, 
    private authService: AuthService, 
    private router: Router) {
      
    this.createForm();
   }

  ngOnInit() {
  }

  onSubmit(register){
    register = this.registerForm.value;
    console.log(this.user);
    console.log(register);
    this.authService.register(register).subscribe((res) => {
      this.router.navigateByUrl('login');
    });

    this.registerForm.reset();  
  }

  formErrors = {
    'username' : '',
    'password' : '',
    'firstname':'',
    'lastname': '',
    'birthDate':'',
    'gender': '',
    'nameOfSchool':'',
    'nameOfUni': '',
    'degreeQual': '',
    'specialization': '',
    
      
  };

  validationMessages = {
    'username' :{
      'required' : 'username is required.',
      'minlength': 'username must be atleast 2 characters',
      'maxlength': 'username cannot be more that 25 characters',
      'email': 'username has to be an email'
    },

    'password' :{
      'required' : 'password is required.',
      'minlength': 'password must be atleast 6 characters',
      'maxlength': 'password cannot be more that 12 characters'
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

    'birthDate' :{
      'required' : 'Birth date is required.',
    },
    'gender' :{
      'required' : 'Please select your gender.',
    },
    'nameOfSchool' :{
      'required' : 'Name of school is required.',
    },
    'nameOfUni' :{
      'required' : 'Name of university is required.',
    },
    'degreeQual' :{
      'required' : 'Please select your degree.',
    },
    'specialization' :{
      'required' : 'Please select your specialization.',
    },
    
  };

  
  createForm(){

    this.registerForm = this.rg.group({
    username: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25), Validators.email]],
    password:['', [Validators.required, Validators.minLength(6), Validators.maxLength(12)]],
    firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    birthDate: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    nameOfSchool: ['', [Validators.required]],
    nameOfUni: ['', [Validators.required]],
    degreeQual:['', [Validators.required]], 
    codingSkill: [''],
    socialSkill: [''],
    langSkill: [''],
    webDev: [''],
    programDev: [''],
    specialization: ['']
    });

    this.registerForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
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

  // onCheckboxChange(e){

  //   const skills: FormArray = this.registerForm.get('skills') as FormArray;

  //   if(e.target.checked){
  //     skills.push(new FormControl(e.target.value));
  //   }
  //   else{
  //     let i: number = 0;
  //     skills.controls.forEach((item: FormControl) => {
  //       if (item.value == e.target.value){
  //         skills.removeAt(i);
  //         return;
  //       }
  //       i++;
  //     })
  //   }
  // }

}
