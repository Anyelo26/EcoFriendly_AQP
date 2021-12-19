import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/modelos/User';
import { UserService } from 'src/app/servicios/user.service';


@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public datosUser: User ={id:0,nombre:'',apellido:'',rol:'',email:'',estado:'',password:''};
  

  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private userService:UserService,
    private toastr:ToastrService,

  ) { }

  public formUser!:FormGroup;
  
    construirFormulario(){
    this.formUser= new FormGroup({
    id:new FormControl('',[Validators.required]),
    apellido: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    estado: new FormControl('',[Validators.required]),
    nombre: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    rol: new FormControl('',[Validators.required]),
    //no debe incluirse token, en el view esta mostrandose token , cuidado con eso, consultar a back

  })
}
  ngOnInit(): void {
    this.construirFormulario();
    this.cargarOpciones();
    this.userService.viewUser({id:this.data.id}).subscribe(

      (response: User)=>{
        this.formUser.setValue(response);
        return this.datosUser=response;
        
      }
    )
    
  }

  public cargarOpciones(){
    var estados=['activo','inactivo'];
    var selector = document.getElementsByName('estadosUsuario')[0];
    for(let estado in estados){
      var opcion = document.createElement('option');
      opcion.text = estados[estado];
      selector.append(opcion);
    }

    var roles=['admin','superadmin'];
    var selector = document.getElementsByName('rolesUsuario')[0];
    for(let rol in roles){
      var opcion = document.createElement('option');
      opcion.text = roles[rol];
      selector.append(opcion);
    }

    }

  public Editar(formulario: User){
   
    this.userService.editUser(formulario).subscribe(
      (response:User)=>{
        this.toastr.success('Se editó exitosamente el usuario','Usuario editado');
        this.dialogRef.close();
        return response;

      }
    )

  }
  public Cancelar(){
    this.dialogRef.close();
  }

}
