import { Component, inject, OnInit } from '@angular/core';
import { Service } from '../../servicios/service';
import { toSignal } from '@angular/core/rxjs-interop';
import { FechaComponent } from '../fecha/fecha';
import { AsideComponent } from '../aside/aside';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-informatica',
  imports: [CommonModule, FechaComponent, AsideComponent],
  templateUrl: './informatica.html',
  styleUrl: './informatica.css'
})
export class InformaticaComponent implements OnInit {

  informatica='Informática'
  informatica$!:Observable<any>

  private readonly productoSVC=inject(Service);
  public datos= toSignal(this.productoSVC.getDatos(),{initialValue:{}});

  ngOnInit(): void {
   this.informatica$=this.productoSVC.getDatos()
   }
  }


