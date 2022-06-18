import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApmsnavigationbarComponent } from './apmsnavigationbar.component';

describe('ApmsnavigationbarComponent', () => {
  let component: ApmsnavigationbarComponent;
  let fixture: ComponentFixture<ApmsnavigationbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApmsnavigationbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApmsnavigationbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
