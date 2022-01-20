import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Interfaces/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  //url = "../../../assets/data/products.json";
  url = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { 

  }

  getProductsFromJson():Observable<Product[]>{
  	return this.http.get<Product[]>(this.url+"products/");
  }

  putProductFromJson(product : Product, id : number){
    return this.http.put<Product>(this.url+"product/"+id, product)
        .pipe(
        );
    }
}

// export interface Product{
// 	name: String,
// 	id: number,
// 	price: number,
// }