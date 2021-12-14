import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionCenter } from '../modelos/CollectionCenter';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http:HttpClient) { }

  url:string="http://127.0.0.1:8000/api/centros"

  getListCollectionCenter(){
    return this.http.get<CollectionCenter>(this.url)
  }
}
