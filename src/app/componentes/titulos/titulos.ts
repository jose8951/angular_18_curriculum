import { Component, inject, OnInit } from '@angular/core';
import { AsideComponent } from '../aside/aside';
import { FechaComponent } from '../fecha/fecha';
import { CommonModule } from '@angular/common';
import { Service } from '../../servicios/service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-titulos',
  standalone: true,
  imports: [CommonModule, AsideComponent, FechaComponent],
  templateUrl: './titulos.html',
  styleUrl: './titulos.css'
})
export class TitulosComponent implements OnInit {
  private readonly productoSVC = inject(Service);
  titulo_titulo="Formación Académica"

  public datos=toSignal(this.productoSVC.getDatos(),{initialValue:{}});
 

  ngOnInit(): void {
    this.productoSVC.getDatos().subscribe(data=>{
//console.log('los datos recibidos del json ', data);
    })
    
  }
}
