import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service';


@Injectable({
  providedIn: 'root'
})
export class MemberGuard implements CanActivate {
  constructor(
    private router: Router,
    private tokenStorageService: TokenStorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const role = this.tokenStorageService.getUser();
    console.log("member guard "+ role);
    if (role !== "member") {
      return false;
    } else {
      return true;
    }
  }
}
