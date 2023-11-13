import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  constructor() {}

  get() {
    let isActive: any = localStorage.getItem('isActive');
    return JSON.parse(isActive);
  }

  getLocations() {
    let locations: any = localStorage.getItem('locations');
    return JSON.parse(locations);
  }
}
