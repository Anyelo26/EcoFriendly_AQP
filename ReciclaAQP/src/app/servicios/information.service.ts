import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Information } from '../modelos/Information';

@Injectable({
  providedIn: 'root'
})
export class InformationService {

  constructor(private http:HttpClient) { }

  ngOnInit(){

  }

  url:string="http://127.0.0.1:8000/api/fichas/"

  getListInformation(){
    return this.http.get<Information>(this.url)
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
