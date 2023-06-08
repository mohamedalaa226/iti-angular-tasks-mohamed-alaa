import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDitailsComponent } from './product-ditails.component';

describe('ProductDitailsComponent', () => {
  let component: ProductDitailsComponent;
  let fixture: ComponentFixture<ProductDitailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDitailsComponent]
    });
    fixture = TestBed.createComponent(ProductDitailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
