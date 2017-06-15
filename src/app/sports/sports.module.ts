import { SportLandingComponent } from './../sport-landing/sport-landing.component';
import { SportRouteModule } from './sport-route/sport-route.module';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    SportRouteModule,
  ],
  declarations: [SportLandingComponent]
})
export class SportsModule { }
