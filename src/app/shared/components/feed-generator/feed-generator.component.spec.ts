import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedGeneratorComponent } from './feed-generator.component';

describe('FeedGeneratorComponent', () => {
  let component: FeedGeneratorComponent;
  let fixture: ComponentFixture<FeedGeneratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeedGeneratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
