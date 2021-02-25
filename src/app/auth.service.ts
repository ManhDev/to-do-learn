import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logIn: boolean = null;
  admin: boolean = null;

  constructor(private router: Router) {}

  login(user): void {
    console.log(user);
    // nơi lưu trữ của trình duyệt
    // token được lấy từ JWT
    localStorage.setItem(
      'token',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOmZhbHNlLCJpYXQiOjE1MTYyMzkwMjJ9.DKiRuoKZhdCka_CGBCDxH2FQUW8qlclTTIJvTq-4uyE'
    );
    this.logIn = true;
    this.admin = true;
    this.router.navigate(['/']);
  }

  isLogIn(): boolean {
    if (this.logIn !== null) {
      return this.logIn;
    }
    let token = localStorage.getItem('token');
    console.log(token);

    if (token !== null) {
      this.logIn = true;
      const helper = new JwtHelperService();
      const decodedToken = helper.decodeToken(token);
      console.log(decodedToken);
      this.admin = decodedToken.admin;
      console.log(this.admin);
      return true;
    }
    return false;
  }

  logOut(): void {
    localStorage.removeItem('token');
    this.logIn = false;
    this.router.navigate(['home']);
  }
  isAdmin(): boolean {
    console.log(this.admin);
    return this.admin;
  }
}
