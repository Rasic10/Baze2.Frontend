import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MlekaraComponent } from './mlekara.component';

describe('MlekaraComponent', () => {
  let component: MlekaraComponent;
  let fixture: ComponentFixture<MlekaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MlekaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MlekaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
