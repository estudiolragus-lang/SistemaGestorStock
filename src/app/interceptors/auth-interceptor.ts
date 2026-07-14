import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Obtener token
  const token = localStorage.getItem('token');

  console.log('--- INTERCEPTOR ---');
  console.log('Ruta solicitada:', req.url);
  console.log('¿Hay token guardado?:', !!token);
  console.log('Token obtenido:', token);

  // Si existe token
  if (token) {

    // Clonamos request y agregamos headers
    const clonedRequest = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });

    return next(clonedRequest);
  }

  // Si no hay token
  return next(req);
};
