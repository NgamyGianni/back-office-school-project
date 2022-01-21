import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../Interfaces/product';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productCategory: { [id:number]: string } = {0:"Poissons", 1:"Fruits de Mer", 2:"Crustaces"};
  //url = "../../../assets/data/products.json";
  url = 'http://127.0.0.1:8000/';
  constructor(private http: HttpClient) { 

  }

getProductCategory(){
  return this.productCategory;
}
  getProductsFromJson():Observable<Product[]>{
  	return this.http.get<Product[]>(this.url+"products/");
  }

  putProductFromJson(product : Product, id : number){
    return this.http.put<Product>(this.url+"product/"+id, product)
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