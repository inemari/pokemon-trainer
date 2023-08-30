import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(
    private readonly router: Router,
    private readonly userService: UserService) { 

    }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): 
    | Observable<boolean | UrlTree> 
    | Promise<boolean | UrlTree>
    | boolean 
    | UrlTree {
      if (this.userService.user) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }
}
