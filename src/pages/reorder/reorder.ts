import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, reorderArray } from 'ionic-angular';
//import { HomePage } from '../home/home'
import { DetailListPage } from '../detail-list/detail-list';
import { ServiceProvider } from '../../providers/service/service';
/**
 * Generated class for the ReorderPage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reorder',
  templateUrl: 'reorder.html',
})
export class ReorderPage {

  topics: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    //this.topics=[{"id":1,"key":"js","topic":"JavaScript"},{"id":2,"key":"es6","topic":"ES 6"},{"id":3,"key":"angular1","topic":"Angular Js"},{"id":4,"key":"angular5","topic":"Angular 2,4,5,6"},{"id":5,"key":"ionic","topic":"Ionic Framework"},{"id":6,"key":"cordova","topic":"Phonegap/Cordova"},{"id":7,"key":"html5","topic":"HTML5"},{"id":8,"key":"css","topic":"CSS"},{"id":9,"key":"mongodb","topic":"MongoDB"},{"id":10,"key":"nodejs","topic":"Node Js"}]
    this.topics = [ { "id":1, "key":"js", "topic":"JavaScript", "url":"assets/imgs/js.png" }, { "id":2, "key":"es6", "topic":"ES 6", "url":"assets/imgs/es6.jpg" }, { "id":3, "key":"angular1", "topic":"Angular Js", "url":"assets/imgs/angular1.jpg" }, { "id":4, "key":"angular5", "topic":"Angular 2,4,5,6", "url":"assets/imgs/angular2.png" }, { "id":5, "key":"ionic", "topic":"Ionic Framework", "url":"assets/imgs/ionic.jpg" }, { "id":6, "key":"cordova", "topic":"Phonegap/Cordova", "url":"assets/imgs/cordova.jpg" }, { "id":7, "key":"html5", "topic":"HTML 5", "url":"assets/imgs/html5.jpg" }, { "id":8, "key":"css", "topic":"CSS 3", "url":"assets/imgs/css3.jpg" }, { "id":9, "key":"mongodb", "topic":"MongoDB", "url":"assets/imgs/mongodb.jpg" }, { "id":10, "key":"nodejs", "topic":"Node Js", "url":"assets/imgs/nodejs.jpg" } ];
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReorderPage');
  }

  reOrderItem(index){
    console.log("Index"+index);
    this.topics = reorderArray(this.topics,index);
  }

  myClick(ind){
    console.log("Index"+ind);
    console.log("Selected Topics: "+this.topics[ind]);
    this.navCtrl.push(DetailListPage,{
      topic:this.topics[ind].key
      });
  }
}
