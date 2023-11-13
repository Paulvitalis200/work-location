import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Router } from '@angular/router';
import { NewLocationComponent } from 'src/app/shared/dialogs/new-location/new-location.component';
import { LocationsService } from 'src/app/core/services/locations.service';

interface Location {
  id: number;
  name: string;
  shortName: string;
  parentLocation?: any;
}
@Component({
  selector: 'app-all-locations',
  templateUrl: './all-locations.component.html',
  styleUrls: ['./all-locations.component.scss'],
})
export class AllLocationsComponent {
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

  constructor(
    private dialog: MatDialog,
    private locationsService: LocationsService,
    private router: Router
  ) {}

  get isActive() {
    return this.locationsService.get();
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

  goToLocation(location: any) {
    if (this.getChildLocations(location) < 1) return;
    localStorage.setItem(
      'childLocations',
      JSON.stringify(this.getChildLocations(location))
    );
    this.router.navigateByUrl('location');
  }
}
