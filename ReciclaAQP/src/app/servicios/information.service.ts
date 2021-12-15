import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Information } from '../modelos/Information';

import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http:HttpClient, private user:UserService) { }

  ngOnInit(){

  }

  url:string="http://127.0.0.1:8000/api/fichas/"

  getListInformation(){
    let token= this.user.getMeToken();
    const headers = new HttpHeaders().set('Authorization','Bearer '+token)

    return this.http.get<Information>(this.url,{'headers': headers})
  }

  crearInformation(information:Information):Observable<any>{
    
    let rutacrear=this.url+"create/"
    return this.http.post<Information>(rutacrear,information);
  }

  eliminarInformation(information:any):Observable<any>{
    let rutaeliminar=this.url+"delete/";
    return this.http.post<Information>(rutaeliminar,information);
  }

  viewInformation(id:number):Observable<Information>{//tal vez pueda cambiarse a string
    let direccion= this.url+'retrieve/'+id;
    return this.http.get<Information>(direccion);
  }

  editarInformation(information:Information):Observable<any>{
    let rutaedit=this.url+"update/";
    return this.http.post<Information>(rutaedit,information);
  }

  
}
