import { NgModule } from '@angular/core';

import { SkyDemoModule } from '../demo';

require('style-loader!@skyux/theme/css/sky.css');

import {
  AppSkyModule
} from './app-sky.module';

@NgModule({
  entryComponents: [],
  imports: [
    SkyDemoModule
  ],
  exports: [
    AppSkyModule,
    SkyDemoModule
  ],
  providers: []
})
export class AppExtrasModule { }
