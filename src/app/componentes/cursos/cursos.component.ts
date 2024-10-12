import { Component, inject, OnInit } from '@angular/core'
import { FechaComponent } from '../fecha/fecha.component'
import { AsideComponent } from '../aside/aside.component'
import { CommonModule } from '@angular/common'
import { CurriculumService } from '../../servicio/curriculum.service'
import { Observable } from 'rxjs'

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [CommonModule, FechaComponent, AsideComponent],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css',
})
export class CursosComponent implements OnInit {
  curso = 'Formación Complementaria'
  private readonly productoSVC = inject(CurriculumService)
  curso$!: Observable<any>
  ngOnInit(): void {
    this.curso$ = this.productoSVC.getDatos()
  }
}
