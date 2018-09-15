import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductImgComponent } from './product-img/product-img.component';

@NgModule({
  declarations: [
    AppComponent,
    AppmenuComponent,
    BreadcrumbsComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductImgComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
