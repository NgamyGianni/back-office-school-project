import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Interfaces/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = "../../../assets/data/products.json";
  url_from_server ="http://127.0.0.1:8000/product"
  productCategory: { [id:number]: string } = {0:"Poissons", 1:"Fruits de Mer", 2:"Crustaces"};


  constructor(private http: HttpClient) { 

  }

getProductCategory(){
  return this.productCategory;
}
  getProductsFromJson():Observable<Product[]>{
  	return this.http.get<Product[]>("../../../assets/data/products.json");
  }

  getProductsFromServer():Observable<Product[]>{
  	return this.http.get<Product[]>(this.url_from_server);
  }

  putProductFromJson(product : Product){
    return this.http.put<Product>(this.url, product)
        .pipe(
        );
    }

    putStockProduct(product: Product){
      
    }

    putPromotionProduct(product: Product){

    }

    postProductFromJson(product : Product){
      return this.http.put<Product>(this.url, product)
          .pipe(
          );
      }
}