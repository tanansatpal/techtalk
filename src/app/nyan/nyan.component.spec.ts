import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NyanComponent } from './nyan.component';

describe('NyanComponent', () => {
  let component: NyanComponent;
  let fixture: ComponentFixture<NyanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NyanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NyanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
