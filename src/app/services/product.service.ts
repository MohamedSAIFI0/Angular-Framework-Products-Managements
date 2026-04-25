import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products = [
    {id: 1, name : "Computer", price: 2300, selected: true},
    {id:2, name : "Printer", price: 1200, selected: false},
    {id:3, name : "Smartphone", price: 1000, selected: true}
  ]

  constructor() { }

  getAllProducts(){
    return this.products;
  }

  deleteProduct(product: any){
    this.products = this.products.filter(p => p.id != product.id)
  }

}
