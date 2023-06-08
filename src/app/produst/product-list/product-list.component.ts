import { Component } from '@angular/core';
import { ServiceService } from 'src/app/shared/service.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products:any ;
  addCarts : any [] = []

  constructor(private productservice : ServiceService){}

  ngOnInit(){
    this.productservice.getproduct().subscribe((res:any)=>this.products = res.products)

  }

  addCart(event :any ){
    if ('cart' in localStorage){
      this.addCarts =JSON.parse(localStorage.getItem('cart')!)
      let chick = this.addCarts.find(item => item.item.id == event.item.id)
      if (chick){
        alert ('Product is already is your cart')
      }else {
        this.addCarts.push(event)
      localStorage.setItem('cart', JSON.stringify(this.addCarts))
      }
      }
    else{
      this.addCarts.push(event)
      localStorage.setItem('cart', JSON.stringify(this.addCarts))
    }
  }

}
