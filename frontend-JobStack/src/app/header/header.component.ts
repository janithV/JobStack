import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../authentication/login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TokenStorageService } from '../services/token-storage.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  username: string;

  constructor(public dialog: MatDialog,private tokenStorageService: TokenStorageService) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;


      this.username = user.username;
    }
  }
  

  openLoginForm(){
    this.dialog.open(LoginComponent, {width:'400px', height:'350px'});
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
