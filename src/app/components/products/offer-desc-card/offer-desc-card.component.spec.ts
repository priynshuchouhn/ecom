import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferDescCardComponent } from './offer-desc-card.component';

describe('OfferDescCardComponent', () => {
  let component: OfferDescCardComponent;
  let fixture: ComponentFixture<OfferDescCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OfferDescCardComponent]
    });
    fixture = TestBed.createComponent(OfferDescCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
