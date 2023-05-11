import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieInputComponent } from './movie-input.component';

describe('MovieInputComponent', () => {
  let component: MovieInputComponent;
  let fixture: ComponentFixture<MovieInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieInputComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
