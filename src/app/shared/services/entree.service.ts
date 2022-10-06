import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntreeService {

  constructor(private httpClient: HttpClient) { }

  public retrieveEntry(): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }
}
