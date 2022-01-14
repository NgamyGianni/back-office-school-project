import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  onDisplayList=false;
  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {
  }
  onGetDetailsProduct(displayList:boolean){
    console.log("Received an event from the component btn-details", displayList)
    // this.productsService.getProductsFromJson()
    //       .subscribe
  }
  

}
