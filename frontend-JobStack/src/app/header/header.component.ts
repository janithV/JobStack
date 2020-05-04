import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../authentication/login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TokenStorageService } from '../services/token-storage.service';
import { SearchService } from '../services/search.service';
import { Routes, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  username: string;
  companyList = [];
  search = '';

  constructor(public dialog: MatDialog,private tokenStorageService: TokenStorageService, private searchService: SearchService, private router: Router) { }

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

  onSearch(){
    console.log(this.search);
    this.router.navigate(['com-card', this.search]);
  }

}
