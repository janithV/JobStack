import { Component, OnInit } from '@angular/core';
import { AddReviewComponent } from '../add-review/add-review.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-virtusa-profile',
  templateUrl: './virtusa-profile.component.html',
  styleUrls: ['./virtusa-profile.component.scss']
})
export class VirtusaProfileComponent implements OnInit {

  passRating ={
    companyName:'',
    rating:'',
    review:'',
    dateRated:'',
  }

  constructor(public dialog: MatDialog, private http: HttpClient) { }

  ngOnInit(){

    return this.getReview()
    .subscribe(
      res => {
        this.passRating.companyName = res.companyName;
        this.passRating.rating = res.rating;
        this.passRating.review = res.review;
        this.passRating.dateRated = res.dateRated;
      },
      err =>
      {console.log(err);} 
    )
  }

  openAddReviewForm(){
    this.dialog.open(AddReviewComponent, {width:'400px', height:'450px'});
  }
  
  getReview() :Observable<any>{
    return this.http.get('https://jobstack.azurewebsites.net/api/company/' + 'reviews');
  }
}
