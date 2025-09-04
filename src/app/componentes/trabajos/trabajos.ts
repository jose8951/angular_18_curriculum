import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../../servicios/service';
import { toSignal } from '@angular/core/rxjs-interop';
import { AsideComponent } from "../aside/aside";
import { FechaComponent } from "../fecha/fecha";

@Component({
  selector: 'app-trabajos',
  imports: [AsideComponent, AsideComponent, FechaComponent],
  templateUrl: './trabajos.html',
  styleUrl: './trabajos.css'
})
export class TrabajosComponent implements OnInit {
  private readonly productoSVC=inject(Service);
  titulo_trabajos="Experiencia Profesional"

  public datos=toSignal(this.productoSVC.getDatos(),{initialValue:{}});

  ngOnInit(): void {
    this.productoSVC.getDatos().subscribe(data=>{
      //console.log('los datos recibidos del json ', data);
    })
  }

}
