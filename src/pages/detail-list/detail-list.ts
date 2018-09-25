import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ServiceProvider } from '../../providers/service/service';

/**
 * Generated class for the DetailListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-list',
  templateUrl: 'detail-list.html',
})
export class DetailListPage {
  
  listDetails: any;
  title:any;
  detailList:any;
  value:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public service: ServiceProvider) {
    this.value = navParams.get('topic');
  }
  
  
  ionViewDidLoad() {
   console.log("Topic List",this.value);
    this.service.getQuestlist(this.value).then(data =>{
      console.log("Success");  
      this.listDetails = data;
      this.title = this.listDetails.title;
      this.detailList = this.listDetails.topics; 
    }).catch(error => {
      console.log("Error ", JSON.stringify(error))
    });

  }



}
