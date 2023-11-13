import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder) {}

  submit() {
    console.log('bot');
  }
}
