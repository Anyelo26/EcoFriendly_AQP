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

 
  constructor(
    public dialogRef: MatDialogRef<UserEditComponent>,
    private fb:FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private userService:UserService,
    private toastr:ToastrService,

  ) { }

  public formUser:FormGroup=this.fb.group({
    apellido: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    estado: new FormControl('',[Validators.required]),
    nombre: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    rol: new FormControl('',[Validators.required]),

  })
  datosUser:any=[];
  ngOnInit(): void {
    this.userService.viewUser({id:this.data.id}).subscribe(

      (response: User)=>{
        console.log(response)
        return this.datosUser=response;
        
      }
    )
    
  }

  public Editar(){
    console.log(this.formUser.value);
    this.datosUser=this.formUser.value;
    this.userService.editUser(this.datosUser).subscribe(
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
