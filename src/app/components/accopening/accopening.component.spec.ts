import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccopeningComponent } from './accopening.component';

describe('AccopeningComponent', () => {
  let component: AccopeningComponent;
  let fixture: ComponentFixture<AccopeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccopeningComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccopeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
