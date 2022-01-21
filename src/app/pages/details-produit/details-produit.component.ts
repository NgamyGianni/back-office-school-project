import { Component, OnInit } from '@angular/core';
import { Product } from '../../core/Interfaces/product';
import { ProductsService} from '../../core/services/products.service';

@Component({
  selector: 'app-details-produit',
  templateUrl: './details-produit.component.html',
  styleUrls: ['./details-produit.component.css']
})

export class DetailsProduitComponent implements OnInit {

	title = 'details produits';
	listeProduits: Product[] = [];
	selectedProductID: number= 1;
	product: Product = {};
	addStockProductNumber: number = 1;
	addDiscountNumber: number = 0;

	constructor(public productsService : ProductsService) {

	}

	getProducts(){
		this.productsService.getProductsFromJson().subscribe({
			next:(res: Product[]) => {
				this.listeProduits = res;
				this.product = this.getProduct(this.selectedProductID);
			},
			error:(err) => {
				alert('failed loading api data');
			}
		});
	}

	getProduct(id : number){
		let toReturnProduit:Product = {}
		this.listeProduits.forEach(produit => {
			if (produit.id == id){
				 toReturnProduit = produit;
			}
		});
		return toReturnProduit
	}

	putAddRemoveStockProduct(){
		if(this.product.quantity_stock!=undefined){
			this.product.quantity_stock += this.addStockProductNumber
			if(this.product.quantity_stock<0){
				this.product.quantity_stock = 0
			}
		}

		this.productsService
			.putProductFromJson(this.product, this.selectedProductID)
			.subscribe(product => console.log(product))
	}

	putUpdatePromotionProduct(){
		this.product["discount"] = this.addDiscountNumber
		if(this.product["discount"] >= 0 && this.product["discount"] <= 100){
			if(this.product.price!=undefined){
				this.product.price_on_sale = this.product.price - ((this.product.price*this.addDiscountNumber)/100)
			}
			this.productsService
				.putProductFromJson(this.product, this.selectedProductID)
				.subscribe(product => console.log(product))
		}
		else{
			alert('0 <= Promotion <= 100');
		}
	}

	changeProduct(){
		this.product = this.getProduct(this.selectedProductID)
	}

	ngOnInit(): void {
		this.getProducts();
	}

}