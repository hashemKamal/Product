import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-Products',
  imports:[
    FormsModule
  ],
  templateUrl: './Products.component.html',
  styleUrls: ['./Products.component.css']
})
export class ProductsComponent  {

  title:string="Products List Application";
  
  imageLink:string="https://redbikemarketing.com/wp-content/uploads/2019/06/product.png";

  products : string [] = []; 
  newProduct : string = "" ;
  isAvalible : boolean = false ;
  addProduct()
  {
    if(this.newProduct.trim() !=="")
    {
      this.products.push(this.newProduct);
      this.newProduct="";
      this.isAvalible = true;
    }
  }
  DeleteProduct(index:number)
  {
    this.products.splice(index,1)
    this.isAvalible = this.products.length > 0;
  }
 /* EditProduct(index:number)
  {
    let updateProduct =prompt("Edit Product",this.products[index]);
    if (updateProduct!==null)
    {
      this.products[index]=updateProduct.trim();
    }

  }*/
  EditProduct(index:number , newProductEdit:string) :string | void
  {
    if (newProductEdit.trim() !=="")
      {
        this.products[index]=newProductEdit;
      } 
    else
    {
      newProductEdit=this.products[index];
      return this.newProduct = newProductEdit;
    }
    this.newProduct="";
  }
}