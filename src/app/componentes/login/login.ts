import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CREDENCIALES } from '../../config/credenciales';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  clave: string = '';
  error: string = '';
  mostrarClave: boolean = false;
  recordar: boolean = false;

  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const recordado = localStorage.getItem('usuarioRecordado');
      if (recordado) {
        this.usuario = recordado;
        this.recordar = true;
      }
    }
  }

  toggleClave() {
    this.mostrarClave = !this.mostrarClave;
  }

  onLogin() {
    if (
      this.usuario === CREDENCIALES.usuario &&
      this.clave === CREDENCIALES.clave
    ) {
      localStorage.setItem('usuarioAutenticado', 'true');
      if (this.recordar) {
        localStorage.setItem('usuarioRecordado', this.usuario);
      } else {
        localStorage.removeItem('usuarioRecordado');
      }
      this.error = '';
      this.router.navigate(['/titulos']);
    } else {
      this.error = 'usuario o contraseña incorrecto';
    }
  }
}
