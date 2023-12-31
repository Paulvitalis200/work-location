import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationListComponent } from './location-list.component';
import { LocationComponent } from './location/location.component';
import { AllLocationsComponent } from './all-locations/all-locations.component';

const routes: Routes = [
  {
    path: '',
    component: LocationListComponent,
    children: [
      {
        path: '',
        component: AllLocationsComponent,
      },
      {
        path: 'location',
        component: LocationComponent,
        data: {
          title: 'Omnichannel profile',
          breadcrumb: 'Omnichannel profile',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationListRoutingModule {}
