import { Component, OnInit } from '@angular/core';
import {ProductService} from './../service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  fooditems:any[]=[];


  constructor (private ProductService:ProductService){ }

  ngOnInit(): void {
    this.getfooditems();
  }

  getfooditems(){
    this.ProductService.getfooditem()
    .subscribe((fooditems)=>{
      this.fooditems=fooditems
      console.log('fooditems',this.fooditems);
      
    })
  }
}

