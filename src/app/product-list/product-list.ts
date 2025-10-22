import { Component, inject } from '@angular/core';
import { ProductService } from '../services/product-service';
import { IProduct } from '../interfaces/iproduct';
import { Shadow } from '../directives/shadow';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list',
  imports: [Shadow, RouterLink],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productserv = inject(ProductService);
  productdata = this.productserv.getProducts();

  hoveredProductId: number | null = null;

  addtocart(product: IProduct) {
    this.productserv.setcartProductSignal(product);
  }
  addtofav(product: IProduct) {
    this.productserv.setfavProductSignal(product);
  }

  onMouseEnter(productId: number) {
    this.hoveredProductId = productId;
  }

  onMouseLeave() {
    this.hoveredProductId = null;
  }

}
