import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerEnvComponent } from './customer-env.component';

describe('CustomerEnvComponent', () => {
  let component: CustomerEnvComponent;
  let fixture: ComponentFixture<CustomerEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
