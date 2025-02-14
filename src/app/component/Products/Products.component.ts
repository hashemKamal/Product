import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from '../../Models/iproduct';
import { ProductService } from '../../Services/product.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-Products',
  imports:[
    FormsModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css'],

})
export class ProductsComponent implements OnInit {
  imageLink="https://redbikemarketing.com/wp-content/uploads/2019/06/product.png"

  products : IProduct [] = [];
  newProduct : IProduct = {} as IProduct;
  isAvalible : boolean = false ;
  constructor(private ProductService:ProductService){}
  ngOnInit(): void {
    this.getProducts();
  }
  getProducts()
  {
    this.ProductService.getProducts().subscribe(x=>
   {
    this.products=x;
    this.isAvalible = this.products.length > 0;
   });
  }

  createProducts(): void
  {
    const newProduct1 = {id : this.newProduct.id, name : this.newProduct.name, price : this.newProduct.price, completed : this.newProduct.completed};

    this.ProductService.createProduct(newProduct1).subscribe(x=>
    {
      this.products.push(x);
      this.isAvalible = this.products.length > 0;
    });
  }

  DeleteProduct(id:string):void
  {
    this.ProductService.deleteProduct(id).subscribe(()=>
    {
      this.products = this.products.filter(p=>p.id !== id);
      this.isAvalible = this.products.length > 0;
    });
  }
   }
 // EditProduct(index:number)
  //{
   // let updateProduct =prompt("Edit Product",this.newProduct[index]);
    //if (updateProduct!==null)
    //{
      //this.products[index]=updateProduct.trim();
    //}


  //EditProduct(index:number , newProductEdit:string) :string | void
  //{
    //if (newProductEdit.trim() !=="")
      //{
      //  this.products[index]=newProductEdit;
     // }
    //else
    //{
     // newProductEdit=this.products[index];
    //  return this.newProduct = newProductEdit;
   // }
  //  this.newProduct="";
//  }
//}
