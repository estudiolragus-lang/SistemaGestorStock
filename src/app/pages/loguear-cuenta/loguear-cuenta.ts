import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

import { LoginResponse } from '../../shared/models/response/login.response';
import { UsuarioService } from '../../core/services/usuario-service';

@Component({
  selector: 'app-loguear-cuenta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './loguear-cuenta.html',
  styleUrl: './loguear-cuenta.scss',
})
export class LoguearCuenta {
  private usuarioService = inject(UsuarioService);
  private router = inject(Router);
  form = signal(
    new FormGroup({
      NombreCompleto: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      }),
      Gmail: new FormControl('', { // <-- REQUERIDO
        nonNullable: true,
        validators: [Validators.required, Validators.email]
      }),
      PasswordHash: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required]
      })
    })
  );

  onSubmit() {
    if (this.form().invalid) {
      this.form().markAllAsTouched();
      return;
    }
    this.usuarioService.login({
      NombreCompleto: this.form().value.NombreCompleto!,
      Gmail: this.form().value.Gmail!,
      PasswordHash: this.form().value.PasswordHash!
    })
    .subscribe({
      next: (response: LoginResponse) => {
        localStorage.setItem('token', response.Token);
        alert('Usuario logueado :3, Lo redirigiremos a pagina Para vincularse a la empresa...');
        this.router.navigateByUrl('/VincularEmpresa'); 
      },
      error: (error: HttpErrorResponse) => {
        console.error('Error completo:', error);
        let mensajeCerrado = "Error al iniciar sesión";

        if (typeof error.error === 'string') {
          mensajeCerrado = error.error;
        } else if (error.error?.Message) {
          mensajeCerrado = "Error del servidor: Verifique los datos ingresados";
        }

        alert(mensajeCerrado);
      }
    });
  }
}