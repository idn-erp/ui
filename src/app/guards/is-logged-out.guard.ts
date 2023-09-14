import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ApiService } from '../services/common/api.service';

export const IsLoggedOutGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
)=>{
  const api = inject(ApiService);
  const rtr = inject(Router);
  return !api.isLoggedIn || rtr.createUrlTree(['/dash']);
}