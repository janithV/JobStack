import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../authentication/login/login.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { TokenStorageService } from '../services/token-storage.service';
import { SearchService } from '../services/search.service';

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

  constructor(public dialog: MatDialog,private tokenStorageService: TokenStorageService, private searchService: SearchService) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;


      this.username = user.username;
    }
    let data = "all";
    this.searchService.search(data).subscribe(
      (res) => {
        console.log(res);
      }
    )
  }
  

  openLoginForm(){
    this.dialog.open(LoginComponent, {width:'400px', height:'350px'});
  }
  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
