import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-directives',
  templateUrl: './custom-directives.component.html',
  styleUrls: ['./custom-directives.component.css']
})
export class CustomDirectivesComponent implements OnInit {

  fcolor="brown";

  bcolor="wheat";

  show=true;

  hide=false;

  constructor() {
    console.log("#######CustomDirectivesComponent created#########");

   }

  ngOnInit() {
  console.log("#######CustomDirectivesComponent initialized#########");

  }

  ngOnDestroy() {
       console.log("#######CustomDirectivesComponent destroyed#########");
    }

}
