import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, Params } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {
  title = 'arjit-infotech';
  userLoggedIn = false;
  contactButton: String = 'Get In Contact';
  public showContact: Boolean = false;
  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.userLoggedIn = localStorage.getItem('userToken') ? true : false;
  }


  showContactForm() {
    this.showContact = !this.showContact;
    this.contactButton = this.showContact ? 'Hide Form' : 'Get In Contact';
  }

  login(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(res => {
        console.log(res.user);
        localStorage.setItem('userToken', res.user.refreshToken);
        localStorage.setItem('userName', res.user.email);
        this.router.navigateByUrl('/dashboard');
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
      });
  }

  ngOnInit() {
  }

  toDashBoard () {
    this.router.navigateByUrl('/dashboard');
  }

}
