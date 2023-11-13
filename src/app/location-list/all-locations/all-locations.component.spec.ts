import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLocationsComponent } from './all-locations.component';

describe('AllLocationsComponent', () => {
  let component: AllLocationsComponent;
  let fixture: ComponentFixture<AllLocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllLocationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
