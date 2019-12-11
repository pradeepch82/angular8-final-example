import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  registerForm: FormGroup;
  
  submitted = false;
  loading=false;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.registerForm = this.formBuilder.group({
          firstName: ['Pradeep', Validators.required],
          lastName: ['Chinchole', Validators.required],
          email: ['pradeep_chinchole@syntelinc.com', [Validators.required, Validators.email]],
          password: ['abc@123', [Validators.required, Validators.minLength(8)]]
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      console.log("###########");
      
      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      console.log("==============");

      alert('SUCCESS!! :-)')
  }

}
