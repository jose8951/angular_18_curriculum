import { Component, inject } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curriculum-angular18'; 

 // private readonly productSVC=inject(CurriculumService)
 // products$=this.productSVC.getAllProducts()

 //mostrar_titulos:any= datos.

}
