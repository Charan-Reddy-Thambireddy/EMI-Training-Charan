import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksTakenComponent } from './books-taken.component';

describe('BooksTakenComponent', () => {
  let component: BooksTakenComponent;
  let fixture: ComponentFixture<BooksTakenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksTakenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksTakenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
