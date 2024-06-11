import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContactoModel } from '../../models/contacts.model';
import { ContactoService } from '../../services/contacto.service';

@Component({
  selector: 'app-listado-contactos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listado-contactos.component.html',
  styleUrl: './listado-contactos.component.css'
})
export class ListadoContactosComponent {

  contactos: ContactoModel[] = [];

  constructor(private service: ContactoService) { }

  ngOnInit(): void {
    this.service.obtenerContactos()
     .subscribe(contactos => {
        this.contactos = contactos;
      });
  }

}
