import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FechaComponent } from '../fecha/fecha';
import { AsideComponent } from '../aside/aside';
import { Service } from '../../servicios/service';
import { Observable } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-datos',
  imports: [CommonModule, FechaComponent, AsideComponent],
  templateUrl: './datos.html',
  styleUrl: './datos.css',
})
export class DatosComponent implements OnInit {
  titulotros = 'Datos de interés';
  otros$!: Observable<any>;

  private readonly productoSVC = inject(Service);
  public datos = toSignal(this.productoSVC.getDatos(), { initialValue: {} });
 

  ngOnInit(): void {
    this.otros$ = this.productoSVC.getDatos();
  }
}
