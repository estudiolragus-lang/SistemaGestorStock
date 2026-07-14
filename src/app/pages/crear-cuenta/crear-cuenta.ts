import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, Validators, FormControl, FormGroup } from '@angular/forms';
import { Validation } from '../../shared/components/validation/validation';
import { UsuarioService } from '../../core/services/usuario-service';
import { UsuarioRequest } from '../../shared/models/requests/usuario.request';
import { Router } from '@angular/router'; 

interface FormUsuario {
  NombreCompleto: FormControl<string>;
  Gmail: FormControl<string>;
  PasswordHash: FormControl<string>;
}

@Component({
  selector: 'app-crear-cuenta',
  standalone: true,
  imports: [ReactiveFormsModule, Validation],
  templateUrl: './crear-cuenta.html',
  styleUrl: './crear-cuenta.scss',
  providers: [UsuarioService]
})
export class CrearCuenta {
  private usuarioService = inject(UsuarioService);
  private router = inject(Router); // 2. Inyectar Router correctamente

  form = signal<FormGroup<FormUsuario>>(
    new FormGroup<FormUsuario>({
      NombreCompleto: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.minLength(3)]
      }),
      Gmail: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      PasswordHash: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
    })
  );

  onSubmit() {
    if (this.form().invalid) {
      this.form().markAllAsTouched();
      return;
    }  

    const valuesUsuario: UsuarioRequest = {
      NombreCompleto: this.form().value.NombreCompleto!, 
      Gmail: this.form().value.Gmail!,
      PasswordHash: this.form().value.PasswordHash!,
    };

    this.usuarioService.add(valuesUsuario).subscribe({
        next: (response) => {
            console.log("¡Éxito! Usuario guardado:", response);
            this.form().reset();
            this.router.navigate(['/LoguearCuenta']);
        },
        error: (err) => {
            console.error("Error desde el servidor:", err);
        }
    });
  }
}