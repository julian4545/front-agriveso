import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GranjeroService } from 'app/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { EstadoInterface, GranjeroInterface } from 'app/interface';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @ViewChild(Component)
  formulario: FormGroup;
  data: any;
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  getData: any;
  nose: string;
  miObjeto: any = {};
  miObjeto1: any = {};
  loading = false;
  miArray: any[] = [];
  /// estado
  nombre: string;
  descripcion: string;
  estadoId: number;
  estadoActualizado: boolean = false;

  /// recolector
  recolectorId: number;
  nombre1: string;
  granjeroId: number;
  apellido: string;
  email: string;
  contrasena: string;



  constructor(
    private readonly _granjero: GranjeroService,
    private formBuilder: FormBuilder,
    private modal: NgbModal,

  ) { }

  ngOnInit(): void {
    //para recolector
    this._granjero.getData().subscribe(
      (result) => {
        this.data = result;
        console.log("Datos obtenidos :", this.data);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );

    //para recolector
    this._granjero.getDataRecolector().subscribe(
      (result) => {
        this.data1 = result;
        console.log("Datos obtenidos:", this.data1);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );







    //para detalle de recoleccion

    this._granjero.getDataDetalle().subscribe(
      (result) => {
        this.data2 = result;
        console.log("Datos obtenidos:", this.data2);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );

    // para recoleccion

    this._granjero.getDataRecoleccion().subscribe(
      (result) => {
        this.data3 = result;
        console.log("Datos obtenidos:", this.data3);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );






    //para estado 

    this._granjero.getDataEstado().subscribe(
      (result) => {
        this.data4 = result;
        console.log("Datos obtenidos:", this.data4);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );

    this.formulario = this.formBuilder.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required]
    });




  }









  // para granjero

  open(name: any, id: string) {
    this.modal.open(name);
    this._granjero.obtenerArrayPorId(id).subscribe((data: any) => {
      console.log('Datos obtenidos:', data);
      if (!Array.isArray(data) && typeof data === 'object') { // Verifica que 'data' sea un objeto
        this.miObjeto = data; // Asigna los datos al objeto 'miObjeto'
      } else {
        console.error('Se esperaba un objeto, pero se recibió:', data);
      }
    }, (error) => {
      console.error('Error al obtener los datos:', error);
    });
  }



  obtenerArrayPorId(id: string) {
    this._granjero.obtenerArrayPorId(id).subscribe(
      data => {
        console.log('Datos obtenidos:', data);
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          // Asumiendo que la respuesta es un objeto y no un arreglo
          this.miArray = data;
        } else {
          console.error('La respuesta no es un objeto:', data);
        }
      },
      error => {
        console.error('Error al obtener el objeto:', error);
      }
    );
  }


  actualizarGranjero() {
    this._granjero.actualizarGranjero(this.granjeroId, this.nombre, this.apellido, this.email, this.contrasena).subscribe(
      () => {
        this.estadoActualizado = true;
        console.log('Estado actualizado correctamente.');
      },
      error => {
        console.error('Error al actualizar estado:', error);
      }
    );
  }


  agregarGranjero() {
    this.loading = true;
    this._granjero.agregarGranjero(this.nombre, this.apellido, this.email, this.contrasena).subscribe(
      (response) => {
        console.log('Datos agregados con éxito', response);
        this.loading = false;
        // Aquí puedes manejar la respuesta como desees
      },
      (error) => {
        this.loading = false;
        console.error('Error al agregar datos', error);
        // Aquí puedes manejar el error como desees
      }
    );
  }


  eliminarRegistro3(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._granjero.eliminarGranjero(id).subscribe(
        () => {
          console.log('Registro eliminado con éxito');
          // Puedes realizar alguna acción adicional aquí si lo deseas, como actualizar la lista de estados.
        },
        (error) => {
          console.error('Error al eliminar registro', error);
          // Aquí puedes manejar el error si ocurre alguno durante el proceso de eliminación.
        }
      );
    }
  }









  //para recolector

  open1(recolector: any, id: string) {
    this.modal.open(recolector);
    this._granjero.obtenerArrayPorIdre(id).subscribe((data: any) => {
      console.log('Datos obtenidos:', data);
      if (!Array.isArray(data) && typeof data === 'object') { // Verifica que 'data' sea un objeto
        this.miObjeto1 = data; // Asigna los datos al objeto 'miObjeto'
      } else {
        console.error('Se esperaba un objeto, pero se recibió:', data);
      }
    }, (error) => {
      console.error('Error al obtener los datos:', error);
    });
  }

  obtenerArrayPorIdre(id: string) {
    this._granjero.obtenerArrayPorId(id).subscribe(
      data => {
        console.log('Datos obtenidos de recolector:', data);
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          // Asumiendo que la respuesta es un objeto y no un arreglo
          this.miArray = data;
        } else {
          console.error('La respuesta no es un objeto:', data);
        }
      },
      error => {
        console.error('Error al obtener el objeto:', error);
      }
    );
  }

  actualizarRecolector() {
    this._granjero.actualizarRecolector(this.recolectorId, this.granjeroId, this.nombre1, this.apellido).subscribe(
      () => {
        this.estadoActualizado = true;
        console.log('Estado actualizado correctamente.');
      },
      error => {
        console.error('Error al actualizar estado:', error);
      }
    );
  }


  agregarRecolector() {
    this.loading = true;
    this._granjero.crearRecolecto(this.granjeroId, this.nombre1, this.apellido).subscribe(
      (response) => {
        console.log('Datos agregados con éxito', response);
        this.loading = false;
        // Aquí puedes manejar la respuesta como desees
      },
      (error) => {
        this.loading = false;
        console.error('Error al agregar datos', error);
        // Aquí puedes manejar el error como desees
      }
    );
  }

  eliminarRegistro2(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._granjero.eliminarRecolector(id).subscribe(
        () => {
          console.log('Registro eliminado con éxito');
          // Puedes realizar alguna acción adicional aquí si lo deseas, como actualizar la lista de estados.
        },
        (error) => {
          console.error('Error al eliminar registro', error);
          // Aquí puedes manejar el error si ocurre alguno durante el proceso de eliminación.
        }
      );
    }
  }


  //















  // para estado

  open2(recolector: any, id: string) {
    this.modal.open(recolector);
    this._granjero.obtenerArrayPorIdes(id).subscribe((data: any) => {
      console.log('Datos obtenidos:', data);
      if (!Array.isArray(data) && typeof data === 'object') { // Verifica que 'data' sea un objeto
        this.miObjeto1 = data; // Asigna los datos al objeto 'miObjeto'
      } else {
        console.error('Se esperaba un objeto, pero se recibió:', data);
      }
    }, (error) => {
      console.error('Error al obtener los datos:', error);
    });
  }



  obtenerArrayPorIdes(id: string) {
    this._granjero.obtenerArrayPorIdes(id).subscribe(
      data => {
        console.log('Datos obtenidos de recolector:', data);
        if (data && typeof data === 'object' && !Array.isArray(data)) {
          // Asumiendo que la respuesta es un objeto y no un arreglo
          this.miArray = data;
        } else {
          console.error('La respuesta no es un objeto:', data);
        }
      },
      error => {
        console.error('Error al obtener el objeto:', error);
      }
    );
  }

  opensolo(name1: any,) {
    this.modal.open(name1);
  }

  opensolo1(name1: any,) {
    this.modal.open(name1);
  }


  opensolo2(name1: any,) {
    this.modal.open(name1);
  }

  agregarEstado() {
    this.loading = true;
    this._granjero.crearestado(this.nombre, this.descripcion).subscribe(
      (response) => {
        console.log('Datos agregados con éxito', response);
        this.loading = false;
        // Aquí puedes manejar la respuesta como desees
      },
      (error) => {
        this.loading = false;
        console.error('Error al agregar datos', error);
        // Aquí puedes manejar el error como desees
      }
    );
  }

 
  eliminarRegistro1(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._granjero.eliminarEstado(id).subscribe(
        () => {
          console.log('Registro eliminado con éxito');
          // Puedes realizar alguna acción adicional aquí si lo deseas, como actualizar la lista de estados.
        },
        (error) => {
          console.error('Error al eliminar registro', error);
          // Aquí puedes manejar el error si ocurre alguno durante el proceso de eliminación.
        }
      );
    }
  }


  actualizarEstado() {
    this._granjero.actualizarEstado(this.estadoId, this.nombre, this.descripcion).subscribe(
      () => {
        this.estadoActualizado = true;
        console.log('Estado actualizado correctamente.');
      },
      error => {
        console.error('Error al actualizar estado:', error);
      }
    );
  }

}