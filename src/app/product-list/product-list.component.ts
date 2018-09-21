import { IProduct } from './../product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Liste des produits';
  @Input()
  products: IProduct[];
  @Output()
  ProductSelect = new EventEmitter<IProduct>();
  constructor() {}

  ngOnInit() {}
  selectProduct(produit) {
    console.log(produit.nom);
    this.ProductSelect.emit(produit.reference);
  }
}
