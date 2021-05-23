import { Component, OnInit } from '@angular/core';
import {HttpServiceService} from '../http-service.service';
import {CartServiceService} from '../service/cart-service.service';
import {ActivatedRoute} from  '@angular/router';

@Component({
  selector: 'app-beverages',
  templateUrl: './beverages.component.html',
  styleUrls: ['./beverages.component.css']
})
export class BeveragesComponent implements OnInit {
  categoryList :any;
  productsList:any;

  constructor(private cartService:CartServiceService,private http:HttpServiceService, private route:ActivatedRoute) {
      let request = {}
     }

  ngOnInit() {
    
    let request ={
      "cat_id":this.route.snapshot.paramMap.get('id')
    }
  
   this.http.postRequestWithToken('api/product/getProductsByCategory',request).subscribe(data=>{
      this.productsList = data
      console.log(data);
      if(this.productsList.length == 0){
        alert("No Product is found..");
      }
   },error=>{
     alert("Error in login "+error);
   })
   
  }
  addCart(cartProductObj){
    //console.log(cartProductObj);
    var cartObj = {
      "productId":cartProductObj.id,
      "qty":"1",
      "price":cartProductObj.price
    }
    this.cartService.addCart(cartObj);
   }
}