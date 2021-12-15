import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CollectionCenter } from '../modelos/CollectionCenter';

import { UserService } from './user.service';
@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http:HttpClient, private user:UserService) { }

  url:string="http://127.0.0.1:8000/api/centros/"

  getListCollectionCenter(){
    return this.http.get<CollectionCenter>(this.url)
  }
  createCollectionCenter(collectionCenter:CollectionCenter):Observable<any>{
    
    let token=this.user.getMeToken();
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)
    
    let ruta= this.url+"create/";
    return this.http.post<CollectionCenter>(ruta,collectionCenter,{'headers': headers})

  }
  viewCollectionCenter(id: String){
    let ruta =this.url+"retrieve/";
    return this.http.post<CollectionCenter>(ruta,id);
  }
  editCollectionCenter(){

  }
  deleteCollectionCenter(){

  }
}
