import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewLocationComponent } from '../shared/dialogs/new-location/new-location.component';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';

interface Location {
  id: number;
  name: string;
  shortName: string;
  parentLocation?: any;
}
@Component({
  selector: 'app-location-list',
  templateUrl: './location-list.component.html',
  styleUrls: ['./location-list.component.scss'],
})
export class LocationListComponent {
  locations: Location[] = [];

  selectedView: string = 'list';
  views: string[] = ['list', 'grid'];
  panelOpenState: boolean = false;
  isActive: string = 'list';

  constructor(private dialog: MatDialog, private router: Router) {
    let activeView = localStorage.getItem('isActive');
    activeView = JSON.parse(<string>activeView);
    if (activeView) {
      this.isActive = activeView;
    } else {
      localStorage.setItem('isActive', JSON.stringify(this.isActive));
    }
    localStorage.removeItem('locations');
  }

  addLocation() {
    const dialogRef = this.dialog.open(NewLocationComponent, {
      width: '300px',
      data: {
        locations: this.locations,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const { name, shortName, parentLocation } = result.response;
        const newLocation = {
          id: Math.floor(Math.random() * 100000000),
          name: name,
          shortName: shortName,
          parentLocation: parentLocation ? parentLocation : null,
        };
        this.locations.push(newLocation);
        localStorage.setItem('locations', JSON.stringify(this.locations));
      }
    });
  }

  loadSection(section: string) {
    this.isActive = section;
    localStorage.setItem('isActive', JSON.stringify(section));
  }
}
