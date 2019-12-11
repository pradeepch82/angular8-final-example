import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-angular-basics',
  templateUrl: './angular-basics.component.html',
  styleUrls: ['./angular-basics.component.css']
})
export class AngularBasicsComponent implements OnInit,OnDestroy {

title:string='Angular Basics';
colors=['RED','GREEN','BLUE','MAGENTA','ORANGE']; //array
day=1; //number
min:number=1; //number
max:number=8; //number

show=true; //boolean
hide:boolean=false; //boolean

time=new Observable<string>((s:Subscriber<string>)=>{
 setInterval(()=>{
  s.next(new Date().toLocaleString());
 },1000);
});  //object

employee={id:5037971,name:'Pradeep chinchole',salary:23000.456784343,variable:0.15,
          city:'Pune',mobile:'9158652627',pan:'pmxac9845d',
          doj:new Date("February 01,2017"),isMarried:true,gender:1
         };   //object


  constructor() {
    console.log("#######AngularBasicsComponent created#########");

   }

  ngOnInit() {
  console.log("#######AngularBasicsComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######AngularBasicsComponent destroyed#########");
    }


    showHide(){
      this.hide=!this.hide;
       }


       ngOnChanges(){
        console.log("==============AngularBasicsComponent ngOnChanges======");
      }
  
     
      ngAfterContentInit(){
        console.log("==============AngularBasicsComponent ngAfterContentInit======");
         
      }
      ngAfterContentChecked(){
        console.log("==============AngularBasicsComponent ngAfterContentChecked======");
         
      }
  
      ngAfterViewInit(){
        console.log("==============AngularBasicsComponent ngAfterViewInit======");
        
      }
  
      ngAfterViewChecked(){
        console.log("==============TechnologiesComponent ngAfterViewChecked======");
   
      }
  

}
