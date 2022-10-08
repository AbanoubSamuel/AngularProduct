import { Injectable } from '@angular/core';
import { CartItemArgs } from '../models/cartItemArgs';
import { Iproduct } from '../models/product';
import { ProductsComponent } from '../products/products.component';

@Injectable({
    providedIn: 'root'
})
export class cartService {
    list: CartItemArgs[] = [];
    constructor() {

    }

    getAll(): CartItemArgs[] {
         return this.list
    }



    AdditemtoCart(CartItemArgs: CartItemArgs) {
      
        this.list.push(CartItemArgs)
console.log(this.list);
    }
}
