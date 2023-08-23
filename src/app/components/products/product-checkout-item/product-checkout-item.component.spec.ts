import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCheckoutItemComponent } from './product-checkout-item.component';

describe('ProductCheckoutItemComponent', () => {
  let component: ProductCheckoutItemComponent;
  let fixture: ComponentFixture<ProductCheckoutItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCheckoutItemComponent]
    });
    fixture = TestBed.createComponent(ProductCheckoutItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
