import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';


var config = {
  apiKey: "AIzaSyA5OVs9IT1mpvIIqeVNrozixjcettFVf0I",
  authDomain: "sociallogins-fbe89.firebaseapp.com",
  databaseURL: "https://sociallogins-fbe89.firebaseio.com",
  projectId: "sociallogins-fbe89",
  storageBucket: "sociallogins-fbe89.appspot.com",
  messagingSenderId: "637140507181"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
