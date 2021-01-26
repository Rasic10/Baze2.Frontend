import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KvalitetMlekaComponent } from './kvalitet-mleka.component';

describe('KvalitetMlekaComponent', () => {
  let component: KvalitetMlekaComponent;
  let fixture: ComponentFixture<KvalitetMlekaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KvalitetMlekaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KvalitetMlekaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
