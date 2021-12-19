import { Component,Inject ,OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { User } from 'src/app/modelos/User';
import { UserService } from 'src/app/servicios/user.service';


@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  estados=['activo','inactivo'];
  roles=['admin','superadmin'];


  
  formUser:FormGroup=this.fb.group({
    apellido: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    estado: new FormControl('',[Validators.required]),
    nombre: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    rol: new FormControl('',[Validators.required]),
  });

  constructor(
    public dialogRef: MatDialogRef<UserCreateComponent>,
    private fb:FormBuilder,
    private userService:UserService,
    //@Inject(MAT_DIALOG_DATA) public data: any,
    private toastr:ToastrService
  ) { }

  ngOnInit(): void {
  }

  public Guardar(){
    let dataUser=this.formUser.value;
  
    let user =new User(dataUser.id,dataUser.nombre,dataUser.apellido,dataUser.rol,dataUser.email,dataUser.estado,dataUser.password);
    console.log(user);

    this.userService.createUser(user)
     .subscribe(
       (response)=>{
        this.toastr.success('Se agrego exitosamente el usuario','Nuevo usuario')
        this.dialogRef.close();
    })

  }

  public Cancelar(){
    this.dialogRef.close();
  }

}
