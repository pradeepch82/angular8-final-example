import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

count=0;


increaseCounter(){
  this.count=this.count+1;
}

decreaseCounter(){
  this.count=this.count-1;
}


  constructor(){
  console.log("#######CounterComponent created#########");

}

ngOnInit() {

console.log("#######CounterComponent initialized#########");
}

ngOnDestroy() {
    console.log("#######CounterComponent destroyed#########");
 }


}
