import { Injectable, signal } from '@angular/core';
import { IProduct } from '../interfaces/iproduct';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: IProduct[] = [
    {
      id: 1,
      image: 'imgs/AirFrier.jpg',
      title: 'AeroFlex Elite Running Shoes',
      description:
        'Lightweight and breathable running shoes designed for maximum performance and comfort during long-distance runs. Features high-traction rubber sole.',
      price: 89.99,
      rate: 4.5,
      count: 4,
      quantity: 1,
    },
    {
      id: 2,
      image: 'imgs/Fridger.jpg',
      title: 'ErgoPro Adjustable Laptop Stand',
      description:
        'An ergonomic, aluminum alloy stand that adjusts to multiple heights, improving posture and cooling for laptops up to 17 inches.',
      price: 45.5,
      rate: 4.8,
      count: 75,
      quantity: 1,
    },
    {
      id: 3,
      image: 'imgs/Microwave.jpg',
      title: 'Classic Pour-Over Coffee Maker',
      description:
        'A minimalist and efficient pour-over coffee system with a thermal carafe, brewing up to 8 cups of perfect coffee.',
      price: 32.95,
      rate: 4.2,
      count: 210,
      quantity: 1,
    },
    {
      id: 4,
      image: 'imgs/TV.jpg',
      title: 'Vintage Washed Denim Jacket',
      description:
        'A timeless classic! Medium-wash denim jacket with button closures and two chest pockets. Perfect for layering.',
      price: 59.0,
      rate: 4.6,
      count: 90,
      quantity: 1,
    },
    {
      id: 5,
      image: 'imgs/WashingMachine.jpg',
      title: 'Pulse-Tracker Smartwatch X2',
      description:
        'A feature-rich smartwatch with heart rate monitoring, sleep tracking, and a waterproof design. Compatible with iOS and Android.',
      price: 149.99,
      rate: 4.9,
      count: 55,
      quantity: 1,
    },
  ];
  private cartproductSignal = signal<IProduct[]>([]);
  private favproductSignal = signal<IProduct[]>([]);

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find((product) => product.id == id);
  }

  getcartProductSignal() {
    return this.cartproductSignal;
  }
  setcartProductSignal(product: IProduct) {
    if (!this.cartproductSignal().find((p) => p.id == product.id)) {
      this.cartproductSignal.update((products) => [...products, product]);
    }
  }

  deleteFromCart(id: number) {
    this.cartproductSignal.update((products) => products.filter((product) => product.id !== id));
  }
  decreaseFromCart(id: number) {
    this.cartproductSignal.update((products) => products.filter((product) => product.id !== id));
  }

  increaseInCart(id: number) {
    const product = this.getProductById(id);
    if (product) {
      this.cartproductSignal.update((products) => [...products, product]);
    }
  }

  getfavProductSignal() {
    return this.favproductSignal;
  }
  setfavProductSignal(product: IProduct) {
    if (!this.favproductSignal().find((p) => p.id == product.id)) {
      this.favproductSignal.update((products) => [...products, product]);
    }
  }
  removeFromFav(id: number) {
    this.favproductSignal.update((products) => products.filter((product) => product.id !== id));
  }
  increasecart(product: IProduct) {
    if (product.quantity! >= product.count) {
      alert('No more stock available');
      return;
    }
    product.quantity! += 1;
    this.setcartProductSignal(product);
  }
}
