import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Login } from '../shared/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  login: Login;

  constructor(private lg: FormBuilder,public dialogRef: MatDialogRef<LoginComponent>) { 
    this.createForm();
  }

  ngOnInit(){
  }

;
  createForm(){

    this.loginForm = this.lg.group({
      username:'',
      password:'',
     
    });
  }

  onSubmit(){
    this.login = this.loginForm.value;
    console.log(this.login);
    this.loginForm.reset();
    this.dialogRef.close();
  }
 

}
