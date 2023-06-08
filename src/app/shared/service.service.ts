import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http : HttpClient) { }

  getproduct(){
    return this.http.get(`https://dummyjson.com/products`)
  }

  getProdustById(id:any){
    return this.http.get(`https://dummyjson.com/products`+ id)
  }
}
