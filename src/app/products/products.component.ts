import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ProductService} from '../services/product.service';

@Component({
  selector: 'app-products',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  standalone: true
})
export class ProductsComponent implements OnInit{
  products! : Array<any>;

  constructor(private productService: ProductService) {}
  ngOnInit() {
    this.getAllProduct()
  }

  getAllProduct(){
    this.products = this.productService.getAllProducts();
  }


  handleDelete(product: any){
    let v = confirm('etes-vous sure de vouloir supprimer ?')
    if (v == true){
      this.productService.deleteProduct(product)
      this.getAllProduct()
    }
  }


}
