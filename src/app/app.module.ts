import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FlightstatusComponent } from './flightstatus/flightstatus.component';
import * as langReducer from './store/lang.reducer';
import {LangEffect} from './store/lang.effect';
import { CheckinComponent } from './checkin/checkin.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

const route:Routes =[
  { path: 'fs', component: FlightstatusComponent},
  { path: 'checkin', component: CheckinComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    FlightstatusComponent,
    CheckinComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot({'lang':langReducer.reducer}),
    EffectsModule.forRoot([LangEffect]),
    RouterModule.forRoot(route),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
