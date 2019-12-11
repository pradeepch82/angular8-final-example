import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiGuard implements CanActivate, CanActivateChild, CanLoad {
 
 
  constructor(private router:Router){
   console.log("MultiGuardGuard created....");
  }


 
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(sessionStorage.getItem("email")!=null)
      return true;
      else{
      alert("Pleas Login First");   
      this.router.navigate(['/login']);
      return false;
      }
      
    }
 
 
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
// alert("You don't have permission to access this route");  
// return false;

    return confirm("Do You  want to load tis route?");

  }
 
 
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {




      if(sessionStorage.getItem("email")!=null)
      return true;
      else{
      alert("This Module can not be loaded...");   
      this.router.navigate(['/login']);
      return false;
    }
    

    }


}
