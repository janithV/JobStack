import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { Login } from '../shared/login';

@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.scss']
})
export class AddReviewComponent implements OnInit {

  addReviewForm : FormGroup;
  addReview: Login;

  constructor(private lg: FormBuilder,public dialogRef: MatDialogRef<AddReviewComponent>) { 
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm(){

    this.addReviewForm = this.lg.group({
      username:'',
      password:'',
     
    });
  }

  onSubmit(){
    this.addReview = this.addReviewForm.value;
    console.log(this.addReview);
    this.addReviewForm.reset();
    this.dialogRef.close();
  }
}
