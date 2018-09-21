import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.css']
})
export class ProductImgComponent implements OnChanges {
  @Input()
  imageUrl: string;
  @Input()
  taille: string;
  localTaille: string;
  constructor() {}

  ngOnChanges() {
    this.localTaille = this.taille;
  }

  getWidth() {
    switch (this.localTaille) {
      case 'small':
        return '50px';
        break;
      case 'medium':
        return '100px';
        break;
      case 'big':
        return '200px';
        break;
      default:
        break;
    }
  }
}
