import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KravaComponent } from './krava.component';

describe('KravaComponent', () => {
  let component: KravaComponent;
  let fixture: ComponentFixture<KravaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KravaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KravaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
