import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SctransferComponent } from './sctransfer.component';

describe('SctransferComponent', () => {
  let component: SctransferComponent;
  let fixture: ComponentFixture<SctransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SctransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SctransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
