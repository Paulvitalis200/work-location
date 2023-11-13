import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationListModule } from './location-list/location-list.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewLocationModule } from './shared/dialogs/new-location/new-location.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocationListModule,
    BrowserAnimationsModule,
    NewLocationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
