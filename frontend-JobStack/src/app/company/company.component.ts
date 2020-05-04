import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  passRating ={
    companyName:'',
    rating:'',
    review:'',
    dateRated:'',
  }
  constructor(private http: HttpClient) { }

  ngOnInit(){
    
    return this.http.get('https://jobstack.azurewebsites.net/api', '')
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
}
