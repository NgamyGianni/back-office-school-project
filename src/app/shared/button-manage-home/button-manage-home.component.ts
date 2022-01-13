import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-manage-home',
  templateUrl: './button-manage-home.component.html',
  styleUrls: ['./button-manage-home.component.css']
})
export class ButtonManageHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  manageProduct(){
    console.log("I click manage product")
  }
}
