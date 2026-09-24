import { Component, OnInit } from '@angular/core';
import { CatalogService } from '../services/catalog-service';

@Component({
  selector: 'app-category-product',
  standalone: false,
  styleUrl: './category-product.css',
  templateUrl: './category-product.html',
})
export class CategoryProduct implements OnInit {
  categories: any[] = [];

  constructor(private catalogService: CatalogService) {}

  ngOnInit(): void {
    this.categories = this.catalogService.getCategories();
  }
}
