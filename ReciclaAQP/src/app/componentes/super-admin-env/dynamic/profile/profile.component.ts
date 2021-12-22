import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/servicios/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/modelos/User';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  public datosUser: User ={id:0,nombre:'',apellido:'',rol:'',email:'',estado:'',password:''};
  constructor(
    public userService: UserService,
    public router: Router,
    public toastr:ToastrService,
    public dialogRef:MatDialogRef<ProfileComponent>
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
    
  ngOnInit() {
    this.construirFormulario();
    let id=this.userService.getMeIdOfLocalStorage();
    this.userService.viewUser({"id":id}).subscribe(
      (response:User)=>{
        this.formUser.setValue(response);
        return this.datosUser=response;
      }
    )
}

public Editar(formulario: User){
  this.userService.editUser(formulario).subscribe(
    (response:User)=>{
      this.toastr.success('Se editó exitosamente el perfil','Perfil editado');
      return response;

    }
  )

}
public Cancelar(){
  this.dialogRef.close();
}

}
