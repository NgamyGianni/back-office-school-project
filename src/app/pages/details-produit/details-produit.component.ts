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
		return this.listeProduits[id];
	}

	ngOnInit(): void {
		this.getProducts();
	}

}
