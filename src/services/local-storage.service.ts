import { Injectable } from '@angular/core';
import { Cliente } from 'src/models/clientes';
import { Producto } from 'src/models/productos';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  get clientesEnLocalStorage(): Cliente[] {
    let clientesEnLocalStorage = JSON.parse(localStorage.getItem('clientes'));
    return clientesEnLocalStorage === null ? clientesEnLocalStorage = new Array<Cliente>() : clientesEnLocalStorage;
  }

  guardarClienteNuevoEnLocalStorage(cliente:Cliente) {
    var clientes = this.clientesEnLocalStorage;
    clientes.filter(clienteLocal => clienteLocal.id == cliente.id)
    .map(clienteActualizar => {
      clienteActualizar.id = cliente.id
      clienteActualizar.nombre = cliente.nombre
      clienteActualizar.apellido = cliente.apellido
      clienteActualizar.direccion = cliente.direccion
    })
    debugger
    clientes.push(cliente);
    debugger
    localStorage.setItem("clientes", JSON.stringify(clientes));
  }

  obtenerClienteId(id:string){
    let clientes = new Array<Cliente>();
    clientes = JSON.parse(localStorage.getItem('clientes'));
    debugger
    return clientes.filter(cliente => cliente.id === id )[0];
  }

  get productosEnLocalStorage(): Producto[] {
    let productosEnLocalStorage = JSON.parse(localStorage.getItem('productos'));
    return productosEnLocalStorage === null ? productosEnLocalStorage = new Array<Cliente>() : productosEnLocalStorage;
  }
}
