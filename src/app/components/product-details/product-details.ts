import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { inject } from '@angular/core';
import { ProductService } from '../../services/product-service';

@Component({
  selector: 'app-product-details',
  imports: [AsyncPipe],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {
  activedRoute = inject(ActivatedRoute);
  productserv = inject(ProductService)
  productId: number = Number(this.activedRoute.snapshot.paramMap.get('id'));
  productdata = this.productserv.getProductById(this.productId);
}
