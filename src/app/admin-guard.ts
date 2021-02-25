import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(): boolean {
    // true đc phép chạy

    if (!this.auth.isAdmin()) {
      this.router.navigate(['home']);
    }

    return this.auth.isAdmin();
  }
}
