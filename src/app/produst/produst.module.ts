import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdustRoutingModule } from './produst-routing.module';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDitailsComponent } from './product-ditails/product-ditails.component';
import { FormsModule } from '@angular/forms';
import { StockPipe } from '../pipes/stock.pipe';



@NgModule({
  declarations: [
    AddCartComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDitailsComponent,
    StockPipe,
  ],
  imports: [
    CommonModule,
    ProdustRoutingModule,
    FormsModule
  ],
  exports:[
    AddCartComponent,
    ProductCardComponent,
    ProductListComponent,
    ProductDitailsComponent,
    FormsModule,
  ]
})
export class ProdustModule { }
