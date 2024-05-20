import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GranjeroService {


  private apiURLGranjero = `${environment.apiUrl}/Granjero`;
  private apiURLRecolector = `${environment.apiUrl}/Recolector`;
  private apiURLDetalle = `${environment.apiUrl}/DetalleRecolector`;
  private apiURLRecoleccion = `${environment.apiUrl}/Recoleccion`;
  private apiURLEstado = `${environment.apiUrl}/Estado`;

  constructor(private readonly http: HttpClient) { }


  //servicios para granjero
  getData(): Observable<any> {
    return this.http.get(this.apiURLGranjero);
  }



  obtenerArrayPorId(id: string) {
    return this.http.get<any>(`${this.apiURLGranjero}/${id}`);
  }


  agregarGranjero(nombre: string, apellido: string,email: string, contraseña:string ): Observable<any> {
    const url = `${this.apiURLGranjero}?nombre=${nombre}&apellido=${apellido}&email=${email}&contraseña=${contraseña}`;
    return this.http.post(url, {}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Error en la solicitud HTTP. Consulta la consola para más detalles.');
      })
    );
  }

  actualizarGranjero(id: number,nombre: string, apellido: string,email: string, contraseña:string): Observable<any> {
    const url = `${this.apiURLGranjero}/${id}?nombre=${nombre}&apellido=${apellido}&email=${email}&contraseña=${contraseña}`;
    return this.http.put(url, {}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error en la solicitud HTTP.';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Código de error: ${error.status}, mensaje: ${error.error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  eliminarGranjero(id: string): Observable<any> {
    const url = `${this.apiURLGranjero}/${id}`;
    return this.http.delete(url).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error en la solicitud HTTP.';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Código de error: ${error.status}, mensaje: ${error.error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }




  //servicios para recolector

  getDataRecolector(): Observable<any> {
    return this.http.get(this.apiURLRecolector);
  }

  obtenerArrayPorIdre(id: string) {
    return this.http.get<any>(`${this.apiURLRecolector}/${id}`);
  }

  crearRecolecto(granjeroId: number,nombre: string, apellido: string): Observable<any> {
    const url = `${this.apiURLRecolector}?granjeroId=${granjeroId}&nombre=${nombre}&apellido=${apellido}`;
    return this.http.post(url, {}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Error en la solicitud HTTP. Consulta la consola para más detalles.');
      })
    );
  }

  actualizarRecolector(id: number,granjeroId: number, nombre: string, apellido: string): Observable<any> {
    const url = `${this.apiURLRecolector}/${id}?granjeroId=${granjeroId}&nombre=${nombre}&apellido=${apellido}`;
    return this.http.put(url, {}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error en la solicitud HTTP.';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Código de error: ${error.status}, mensaje: ${error.error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  eliminarRecolector(id: string): Observable<any> {
    const url = `${this.apiURLRecolector}/${id}`;
    return this.http.delete(url).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error en la solicitud HTTP.';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Código de error: ${error.status}, mensaje: ${error.error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }


  //servicios para detalle recoleccion

  getDataDetalle(): Observable<any> {
    return this.http.get(this.apiURLDetalle);
  }

  //servicios para  recoleccion
  getDataRecoleccion(): Observable<any> {
    return this.http.get(this.apiURLRecoleccion);
  }

  
  //servicios para estado 

  getDataEstado(): Observable<any> {
    return this.http.get(this.apiURLEstado);
  }
  obtenerArrayPorIdes(id: string) {
    return this.http.get<any>(`${this.apiURLEstado}/${id}`);
  }


  crearestado(nombre: string, descripcion: string): Observable<any> {
    const url = `${this.apiURLEstado}?nombre=${nombre}&descripcion=${descripcion}`;
    return this.http.post(url, {}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Error en la solicitud HTTP. Consulta la consola para más detalles.');
      })
    );
  }

  actualizarEstado(id: number, nombre: string, descripcion: string): Observable<any> {
    const url = `${this.apiURLEstado}/${id}?nombre=${nombre}&descripcion=${descripcion}`;
    return this.http.put(url, {}).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error en la solicitud HTTP.';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Código de error: ${error.status}, mensaje: ${error.error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }


  eliminarEstado(id: string): Observable<any> {
    const url = `${this.apiURLEstado}/${id}`;
    return this.http.delete(url).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = 'Error en la solicitud HTTP.';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Código de error: ${error.status}, mensaje: ${error.error.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }

  

}
