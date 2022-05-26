import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MangaheaderComponent } from './mangaheader.component';

describe('MangaheaderComponent', () => {
  let component: MangaheaderComponent;
  let fixture: ComponentFixture<MangaheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MangaheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MangaheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
