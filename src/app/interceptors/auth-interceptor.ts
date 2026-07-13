import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  // Obtener token
  const token = localStorage.getItem('token');

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
