import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Registers the service in the root injector
})
export class ProductService {
  private products = [
    { id: 1, name: 'Sonny headset pink', price: 5200 },
    { id: 2, name: 'Leopard print glasses', price: 70 },
    { id: 3, name: 'Cami dress', price: 300 },
    { id: 4, name: 'Smiski iphone 13 case', price: 300 },
    { id: 5, name: 'Sunflower crochet bandana', price: 200 },
    { id: 6, name: 'Vintage aesthetic totebag for women', price: 800 },
    { id: 7, name: 'Makeup brush set', price: 340 },
    { id: 8, name: 'Robux gift card', price: 1000 },
    { id: 9, name: 'Getto cat', price: 2000000000 },
    { id: 10, name: 'Mang thomas spicy', price: 50 },
   
  ];

  constructor() {}

  getProducts() {
    return this.products;
  }
}


