import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Information } from 'src/app/modelos/Information';
import { InformationService } from 'src/app/servicios/information.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-information-create',
  templateUrl: './information-create.component.html',
  styleUrls: ['./information-create.component.css']
})
export class InformationCreateComponent implements OnInit {

  formInformation:FormGroup=this.fb.group({
    fecha:new FormControl('',[Validators.required]),
    titulo:new FormControl('',[Validators.required]),
    descripcion:new FormControl('',[Validators.required]),
    url_imagen:new FormControl('',[Validators.required]),
    tipo:new FormControl('',[Validators.required]),
    detalle: new FormControl('',[Validators.required])
  });

  constructor(
    private service:InformationService, 
    private fb:FormBuilder, 
    public dialogRef: MatDialogRef<InformationCreateComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: Information,
    private toastr:ToastrService,
    private router: Router
  ) { }

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

  public Guardar(){
    let data=this.formInformation.value;
    var d = data.detalle
    var splitted = d.split("\n");
    console.log(splitted);
    let information = new Information(data.id,data.fecha,data.titulo,data.descripcion,data.url_imagen,data.tipo,splitted);
    console.log(information);
    this.service.crearInformation(information)
      .subscribe(data=>{
        this.toastr.success('Se agrego exitosamente una ficha informatica','Nuevo Ficha')
        this.dialogRef.close();
      })

  }

  public Cancelar(){
    this.dialogRef.close();
  }

}
