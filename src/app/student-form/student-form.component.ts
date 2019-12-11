import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  title="Angular 8 Template Triven Form Validation Example"

  student={
    firstName:'Pradeep',
    lastName:'Chinchole',
    email:'Pradeep@gmail.com',
    mobile:"9158652627"
  }
  
    constructor() {  console.log("#######StudentFormComponent created#########");

  }

 ngOnInit() {
   
  console.log("#######StudentFormComponent initialized#########");
 }

 ngOnDestroy() {
      console.log("#######StudentFormComponent destroyed#########");
   }



}
