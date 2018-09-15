import { IProduct } from './../product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'Liste des produits';
  @Input()
  products: IProduct[];
  constructor() {}

  ngOnInit() {}
}
