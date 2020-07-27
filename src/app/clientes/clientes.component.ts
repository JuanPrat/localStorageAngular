import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/clientes';
import { Producto } from '../../models/productos'; 
import { LocalStorageService } from 'src/services/clientes-local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Array<Cliente> = new Array<Cliente>();
  productos: Array<Producto> = new Array<Producto>();

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.clientes = this.localStorageService.clientesEnLocalStorage;
  }

  buscarCliente(event) {
    this.clientes = this.localStorageService.clientesEnLocalStorage
    .filter(cliente => {
      return cliente.nombre
      .toLocaleLowerCase()
      .includes(event.target.value) 
      ||
      cliente.id
      .toLocaleLowerCase()
      .includes(event.target.value)
      ||
      cliente.apellido
      .toLocaleLowerCase()
      .includes(event.target.value)
      ||
      cliente.direccion
      .toLocaleLowerCase()
      .includes(event.target.value)
     });
  }

  eliminarClientes() {
    localStorage.removeItem('clientes')
    this.reiniciarArregloClientes()
  }


  reiniciarArregloClientes() {
    this.clientes = new Array<Cliente>()
  }

  reiniciarArregloProductos() {
    this.productos = new Array<Producto>()
  }



}
