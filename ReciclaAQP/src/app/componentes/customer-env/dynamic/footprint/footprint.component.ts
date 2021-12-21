import {Component, OnInit} from '@angular/core';
import {FootprintService} from "../../../../servicios/footprint.service";
import {ChartDataSets, ChartType} from 'chart.js';
import {Color, Label} from "ng2-charts";


interface Departamento {
  value: string;
  viewValue: string;
}

interface Anio {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-footprint',
  templateUrl: './footprint.component.html',
  styleUrls: ['./footprint.component.css']
})

export class FootprintComponent implements OnInit {
  constructor(private footprintService: FootprintService,
  ) {
  }

  ngOnInit(): void {

  }

  ANIO_LIMITE = 2016;
  ANIO_MINIMO = 2009;

  never: any[] = [];
  lineChartData: ChartDataSets[] = [{data: [], label: ""}];
  lineChartLabels: Label[] = ['Cultivos', 'Pastoreo', 'Bosques', 'Pesca', 'Huella Carbono', 'Urbana'];
  lineChartOptions = {responsive: true};
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgb(176, 196, 222, .5)',
    }
  ];

  lineChartLegent = true;
  lineChartType: ChartType = "line";

  departamentos: Departamento[] = [
    {value: '0', viewValue: '-- Seleccione un departamento --'},
    {value: '1', viewValue: 'Amazonas'},
    {value: '2', viewValue: 'Áncash'},
    {value: '3', viewValue: 'Apurímac'},
    {value: '4', viewValue: 'Arequipa'},
    {value: '5', viewValue: 'Ayacucho'},
    {value: '6', viewValue: 'Cajamarca'},
    {value: '7', viewValue: 'Cusco'},
    {value: '8', viewValue: 'Huancavelica'},
    {value: '9', viewValue: 'Huánuco'},
    {value: '10', viewValue: 'Ica'},
    {value: '11', viewValue: 'Junín'},
    {value: '12', viewValue: 'La Libertad'},
    {value: '13', viewValue: 'Lambayeque'},
    {value: '14', viewValue: 'Lima'},
    {value: '15', viewValue: 'Loreto'},
    {value: '16', viewValue: 'Madre de Dios'},
    {value: '17', viewValue: 'Moquegua'},
    {value: '18', viewValue: 'Pasco'},
    {value: '19', viewValue: 'Piura'},
    {value: '20', viewValue: 'Puno'},
    {value: '21', viewValue: 'San Martín'},
    {value: '22', viewValue: 'Tacna'},
    {value: '23', viewValue: 'Tumbes'},
    {value: '24', viewValue: 'Ucayali'},
  ];

  anios: Anio[] = [
    {value: '0', viewValue: '-- Seleccione un año --'},
    {value: '2009', viewValue: '2009'},
    {value: '2010', viewValue: '2010'},
    {value: '2011', viewValue: '2011'},
    {value: '2012', viewValue: '2012'},
    {value: '2013', viewValue: '2013'},
    {value: '2014', viewValue: '2014'},
    {value: '2015', viewValue: '2015'},
    {value: '2016', viewValue: '2016'},
    {value: '2017', viewValue: '2017'},
    {value: '2018', viewValue: '2018'},
    {value: '2019', viewValue: '2019'},
    {value: '2020', viewValue: '2020'},
    {value: '2021', viewValue: '2021'},
    {value: '2022', viewValue: '2022'},
    {value: '2023', viewValue: '2023'},
    {value: '2024', viewValue: '2024'},
    {value: '2025', viewValue: '2025'},
  ];
  selectedAn = this.anios[0].value;
  area_de_bosques: any = 0;
  area_de_cultivos: any = 0;
  area_de_pastoreo: any = 0;
  areas_urbanas: any = 0;
  huella_de_carbono: any = 0;
  huella_regional_percapita: any = 0;
  zonas_de_pesca: any = 0;
  presicion: any = 0;

  selectedDep = this.departamentos[0].value;

  actualizarGraficas(data: any) {
    this.lineChartLabels = [];
    this.lineChartData = [];
    let dataToLineChartData: ChartDataSets = {data: [], label: "Huella per Capita"};
    for (let i = this.ANIO_MINIMO; i <= +this.selectedAn; i++) {
      this.lineChartLabels.push(`${i}`);
      let capita = data.contenido.filter((x: any) => x.anio === +i)[0].huella_regional_percapita;
      dataToLineChartData.data?.push(capita);
    }
    this.lineChartData.push(dataToLineChartData)

  }

  getDataFromServer() {
    if (!+this.selectedDep || !+this.selectedAn) {
      alert("Seleccione un departamento y un año")
      return;
    }

    let body = {cod_ambito: +this.selectedDep, anio: +this.selectedAn};


    if (+this.selectedAn <= this.ANIO_LIMITE) {
      this.footprintService.getHuellaxAmbito(body).subscribe(
        x => {
          let selected = x.contenido.filter((y: any) => y.anio === +this.selectedAn);
          if (selected.length) {
            selected = selected[0];
            this.area_de_bosques = selected.area_de_bosques;
            this.area_de_cultivos = selected.area_de_cultivos;
            this.area_de_pastoreo = selected.area_de_pastoreo;
            this.areas_urbanas = selected.areas_urbanas;
            this.huella_de_carbono = selected.huella_de_carbono;
            this.huella_regional_percapita = selected.huella_regional_percapita;
            this.zonas_de_pesca = selected["zonas_de_pesca "];
            this.actualizarGraficas(x);
            this.presicion = 0;
          }
        }
      );
    } else {
      this.footprintService.getHuellaxAmbitoPrediccion(body).subscribe(
        x => {
          
          let selected = x.resultado;
          this.presicion = selected.presicion * 100;
          this.area_de_bosques = 0;
          this.area_de_cultivos = 0;
          this.area_de_pastoreo = 0;
          this.areas_urbanas = 0;
          this.huella_de_carbono = 0;
          this.huella_regional_percapita = selected.huella_predicta;
          this.zonas_de_pesca = 0;
        }
      )
    }

  }


}
