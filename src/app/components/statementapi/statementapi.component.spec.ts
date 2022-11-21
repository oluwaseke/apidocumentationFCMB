import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatementapiComponent } from './statementapi.component';

describe('StatementapiComponent', () => {
  let component: StatementapiComponent;
  let fixture: ComponentFixture<StatementapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatementapiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatementapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
