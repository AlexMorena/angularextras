import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { ServiceEquipo } from '../../services/service-equipo';

@Component({
  selector: 'app-equipo-component',
  standalone: false,
  styleUrl: './equipo-component.css',
  templateUrl: './equipo-component.html',
})
export class EquipoComponent implements OnInit{
  public equipos!: Array<Equipo>

  constructor(
    private _service: ServiceEquipo,
    private _cdr: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this._service.getEquipos().subscribe((response) => {
      this.equipos = response;
      this._cdr.detectChanges();
    })
  }
}
