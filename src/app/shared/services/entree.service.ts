import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Entree } from '../interfaces/entree';

@Injectable({
  providedIn: 'root'
})
export class EntreeService {

  data: Entree[] = [
    {
      name: 'xd',
      description: 'xd',
      image: 'https://www.reasonwhy.es/media/cache/destacada/colores-vender-mas.jpg'
    }
  ]

  constructor(private httpClient: HttpClient) { }

  public retrieveEntry(): Observable<any> {
    return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/posts');
  }

  public retrieveEntryJson() {
    return this.data;
  }
}
