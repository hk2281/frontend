import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Provider } from '../models/provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  providerUrl = environment.providerUrl;

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Provider[]> {
    return this.httpClient.get<Provider[]>(`${this.providerUrl}`)
  }
  public detail(id: number): Observable<Provider> {
    return this.httpClient.get<Provider>(`${this.providerUrl}${id}`);
  }
  public save(provider: Provider): Observable<any> {
    return this.httpClient.post<any>(`${this.providerUrl}`, provider);
  }
  public update(id: number, provider: Provider): Observable<any> {
    return this.httpClient.put<any>(`${this.providerUrl}${id}`, provider);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.providerUrl}${id}`);
  }

}
