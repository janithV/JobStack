import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required, Validators.minLength(4)]
    });
    this.secondFormGroup = this._formBuilder.group({
      nameOfCompany: [''],
      jobTitle: [''],
      duration: ['']
    });
    this.thirdFormGroup = this._formBuilder.group({
      nameOfSchool: ['', Validators.required],
      schoolDuration: ['', Validators.required],
      schoolLocation: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      nameOfUniversity: [''],
      degree: [''],
      courseOfStudy: [''],
      universityDuration: [''],
      universityLocation: ['']
    });
  }

  getData(){
    console.log("First Name : "+ this.firstFormGroup.value["firstName"]);
    console.log("Last Name : "+ this.firstFormGroup.value["lastName"]);
    console.log("Address : "+ this.firstFormGroup.value["address"]);
    console.log("Name of Company : "+ this.secondFormGroup.value["nameOfCompany"]);
    console.log("Job Title : "+ this.secondFormGroup.value["jobTitle"]);
    console.log("Duration : "+ this.secondFormGroup.value["duration"]);
    console.log("Name of School : "+ this.thirdFormGroup.value["nameOfSchool"]);
    console.log("Duration : "+ this.thirdFormGroup.value["schoolDuration"]);
    console.log("Location : "+ this.thirdFormGroup.value["schoolLocation"]);
    console.log("Name of University : "+ this.fourthFormGroup.value["nameOfUniversity"]);
    console.log("Degree : "+ this.fourthFormGroup.value["degree"]);
    console.log("Course of Study : "+ this.fourthFormGroup.value["courseOfStudy"]);
    console.log("Duration : "+ this.fourthFormGroup.value["universityDuration"]);
    console.log("Location : "+ this.fourthFormGroup.value["universityLocation"]);
  }
}