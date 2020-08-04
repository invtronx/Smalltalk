import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComposureComponent } from './composure.component';

describe('ComposureComponent', () => {
  let component: ComposureComponent;
  let fixture: ComponentFixture<ComposureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComposureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComposureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
