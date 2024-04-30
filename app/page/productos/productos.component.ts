import { Component, OnInit } from '@angular/core';
import { TablaComponent } from '../../components/tabla/tabla.component';
import { ProductoInterface } from '../../core/interface/producto.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productos',
  standalone: true,
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css',
  imports: [TablaComponent],
})
export class ProductosComponent implements OnInit {
  misProductos: ProductoInterface[] = [];
  titulo: string = 'Lista de Productos';
  columnas: string[] = [];
  informacion: any;

  ngOnInit(): void {
    this.misProductos = [
      {
        nombre: 'Pantalon',
        sku: 'P8795',
        cantidad: 15,
        precio: 45000,
      },
      {
        nombre: 'Chaqueta',
        sku: 'Ch4795',
        cantidad: 51,
        precio: 10000,
      },
      {
        nombre: 'Camisas',
        sku: 'Ca744',
        cantidad: 41,
        precio: 39900,
      },
    ];

    this.obtenerColumnas(this.misProductos);
  }

  obtenerColumnas(productos: ProductoInterface[]) {
    if (productos.length > 0) {
      this.columnas = Object.keys(productos[0]);
    }
  }

  recibirInformacion(data: any) {
    this.informacion = data;
    //Aqui va el modal
    Swal.fire({
      title: `Producto # ${data.sku} `,
      icon: 'success',
      html: `<div class="container">
  <table class="table">
    <tbody>
      <tr>
        <th>Nombre:</th>
        <td>${data.nombre}</td>
      </tr>
      <tr>
        <th>Sku:</th>
        <td>${data.sku}</td>
      </tr>
      <tr>
        <th>Cantidad:</th>
        <td>${data.cantidad}</td>
      </tr>
      <tr>
        <th>Precio:</th>
        <td>${data.precio}</td>
      </tr>
    </tbody>
  </table>`,
    });

    console.log('Componente padre', this.informacion);
  }
}
