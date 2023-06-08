import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServiceService } from 'src/app/shared/service.service';


@Component({
  selector: 'app-product-ditails',
  templateUrl: './product-ditails.component.html',
  styleUrls: ['./product-ditails.component.css']
})
export class ProductDitailsComponent{
  products:any ;
  product :any ;
  constructor(private productservice : ServiceService , private ActivatedRoute:ActivatedRoute){}

  ngOnInit(){
    const product_id=this.ActivatedRoute.snapshot.params['id']
    this.productservice.getproduct().subscribe((res:any)=>{this.product=res.products.find((product:any)=>product.id=product_id)
    return(console.log(this.product))

  })
  }


}



