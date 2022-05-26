import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaelementComponent } from './mangaelement.component';

describe('MangaelementComponent', () => {
  let component: MangaelementComponent;
  let fixture: ComponentFixture<MangaelementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaelementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaelementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
