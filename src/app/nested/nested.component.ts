import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nested',
  templateUrl: './nested.component.html',
  styleUrls: ['./nested.component.css']
})
export class NestedComponent implements OnInit {

  title="Nested Components";

   constructor() {
    console.log("#######NestedComponent created#########");

   }

  ngOnInit() {
  console.log("#######NestedComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######NestedComponent destroyed#########");
    }



    ngOnChanges(){
      console.log("==============NestedComponent ngOnChanges======");
    }
  
   
    ngAfterContentInit(){
      console.log("==============NestedComponent ngAfterContentInit======");
       
    }
    ngAfterContentChecked(){
      console.log("==============NestedComponent ngAfterContentChecked======");
       
    }
  
    ngAfterViewInit(){
      console.log("==============NestedComponent ngAfterViewInit======");
      
    }
  
    ngAfterViewChecked(){
      console.log("==============NestedComponent ngAfterViewChecked======");
  
    }
}
