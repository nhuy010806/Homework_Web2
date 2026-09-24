import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CustomerListCallHttpServiceComponent } from './customer-list-call-http-service-component';

describe('CustomerListCallHttpServiceComponent', () => {
  let component: CustomerListCallHttpServiceComponent;
  let fixture: ComponentFixture<CustomerListCallHttpServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CustomerListCallHttpServiceComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerListCallHttpServiceComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
