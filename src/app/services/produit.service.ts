import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http : HttpClient) { }

  getAll() : Observable<any> {
    return this.http.get("https://dummyjson.com/products")
  }

  getSearched(keyword : string) : Observable<any> {
    return this.http.get("https://dummyjson.com/products/search?q="+ keyword)
  }

  getProduitDetail(id : number) : Observable<any> {
      return this.http.get("https://dummyjson.com/products/" + id);
  }

  getProduits(categorie : string) : Observable<any> {
    return this.http.get("https://dummyjson.com/products/category/"+categorie);
  }
}
