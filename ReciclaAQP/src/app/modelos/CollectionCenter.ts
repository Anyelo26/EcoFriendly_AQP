export class CollectionCenter{
    id:string;
    categoria: string;
    nombre:string;
    descripcion:string;
    direccion:string;
    estado:string;
    horario:string;
    latitud:number;
    longitud:number;
    telefono:number;
    
    constructor(id:string,categoria:string ,nombre: string, descripcion: string, direccion: string,estado:string, horario:string, latitud:number,longitud:number,telefono:number){
   
        this.id=id;
        this.categoria=categoria;
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.direccion=direccion;
        this.estado=estado;
        this.horario=horario;
        this.latitud=latitud;
        this.longitud=longitud;
        this.telefono=telefono;
        

    }

}
