import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewLocationComponent } from './new-location.component';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [NewLocationComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MaterialModule],
})
export class NewLocationModule {}
