import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInteractorComponent } from './user-interactor.component';

describe('UserInteractorComponent', () => {
  let component: UserInteractorComponent;
  let fixture: ComponentFixture<UserInteractorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInteractorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInteractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
