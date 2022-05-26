import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangahomeComponent } from './mangahome.component';

describe('MangahomeComponent', () => {
  let component: MangahomeComponent;
  let fixture: ComponentFixture<MangahomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangahomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangahomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
