import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface canComponentDeactivate{
  canDeactivated: () => boolean;

  // tạo interface thay cho unknown để dùng component.method
}

@Injectable({
  providedIn: 'root'
})
export class CanExitWithoutSaveGuard implements CanDeactivate<canComponentDeactivate> {
  canDeactivate(
    component: canComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.canDeactivated(); // false thif khoong cho thoat
  }
  
}
