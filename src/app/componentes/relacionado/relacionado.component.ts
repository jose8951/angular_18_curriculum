import { Component, inject, OnInit } from '@angular/core'
import { FechaComponent } from '../fecha/fecha.component'
import { AsideComponent } from '../aside/aside.component'
import { CurriculumService } from '../../servicio/curriculum.service'
import { Observable } from 'rxjs'
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-relacionado',
  standalone: true,
  imports: [CommonModule, FechaComponent, AsideComponent],
  templateUrl: './relacionado.component.html',
  styleUrl: './relacionado.component.css',
})
export class RelacionadoComponent implements OnInit {
  informatica = 'Informática'
  informatica$!: Observable<any>
  private readonly productoSVC = inject(CurriculumService)

  ngOnInit(): void {
    this.informatica$ = this.productoSVC.getDatos()
  }
}
