import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlconfigComponent } from './urlconfig.component';

describe('UrlconfigComponent', () => {
  let component: UrlconfigComponent;
  let fixture: ComponentFixture<UrlconfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlconfigComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlconfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
