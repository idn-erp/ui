import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from '../services/common/api.service';

@Injectable({
  providedIn: 'root'
})
export class IsLoggedInGuardGuard implements CanActivate {
  constructor(
    private api: ApiService,
    private rtr: Router
  ){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(!this.api.isLoggedIn)
        this.rtr.navigate(['/login']);
      return this.api.isLoggedIn;
  }
  
}
