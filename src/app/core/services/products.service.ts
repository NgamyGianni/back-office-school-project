import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Interfaces/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "../../../assets/data/products.json";
  constructor(private http: HttpClient) { 

  }

  getProductsFromJson():Observable<Product[]>{
  	return this.http.get<Product[]>("../../../assets/data/products.json");
  }

  putProductFromJson(product : Product){
    return this.http.put<Product>(this.url, product)
        .pipe(
        );
    }
}

// export interface Product{
// 	name: String,
// 	id: number,
// 	price: number,
// }