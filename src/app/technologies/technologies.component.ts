import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent  {

title="Top 5 technologies";


technologies=[
  {id:101,title:'Angular',likes:0,dislikes:0},
  {id:102,title:'Micro Services',likes:0,dislikes:0},
  {id:103,title:'Spring Boot',likes:0,dislikes:0},
  {id:104,title:'AWS',likes:0,dislikes:0},
  {id:105,title:'React',likes:0,dislikes:0},
 ];



 incrementLikes(t){
   t.likes++;
 }

 incrementDislikes(t){
   t.dislikes++;
 }
  
  constructor() {
    console.log("#######TechnologiesComponent created#########");

   }

  ngOnInit() {
  console.log("#######TechnologiesComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######TechnologiesComponent destroyed#########");
    }

    ngOnChanges(){
      console.log("==============TechnologiesComponent ngOnChanges======");
    }

    ngAfterContentInit(){
      console.log("==============TechnologiesComponent ngAfterContentInit======");
       
    }
    ngAfterContentChecked(){
      console.log("==============TechnologiesComponent ngAfterContentChecked======");
       
    }

    ngAfterViewInit(){
      console.log("==============TechnologiesComponent ngAfterViewInit======");
      
    }

    ngAfterViewChecked(){
      console.log("==============TechnologiesComponent ngAfterViewChecked======");
 
    }

}
