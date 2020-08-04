import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowedUsersListComponent } from './followed-users-list.component';

describe('FollowedUsersListComponent', () => {
  let component: FollowedUsersListComponent;
  let fixture: ComponentFixture<FollowedUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowedUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowedUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
