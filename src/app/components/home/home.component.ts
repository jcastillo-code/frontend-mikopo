import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public textSearch: string;
  public products:any;

  constructor(private _productService: ProductService, private _router:Router) {
    this.products = [];
    this.textSearch = "";
   }

  ngOnInit(): void {

    this.getProducts();

  }

  getProducts(){
    this._productService.getProducts().subscribe(data =>{

      this.products = data;
    
    });
  }

  productSearch(){
    if(this.textSearch.length > 1){
      this._productService.findProduct(this.textSearch).subscribe(data =>{
        this.products = data;
      });
    }else{
      this.getProducts();
    }
  }

  showProduct(id){
    this._router.navigate(['product', id]);
  }

}
