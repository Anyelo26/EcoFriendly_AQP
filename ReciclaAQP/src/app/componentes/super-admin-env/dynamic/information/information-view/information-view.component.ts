import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Information } from 'src/app/modelos/Information';
import { InformationService } from 'src/app/servicios/information.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-information-view',
  templateUrl: './information-view.component.html',
  styleUrls: ['./information-view.component.css']
})
export class InformationViewComponent implements OnInit {

  public datosficha: Information={id:'',titulo:'', fecha:'',descripcion:'',tipo:'',url_imagen:'',detalle:[]}

  constructor(
    private service:InformationService, 
    private fb:FormBuilder, 
    public dialogRef: MatDialogRef<InformationViewComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

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

  ngOnInit(): void {
    this.contruirFormulario();
    this.service.viewInformation(this.data.id)
    .subscribe
    (
      (response:Information) =>{
        this.formInformation.setValue(response)
        return this.datosficha=response;
      },
      (error) =>{
        console.log('error'+error);
      }
    )
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
