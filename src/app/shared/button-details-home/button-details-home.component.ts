import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-details-home',
  templateUrl: './button-details-home.component.html',
  styleUrls: ['./button-details-home.component.css']
})
export class ButtonDetailsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getDetailsProducts(){
    console.log("I clicked get details products")
  }

}
