import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { Sell } from '../models/sell.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http : HttpClient) { }

  getProducts(){
    return this._http.get<Product[]>(`${ environment.URL}/products`);
  }

  getProductById(id){
    return this._http.get<Product>(`${ environment.URL}/productsById/${id}`);
  }

  findProduct(text){
    return this._http.get<Product[]>(`${ environment.URL}/productsByName/${text}`);
  }

  sell(id_product, name_product, price_product){
    return this._http.post<Sell>(`${ environment.URL}/venta/addSell`,{id_product, name_product, price_product});
  }

  dataGraphic(){
    return this._http.get(`${ environment.URL}/venta/dataGraphic`);
  }
}
