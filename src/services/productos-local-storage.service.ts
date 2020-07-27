import { Injectable } from '@angular/core';
import {Producto} from '../../src/models/productos'

@Injectable({
  providedIn: 'root'
})
export class ProductosLocalStorageService {
  productosLocalStorage:Array<Producto>;

  constructor() { 
    this.productosLocalStorage = new Array<Producto>();
  }

  get productosEnLocalStorage(): Producto[] {
    let productosEnLocalStorage = JSON.parse(localStorage.getItem('productos'));
    return productosEnLocalStorage === null ? productosEnLocalStorage = new Array<Producto>() : productosEnLocalStorage;
  }

  guardarProductoNuevoEnLocalStorage(producto:Producto) {
    var productos = this.productosEnLocalStorage;
    productos.push(producto);
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  editarProductoEnLocalStorage(producto:Producto) {
    var productos = this.productosLocalStorage;
    productos.filter(productoLocal => producto.codigo == producto.codigo)
    .map(productoActualizar => {
      productoActualizar.codigo = producto.codigo
      productoActualizar.nombre = producto.nombre
      productoActualizar.descripcion = producto.descripcion
      productoActualizar.precio = producto.precio
    })
    localStorage.setItem("productos", JSON.stringify(productos));
  }

  obtenerProductoId(codigo:string){
    let productos = new Array<Producto>();
    productos = JSON.parse(localStorage.getItem('productos'));
    debugger
    return productos.filter(producto => producto.codigo === codigo )[0];
  }
}
