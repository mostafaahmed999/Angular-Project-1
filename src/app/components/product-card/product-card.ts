import { Component, inject, input, output } from '@angular/core';
import { IProduct } from '../../interfaces/iproduct';
import { ProductService } from '../../services/product-service';
import { RouterLink } from '@angular/router';
import { Shadow } from '../../directives/shadow';
import { CurrencyPipe } from '@angular/common';
import { TxtSlicePipe } from '../../pipes/txt-slice-pipe';

@Component({
  selector: 'app-product-card',
  imports: [RouterLink,Shadow,CurrencyPipe,TxtSlicePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCard {
    productserv = inject(ProductService);

  productInput = input.required<IProduct>();
  onProductClick = output<IProduct>();

  ProductClicked(product: IProduct) {
    this.onProductClick.emit(product);
    console.log(product);

  }

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
