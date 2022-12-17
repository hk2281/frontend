import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Shop } from '../models/shop';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  shopUrl = environment.shopUrl;

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Shop[]> {
    return this.httpClient.get<Shop[]>(`${this.shopUrl}`)
  }
  public detail(id: number): Observable<Shop> {
    return this.httpClient.get<Shop>(`${this.shopUrl}${id}`);
  }
  public save(shop: Shop): Observable<any> {
    return this.httpClient.post<any>(`${this.shopUrl}`, shop);
  }
  public update(id: number, shop: Shop): Observable<any> {
    console.log(`here ${shop.shopName}`)
    return this.httpClient.put<any>(`${this.shopUrl}${id}`, shop);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.shopUrl}${id}`);
  }

}
