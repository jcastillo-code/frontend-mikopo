import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public textSearch: string;
  public products:Product[];

  constructor(private _productService: ProductService, private _router:Router) {
    this.products = [];
    this.textSearch = "";
   }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts(){
    this._productService.getProducts().subscribe((data:Product[]) =>{

      this.products = data;
    
    });
  }

  productSearch(){
    if(this.textSearch.length > 1){
      this._productService.findProduct(this.textSearch).subscribe((data:Product[]) =>{
        this.products = data;
      });
    }else{
      this.getProducts();
    }
  }

  showProduct(product:Product){
    this._router.navigate(['product', product.id]);
  }

}
