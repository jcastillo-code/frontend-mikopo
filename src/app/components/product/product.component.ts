import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public textSearch: string;
  public product:any;

  constructor(private _productService: ProductService, private _router: ActivatedRoute) {
   }

  ngOnInit(): void {

    this._router.params.subscribe(params =>{
      console.log(params);
      this._productService.getProductById(params['id']).subscribe(data =>{
        console.log(data);
        this.product = data[0];
      
      });
    
    });


    

  }

  buyProduct(){
    this._productService.sell(this.product.id,this.product.name,this.product.price).subscribe(res =>{
      alert("producto comprado. Muchas gracias!!");
    });
  }

}
