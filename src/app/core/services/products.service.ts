import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { 

  }

  getProductsFromJson(){
  	return this.http.get<Product[]>("../../../assets/data/products.json");
  }
}

export interface Product{
	name: String,
	id: number,
	price: number,
}