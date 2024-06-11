import { Routes } from '@angular/router';
import { ListadoContactosComponent } from './components/listado-contactos/listado-contactos.component';
import { MenuComponent } from './components/menu/menu.component';

export const routes: Routes = [
    { path: "", component: MenuComponent },
    { path: "listado-contactos", component: ListadoContactosComponent }
];
