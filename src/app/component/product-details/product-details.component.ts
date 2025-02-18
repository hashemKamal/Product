import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import  { IProduct } from '../../Models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../Services/product.service';

@Component({
  selector: 'app-product-details',
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  constructor(private route: ActivatedRoute ,private productService: ProductService ,
  private router: Router){}


  ngOnInit(): void
  {
    this.getProduct();
  }
  getProduct()
  {
     var id = this.route.snapshot.paramMap.get('id');
    //console.log(id);
    this.productService.getProductById(id).subscribe(product =>
      {this.product = product});
  }
  updateProduct():void
  {
    if (this.product)
      {
      this.productService.updateProduct(this.product).subscribe(() =>
      {
       this.router.navigate(['/products']);
      });
      }

     }


  imageLink="https://redbikemarketing.com/wp-content/uploads/2019/06/product.png"

}
