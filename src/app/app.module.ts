import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';
import { HttpModule, Http } from '@angular/http';
import { Camera } from '@ionic-native/camera';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { File } from '@ionic-native/file';
import { AndroidPermissions } from '@ionic-native/android-permissions';


// Custom Providers
import { Api } from '../providers/api';
import { Data } from '../providers/data';
import { User } from '../providers/user';
import { LocalContactPersons } from '../providers/contactpersons';
import { ExternalStorage } from '../providers/storage';

// Pipes
import { FilterFabrics } from '../pipes/filterFabrics';

// Pages
import { MyApp } from './app.component';
import { IntroPage } from '../pages/intro/intro';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/auth/login/login';
import { PostLoginPage } from '../pages/auth/post-login/post-login';
import { TabsPage } from '../pages/main/tabs/tabs'
import { OrdersRoot } from '../pages/main/tabs/orders/root/root';
import { CreateOrder } from '../pages/main/tabs/orders/create/create';
import { ModalAddContactPerson } from '../pages/main/tabs/orders/create/modals/addContactPerson/addContactPerson';
import { ModalAddDummy } from '../pages/main/tabs/orders/create/modals/addDummy/addDummy';
import { Scan } from '../pages/main/tabs/orders/scan/scan';
import { ModalFabricDetails } from '../pages/main/tabs/orders/scan/modals/fabricDetails';
import { ModalColorPicker } from '../pages/main/tabs/orders/scan/modals/colorPicker/colorPicker';
import { SubmitRequest } from '../pages/main/tabs/orders/submitRequest/submitRequest';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SampleRequestDrafts } from '../pages/main/tabs/drafts/drafts';


@NgModule({
  declarations: [
    MyApp,
    IntroPage,
    HomePage,
    LoginPage,
    PostLoginPage,
    OrdersRoot,
    SampleRequestDrafts,
    TabsPage,
    CreateOrder,
    ModalAddContactPerson,
    ModalAddDummy,
    Scan,
    FilterFabrics,
    ModalFabricDetails,
    ModalColorPicker,
    SubmitRequest
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    IntroPage, 
    HomePage,
    LoginPage,
    PostLoginPage,
    OrdersRoot,
    SampleRequestDrafts,
    TabsPage,
    CreateOrder,
    ModalAddContactPerson,
    ModalAddDummy,
    Scan,
    ModalFabricDetails,
    ModalColorPicker,
    SubmitRequest
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Data,
    Api,
    User,
    LocalContactPersons,
    Camera,
    BarcodeScanner,
    AndroidPermissions,
    File,
    ExternalStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
