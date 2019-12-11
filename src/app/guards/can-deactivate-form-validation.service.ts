import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { FormValidationComponent } from '../form-validation/form-validation.component';

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateFormValidation  implements CanDeactivate<FormValidationComponent>  {

  constructor() {
    console.log("CanDeactivateFormValidationService created..")
   }

 canDeactivate(component: FormValidationComponent, 
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot) {

      return component.canDeactivate();

}



}
