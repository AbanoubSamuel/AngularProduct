import { Injectable } from '@angular/core';
import { CartItemArgs } from '../models/cartItemArgs';
import { Iproduct } from '../models/product';
import { ProductsComponent } from '../products/products.component';

@Injectable({
    providedIn: 'root'
})
export class ProductServiceService {
    list: Iproduct[];
    constructor() {
        this.list = [
            { ID: 1, Name: "product 1", Quantity: 12, Price: 100, Img: "../../assets/download.jpeg" },
            { ID: 2, Name: "product 2", Quantity: 65, Price: 27, Img: "../../assets/download.jpeg" },
            { ID: 3, Name: "product 3", Quantity: 45, Price: 86, Img: "../../assets/download.jpeg" },
            { ID: 4, Name: "product 4", Quantity: 33, Price: 98, Img: "../../assets/download.jpeg" },
        ]
    }

    getAll(): Iproduct[] {
        return this.list
    }



    AdditemtoCart(cartItemargs: CartItemArgs) {
        this.list.forEach(element => {
            if (element.ID == cartItemargs.ID)
                element.Quantity -= cartItemargs.Quantity
        });


    }
}
