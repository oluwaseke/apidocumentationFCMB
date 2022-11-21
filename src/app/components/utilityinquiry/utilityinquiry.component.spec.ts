import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityinquiryComponent } from './utilityinquiry.component';

describe('UtilityinquiryComponent', () => {
  let component: UtilityinquiryComponent;
  let fixture: ComponentFixture<UtilityinquiryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UtilityinquiryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityinquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
