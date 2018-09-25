import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

//Http modules
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ReorderPage } from '../pages/reorder/reorder';
import { AddDataPage } from '../pages/add-data/add-data';
import { EditDataPage } from '../pages/edit-data/edit-data';
import { DetailListPage } from '../pages/detail-list/detail-list'

import { SQLite } from '@ionic-native/sqlite';
import { Toast } from '@ionic-native/toast';
import { ServiceProvider } from '../providers/service/service';




@NgModule({
  declarations: [
    MyApp,
    ReorderPage,
    HomePage,
    AddDataPage,
    EditDataPage,
    DetailListPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ReorderPage,
    HomePage,
    AddDataPage,
    EditDataPage,
    DetailListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SQLite,
    Toast,
    HttpModule,
    HttpClientModule,
    ServiceProvider
  ]
})
export class AppModule {}
