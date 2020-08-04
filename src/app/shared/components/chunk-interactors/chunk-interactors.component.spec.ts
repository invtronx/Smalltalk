import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChunkInteractorsComponent } from './chunk-interactors.component';

describe('ChunkInteractorsComponent', () => {
  let component: ChunkInteractorsComponent;
  let fixture: ComponentFixture<ChunkInteractorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChunkInteractorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChunkInteractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
