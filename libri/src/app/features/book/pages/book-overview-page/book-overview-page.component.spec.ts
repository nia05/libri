import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOverviewPageComponent } from './book-overview-page.component';

describe('BookOverviewPageComponent', () => {
  let component: BookOverviewPageComponent;
  let fixture: ComponentFixture<BookOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookOverviewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
