import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCenterViewComponent } from './collection-center-view.component';

describe('CollectionCenterViewComponent', () => {
  let component: CollectionCenterViewComponent;
  let fixture: ComponentFixture<CollectionCenterViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionCenterViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCenterViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
