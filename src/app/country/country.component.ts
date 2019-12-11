import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  name="INDIA";

  cityName="";

  stateName="";

  constructor() {
    console.log("#######CountryComponent created#########");

   }

  ngOnInit() {
  console.log("#######CountryComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######CountryComponent destroyed#########");
    }

    ngOnChanges(){
      console.log("==============CountryComponent ngOnChanges======");
    }
  
   
    ngAfterContentInit(){
      console.log("==============CountryComponent ngAfterContentInit======");
       
    }
    ngAfterContentChecked(){
      console.log("==============CountryComponent ngAfterContentChecked======");
       
    }
  
    ngAfterViewInit(){
      console.log("==============CountryComponent ngAfterViewInit======");
      
    }
  
    ngAfterViewChecked(){
      console.log("==============CountryComponent ngAfterViewChecked======");
  
    }
  

  }
