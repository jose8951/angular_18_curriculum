import { DatePipe, isPlatformBrowser } from '@angular/common'
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core'

@Component({
  selector: 'app-fecha',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './fecha.component.html',
  styleUrl: './fecha.component.css',
})
export class FechaComponent implements OnInit {
  //esto obtiene la fecha y hora actual
  currentDate: Date = new Date()
  intervalId: any

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    // Solo ejecutar en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.currentDate = new Date()
      }, 1000)
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {clearInterval(this.intervalId) }
  }
}
