import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[fgColor]'
})
export class FgColorDirective {

  constructor(private e:ElementRef,private r:Renderer2) {
   console.log("FgColor Directive created...")
   }

   @Input()
   set fgColor(color){
    console.log("In setFgColor "+color);
     
    this.r.setStyle(this.e.nativeElement,"color",color);

   }



}
