import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.css']
})
export class ProductImgComponent implements OnInit {
  @Input()
  imageUrl: string;
  @Input()
  taille: string;
  localTaille: string;
  constructor() {
    console.log(this.taille);
  }

  ngOnInit() {
    this.localTaille = this.taille;
  }

  getWidth() {
    console.log('get Width', this.taille);
    switch ('medium') {
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
