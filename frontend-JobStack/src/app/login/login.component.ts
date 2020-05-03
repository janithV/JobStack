import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Login } from '../shared/login';
import { AuthService } from '../services/auth.service';
import { User } from '../auth/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  

  constructor(
    private lg: FormBuilder,
    public dialogRef: MatDialogRef<LoginComponent>,
    private authService: AuthService,
    private router: Router) { 

    this.createForm();
  }

  ngOnInit(){
  }

  createForm(){

    this.loginForm = this.lg.group({
      username:'',
      password:'',
     
    });
  }

  onSubmit(login){
    login = this.loginForm.value;
    console.log(login);
    this.authService.signIn(login).subscribe((res)=> {
      console.log("Logged in!");
      this.router.navigate(['/profile']);
    });
    
    this.loginForm.reset();
    this.dialogRef.close();
  }
}
