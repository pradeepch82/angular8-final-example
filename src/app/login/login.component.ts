import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  title="Login Form";

  loginForm:FormGroup;
  
    constructor(private fb:FormBuilder,private router:Router) {
      console.log("LoginComponent Created...");
       
    }
  
    ngOnInit() {

      this.loginForm=this.fb.group({
         email:["pradeep@gmail.com",[Validators.required,Validators.email]],
        
         password:["pradeep@1982",Validators.compose([
                     Validators.required,
                     Validators.minLength(8),
                     Validators.maxLength(10)])]
      
      });

      console.log("========= LoginComponent initialized  =========")
    }
  
    ngOnDestroy() {
      console.log("========= LoginComponent destroyed  =========")
    }
  
    get lf(){
      return this.loginForm;
    }

    submitForm(lf){
     sessionStorage.setItem("email",lf.email);
     alert("Login successfull");
     this.router.navigate(['/home']);
    }


}
