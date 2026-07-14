import { Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 
import { UsuarioService } from '../../../core/services/usuario-service';

@Component({
  selector: 'app-vincular-empresa',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './vincular-empresa.html'
})
export class VincularEmpresa {
  private usuarioService = inject(UsuarioService);
  private router = inject(Router); 

  cargando = signal<boolean>(false);

  form = new FormGroup({
    CodigoUnico: new FormControl('', [Validators.required]) 
  });

  mensaje = signal<string>('');

  vincular() {
    
    if (this.form.invalid) return;

    this.cargando.set(true);
    const codigo = this.form.value.CodigoUnico!;
    console.log(codigo);

    alert("ANTES DE LLAMAR AL SERVICIO DE USUARIO")

    this.usuarioService.vincularUsuarioAEmpresa(codigo).subscribe({
      next: () => {
        this.mensaje.set("¡Vinculación exitosa! Redirigiendo...");
        setTimeout(() => {
          this.router.navigate(['/Dashboard']); 
        }, 1500);
      },
      error: (err) => {
        this.cargando.set(false);
        this.mensaje.set("Código incorrecto o empresa no encontrada.");
      }
    });
  }
}