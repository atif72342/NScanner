import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../auth/login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage);
  }

}
