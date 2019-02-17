import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurd implements CanActivate {
  userToken: string;

  constructor(private route: Router) {
    this.userToken = localStorage.getItem('userToken');

  }
  canActivate() {
    if (this.userToken) {
      return true;
    } else {
      this.route.navigate(['/']);
      return false;
    }
  }
}
