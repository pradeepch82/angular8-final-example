import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

name="PUNE";

@Input()
stateName="";

@Input()
countryName="";

@Output()
cityChanged=new EventEmitter<string>();



  constructor() {
    console.log("#######CityComponent created#########");

   }

  ngOnInit() {
  console.log("#######CityComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######CityComponent destroyed#########");
    }


  sendCityToState(){
    console.log("sendCityToState  :"+this.name);
    this.cityChanged.emit(this.name);
  }


  ngOnChanges(){
    console.log("==============CityComponent ngOnChanges======");
  }

  

  ngAfterContentInit(){
    console.log("==============CityComponent ngAfterContentInit======");
     
  }
  ngAfterContentChecked(){
    console.log("==============CityComponent ngAfterContentChecked======");
     
  }

  ngAfterViewInit(){
    console.log("==============CityComponent ngAfterViewInit======");
    
  }

  ngAfterViewChecked(){
    console.log("==============CityComponent ngAfterViewChecked======");

  }


}
