import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';
import { FgColorDirective } from '../directives/fg-color.directive';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  @ViewChild(CounterComponent,{static:false})
  private counter:CounterComponent;


  @ViewChild(FgColorDirective,{static:false})
  private f:FgColorDirective;


  @ViewChild("name",{static:false})
  private name:ElementRef;

  @ViewChild("city",{static:false})
  private city:ElementRef;


  
  
constructor() {  
    console.log("#######ViewChildComponent created#########");
  }

ngOnInit() {
console.log("#######ViewChildComponent initialized#########");
}

ngOnDestroy() {
    console.log("#######ViewChildComponent destroyed#########");
}


  increase(){
    this.counter.increaseCounter();

  }
  
  decrease(){
    this.counter.decreaseCounter();
  }

  changeColor(){
    this.f.fgColor="blue";


    this.name.nativeElement.style.color="RED";
    this.city.nativeElement.style.color="GREEN";
    
    this.name.nativeElement.style.background="yellow";
    this.city.nativeElement.style.background="cyan";
    

  }
  


}
