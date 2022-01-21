import { core } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/Interfaces/product';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-manage-stocks',
  templateUrl: './manage-stocks.component.html',
  styleUrls: ['./manage-stocks.component.css']
})
export class ManageStocksComponent implements OnInit {
	title = 'Modification simultanée de produits';
	listeProduits: Product[] = [];
	toUpdateProductList: Product[] = [];
	categoryProd: any = [];
	htmlVar:Product[] = []
	quantityModifyValue: number = 0;


  constructor(public productsService: ProductsService) { }

  ngOnInit(): void {
	this.getProducts();
}

	getProducts(){
		this.productsService.getProductsFromJson().subscribe({
			next:(res: Product[]) => {
				this.listeProduits = res;
				this.getProductByCategory();
			},
			error:(err) => {
				alert('failed loading json data');
			}
		});
	}

	getProductsById(produitList:Product[]){
		console.log(produitList)
	
		return null
    }


getCategoryName(n:number){
	let correspondance = this.productsService.productCategory;
	console.log(correspondance[n])
}


addToUpdateQuantitylist(e:any,produit:Product){
	let newQuantity = e.target.value
	let index = this.toUpdateProductList.indexOf(produit)


	if(index > -1){
		if(newQuantity==null){
			this.toUpdateProductList.splice(index,1)
		}
		else{
			this.toUpdateProductList[index].quantity_stock = newQuantity
		}
	}
	else if (index < 0 && newQuantity!=null){
		produit.quantity_stock = newQuantity
		this.toUpdateProductList.push(produit)
	}	
}


updateProductsQuantityDiscount(){
this.toUpdateProductList.forEach(product => {
	this.productsService.postProductFromJson(product);
});
}

addToUpdateDiscountlist(e:any,produit:Product){
	let newDiscount = e.target.value
	let index = this.toUpdateProductList.indexOf(produit)


	if(index > -1){
		if(newDiscount==null){
			this.toUpdateProductList.splice(index,1)
		}
		else{
			this.toUpdateProductList[index].discount = newDiscount
		}
	}
	else if (index < 0 && newDiscount!=null){
		produit.discount = newDiscount
		this.toUpdateProductList.push(produit)
	}	
}

getCategoryNameById(produitList:string){
	let res = ""
	let correspondance = this.productsService.productCategory;
	let key = this.categoryProd.indexOf(produitList)
	return correspondance[key]
}
	getProductByCategory(){
		let categoryProdu: (string|Product)[][] = [];

		let correspondance = this.productsService.productCategory;
		for (let key in correspondance) {
			this.categoryProd[key] = []
		 	this.listeProduits.forEach(product => {
			if(product.category == parseInt(key)){
				if(product.id!=undefined){	this.categoryProd[key].push(product);	}
			}
		  });
		}
	  }

}
