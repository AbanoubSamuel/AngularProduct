import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/product';
import { FormGroup, Validators, FormControl } from '@angular/forms';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
    list: Iproduct[] = [];
    buyForm: FormGroup;

    constructor() {
        this.list = [
            { ID: 1, Name: "product 1", Quantity: 12, Price: 100, Img: "../../assets/download.jpeg" },
            { ID: 1, Name: "product 2", Quantity: 65, Price: 27, Img: "../../assets/download.jpeg" },
            { ID: 1, Name: "product 3", Quantity: 45, Price: 86, Img: "../../assets/download.jpeg" },
            { ID: 1, Name: "product 4", Quantity: 33, Price: 98, Img: "../../assets/download.jpeg" },


        ], this.buyForm = new FormGroup({
            ID: new FormControl("", [Validators.required]),
            Name: new FormControl("", [Validators.required]),
            Quantity: new FormControl("", [Validators.required]),
            Price: new FormControl("", [Validators.required]),
            Img: new FormControl("", [Validators.required])
        })
    }
    ngOnInit(): void {
    }

    addProduct() {
        let newProduct: Iproduct = {
            ID: this.list.length,
            Name: this.buyForm.value["Name"],
            Quantity: this.buyForm.value["Quantity"],
            Price: this.buyForm.value["Price"],
            Img: this.buyForm.value["Img"]
        }
        this.list.push(newProduct);
    }

}
