
import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductService } from 'src/app/product/service/product.service';
import { ConformationComponent } from 'src/app/shared/conformation/conformation.component';



@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent  implements OnInit,OnChanges{
  
  @Input() searchstring='';
  @Output() editItem=new EventEmitter<any>();


  displayedColumns: string[] = ['name','description','price','actions'];
  dataSource:any[]=[]
  mainSource:any[]=[]
  loaded=false
  page='loading'
  

  constructor(private productService:ProductService ,private dailog:MatDialog){
    this.productService.productNotifier.subscribe(()=>{
      this.getFoodItems();
    })
  }

  ngOnInit(){
    this.getFoodItems()
  }
  ngOnChanges(changes: SimpleChanges){
    this.filterProducts ()
  }

  filterProducts(){
    console.log(this.searchstring);
    
    this.dataSource=[]
    this.mainSource.forEach((product:any)=>{
      if(product.name.includes(this.searchstring)){
        this.dataSource.push(product)
      }
    })
  }
  getFoodItems(){
   this.page='loading'
   this.loaded=true;
    this.productService.getfooditem()
    .subscribe((foodItems:any)=>{
      this.dataSource=foodItems
      console.log('......',foodItems);
      setTimeout(()=>{
        this.page='Complete'
      },0)
      console.log(foodItems);
      
      this.dataSource=foodItems
      this.mainSource=this.dataSource
      let maxId=0;
      foodItems.forEach((item:any)=>{
        if(item.id>maxId){
          maxId=item.id
        }
      })
      this.productService.currentMaxId=maxId
    },(error:any)=>{
      console.log(error);
      
    });
  }
  
  onDelete(name:any){
    // this.productService.deleteproduct(id).subscribe(()=>{
    //   this.productService.productNotifier.next()
    //   this.productService.onDelete.subscribe(()=>{
    //     this.getFoodItems()
        
    //   })
    // })
    const dailogRef=this.dailog.open( ConformationComponent, {
      height: '200px',
      width: '450px',
      data: {value:name,action:'Delete'}
    });
    dailogRef.afterClosed().subscribe(result=>{
      if(result){
        this.onConformDelete(name)
      }
    })
  }

  onConformDelete(name:any){
    this.productService.deleteproduct(name).subscribe(()=>{
      // this.productService.productNotifier.next()
      this.productService.onDelete.subscribe(()=>{
        this.getFoodItems()
      })
      this.productService.onDelete.next()
    })
    
  }

  onEdit(id:any){
    console.log("tems",id);
    this.editItem.emit(id)

  }

}
