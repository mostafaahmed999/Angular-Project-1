import { Component, inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-favorite-product',
  imports: [],
  templateUrl: './favorite-product.html',
  styleUrl: './favorite-product.css'
})
export class FavoriteProduct {

    productserv = inject(ProductService);
    favproducts = this.productserv.getfavProductSignal();

    removefromfav(id: number) {
      this.productserv.removeFromFav(id);
    }
}
