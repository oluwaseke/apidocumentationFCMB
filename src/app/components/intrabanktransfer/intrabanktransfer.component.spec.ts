import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntrabanktransferComponent } from './intrabanktransfer.component';

describe('IntrabanktransferComponent', () => {
  let component: IntrabanktransferComponent;
  let fixture: ComponentFixture<IntrabanktransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntrabanktransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntrabanktransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
