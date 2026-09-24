import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ServiceProductImageEvent } from './service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './service-product-image-event-detail/service-product-image-event-detail';
import { Homework } from './homework/homework';
import { CategoryProduct } from './category-product/category-product';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { CustomerListCallHttpServiceComponent } from './customer-list-call-http-service-component/customer-list-call-http-service-component';

@NgModule({
  declarations: [
    App,
    ServiceProductImageEvent,
    ServiceProductImageEventDetail,
    Homework,
    CategoryProduct,
    CustomerListCallHttpServiceComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideBrowserGlobalErrorListeners(), provideHttpClient(withInterceptorsFromDi())],
  bootstrap: [App],
})
export class AppModule {}
