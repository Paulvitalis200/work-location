import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocationListRoutingModule } from './location-list-routing.module';
import { MaterialModule } from './material.module';
import { LocationListComponent } from './location-list.component';
import { AllLocationsComponent } from './all-locations/all-locations.component';

@NgModule({
  declarations: [LocationListComponent, AllLocationsComponent],
  imports: [CommonModule, LocationListRoutingModule, MaterialModule],
})
export class LocationListModule {}
