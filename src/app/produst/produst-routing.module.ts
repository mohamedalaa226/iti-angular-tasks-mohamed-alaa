import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { AddCartComponent } from './add-cart/add-cart.component';
import { ProductDitailsComponent } from './product-ditails/product-ditails.component';
import { ProductCardComponent } from './product-card/product-card.component';

const routes: Routes = [
  {
    path:'',
    component:ProductListComponent
  },
  {
    path:'Add-Cart',
    component:AddCartComponent
  },
  {
    path:'Ditails/:id',
    component:ProductDitailsComponent
  },
  {
    path:'Card',
    component:ProductCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdustRoutingModule { }
