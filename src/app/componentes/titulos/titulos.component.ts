import { Component, inject, OnInit } from '@angular/core'
import { CurriculumService } from '../../servicio/curriculum.service'
import { CommonModule } from '@angular/common'
import { Observable } from 'rxjs'
import { AsideComponent } from '../aside/aside.component'
import { FechaComponent } from '../fecha/fecha.component'

@Component({
  selector: 'app-titulos',
  standalone: true,
  imports: [CommonModule, AsideComponent, FechaComponent],
  templateUrl: './titulos.component.html',
  styleUrl: './titulos.component.css',
})
export class TitulosComponent implements OnInit {
  private readonly productoSVC = inject(CurriculumService)
  titulo$!: Observable<any>

  ngOnInit(): void {
    this.titulo$ = this.productoSVC.getDatos()
  }
}
