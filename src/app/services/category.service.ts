import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categoryUrl = environment.categoryUrl;

  constructor(private httpClient: HttpClient) {}

    public listAll(): Observable<Category[]> {
      return this.httpClient.get<Category[]>(`${this.categoryUrl}`)
    }
    public detail(id: number): Observable<Category> {
      return this.httpClient.get<Category>(`${this.categoryUrl}${id}`);
    }
    public save(category: Category): Observable<any> {
      return this.httpClient.post<any>(`${this.categoryUrl}`, category);
    }
    public update(id: number, category: Category): Observable<any> {
      console.log(`here ${category.cat_title}`)
      return this.httpClient.put<any>(`${this.categoryUrl}${id}`, category);
    }
    public delete(id: number): Observable<any> {
      return this.httpClient.delete<any>(`${this.categoryUrl}${id}`);
    }

}
