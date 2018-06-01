import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LocalMarketPage } from './local-market';

@NgModule({
  declarations: [
    LocalMarketPage,
  ],
  imports: [
    IonicPageModule.forChild(LocalMarketPage),
  ],
})
export class LocalMarketPageModule {}
