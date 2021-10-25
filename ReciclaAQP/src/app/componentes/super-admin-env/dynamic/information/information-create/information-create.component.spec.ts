import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationCreateComponent } from './information-create.component';

describe('InformationCreateComponent', () => {
  let component: InformationCreateComponent;
  let fixture: ComponentFixture<InformationCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformationCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
