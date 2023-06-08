import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-cart.component.html',
  styleUrls: ['./add-cart.component.css']
})
export class AddCartComponent implements OnInit{

  addCarts:any []= []
  total :any = 0


  constructor(){}

  ngOnInit(): void {
    this.getCartProducts()
    
  }

  getCartProducts(){
    if ('cart' in localStorage){
      this.addCarts =JSON.parse(localStorage.getItem('cart')!)
    }
    // console.log(this.addCarts)

    this.getTotalCart()
    localStorage.setItem('cart', JSON.stringify(this.addCarts))

  }



  getTotalCart(){  // علشان احسب المجموع الكلي 
    this.total=0;   // صفرت 
    for (let x in this.addCarts){  // looping at total added
      this.total += this.addCarts[x].item.price * this.addCarts[x].counter;      //   علشان امسك السعر بقوله سعر المنتج فى العدد بتاعه وخزنه فى ال total
      localStorage.setItem('cart', JSON.stringify(this.addCarts)) // to update in localstorage

    }
  }

  decrement(index :number){
    this.addCarts[index].counter--
    this.getTotalCart()
    localStorage.setItem('cart', JSON.stringify(this.addCarts)) // to update in localstorage

  }


  increment(index :number){
    this.addCarts[index].counter++
    this.getTotalCart()
    localStorage.setItem('cart', JSON.stringify(this.addCarts))

  }

  changeData(){
    localStorage.setItem('cart', JSON.stringify(this.addCarts))
  }


  deleteCart(index :number){
    this.addCarts.splice(index ,1)
    localStorage.setItem('cart', JSON.stringify(this.addCarts))

  }
}
