import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-details-home',
  templateUrl: './button-details-home.component.html',
  styleUrls: ['./button-details-home.component.css']
})
export class ButtonDetailsHomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onGetDetailsProducts(){
    console.log("I clicked get details products")
  }

}
