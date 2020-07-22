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

  get productosEnLocalStorage(): Producto[] {
    let productosEnLocalStorage = JSON.parse(localStorage.getItem('productos'));
    return productosEnLocalStorage === null ? productosEnLocalStorage = new Array<Cliente>() : productosEnLocalStorage;
  }
}
