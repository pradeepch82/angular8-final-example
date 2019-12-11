import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  model: any = {};

  constructor() { 
    console.log("################### RegisterComponent created ############")
      }
    
      ngOnInit() {
  
        console.log("################### RegisterComponent initialized ############");
  
     
  
  
      }
    
      ngOnDestroy() {
        console.log("################### RegisterComponent destroyed ############")
      }
  
 
  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

}
