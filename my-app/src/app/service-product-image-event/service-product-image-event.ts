import { Component } from '@angular/core';
import { ProductService } from '../services/product-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-product-image-event',
  standalone: false,
  styleUrl: './service-product-image-event.css',
  templateUrl: './service-product-image-event.html',
})
export class ServiceProductImageEvent {
  public products: any 
  constructor(pservice: ProductService, private router: Router){
     this.products = pservice.getProductsWithIamges()
  }
  viewDetail(f:any){
    this.router.navigate(['service-product-image-event', f.ProductId])
  }
}
