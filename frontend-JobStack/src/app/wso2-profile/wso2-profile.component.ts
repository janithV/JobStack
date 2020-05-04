import { Component, OnInit } from '@angular/core';
import { AddReviewComponent } from '../add-review/add-review.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StarRatingComponent } from 'ng-starrating';
 
@Component({
  selector: 'app-wso2-profile',
  templateUrl: './wso2-profile.component.html',
  styleUrls: ['./wso2-profile.component.scss']
})
export class Wso2ProfileComponent implements OnInit {

  passRating ={
    companyName:'',
    rating:'',
    review:'',
    dateRated:'',
  }
  
  rating = [];

  name = "WSO2";

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(){
    console.log("in wso2 profile");
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

  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    alert(`Old Value:${$event.oldValue}, 
      New Value: ${$event.newValue}, 
      Checked Color: ${$event.starRating.checkedcolor}, 
      Unchecked Color: ${$event.starRating.uncheckedcolor}`);
  }
}
