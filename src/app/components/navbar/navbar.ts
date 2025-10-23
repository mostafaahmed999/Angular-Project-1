import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  selectedproduct = inject(ProductService);
  cartproducts = this.selectedproduct.getcartProductSignal();
  favproducts = this.selectedproduct.getfavProductSignal();

  deleteItem(id: number) {
    this.selectedproduct.deleteFromCart(id);
  }

  removeFav(id: number) {
    this.selectedproduct.removeFromFav(id);
  }
}
