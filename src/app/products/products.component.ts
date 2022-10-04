import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  list: Iproduct[] = [];

  constructor() {
    this.list = [
      { ID: 1, Name: "product 1", Quantity: 12, Price: 100, Img: "../../assets/download.jpeg" },
      { ID: 1, Name: "product 2", Quantity: 65, Price: 27, Img: "../../assets/download.jpeg" },
      { ID: 1, Name: "product 3", Quantity: 45, Price: 86, Img: "../../assets/download.jpeg" },
      { ID: 1, Name: "product 4", Quantity: 33, Price: 98, Img: "../../assets/download.jpeg" },
    ]
  }
  ngOnInit(): void {
  }

}
