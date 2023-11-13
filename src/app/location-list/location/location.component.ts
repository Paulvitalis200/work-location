import { Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnDestroy {
  locations: any;
  constructor() {}

  ngOnInit() {
    let locations: any = localStorage.getItem('childLocations');
    this.locations = JSON.parse(locations);
  }

  ngOnDestroy(): void {
    localStorage.removeItem('childLocations');
  }
}
