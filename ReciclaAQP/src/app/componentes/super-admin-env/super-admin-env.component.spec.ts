import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminEnvComponent } from './super-admin-env.component';

describe('SuperAdminEnvComponent', () => {
  let component: SuperAdminEnvComponent;
  let fixture: ComponentFixture<SuperAdminEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperAdminEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
