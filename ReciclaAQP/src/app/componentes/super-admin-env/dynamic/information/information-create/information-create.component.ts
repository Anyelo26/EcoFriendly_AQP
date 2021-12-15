import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Information } from 'src/app/modelos/Information';
import { InformationService } from 'src/app/servicios/information.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-information-create',
  templateUrl: './information-create.component.html',
  styleUrls: ['./information-create.component.css']
})
export class InformationCreateComponent implements OnInit {

  formInformation:FormGroup=this.fb.group({
    fecha:new FormControl(''),
    titulo:new FormControl(''),
    descripcion:new FormControl(''),
    url_imagen:new FormControl(''),
    tipo:new FormControl(''),
    detalle: new FormControl('')
    //detalle: this.fb.array([])
  });

  constructor(private service:InformationService, private fb:FormBuilder, 
    public dialogRef: MatDialogRef<InformationCreateComponent>, @Inject(MAT_DIALOG_DATA) public data: Information) { }

  ngOnInit(): void {
    this.cargarTipo();
  }

  public cargarTipo(){
    var tipo = ['Metales','Plastico','Papel Reutilizable','Vidrio','Desechos Organicos','Baterias y pilas','Aceite','RAEE','Tipos de Contenedores'];
    var selector = document.getElementsByName('tipoInformacion')[0];
    for( let tipos in tipo){
      var opcion = document.createElement('option');
      opcion.text = tipo[tipos];
      selector.append(opcion);
    }
  }

  /*
  get getDetalle() {
    return this.formInformation.get('detalle') as FormArray;
  }


  addDetalle(){
    const control = <FormArray>this.formInformation.controls['detalle'];
    control.push(this.fb.group({detalle: []}));
    //const detalle = this.fb.group({
    //  detalle: new FormControl('')
    //})
    //this.getDetalle.push(detalle);
  }

  removeDetalle(index: number){
    const control = <FormArray>this.formInformation.controls['detalle'];
    control.removeAt(index);
    //this.getDetalle.removeAt(index);
  }*/

  public Guardar(){
    let data=this.formInformation.value;
    var d = data.detalle
    var splitted = d.split("\n");
    console.log(splitted);
    let information = new Information(data.id,data.fecha,data.titulo,data.descripcion,data.url_imagen,data.tipo,splitted);
    console.log(information);
    this.service.crearInformation(information)
      .subscribe(data=>{
        this.dialogRef.close();
      })

  }

}
