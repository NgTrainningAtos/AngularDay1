import { IProduct } from './product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'inventory';
  productList: IProduct[];

  constructor() {
    this.productList = [
      {
        nom: 'Chemise bleu',
        reference: '1',
        imageUrl: 'chemise.jpg',
        category: ['Homme', 'Tendence'],
        price: 100
      },
      {
        nom: 'Chaussure',
        reference: '2',
        imageUrl: 'chaussure.jpg',
        category: ['Femme', 'Tendence'],
        price: 250
      },
      {
        nom: 'Pantalon',
        reference: '3',
        imageUrl: 'pant.jpg',
        category: ['Homme', 'Tendence'],
        price: 200
      }
    ];
  }
  addToCart(produit) {
    console.log('Appcomp ', produit);
  }
}
