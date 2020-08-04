import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserListGeneratorComponent } from './user-list-generator.component';

describe('UserListGeneratorComponent', () => {
  let component: UserListGeneratorComponent;
  let fixture: ComponentFixture<UserListGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserListGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserListGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
