import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirtimevendingComponent } from './airtimevending.component';

describe('AirtimevendingComponent', () => {
  let component: AirtimevendingComponent;
  let fixture: ComponentFixture<AirtimevendingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirtimevendingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirtimevendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
