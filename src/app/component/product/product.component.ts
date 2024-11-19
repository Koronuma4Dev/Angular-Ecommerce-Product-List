import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../productlist.service';
import { Product } from './product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    alert(`${product.name} has been added to your cart!`);
  }
}


