import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

import { CollectionCenter } from 'src/app/modelos/CollectionCenter';
import { CollectionService } from 'src/app/servicios/collection.service';

@Component({
  selector: 'app-collection-center-create',
  templateUrl: './center-create.component.html',
  styleUrls: ['./center-create.component.css']
})
export class CollectionCenterCreateComponent implements OnInit {



  formCenter:FormGroup=this.fb.group({
    categoria: new FormControl('',[Validators.required]),
    descripcion: new FormControl('',[Validators.required]),
    direccion: new FormControl('',[Validators.required]),
    estado: new FormControl('',[Validators.required]),
    horario: new FormControl('',[Validators.required]),
    latitud: new FormControl('',[Validators.required]),
    longitud: new FormControl('',[Validators.required]),
    nombre: new FormControl('',[Validators.required]),
    telefono:new FormControl('',[Validators.required]),
  });
  
  constructor(
    private fb:FormBuilder,
    public dialogRef:MatDialogRef<CollectionCenter>,
    private collectionCenterService:CollectionService,
    @Inject(MAT_DIALOG_DATA) public data: CollectionCenter,
    private toastr:ToastrService) { }
    
  ngOnInit(): void {
    this.cargarCategoria();
    this.cargarEstado();
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
  public Guardar(){
    let dataCentroAcopio=this.formCenter.value;
  
    let center =new CollectionCenter(dataCentroAcopio.id,dataCentroAcopio.categoria,dataCentroAcopio.nombre,dataCentroAcopio.descripcion,dataCentroAcopio.direccion,dataCentroAcopio.estado,dataCentroAcopio.horario,Number(dataCentroAcopio.latitud),Number(dataCentroAcopio.longitud),dataCentroAcopio.telefono);
    console.log(center);
    this.collectionCenterService.createCollectionCenter(center)
     .subscribe(
       (response)=>{
        this.toastr.success('Se agrego exitosamente el centro de acopio','Nuevo Centro de acopio')
        this.dialogRef.close();
    })

  }

  public Cancelar(){
    this.dialogRef.close();
  }
}
