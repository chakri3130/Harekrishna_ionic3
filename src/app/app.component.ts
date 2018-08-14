import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MahamantrajapaPage } from "../pages/mahamantrajapa/mahamantrajapa";
import { NavController } from 'ionic-angular';
import {ContactusPage} from '../pages/contactus/contactus'
import {BlogPage} from '../pages/blog/blog';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('nav') nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  information:any[];
  constructor(public platform: Platform, public statusBar: StatusBar,public splashScreen: SplashScreen,private http:Http) {
    let localData = http.get('assets/list.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    })
    this.initializeApp();
   
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'List', component: ListPage }
    ];

  }
  toggleSection(i) {
    this.information[i].open = !this.information[i].open;
  }
 
  toggleItem(i, j) {
    this.information[i].children[j].open = !this.information[i].children[j].open;
  }
  japa()
  {
    this.nav.setRoot(MahamantrajapaPage);
  }
  homepage()
  {
    this.nav.setRoot(HomePage);
  }
  blog()
  {
    this.nav.setRoot(BlogPage);
  }
  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      
    });
  }
  contactus()
  {
    this.nav.setRoot(ContactusPage);
  }
}
