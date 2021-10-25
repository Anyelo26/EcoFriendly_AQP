import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCenterEditComponent } from './collection-center-edit.component';

describe('CollectionCenterEditComponent', () => {
  let component: CollectionCenterEditComponent;
  let fixture: ComponentFixture<CollectionCenterEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionCenterEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCenterEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
