import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Interfaces/product';
import { Purchase } from '../Interfaces/purchase';
import { Sale } from '../Interfaces/sale';
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
  
  getSalesFromJson():Observable<Sale[]>{
  	return this.http.get<Sale[]>(this.url+"sales/");
  }

  getPurchasesFromJson():Observable<Purchase[]>{
  	return this.http.get<Purchase[]>(this.url+"purchases/");
  }

  putProductFromJson(product : Product, id : number){
    return this.http.put<Product>(this.url+"product/"+id, product)
        .pipe(
        );
    }

   postSaleFromJson(sale : Sale){
   		return this.http.post<Sale>(this.url+"sales/", sale);
   }

   postPurchaseFromJson(purchase : Purchase){
   		return this.http.post<Purchase>(this.url+"purchases/", purchase);
   }
}

// export interface Product{
// 	name: String,
// 	id: number,
// 	price: number,
// }