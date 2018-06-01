import { BrowserModule } from '@angular/platform-browser';
import { ChartsModule } from 'ng2-charts';
import { ErrorHandler, NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MarketPage} from '../pages/market/market';
import {StocksPage} from '../pages/stocks/stocks';
import {LocalMarketPage} from '../pages/local-market/local-market';
import {WorldMarketPage} from '../pages/world-market/world-market';
import { RedditDataProvider } from '../providers/reddit-data/reddit-data';




// const routes: Routes = [
//   { path: 'market', component: MarketSummary },
//   { path: 'stocks', component: StocksPage },
//   { path: '', redirectTo: '/market', pathMatch: 'full'}
// ];
// const routes: Routes = [
//   { path: 'market', component: MarketPage },
//   { path: 'home', component: HomePage },
//   { path: 'stocks', component: StocksPage },
//   { path: '', redirectTo: 'home', pathMatch: 'full'}
// ];

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MarketPage,
    StocksPage,
    LocalMarketPage,
    WorldMarketPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
    IonicModule.forRoot(MyApp,{}, {
     links: [
      { component: HomePage, name: 'Home', segment: 'home' },
      { component: MarketPage, name: 'Market', segment: 'market', defaultHistory: [HomePage] },
      { component: StocksPage, name: 'Stocks', segment: 'stocks', defaultHistory: [HomePage] },
      {component:LocalMarketPage,name:'LocalMarket',segment:'local-market',defaultHistory:[HomePage]},
      {component:WorldMarketPage,name:'WorldMarket',segment:'world-market',defaultHistory:[HomePage]},

    ]
  })
  ],
  bootstrap: [IonicApp],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  entryComponents: [
    MyApp,
    HomePage,
    MarketPage,
    StocksPage,
    LocalMarketPage,
    WorldMarketPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RedditDataProvider
  ]
})
export class AppModule {}


// , {}, {
//      links: [
//       { component: HomePage, name: 'Home', segment: 'home' },
//        // { component: DetailPage, name: 'Detail', segment: 'detail/:userId', defaultHistory: [HomePage] }
//     ]
//   }

// ,
//     RouterModule.forRoot(routes)