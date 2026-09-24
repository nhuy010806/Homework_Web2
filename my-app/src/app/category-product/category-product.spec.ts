import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryProduct } from './category-product';

describe('CategoryProduct', () => {
  let component: CategoryProduct;
  let fixture: ComponentFixture<CategoryProduct>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryProduct],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryProduct);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
