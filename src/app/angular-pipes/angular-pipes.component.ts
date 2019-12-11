import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-pipes',
  templateUrl: './angular-pipes.component.html',
  styleUrls: ['./angular-pipes.component.css']
})
export class AngularPipesComponent implements OnInit {

  title="Angular Pipes";

  rows=2;

  sortColoumn="id";
  descending=false;

  searchText="";

  sort(coloumn){

   if(this.sortColoumn==coloumn)
   this.descending=!this.descending;

    this.sortColoumn=coloumn;
  }




  employees=[
    {id:12,name:'Ram chinchole',salary:2345500,variable:0.15,
    city:'Pune',mobile:'8149976894',pan:'cmxac9845d',
    doj:new Date("February 01,2011"),isMarried:true,gender:1
   },
   {id:23,name:'Sachin chinchole',salary:324242.456784343,variable:0.10,
   city:'Mumbai',mobile:'7123456732',pan:'abxac9845a',
   doj:new Date("April 01,2013"),isMarried:true,gender:1
  },
  
  {id:11,name:'Ameya Joshi',salary:34343.456784343,variable:0.11,
  city:'Mumbai',mobile:'7788554433',pan:'abcac9845c',
  doj:new Date("June 01,2018"),isMarried:true,gender:1
 },
 
 {id:14,name:'Prachitee chinchole',salary:45345.456784343,variable:0.20,
 city:'Pune',mobile:'9158652627',pan:'xyzac9845d',
 doj:new Date("June 01,2010"),isMarried:false,gender:2
},

{id:21,name:'Prachi chinchole',salary:4345345.456784343,variable:0.15,
city:'Solapur',mobile:'9890732222',pan:'pvcac9845d',
doj:new Date("February 01,2017"),isMarried:true,gender:2
},

{id:17,name:'Mahesh chinchole',salary:345345.34324,variable:0.12,
city:'Solapur',mobile:'7158652622',pan:'amxac9845d',
doj:new Date("May 01,2013"),isMarried:false,gender:3
},

];



  constructor() {
    console.log("#######AngularPipesComponent created#########");

   }

  ngOnInit() {
  console.log("#######AngularPipesComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######AngularPipesComponent destroyed#########");
    }

}
