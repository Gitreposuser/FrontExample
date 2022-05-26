import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangafooterComponent } from './mangafooter.component';

describe('MangafooterComponent', () => {
  let component: MangafooterComponent;
  let fixture: ComponentFixture<MangafooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangafooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangafooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
