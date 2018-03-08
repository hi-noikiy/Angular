import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {Router} from '@angular/router';  

@Component({
  selector: 'app-orderdatail',
  templateUrl: './orderdatail.component.html',
  styleUrls: ['./orderdatail.component.scss']
})

export class OrderdatailComponent implements OnInit {
	cc:boolean = false;
	aa:boolean = false;
	bb:boolean = true;
	pay1:boolean = false;
	constructor() { }

	ngOnInit() {
	}
	qxd(){
		if(this.bb){
			this.cc = true;
		}
		// console.log(this.cc);
	}
	cancelMask(){
		this.cc = false;
		this.aa = false;
		this.bb = true;
	}
	deleteBtn(){
		this.cc = false;
		this.aa = true;
		this.bb = false;
	}
	pay(){
		this.pay1 = true;
	}
	close(){
		this.pay1 = false;
	}
}
