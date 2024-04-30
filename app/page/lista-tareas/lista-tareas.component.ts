import { tareasInterface } from './../../core/interface/tareas.interface';
import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [TablaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css',
})
export class ListaTareasComponent implements OnInit {
  misTareas: tareasInterface[] = [];
  titulo: string = 'Lista de Tareas';
  columnas: string[] = [];
  informacion: any;
  tareaNueva: any;

  ngOnInit(): void {
    this.misTareas = [
      {
        nombre: 'Crear Interfaces proyecto XXXX',
        descripccion: 'esta es una descripcion de la tarea 1',
        plazo: new Date('2022-04-05'),
      },
      {
        nombre: 'Crear Interfaces proyecto XXXX',
        descripccion: 'esta es una descripcion de la tarea 2',
        plazo: new Date('2023-10-05'),
      },
      {
        nombre: 'Crear Interfaces proyecto XXXX',
        descripccion: 'esta es una descripcion de la tarea 3',
        plazo: new Date('2024-12-05'),
      },
    ];
    this.obtenerColumnas(this.misTareas);
  }

  obtenerColumnas(productos: tareasInterface[]) {
    if (productos.length > 0) {
      this.columnas = Object.keys(this.misTareas[0]);
    }
  }

  async crearTarea() {
    const { value: formValues } = await Swal.fire({
      title: 'Tarea Nueva',
      html: `<input id="nombre" class="form-control form-control-lg" type="text" placeholder="Ingrese el nombre de la tarea" >
            <input id="descripcion" class="form-control" type="text" placeholder="Descripcion de la tarea" >
            <input id="plazo" class="form-control form-control-sm" type="Date" placeholder="Plazo de la tarea" >`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById('nombre') as HTMLInputElement).value,
          (document.getElementById('descripcion') as HTMLInputElement).value,
          (document.getElementById('plazo') as HTMLInputElement).value,
        ];
      },
    });

    if (formValues) {

      const tarea:tareasInterface={
        nombre: formValues[0],
        descripccion:formValues[1],
        plazo: formValues[2]
      }
      // console.log(this.misTareas);
      this.misTareas.push(tarea)
      Swal.fire(JSON.stringify(formValues));
      console.log(JSON.stringify(formValues));
    }
  }
}
