export class User{
    id:number;
    nombre:string;
    apellido:string;
    rol:string;
    email:string;
    estado:string;
    password:string;

    constructor(id:number,nombre: string, apellido: string, rol: string, email:string, estado:string,password:string){
        this.id=id;
        this.nombre=nombre;
        this.apellido=apellido;
        this.rol=rol;
        this.email=email;
        this.estado=estado;
        this.password=password;
    }


}