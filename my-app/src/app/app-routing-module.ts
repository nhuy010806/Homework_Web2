import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';

import { CategoryProduct } from './category-product/category-product';

import { CustomerListCallHttpServiceComponent } from './customer-list-call-http-service-component/customer-list-call-http-service-component';

const routes: Routes = [
{path:'service-product-image-event', component:ServiceProductImageEvent},
{path:'service-product-image-event/:id',component:ServiceProductImageEventDetail},
{path:'exercise-14', component:CategoryProduct},
{path:'exercise-18', component:CustomerListCallHttpServiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
