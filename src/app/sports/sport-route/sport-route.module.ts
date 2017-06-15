import { SportSubComponent } from './../sport-sub/sport-sub.component';
import { SportLandingComponent } from '../sport-landing/sport-landing.component';
import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';

const sportRoute: Routes = [
  { path: '', redirectTo: '/sport-landing', pathMatch: 'full' },
  { path: 'sport-landing', component: SportLandingComponent, children: [
    { path: '', component: SportSubComponent },
  ] }
];

@NgModule({
  imports: [
    RouterModule.forChild(sportRoute)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class SportRouteModule { }