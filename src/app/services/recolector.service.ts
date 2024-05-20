import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecolectorService {


  private apiURLRecolector = `${environment.apiUrl}/Recolector`;
  private apiURLDetalle = `${environment.apiUrl}/DetalleRecolector`;
  private apiURLRecoleccion = `${environment.apiUrl}/Recoleccion`;
  private apiURLResiduo = `${environment.apiUrl}/Residuo`;
  private apiURLTipoResiduo = `${environment.apiUrl}/TipoResiduo`;

  constructor(private readonly http: HttpClient) { }
  
  //////////////////////////////// RECOLECTOR

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








  //////////////////////////////// DETALLE RECOLECTOR 



  getDataDetalle(): Observable<any> {
    return this.http.get(this.apiURLDetalle);
  }

  obtenerArraydetalle(id: string) {
    return this.http.get<any>(`${this.apiURLDetalle}/${id}`);
  }

  crearDetalle(recoleccionId: number,residuoId: number, cantidad: string): Observable<any> {
    const url = `${this.apiURLDetalle}?recoleccionId=${recoleccionId}&residuoId=${residuoId}&cantidad=${cantidad}`;
    return this.http.post(url, {}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Error en la solicitud HTTP. Consulta la consola para más detalles.');
      })
    );
  }

  actualizarDetalle(detalleRecolectorId: number,recoleccionId: number,residuoId: number, cantidad: string): Observable<any> {
    const url = `${this.apiURLDetalle}/${detalleRecolectorId}?recoleccionId=${recoleccionId}&residuoId=${residuoId}&cantidad=${cantidad}`;
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

  eliminarDetalle(id: string): Observable<any> {
    const url = `${this.apiURLDetalle}/${id}`;
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












  //////////////////////////////// RECOLECCION




    


  getDataRecoleccion(): Observable<any> {
    return this.http.get(this.apiURLRecoleccion);
  }

  obtenerArrayRecoleccion(id: string) {
    return this.http.get<any>(`${this.apiURLRecoleccion}/${id}`);
  }

  crearRecoleccion(recolectorId: number,fecha: Date, descripcion: string): Observable<any> {
    const url = `${this.apiURLRecoleccion}?recolectorId=${recolectorId}&fecha=${fecha}&descripcion=${descripcion}`;
    return this.http.post(url, {}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Error en la solicitud HTTP. Consulta la consola para más detalles.');
      })
    );
  }

  actualizarRecoleccion(recoleccionId:number, recolectorId: number,fecha: Date, descripcion: string): Observable<any> {
    const url = `${this.apiURLRecoleccion}/${recoleccionId}?recolectorId=${recolectorId}&fecha=${fecha}&descripcion=${descripcion}`;
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

  eliminarRecoleccion(id: string): Observable<any> {
    const url = `${this.apiURLRecoleccion}/${id}`;
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











  //////////////////////////////// RESIDUO

  getDataResiduo(): Observable<any> {
    return this.http.get(this.apiURLResiduo);
  }

  obtenerArrayResiduo(id: string) {
    return this.http.get<any>(`${this.apiURLResiduo}/${id}`);
  }

  crearResiduo(tipoResiduoId: number,estadoId: number,nombre: string, descripcion: string): Observable<any> {
    const url = `${this.apiURLResiduo}?nombre=${nombre}&descripcion=${descripcion}&tipoResiduoId=${tipoResiduoId}&estadoId=${estadoId}`;
    return this.http.post(url, {}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Error en la solicitud HTTP. Consulta la consola para más detalles.');
      })
    );
  }

  actualizarResiduo(residuoId: number,tipoResiduoId: number,estadoId: number, nombre: string, descripcion: string): Observable<any> {
    const url = `${this.apiURLResiduo}/${residuoId}?nombre=${nombre}&descripcion=${descripcion}&tipoResiduoId=${tipoResiduoId}&estadoId=${estadoId}`;
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

  eliminarResiduo(id: string): Observable<any> {
    const url = `${this.apiURLResiduo}/${id}`;
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



  //////////////////////////////// TIPO DE RESIDUO

  getDataTipoResiduo(): Observable<any> {
    return this.http.get(this.apiURLTipoResiduo);
  }

  obtenerArrayTipoResiduo(id: string) {
    return this.http.get<any>(`${this.apiURLTipoResiduo}/${id}`);
  }

  crearTipoResiduo(nombre: string, descripcion: string): Observable<any> {
    const url = `${this.apiURLTipoResiduo}?nombre=${nombre}&descripcion=${descripcion}`;
    return this.http.post(url, {}).pipe(
      catchError(error => {
        console.error('Error en la solicitud HTTP:', error);
        return throwError('Error en la solicitud HTTP. Consulta la consola para más detalles.');
      })
    );
  }

  actualizarTipoResiduo(tipoResiduoId: number, nombre: string, descripcion: string): Observable<any> {
    const url = `${this.apiURLTipoResiduo}/${tipoResiduoId}?nombre=${nombre}&descripcion=${descripcion}`;
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

  eliminarTipoResiduo(id: string): Observable<any> {
    const url = `${this.apiURLTipoResiduo}/${id}`;
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



