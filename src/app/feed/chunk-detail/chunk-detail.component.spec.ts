import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunkDetailComponent } from './chunk-detail.component';

describe('ChunkDetailComponent', () => {
  let component: ChunkDetailComponent;
  let fixture: ComponentFixture<ChunkDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChunkDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunkDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
