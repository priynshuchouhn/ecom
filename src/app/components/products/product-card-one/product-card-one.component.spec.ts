import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardOneComponent } from './product-card-one.component';

describe('ProductCardOneComponent', () => {
  let component: ProductCardOneComponent;
  let fixture: ComponentFixture<ProductCardOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCardOneComponent]
    });
    fixture = TestBed.createComponent(ProductCardOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
