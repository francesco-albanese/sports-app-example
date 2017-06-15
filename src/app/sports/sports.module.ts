import { SportLandingComponent } from './sport-landing/sport-landing.component';
import { SportRouteModule } from './sport-route/sport-route.module';

import { NgModule } from '@angular/core';
import { SportLeftComponent } from './sport-left/sport-left.component';
import { SportRightComponent } from './sport-right/sport-right.component';
import { SportSubComponent } from './sport-sub/sport-sub.component';

@NgModule({
  imports: [
    SportRouteModule,
  ],
  declarations: [SportLandingComponent, SportLeftComponent, SportRightComponent, SportSubComponent]
})
export class SportsModule { }
