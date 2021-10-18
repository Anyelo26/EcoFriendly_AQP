import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperUserDetailComponent } from './super-user-detail.component';

describe('SuperUserDetailComponent', () => {
  let component: SuperUserDetailComponent;
  let fixture: ComponentFixture<SuperUserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperUserDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
