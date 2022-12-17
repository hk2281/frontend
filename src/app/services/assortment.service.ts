import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Assortment } from '../models/assortment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssortmentService {

  assortmentUrl = environment.assortmentUrl;

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Assortment[]> {
    return this.httpClient.get<Assortment[]>(`${this.assortmentUrl}`);
  }

  public detail(id: number): Observable<Assortment> {
    return this.httpClient.get<Assortment>(`${this.assortmentUrl}${id}`);
  }

  public save(assortment: Assortment): Observable<any> {
    return this.httpClient.post<any>(`${this.assortmentUrl}`, assortment);
  }

  public update(id: number, assortment: Assortment): Observable<any> {
    console.log(`here ${assortment.category}`)
    return this.httpClient.put<any>(`${this.assortmentUrl}${id}`, assortment);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.assortmentUrl}${id}`);
  }
}
