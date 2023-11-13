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
  locations: Location[] = [
    {
      id: 1,
      name: 'Qatar HQ',
      shortName: 'Qatar',
      parentLocation: null,
    },
    {
      id: 2,
      name: 'UAE HQ',
      shortName: 'Qatar',
      parentLocation: {
        id: 1,
        name: 'Qatar HQ',
        shortName: 'Qatar',
      },
    },
    {
      id: 3,
      name: 'Jeddah HQ',
      shortName: 'Qatar',
      parentLocation: {
        id: 1,
        name: 'Qatar HQ',
        shortName: 'Qatar',
      },
    },
    {
      id: 4,
      name: 'Dubai HQ',
      shortName: 'Qatar',
      parentLocation: {
        id: 3,
        name: 'Jeddah HQ',
        shortName: 'Qatar',
      },
    },
  ];

  selectedView: string = 'list';
  views: string[] = ['list', 'grid'];
  panelOpenState: boolean = false;
  isActive: string = 'list';

  constructor(private dialog: MatDialog, private router: Router) {}

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
      }
    });
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.locations, event.previousIndex, event.currentIndex);
  }

  getChildLocations(inputLocation: Location) {
    let childLocations: any = this.locations.filter(
      (location: Location) =>
        inputLocation.name?.toLowerCase() ===
        location.parentLocation?.name?.toLowerCase()
    );
    return childLocations;
  }

  loadSection(section: string) {
    this.isActive = section;
  }

  goToLocation(location: any) {
    if (this.getChildLocations(location) < 1) return;
    // localStorage.setItem(
    //   'childLocations',
    //   JSON.stringify(this.getChildLocations(location))
    // );
    // this.router.navigateByUrl('location');
  }
}
