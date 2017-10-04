import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

//import { HomePage } from '../pages/home/home';
import { IntroPage } from '../pages/intro/intro';
import { TabsPage } from '../pages/main/tabs/tabs'

import { User } from '../providers/user'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IntroPage;
  access_token:string = null;
  user_info:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public user: User) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  checkIfUserLoggedIn(){
    var root;
    this.getToken();
    this.getUserInfo();
    console.log(this.access_token);
    console.log(this.user_info);
    if(this.access_token != null && this.user_info != null && this.access_token != ''){
      root = TabsPage;
    }
    else{
      root = IntroPage;
    }
    return root;
  }

  getToken(){
    this.user.getTokenFromStorage().then(res => {
      this.access_token = res.access_token;
    });
  }
  getUserInfo(){
    this.user.getUserInfoFromStorage().then(res => {
      this.user_info = res;
    });
  }
}

