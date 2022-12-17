import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Worker } from '../models/worker';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {

  workerUrl = environment.workerUrl;

  constructor(private httpClient: HttpClient) { }

  public listAll(): Observable<Worker[]> {
    return  this.httpClient.get<Worker[]>(`${this.workerUrl}`)
  }
  public detail(id: number): Observable<Worker> {
    return this.httpClient.get<Worker>(`${this.workerUrl}${id}`);
  }
  public save(worker: Worker): Observable<any> {
    return this.httpClient.post<any>(`${this.workerUrl}`, worker);
  }
  public update(id: number, category: Worker): Observable<any> {
    return this.httpClient.put<any>(`${this.workerUrl}${id}`, category);
  }
  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.workerUrl}${id}`);
  }

}
