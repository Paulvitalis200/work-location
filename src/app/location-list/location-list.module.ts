import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationListRoutingModule } from './location-list-routing.module';
import { MaterialModule } from './material.module';
import { LocationListComponent } from './location-list.component';

@NgModule({
  declarations: [LocationListComponent],
  imports: [CommonModule, LocationListRoutingModule, MaterialModule],
})
export class LocationListModule {}
