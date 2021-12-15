export class Information{
    id:string;
    fecha:string;
    titulo:string;
    descripcion:string;
    url_imagen:string;
    tipo:string;
    detalle:string[];

    constructor(id:string,fecha:string,titulo:string,descripcion:string,url_imagen:string,tipo:string,detalle:string[]){
        this.id=id;
        this.fecha=fecha;
        this.titulo=titulo;
        this.descripcion=descripcion;
        this.url_imagen=url_imagen;
        this.tipo=tipo;
        this.detalle=detalle;
    }
}