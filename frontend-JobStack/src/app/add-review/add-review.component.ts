import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Login } from '../shared/login';
import {MatSliderModule} from '@angular/material/slider';

interface Level {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  addReviewForm : FormGroup;
  addReview: Login;
 

  rate: Level[] = [
    {value: 'Poor-1', viewValue: 'Poor'},
    {value: 'Fair-2', viewValue: 'Fair'},
    {value: 'Good-3', viewValue: 'Good'},
    {value: 'Very Good-4', viewValue: 'Very Good'},
    {value: 'Excellent-5', viewValue: 'Excellent'}
  ];

  constructor(private lg: FormBuilder,public dialogRef: MatDialogRef<AddReviewComponent>) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){

    this.addReviewForm = this.lg.group({
      companyName:'',
      review:''
     
    });
  }

  onSubmit(){
    this.addReview = this.addReviewForm.value;
    console.log(this.addReview);
    this.addReviewForm.reset();
    this.dialogRef.close();
  }
}
