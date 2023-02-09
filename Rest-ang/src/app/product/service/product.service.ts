import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { fooditems } from '../data/food-items';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  currentMaxId=0
  products=fooditems;
  productNotifier=new Subject<void>()
  onDelete=new Subject<void>()
  productnotifier: any;
  
  

  

  constructor(private http:HttpClient) { }
  

  getfooditem():Observable<any>{
    return this.http.get('http://localhost:3000/product/list')
  }
  addproduct(name:any,price:any,description:any):Observable<any>{
    const newProduct=Object.assign({},{
      name: name,
      description:description,
      id: Number(this.currentMaxId)+1,
      price:price,
      iconName:"biriyani",
      rating: 3,
      imgurl:"https://c.ndtvimg.com/2022-09/1jsu8038_noodles_625x300_28_September_22.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886"


    })
    console.log('newProduct',newProduct);
    
    return this.http.post('http://localhost:3000/product',newProduct)

    // this.products.push(newProduct)
    // this.productNotifier.next()    
  }
  deleteproduct(productName:any):Observable<any>{
    return this.http.delete(`http://localhost:3000/product/${productName}`)
    // this.products.splice(this.products.findIndex(a=>a.id ===id),1)
    // console.log(this.products);
    // this.onDelete.next()
    
  }
  // editproduct(id:any){
  //   this.products.splice(this.products.findIndex(a=>a.id ===id),1)
  //   console.log(this.products);
  //   this.onDelete.next()
    
  // }
  updateProduct(product: any):Observable<any>{
    return this.http.put(`http://localhost:3000/product/${product.id}`,product)
    // this.products.forEach((item: any) => {
    //   if (product.id === item.id) {
    //     item.name = product.name;
    //     item.price = product.price;
    //     item.description = product.description;
    //   }
    // });
    
  }
}


