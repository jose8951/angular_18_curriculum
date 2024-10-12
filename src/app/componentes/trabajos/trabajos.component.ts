import { Component, inject, OnInit } from '@angular/core'
import { FechaComponent } from '../fecha/fecha.component'
import { AsideComponent } from '../aside/aside.component'
import { CurriculumService } from '../../servicio/curriculum.service'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-trabajos',
  standalone: true,
  imports: [CommonModule, FechaComponent, AsideComponent],
  templateUrl: './trabajos.component.html',
  styleUrl: './trabajos.component.css',
})
export class TrabajosComponent implements OnInit {
  profesion = 'Experiencia Profesional.'

  private readonly productoSVC = inject(CurriculumService)

  trabajo$!: Observable<any>

  ngOnInit(): void {
    this.trabajo$ = this.productoSVC.getDatos()
  }
}
