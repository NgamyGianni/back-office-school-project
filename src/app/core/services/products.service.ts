import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	url = "http://127.0.0.1:8000/products/";

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

export interface Product{
	comments: string,
	category: number,
	availability: boolean,
	id: number,
	price: number,
	price_on_sale: number,
	discount: number,
	sale: boolean,
	owner: string,
	unit: string,
	name: string,
	quantity_stock: number,
	quantity_sold: number
}