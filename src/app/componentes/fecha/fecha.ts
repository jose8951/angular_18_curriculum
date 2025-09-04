import { DatePipe, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { signal } from '@angular/core';

@Component({
  selector: 'app-fecha',
  imports: [DatePipe],
  templateUrl: './fecha.html',
  styleUrl: './fecha.css'  
})
export class FechaComponent implements OnInit {
  //esto obtiene la fecha y hora actual
  currentDate = signal(new Date());
  intervalId: any;

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngOnInit(): void {
    // Solo ejecutar en el navegador, no en el servidor
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = setInterval(() => {
        this.currentDate.set(new Date());
      }, 1000);
    }
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
