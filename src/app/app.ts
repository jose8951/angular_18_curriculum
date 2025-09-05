import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'curriculum';
  constructor(public router: Router) {}

  mostrarMenu(): boolean {
    const isBrowser=typeof window !=='undefined' && typeof window.localStorage !=='undefined';
    return isBrowser && localStorage.getItem('usuarioAutenticado') === 'true';
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioAutenticado');
    this.router.navigate(['login']);
  }
}
