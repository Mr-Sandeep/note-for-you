import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ServicesService } from '../service/services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private serv: ServicesService){}
  authToken: any;
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      
      if(this.serv.loggedUser.check || sessionStorage.getItem('x-auth-token-note')){
        this.authToken = this.serv.loggedUser.token ||  sessionStorage.getItem('x-auth-token-note');
        this.serv.loggedUser.check=true;
        return true;
      }else{
        this.serv.loggedUser.check=false;
        this.router.navigate(['/login']);
        return false
      }
  }
  
}
