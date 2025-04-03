import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksOverviewPageComponent } from './books-overview-page.component';

describe('BooksOverviewPageComponent', () => {
  let component: BooksOverviewPageComponent;
  let fixture: ComponentFixture<BooksOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooksOverviewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooksOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
