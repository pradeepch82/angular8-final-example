import { Component, OnInit } from '@angular/core';
import { Observable  } from 'rxjs';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  constructor() {
    console.log("FormValidationComponent  created...")
   }


	canDeactivate(): Observable<boolean> | boolean {
    return window.confirm('Are you sure you want to discard the changes?');

  }	

  ngOnInit() {
    console.log("FormValidationComponent  initialized...")
   }

   ngOnDestroy() {
    console.log("FormValidationComponent  destroyed...")
   }

}
