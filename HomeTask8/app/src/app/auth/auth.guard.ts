import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate{
  
  constructor(private authService: AuthService) {}

  canActivate(
    Route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return this.authService.showArticle;
  }
}
