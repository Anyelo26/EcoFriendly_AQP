import { Component, OnInit } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-collection-center-edit',
  templateUrl: './center-edit.component.html',
  styleUrls: ['./center-edit.component.css']
})
export class CollectionCenterEditComponent implements OnInit {

  constructor(
    public dialogRef:MatDialogRef<CollectionCenterEditComponent>,
  ) { }

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

  public Cancelar(){
    this.dialogRef.close();
  }

}
