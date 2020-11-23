import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';

import Swal from 'sweetalert2'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public textSearch: string;
  public product:Product;

  constructor(private _productService: ProductService, private _router: ActivatedRoute, private _navigateRouter:Router) {
   }

  ngOnInit(): void {

    this._router.params.subscribe(params =>{
      this._productService.getProductById(params['id']).subscribe( (data:Product) =>{
        this.product = data[0];
      
      });
    
    });


    

  }

  buyProduct(){
    this._productService.sell(this.product.id,this.product.name,this.product.price).subscribe(res =>{
      if(res['status'] == 201){
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Gracias por comprar nuestros productos',
          showConfirmButton: false,
          timer: 1500
        })
        this._navigateRouter.navigate(['home']);
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'lo sentimos, algo salio mal, intentelo mas tarde...',
          footer: '<a href>Why do I have this issue?</a>'
        })
      }
      
    });
  }

}
