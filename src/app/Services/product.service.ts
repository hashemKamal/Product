import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  //private apiurl = 'http://localhost:3000/Products';
  private apiurl = 'http://localhost:5213/api/Products';
  constructor(private httpClient:HttpClient) { }
// Get all products
getProducts(): Observable <IProduct[]>
{
  return this.httpClient.get<IProduct[]>(this.apiurl);
}
//create product
createProduct(product: string): Observable<IProduct>
{
  return this.httpClient.post<IProduct>(`${this.apiurl}?productName=${encodeURIComponent(product)}`,{});
}
//get product by id
getProductById(id: string | null): Observable<IProduct>
{
  return this.httpClient.get<IProduct>(`${this.apiurl}/id?id=${id}`);
}
//update product
updateProduct(product: IProduct): Observable<IProduct>
{
  console.log(JSON.stringify(product));
  return this.httpClient.put<IProduct>(`${this.apiurl}`, JSON.stringify(product),  {
    headers: { 'Content-Type': 'application/json' }
  });
}
//delete product}
deleteProduct(id: string): Observable<void>
{
  return this.httpClient.delete<void>(`${this.apiurl}/id?id=${id}`);
}}
