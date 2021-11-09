import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCenterComponent } from './collection-center.component';

describe('CollectionCenterComponent', () => {
  let component: CollectionCenterComponent;
  let fixture: ComponentFixture<CollectionCenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionCenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
