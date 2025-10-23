import { Component, inject } from '@angular/core';
import { ProductCard } from '../product-card/product-card';
import { ProductService } from '../../services/product-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard,AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  productserv = inject(ProductService);
  productdata = this.productserv.getProducts();

  // hoveredProductId: number | null = null;

  // addtocart(product: IProduct) {
  //   this.productserv.setcartProductSignal(product);
  // }
  // addtofav(product: IProduct) {
  //   this.productserv.setfavProductSignal(product);
  // }

  // onMouseEnter(productId: number) {
  //   this.hoveredProductId = productId;
  // }

  // onMouseLeave() {
  //   this.hoveredProductId = null;
  // }

}
