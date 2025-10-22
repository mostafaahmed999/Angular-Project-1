import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './navbar/navbar';
import { ProductService } from './services/product-service';

@Component({
  selector: 'app-root',
  imports: [Navbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  productserv = inject(ProductService);
  // cartproducts = this.productserv.getcartProductSignal();
  // favproducts = this.productserv.getfavProductSignal();
}
