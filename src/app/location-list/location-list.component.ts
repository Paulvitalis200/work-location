import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewLocationComponent } from '../shared/dialogs/new-location/new-location.component';

@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent {
  locations: any = [];

  constructor(private dialog: MatDialog) {}

  addLocation() {
    this.dialog.open(NewLocationComponent, {
      width: '300px',
    });
  }
}
