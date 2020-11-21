import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _http : HttpClient) { }

  getProducts(){
    return this._http.get(`${ environment.URL}/product/`);
  }

  getProductById(id){
    return this._http.get(`${ environment.URL}/product/${id}`);
  }

  findProduct(text){
    return this._http.get(`${ environment.URL}/product/searchProduct/${text}`);
  }

  sell(id, name, price){
    return this._http.post(`${ environment.URL}/ventas/sell`,{id, name, price});
  }

  dataGraphic(){
    return this._http.get(`${ environment.URL}/ventas/dataGraphic`);
  }
}
