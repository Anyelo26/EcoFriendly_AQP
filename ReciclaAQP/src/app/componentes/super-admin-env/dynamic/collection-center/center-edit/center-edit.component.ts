import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CollectionCenter } from 'src/app/modelos/CollectionCenter';
import { CollectionService } from 'src/app/servicios/collection.service';

@Component({
  selector: 'app-collection-center-edit',
  templateUrl: './center-edit.component.html',
  styleUrls: ['./center-edit.component.css']
})
export class CollectionCenterEditComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<CollectionCenterEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private centerService:CollectionService,
    private toastr:ToastrService, 
  ) { }
  
  public formCenter!:FormGroup;
    construirFormulario(){
      this.formCenter = new FormGroup({
        id: new FormControl('',[Validators.required]),
        categoria: new FormControl('',[Validators.required]),
        descripcion: new FormControl('',[Validators.required]),
        direccion: new FormControl('',[Validators.required]),
        estado:new FormControl('',[Validators.required]),
        horario: new FormControl('',[Validators.required]),
        latitud: new FormControl('',[Validators.required]),
        longitud: new FormControl('',[Validators.required]),
        nombre: new FormControl('',[Validators.required]),
        telefono: new FormControl('',[Validators.required]),

      })      
    }

  dataCenter:any=[];
  ngOnInit(): void {
    this.construirFormulario();
    this.cargarCategoria();
    this.cargarEstado();
    this.centerService.viewCollectionCenter({id:this.data.id}).subscribe(
      (response: CollectionCenter)=>{
        console.log(response)
        this.formCenter.setValue(response);
        return this.dataCenter=response;
        
      }
    )
  }

  public cargarCategoria(){
    var categoria = ['Metales','Plastico','Papel Reutilizable','Vidrio','Desechos Organicos','Baterias y pilas','Aceite','RAEE'];
    var selector = document.getElementsByName('tipoCentro')[0];
    for( let tipos in categoria){
      var opcion = document.createElement('option');
      opcion.text = categoria[tipos];
      selector.append(opcion);
    }
  }

  public cargarEstado(){
    var estado = ['Activo','Inactivo'];
    var selector = document.getElementsByName('estado')[0];
    for( let tipos in estado){
      var opcion = document.createElement('option');
      opcion.text = estado[tipos];
      selector.append(opcion);
    }
  }
  public Editar(formulario: CollectionCenter){
   
    this.centerService.editCollectionCenter(formulario).subscribe(
      (response:CollectionCenter)=>{
        this.toastr.success('Se editó exitosamente el centro de acopio','Centro de acopio editado');
        this.dialogRef.close();
        return response;

      }
    )

  }
  public Cancelar(){
    this.dialogRef.close();
  }

}
