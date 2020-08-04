import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunkLikeListComponent } from './chunk-like-list.component';

describe('ChunkLikeListComponent', () => {
  let component: ChunkLikeListComponent;
  let fixture: ComponentFixture<ChunkLikeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChunkLikeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunkLikeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
