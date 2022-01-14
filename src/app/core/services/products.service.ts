import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	url = "../../../assets/data/products.json";

	constructor(private http: HttpClient) { 

	}

	getProductsFromJson(){
	return this.http
		.get<Product[]>(this.url);
	}

	putProductFromJson(product : Product){
	return this.http.put<Product>(this.url, product)
		.pipe(
		);
	}
}