import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingUsersListComponent } from './following-users-list.component';

describe('FollowingUsersListComponent', () => {
  let component: FollowingUsersListComponent;
  let fixture: ComponentFixture<FollowingUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
