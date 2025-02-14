import { Routes } from '@angular/router';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ContactUsComponent } from './component/contact-us/contact-us.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { ProductsComponent } from './component/Products/Products.component';

export const routes: Routes = [
  {path:'',redirectTo:'/products',pathMatch:'full'},
  {path:'products',component:ProductsComponent, title:'Products List'},
  {path:'products/:id',component:ProductDetailsComponent, title:'Product Details'},
  {path:'contactUs',component:ContactUsComponent, title:'Contact Us'},
  {path:'**',component:NotFoundComponent, title:'Not Found'},
];
