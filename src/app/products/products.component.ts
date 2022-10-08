import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Iproduct, Person } from '../models/product';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { CartItemArgs } from '../models/cartItemArgs';
import { cartService } from '../Service/cart-service';
@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
    @Input() SelectedCategory: number = 0;
    @Output()handellist: EventEmitter<CartItemArgs>;

    list: Iproduct[] = [];
    buyForm: FormGroup;
    person: Person[] = []
    addperson: FormGroup;
    router: any;
    FilterList: any;

    constructor(private cartSercive:cartService) {
        this.handellist = new EventEmitter<CartItemArgs>()
        this.addperson = new FormGroup({
            name: new FormControl("", [Validators.required]),
            userName: new FormControl("", [Validators.required]),
            email: new FormControl("", [Validators.required]),
            password: new FormControl("", [Validators.required, Validators.min(6)])

        })

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
    ngOnChanges(changes: SimpleChanges): void {
        throw new Error('Method not implemented.');
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

    register() {
        console.log(this.addperson.value)
    }



    addToCart(id: number, price: number) {
        this.cartSercive.AdditemtoCart({ID:id,price:price,Quantity:1})
        this.handellist.emit({
            ID: id,
            price: price,
            Quantity: 1
        });

    }


    details(id: number) {
        // this.router.navigateByUrl('')
        this.router.navigate(["/product", id])
    }

}
