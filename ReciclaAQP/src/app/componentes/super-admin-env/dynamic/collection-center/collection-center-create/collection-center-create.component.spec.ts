import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionCenterCreateComponent } from './collection-center-create.component';

describe('CollectionCenterCreateComponent', () => {
  let component: CollectionCenterCreateComponent;
  let fixture: ComponentFixture<CollectionCenterCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionCenterCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionCenterCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
