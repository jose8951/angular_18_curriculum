import { Component, inject, OnInit } from '@angular/core'
import { AsideComponent } from '../aside/aside.component'
import { FechaComponent } from '../fecha/fecha.component'
import { CommonModule } from '@angular/common'
import { CurriculumService } from '../../servicio/curriculum.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-otros',
  standalone: true,
  imports: [AsideComponent, FechaComponent, CommonModule],
  templateUrl: './otros.component.html',
  styleUrl: './otros.component.css',
})
export class OtrosComponent implements OnInit {
  titulotros = 'Datos de interés'
  private readonly productoSVC = inject(CurriculumService)
  otros$!: Observable<any>

  ngOnInit(): void {
    this.otros$ = this.productoSVC.getDatos()
  }
}
