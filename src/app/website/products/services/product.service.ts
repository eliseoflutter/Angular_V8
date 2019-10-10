import { Injectable } from '@angular/core';

import { Product } from '@products/models/product.model';

import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      id: 1,
      title: 'Producto 1',
      price: 200,
      text: 'bla bl bla blsd sd sdjsdkjsd sdksjdkklsd kljsd',
      image: 'assets/images/img1.jpg',
    },
    {
      id: 2,
      title: 'Producto 2',
      price: 200,
      text: 'sdklfjsaf dfklasdfa sdfsd fsdaklfjsadfsdfklsdjfasd fsadklfjdsaf sdaflksdjafasdlñkf dsfkjas',
      image: 'assets/images/img2.jpg',
    },
    {
      id: 3,
      title: 'Producto 3',
      price: 200,
      text: 'supe desatyno',
      image: 'assets/images/img3.jpg',
    },
  ];

  constructor() { }

  getAllProducts() {
    return this.products;
  }

  getProduct(productId: string) {
    return of(this.products.find(product => product.id === parseInt(productId, 10)));
  }

  getCategories() {
    return of([
      {
        name: 'Cat 1',
        id: 1
      },
      {
        name: 'Cat 2',
        id: 2
      },
      {
        name: 'Cat 3',
        id: 3
      }
    ]);
  }
}
