import { Component , EventEmitter, Input, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
@Output() item = new EventEmitter();
 @Input() product:any;
 addButton : boolean = false;
 saveNumber : any = 0 ;

 constructor ( private router : Router){}

 detailsList(){
  this.router.navigate(['Ditails', this.product.id])
 }

 add(){
  this.item.emit({item:this.product,counter:this.saveNumber })
  console.log()
 }
 
}
