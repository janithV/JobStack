import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import { Rating } from '../shared/rating';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})

export class AddReviewComponent implements OnInit {

  addReviewForm : FormGroup;
  rating : FormData;

  constructor(private http: HttpClient, private lg: FormBuilder,public dialogRef: MatDialogRef<AddReviewComponent>) { 
    this.createForm();
  }

  ngOnInit(){
  }

  createForm(){

    this.addReviewForm = this.lg.group({
      companyName:[''],
      rating:[1],
      review:['']
     
    });
  }

  onSubmit(){
    
    console.log(this.addReviewForm.value);
    
    var formData: any = new FormData();
    formData.append("companyName", this.addReviewForm.get('companyName').value);
    formData.append("rating",this.addReviewForm.get('rating').value);
    formData.append("review", this.addReviewForm.get('review').value);

    this.http.post('https://jobstack.azurewebsites.net/', formData)
    .subscribe(
      (res) => console.log(res),
      (err)=> console.log(err)   
    );
    this.addReviewForm.reset();
    this.dialogRef.close();


  }

  formatLabel(value: number) {
    if (value > 5) {
      return Math.round(value / 5);
    }
    return value;
  }

  
}
