import { Component, signal } from '@angular/core';
import { ProductHttpService } from '../services/product-http-service';

@Component({
  selector: 'app-customer-list-call-http-service-component',
  standalone: false,
  styleUrl: './customer-list-call-http-service-component.css',
  templateUrl: './customer-list-call-http-service-component.html',
})
export class CustomerListCallHttpServiceComponent {
   products = signal<any[]>([])
    constructor(private _service:ProductHttpService){}
    ngOnInit():void{
      this._service.getProductList().subscribe({
        next:(data: any)=>{
          this.products.set(data)
        },
        error: (err: any) =>{
          alert("Error" + JSON.stringify(err))
        }
      })
    }
}
