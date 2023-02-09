import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/product/service/product.service';

export interface DialogData {
  isEdit: boolean;
  name: string;
  price: number;
  description: string;
  id: number
  
  
}

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent  {

  name = '';
  price = 0;
  description = '';
  isEdit=false;
  id = 0;
  //inject productservice in the constructor
  
  constructor(
    public dialogRef: MatDialogRef<AddProductsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,private Ps:ProductService
  ) {}
  
  ngOnInit() {
    this.name = this.data.name;
    this.price = this.data.price;
    this.description = this.data.description;
    this.id=this.data.id;
    if(this.data.isEdit){
      this.isEdit=true
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
 onSave(){
  this.Ps.addproduct (this.name,this.price,this.description).subscribe((resp)=>{
  this.dialogRef.close();
  this.Ps.productNotifier.next()
})
 }

  
    onEdit(){
      this.Ps.updateProduct({name: this.name, price: this.price, description: this.description, id:this.id})
     .subscribe(()=>{
      this.Ps.productNotifier.next();
     })
      this.dialogRef.close();
      
    }


  
}