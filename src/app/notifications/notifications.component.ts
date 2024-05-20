import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RecolectorService } from 'app/services';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  @ViewChild(Component)
  formulario: FormGroup;
  data: any;
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;
  getData: any;
  nose: string;
  miObjeto: any = {};
  miObjeto1: any = {};
  loading = false;
  miArray: any[] = [];
  estadoActualizado: boolean = false;


  /// recolector
  recolectorId: number;
  nombre1: string;
  granjeroId: number;
  apellido: string;
  email: string;
  contrasena: string;


  // residuo
  residuoId: number;
  nombre: string;
  descripcion: string;
  tipoResiduoId: number;
  estadoId: number;

  // tipo residuo   
  nombre2: string;
  descripcion1: string;

  //para detalle 

  detalleRecolectorId: number;
  recoleccionId: number;
  cantidad: string;


  descripcion21: string;
  fecha: Date; 


  constructor(
    private readonly _reco: RecolectorService,
    private formBuilder: FormBuilder,
    private modal: NgbModal,

  ) { }

  ngOnInit(): void {


    //para recolector
    this._reco.getDataRecolector().subscribe(
      (result) => {
        this.data1 = result;
        console.log("Datos obtenidos:", this.data1);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );

    //para residuo
    this._reco.getDataResiduo().subscribe(
      (result) => {
        this.data2 = result;
        console.log("Datos obtenidos de residuo:", this.data2);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );

    //para tipo residuo
    this._reco.getDataTipoResiduo().subscribe(
      (result) => {
        this.data3 = result;
        console.log("Datos obtenidos de residuo:", this.data3);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );


    // para detalle 

    this._reco.getDataDetalle().subscribe(
      (result) => {
        this.data4 = result;
        console.log("Datos obtenidos de residuo:", this.data4);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );

     // para recoleccion 

    this._reco.getDataRecoleccion().subscribe(
      (result) => {
        this.data5 = result;
        console.log("Datos obtenidos de residuo:", this.data5);
      },
      (error) => {
        console.error("Error al obtener datos:", error);
      }
    );

  }


  //para recolector 

  opensolo1(name1: any,) {
    this.modal.open(name1);
  }

  eliminarRegistro2(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._reco.eliminarRecolector(id).subscribe(
        () => {
          console.log('Registro eliminado con éxito');

        },
        (error) => {
          console.error('Error al eliminar registro', error);

        }
      );
    }
  }

  open1(recolector: any, id: string) {
    this.modal.open(recolector);
    this._reco.obtenerArrayPorIdre(id).subscribe((data: any) => {
      console.log('Datos obtenidos:', data);
      if (!Array.isArray(data) && typeof data === 'object') { 
        this.miObjeto1 = data; 
      } else {
        console.error('Se esperaba un objeto, pero se recibió:', data);
      }
    }, (error) => {
      console.error('Error al obtener los datos:', error);
    });
  }

  actualizarRecolector() {
    this._reco.actualizarRecolector(this.recolectorId, this.granjeroId, this.nombre1, this.apellido).subscribe(
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
    this._reco.crearRecolecto(this.granjeroId, this.nombre1, this.apellido).subscribe(
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


  //para residuo

  opensolo2(name1: any,) {
    this.modal.open(name1);
  }

  eliminarRegistro3(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._reco.eliminarResiduo(id).subscribe(
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

  open2(recolector: any, id: string) {
    this.modal.open(recolector);
    this._reco.obtenerArrayResiduo(id).subscribe((data: any) => {
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


  agregarResiduo() {
    this.loading = true;
    this._reco.crearResiduo( this.tipoResiduoId, this.estadoId,this.nombre, this.descripcion).subscribe(
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

  
  actualizarResiduo() {
    this._reco.actualizarResiduo(this.residuoId, this.tipoResiduoId, this.estadoId,this.nombre, this.descripcion).subscribe(
      () => {
        this.estadoActualizado = true;
        console.log('Estado actualizado correctamente.');
      },
      error => {
        console.error('Error al actualizar estado:', error);
      }
    );
  }


    //para  tipo residuo

    opensolo3(name1: any,) {
      this.modal.open(name1);
    }
  
    eliminarRegistro4(id: string) {
      const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
      if (confirmacion) {
        this._reco.eliminarTipoResiduo(id).subscribe(
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
  
    open3(recolector: any, id: string) {
      this.modal.open(recolector);
      this._reco.obtenerArrayTipoResiduo(id).subscribe((data: any) => {
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
  
  
    agregarTipoResiduo() {
      this.loading = true;
      this._reco.crearTipoResiduo( this.nombre2, this.descripcion1).subscribe(
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
  
    
    actualizarTipoResiduo() {
      this._reco.actualizarTipoResiduo(this.tipoResiduoId, this.nombre, this.descripcion).subscribe(
        () => {
          this.estadoActualizado = true;
          console.log('Estado actualizado correctamente.');
        },
        error => {
          console.error('Error al actualizar estado:', error);
        }
      );
    }
  

    // para detalle 


    opensolo4(name1: any,) {
      this.modal.open(name1);
    }


    agregarDetalle() {
      this.loading = true;
      this._reco.crearDetalle( this.recoleccionId, this.residuoId, this.cantidad).subscribe(
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
  
    eliminarRegistro5(id: string) {
      const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
      if (confirmacion) {
        this._reco.eliminarDetalle(id).subscribe(
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
  
    open4(recolector: any, id: string) {
      this.modal.open(recolector);
      this._reco.obtenerArraydetalle(id).subscribe((data: any) => {
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
  
    actualizarDetalle() {
      this._reco.actualizarDetalle(this.detalleRecolectorId, this.recoleccionId, this.residuoId, this.cantidad).subscribe(
        () => {
          this.estadoActualizado = true;
          console.log('Estado actualizado correctamente.');
        },
        error => {
          console.error('Error al actualizar estado:', error);
        }
      );
    }
  
  // para recoleccion


  opensolo5(name1: any,) {
    this.modal.open(name1);
  }


  agregarRecoleccion() {
    this.loading = true;
    this._reco.crearRecoleccion( this.recolectorId, this.fecha, this.descripcion21).subscribe(
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

  eliminarRegistro6(id: string) {
    const confirmacion = window.confirm('¿Estás seguro de que deseas eliminar este registro?');
    if (confirmacion) {
      this._reco.eliminarRecoleccion(id).subscribe(
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

  open5(recolector: any, id: string) {
    this.modal.open(recolector);
    this._reco.obtenerArrayRecoleccion(id).subscribe((data: any) => {
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

  actualizarRecoleccion() {
    this._reco.actualizarRecoleccion(this.recoleccionId, this.recolectorId, this.fecha, this.descripcion21).subscribe(
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

