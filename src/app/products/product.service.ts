import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): IProduct[] {
    return [
      {
        productId: 2,
        productName: 'Garden Cart',
        productCode: 'GDN-0023',
        releaseDate: 'March 18, 2021',
        price: 32.99,
        description: '15 gallon capacity rolling garden cart',
        starRating: 4.2,
        imageUrl: 'assets/images/garden_cart.png',
      },
      {
        productId: 5,
        productName: 'Hammer',
        productCode: 'TBX-0048',
        releaseDate: 'May 21, 2021',
        price: 8.9,
        description: 'Curved claw steel hammer',
        starRating: 4.8,
        imageUrl: 'assets/images/hammer.png',
      },
    ];
  }
}