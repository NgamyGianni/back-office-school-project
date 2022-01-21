import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	background: Record<string, string>={};
	constructor(public router:Router) { }

	ngOnInit(): void {
		this.background={
												"background-color":"aqua",
												"color":"green"
											}
//   backgroundLink(){
//     if(this.router.url=="/home"){
//        this.background={
//                         // "background-color":"aqua",
//                         "color":"black"
//                       }
//     }
//      else if (this.router.url=="/details"){
//         this.background={
//                          "background-color":"aqua"
//                          ,"color":"black"
//                        }
//      }
//          else if (this.router.url=="/dashboard"){
//			       this.background={
//			                        "background-color":"aqua"
//			                        ,"color":"black"
//			                      }
//			    }
//   }
	}
}
