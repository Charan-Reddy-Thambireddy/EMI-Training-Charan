import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmsNavigationBarComponent } from './ems-navigation-bar.component';

describe('EmsNavigationBarComponent', () => {
  let component: EmsNavigationBarComponent;
  let fixture: ComponentFixture<EmsNavigationBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmsNavigationBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmsNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
