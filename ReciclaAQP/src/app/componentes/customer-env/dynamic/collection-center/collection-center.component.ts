import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, ActivatedRoute } from '@angular/router';

import { CollectionService } from 'src/app/servicios/collection.service';

import * as mapboxgl from 'mapbox-gl';
import { CollectionCenter } from 'src/app/modelos/CollectionCenter';
@Component({
  selector: 'app-collection-center',
  templateUrl: './collection-center.component.html',
  styleUrls: ['./collection-center.component.css']
})
export class CollectionCenterComponent implements OnInit {

  mapa!: mapboxgl.Map;
  markers:any=[];
  constructor(
    public serviceCollection:CollectionService,
  ) { }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapBoxApiKey;
    this.mapa = new mapboxgl.Map({
    container: 'mapa-mapbox', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-71.537451, -16.4090474], // starting position //LONG AND LAT // posicion de arequipa
    zoom: 10.6 // starting zoom
});
   this.crearMarcadores()
  }

  crearMarcadores(){
    this.serviceCollection.getListCollectionCenter().subscribe(
      (Response)=>{
        this.markers=Response;
        this.dibujarMarcadores(this.markers.data);
      }
    )
  }
  dibujarMarcadores(markers:any){
    
    for (let entry in markers) {

      const el = document.createElement('div');
      el.className='marker';
     
    const marker = new mapboxgl.Marker({
      draggable: false
      })
      .setLngLat([markers[entry].longitud, markers[entry].latitud])
      .setPopup(
        new mapboxgl.Popup({offset: 55})
        .setHTML(
          '<h3><strong>'+markers[entry].nombre+'</strong></h3>'+'<p>'+markers[entry].descripcion+'</p>'+
          '<p2><i> Dirección: '+markers[entry].direccion+'<i></p2>'
        )
      )
      .addTo(this.mapa);

      //console.log(marker.getLngLat())
    }
  }

}
