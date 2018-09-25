import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http ,HttpModule} from '@angular/http'
import { Response } from "@angular/http";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
    
  }

  //Calling Q&A Service
  getQuestlist(topic) {
    return new Promise((resolve, reject) => {
      let url = 'assets/data/'+topic+'.json'
      console.log("URL",url);
      this.http.get(url, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": "true",
          "Access-Control-Allow-Headers": "Content-Type"
        }
      }).map((res: Response) => res).subscribe(data => {
        console.log(" data Success !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", data)
        resolve(data);
      }, (err) => {
        reject(err);
        console.log("data Error !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!", err);
      });
    });
  }

}
