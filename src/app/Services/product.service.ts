import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiurl = 'http://localhost:3000/Products';
  constructor(private httpClient:HttpClient) { }
// Get all products
getProducts(): Observable <IProduct[]>
{
  return this.httpClient.get<IProduct[]>(this.apiurl);
}
//create product
createProduct(product: IProduct): Observable<IProduct>
{
  return this.httpClient.post<IProduct>(this.apiurl, JSON.stringify(product));
}
//get product by id
getProductById(id: string): Observable<IProduct>
{
  return this.httpClient.get<IProduct>(`${this.apiurl}/${id}`);
}
//update product
updateProduct(product: IProduct): Observable<IProduct>
{
  return this.httpClient.put<IProduct>(`${this.apiurl}/${product.id}`, JSON.stringify(product));
}
//delete product
deleteProduct(id: string): Observable<void>
{
  return this.httpClient.delete<void>(`${this.apiurl}/${id}`);
}}
