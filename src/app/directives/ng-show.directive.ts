import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[ngShow]'
})
export class NgShowDirective {

  constructor(private t:TemplateRef<any>,private vcr:ViewContainerRef) {
    console.log("NgShowDirective  created...")
    }
 
    @Input()
    set ngShow(flag){
     console.log("In setNgshow "+flag);
      
   if(flag)
   this.vcr.createEmbeddedView(this.t);
   else
   this.vcr.clear();
   }
 

}
