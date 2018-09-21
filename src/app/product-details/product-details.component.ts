import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input()
  reference: string;
  @Input()
  nom: string;
  @Input()
  category: string[];
  constructor() {}

  ngOnInit() {}
}
