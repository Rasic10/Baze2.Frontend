import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodaciOMuziComponent } from './podaci-o-muzi.component';

describe('PodaciOMuziComponent', () => {
  let component: PodaciOMuziComponent;
  let fixture: ComponentFixture<PodaciOMuziComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodaciOMuziComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodaciOMuziComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
