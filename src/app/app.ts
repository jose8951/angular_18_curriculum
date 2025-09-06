import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, FormsModule,RouterLinkActive ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected title = 'Curriculum Vitae';
  constructor(public router: Router) {}

  mostrarMenu(): boolean {
    const isBrowser=typeof window !=='undefined' && typeof window.localStorage !=='undefined';
    const autenticado=isBrowser && localStorage.getItem('usuarioAutenticado')==='true';
    const noEsLogin=this.router.url!=='/login';
    return autenticado && noEsLogin;
  }

  cerrarSesion() {
    localStorage.removeItem('usuarioAutenticado');
    this.router.navigate(['login']);
  }
}
