import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterbanktransferComponent } from './interbanktransfer.component';

describe('InterbanktransferComponent', () => {
  let component: InterbanktransferComponent;
  let fixture: ComponentFixture<InterbanktransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterbanktransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterbanktransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
