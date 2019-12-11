import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  name="MAHARASHTRA";


  @Input()
  countryName="";
  
  cityName="";

  @Output()
  cityChanged=new EventEmitter<string>();
  
  @Output()
  stateChanged=new EventEmitter<string>();
  

  constructor() {
    console.log("#######StateComponent created#########");

   }

  ngOnInit() {
  console.log("#######StateComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######StateComponent destroyed#########");
    }


    sendCity($event){
      this.cityName=$event;
      this.cityChanged.emit($event);
    }

    sendStateToCountry(){
      this.stateChanged.emit(this.name);
    }

    ngOnChanges(){
      console.log("==============StateComponent ngOnChanges======");
    }

    ngDoCheck(){
      console.log("==============StateComponent ngDoCheck======");
    
    }

    ngAfterContentInit(){
      console.log("==============StateComponent ngAfterContentInit======");
       
    }
    ngAfterContentChecked(){
      console.log("==============StateComponent ngAfterContentChecked======");
       
    }

    ngAfterViewInit(){
      console.log("==============StateComponent ngAfterViewInit======");
      
    }

    ngAfterViewChecked(){
      console.log("==============StateComponent ngAfterViewChecked======");
 
    }


}
