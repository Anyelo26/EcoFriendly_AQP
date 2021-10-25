import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCenterDeleteComponent } from './collection-center-delete.component';

describe('CollectionCenterDeleteComponent', () => {
  let component: CollectionCenterDeleteComponent;
  let fixture: ComponentFixture<CollectionCenterDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionCenterDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCenterDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
