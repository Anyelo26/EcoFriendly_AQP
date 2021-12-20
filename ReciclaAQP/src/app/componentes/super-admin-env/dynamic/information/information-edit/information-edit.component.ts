import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Information } from 'src/app/modelos/Information';
import { InformationService } from 'src/app/servicios/information.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-information-edit',
  templateUrl: './information-edit.component.html',
  styleUrls: ['./information-edit.component.css']
})
export class InformationEditComponent implements OnInit {

  public datosficha: Information={id:'',titulo:'', fecha:'',descripcion:'',tipo:'',url_imagen:'',detalle:[]}

  public formInformation!:FormGroup;
  contruirFormulario(){
    this.formInformation = new FormGroup({
      id: new FormControl('',[Validators.required]),
      fecha: new FormControl('',[Validators.required]),
      titulo: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),
      url_imagen: new FormControl('',[Validators.required]),
      tipo: new FormControl('',[Validators.required]),
      detalle: new FormControl('',[Validators.required])
    });
  }

  

  constructor(
    private service:InformationService, 
    private fb:FormBuilder, 
    public dialogRef: MatDialogRef<InformationEditComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toastr:ToastrService, ) { }

  ngOnInit(): void {
    this.contruirFormulario();
    this.cargarTipo();
    this.service.viewInformation({id:this.data.id})
    .subscribe(
      (response:Information) =>{
        console.log(response)
        this.formInformation.setValue(response)
        return this.datosficha=response;
      },
    )
  }

  public cargarTipo(){
    var tipo = ['Metales','Plastico','Papel Reutilizable','vidrio','Desechos Organicos','Baterias y pilas','Aceite','RAEE','Tipos de Contenedores'];
    var selector = document.getElementsByName('tipo')[0];
    for( let tipos in tipo){
      var opcion = document.createElement('option');
      opcion.text = tipo[tipos];
      selector.append(opcion);
    }
  }

  Editar(formulario:Information){
   
    this.service.editarInformation(formulario)
      .subscribe(
        (response:Information)=>{
          this.toastr.success('Se editó exitosamente la ficha informativa','Ficha informativa editada');
          this.dialogRef.close();
          return response;
        }
      )
  }

  public Cancelar(){
    this.dialogRef.close();
  }

}
