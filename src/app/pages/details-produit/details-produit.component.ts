import { Component, OnInit } from '@angular/core';
import { ProductsService, Product } from '../../core/services/products.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})
export class DetailsProduitComponent implements OnInit {

	title = 'details produits';
	listeProduits: Product[] = [];

	constructor(public productsService : ProductsService) { }

	getProducts(){
		this.productsService.getProductsFromJson().subscribe((res : Product[]) => {
			this.listeProduits = res
		},
		(err) => {
			alert('failed loading json data');
		});
	}

	getProduct(id : number){
		for(let i=0; i<this.listeProduits.length; i++){
			if(this.listeProduits[i]["id"] == id)	return this.listeProduits[i];
		}
		return {
			comments: "",
			category: 0,
			availability: false,
			id: -1,
			price: 0,
			price_on_sale: 0,
			discount: 0,
			sale: false,
			owner: "",
			unit: "",
			name: "",
			quantity_stock: 0,
			quantity_sold: 0
		}
	}

	getProductsByCategory(category: number){
		let resTab = [];
		for(let i=0; i<this.listeProduits.length; i++){
			if(this.listeProduits[i]["category"] == category)	resTab.push(this.listeProduits[i]);
		}

		return resTab;
	}

	putAddRemoveStockProduct(id: number, add: boolean, n: number){
		let tmpProduct = this.getProduct(id);
		if(add)	tmpProduct["quantity_stock"] = n
		else	tmpProduct["quantity_stock"] = n

		this.productsService
			.putProductFromJson(tmpProduct)
			.subscribe(product => console.log(product))
	}

	putUpdatePromotionProduct(id: number, n: number){
		let tmpProduct = this.getProduct(id);
		tmpProduct["discount"] = n

		this.productsService
			.putProductFromJson(tmpProduct)
			.subscribe(product => console.log(product))
	}

	putAddRemoveStockProducts(products: number[], add: boolean, n: number){
		for(let i=0; i < products.length; i++){
			this.putAddRemoveStockProduct(products[i], add, n);
		}
	}

	putUpdatePromotionProducts(products: number[], n: number){
		for(let i=0; i < products.length; i++){
			this.putUpdatePromotionProduct(products[i], n);
		}
	}

	ngOnInit(): void {
		this.getProducts();
	}

}
