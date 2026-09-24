import { Injectable, Service } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
  productsImage=[
    {"ProductId":"p1","ProductName":"Coca","Price":100,"Image":"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQ4TCptMGWLI0c1YZVE7FifIQKmz41y_TmbS92-egMDHhL3g50i4Ei3FeuBQUw01vbXddH2Cyk-OTOF0zIRXuUW45DDKSUQtaJ-pXDcX0C4K49jkCCNbIgEUk-Gwon69e08L4zyxLRQ3XY&usqp=CAc"},
    {"ProductId":"p2","ProductName":"Pepsi","Price":300,"Image":"https://cdn.tgdd.vn/Products/Images/2443/227311/bhx/thung-24-lon-nuoc-ngot-pepsi-khong-calo-vi-chanh-320ml-202403141042050893.jpg"},
    {"ProductId":"p3","ProductName":"Sting","Price":200,"Image":"https://img.tgdd.vn/imgt/bhx/f_webp,fit_outside,quality_95,s_720x584/https://cdnv2.tgdd.vn/bhx-static/bhx/Products/Images/3226/76519/bhx/nuoc-tang-luc-sting-dau-sleek-lon-330ml_202509291421449068.jpg"},
  ]
  constructor(){}
  getProductsWithIamges(){
     return this.productsImage
  }
  getProductDetail(id:any){
     return this.productsImage.find(x=>x.ProductId==id)
  }
}
