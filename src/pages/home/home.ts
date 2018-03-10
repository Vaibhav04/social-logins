
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from "firebase";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  provider = {
    loggedIn: false,
    name: '',
    profilePicture: '',
    email: ''
  }

  login(provider) {
    let signInProvider = null;
    switch(provider) {
      case "facebook":
        signInProvider = new firebase.auth.FacebookAuthProvider();
        break;
      case "google":
        signInProvider = new firebase.auth.GoogleAuthProvider();
        break;
    }

    this.afa.auth.signInWithPopup(signInProvider)
    .then((res) => {
        this.provider.loggedIn = true;
        this.provider.name = res.user.displayName;
        this.provider.email = res.user.email;
        this.provider.profilePicture = res.user.photoURL;
    });
  }

  constructor(
    public navCtrl: NavController,
    private afa: AngularFireAuth) {

  }

  logout() {
    this.afa.auth.signOut();
    this.provider.loggedIn = false;
  }
}
