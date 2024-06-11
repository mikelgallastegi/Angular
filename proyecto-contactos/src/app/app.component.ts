import { Component } from '@angular/core';
import { ListadoContactosComponent } from './components/listado-contactos/listado-contactos.component';
import { MenuComponent } from './components/menu/menu.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListadoContactosComponent, MenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-contactos';
}
