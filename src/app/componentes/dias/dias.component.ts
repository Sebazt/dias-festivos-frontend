import { Component, OnInit } from '@angular/core';
import { ColumnMode, SelectionType } from '@swimlane/ngx-datatable';
import { Dias } from 'src/app/entidades/dias';
import { DiasService } from '../../servicios/dias.service';


@Component({
  selector: 'app-dias',
  templateUrl: './dias.component.html',
  styleUrls: ['./dias.component.css'],
})
export class DiasComponent implements OnInit {
  public textoBusqueda: string = '';

  public buscar() {}
  public dias: Dias[] = [];
  public modoColumna = ColumnMode;
  public tipoSeleccion = SelectionType;
  public columnas = [
    { name: 'nombre', prop: 'nombre' },
  ];

  constructor(private DiasService:DiasService) {

  }

  ngOnInit(): void {
      this.listar();
  }

  public listar(){
    this.DiasService.listar().subscribe(
      res => {
        this.dias = res;
        console.log(this.dias);
      }
    );
  }

}
