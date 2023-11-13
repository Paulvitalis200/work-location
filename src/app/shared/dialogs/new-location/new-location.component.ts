import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss'],
})
export class NewLocationComponent {
  locationForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    shortName: [''],
    parentLocation: [''],
  });

  locations: any = [];
  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<NewLocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {
    this.locations = this.data.locations;
  }

  submit() {
    this.dialogRef.close({
      response: this.locationForm.value,
    });
  }
}
