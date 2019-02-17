import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
loggedInUser = '';
  constructor(private router: Router) {
    this.loggedInUser = localStorage.getItem('userName');
   }

  ngOnInit() {
  }
  logout() {
    firebase.auth().signOut().then(res => {
      // Sign-out successful.
      console.log('res', res);
      localStorage.clear();
      this.router.navigateByUrl('/');
    }).catch((error) => {
      // An error happened.
      console.log(error);
    });
  }

  navigateTo(url) {
    this.router.navigateByUrl(`/${url}`);
  }

}
