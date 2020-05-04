import { Component, OnInit } from '@angular/core';
import { AddReviewComponent } from '../add-review/add-review.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-syscolabs-profile',
  templateUrl: './syscolabs-profile.component.html',
  styleUrls: ['./syscolabs-profile.component.scss']
})
export class SyscolabsProfileComponent implements OnInit {
 
  passRating ={
    companyName:'',
    rating:'',
    review:'',
    dateRated:'',
  }

  rating = [];

  name = "Sysco Labs";

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(){

    return this.getReview()
    .subscribe(
      res => {
        this.rating = res.reviews;
        console.log(this.rating);
      },
      err =>
      {console.log(err);} 
    )
  }

  openAddReviewForm(){
    this.dialog.open(AddReviewComponent, {width:'400px', height:'450px'});
  }
  
  getReview() :Observable<any>{
    return this.http.get('http://localhost:8080/api/company/' + 'reviews/' + this.name);
  }
}
