import { Component, inject } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-cart',
  imports: [],
  templateUrl: './product-cart.html',
  styleUrl: './product-cart.css',
})
export class ProductCart {
  productserv = inject(ProductService);
  cartproducts = this.productserv.getcartProductSignal();

  increasecart(product: IProduct) {
   this.productserv.increasecart(product);
  }

  decreasecart(product: IProduct) {
    if (product.quantity! <= 1) {
      this.productserv.deleteFromCart(product.id);
      return;
    }
    product.quantity! -= 1;
    this.productserv.setcartProductSignal(product);
  }
}
