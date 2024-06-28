import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { PropNames, objectProps } from '../../utils/strong-type-props';
import { ContactoModel } from '../../models/contacto.model';
import Swal from 'sweetalert2';
import { ContactoService } from '../../services/contacto.service';
import { ContactoServiceInterface } from '../../services/contacto.service.interface';

@Component({
  selector: 'app-formulario-agregar',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './formulario-agregar.component.html',
  styleUrl: './formulario-agregar.component.css'
})
export class FormularioAgregarComponent {
  form : FormGroup;
  campos : PropNames<ContactoModel>;

  constructor(private formBuilder : FormBuilder, private service : ContactoServiceInterface, private router : Router){
    this.form = this.formBuilder.group({
      documento: ['', [Validators.required, Validators.minLength(1000000), Validators.maxLength(99999999)]],
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
      fechaNacimiento: [''],
      genero: ['']
    });

    this.campos = objectProps(this.form.value);
  }

  cambiarDatos() {
    //Setear un campo independiente
    //this.form.get('nombre')?.setValue('Juan');

    this.form.setValue({
      documento: 123456789,
      nombre: 'Juan',
      fechaNacimiento:  new Date().toISOString().split('T')[0],
      genero: 'Masculino'
    })
  }

  submitForm() {
    if (this.form.valid) {
      this.service.agregar(this.form.value).subscribe({
        next: () => {
          this.router.navigate(['']);
        }
      });

      /*Swal.fire({
        title: 'Datos del formulario',
        text: JSON.stringify(this.form.value),
        icon: 'info'
      })*/
    }
  }
}
