import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditREportComponent } from './edit-report.component';

describe('EditREportComponent', () => {
  let component: EditREportComponent;
  let fixture: ComponentFixture<EditREportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditREportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditREportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
