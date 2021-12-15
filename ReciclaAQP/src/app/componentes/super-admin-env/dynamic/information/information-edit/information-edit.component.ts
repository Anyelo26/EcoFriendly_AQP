import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Information } from 'src/app/modelos/Information';
import { InformationService } from 'src/app/servicios/information.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


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
      fecha: new FormControl(''),
      titulo: new FormControl(''),
      descripcion: new FormControl(''),
      url_imagen: new FormControl(''),
      tipo: new FormControl(''),
      detalle: new FormControl('')
    });
  }

  

  constructor(
    private service:InformationService, 
    private fb:FormBuilder, 
    public dialogRef: MatDialogRef<InformationEditComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.contruirFormulario();
    this.cargarTipo();
    this.service.viewInformation(Number(this.data.id))
    .subscribe(
      (response:Information) =>{
        console.log(response)
        this.formInformation.setValue(response)
        return this.datosficha=response;
      },
      (error) =>{
        console.log('error'+error);
      }
    )
  }

  public cargarTipo(){
    var tipo = ['Metales','Plastico','Papel Reutilizable','vidrio','Desechos Organicos','Baterias y pilas','Aceite','RAEE','Tipos de Contenedores'];
    var selector = document.getElementsByName('tipoInformacion')[0];
    for( let tipos in tipo){
      var opcion = document.createElement('option');
      opcion.text = tipo[tipos];
      selector.append(opcion);
    }
  }

  Editar(formulario:Information){
    this.data=this.datosficha;
    this.service.editarInformation(formulario)
      .subscribe(
        (response:Information)=>{
          this.dialogRef.close();
          return this.data=response;
        }
      )
  }

}
