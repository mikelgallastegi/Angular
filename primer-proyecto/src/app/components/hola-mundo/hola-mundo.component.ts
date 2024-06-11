import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hola-mundo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hola-mundo.component.html',
  styleUrl: './hola-mundo.component.css'
})
export class HolaMundoComponent {
  titulo : string = "Hola Mundo desde la ventana de mi habitación";
  color : string = "red";
  alumnos : string[] = ["Juan", "Pedro", "Maria", "Jose"];

  mostrarDiv : boolean = false;

  alternarDivs() {
    this.mostrarDiv = !this.mostrarDiv;
  }

  agregarAlumno(alumno : HTMLInputElement) {
    if (alumno.value.length > 0) {
      this.alumnos.push(alumno.value);
      alumno.value = "";
    } 
  }
}