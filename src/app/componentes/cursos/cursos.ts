import { Component, inject, OnInit } from '@angular/core';
import { AsideComponent } from '../aside/aside';
import { FechaComponent } from '../fecha/fecha';
import { Service } from '../../servicios/service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cursos',
  imports: [CommonModule, AsideComponent, FechaComponent],
  templateUrl: './cursos.html',
  styleUrl: './cursos.css'
})
export class CursosComponent implements OnInit {
titulo_cursos="Cursos Complementarios"
  private readonly productoSVC=inject(Service)
  public datos=toSignal(this.productoSVC.getDatos(), {initialValue:{}})
  ngOnInit(): void {
    this.productoSVC.getDatos().subscribe(data=>{
      //console.log('los datos recibidos del json ', data);
    })
  }

}
