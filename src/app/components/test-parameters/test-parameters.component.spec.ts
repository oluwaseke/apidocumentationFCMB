import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestParametersComponent } from './test-parameters.component';

describe('TestParametersComponent', () => {
  let component: TestParametersComponent;
  let fixture: ComponentFixture<TestParametersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestParametersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestParametersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
