import { Component, OnInit } from '@angular/core';
import {Producto} from '../../models/productos';
import { ProductosLocalStorageService } from 'src/services/productos-local-storage.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  productos:Array<Producto>;

  constructor(private productosLocalStorage:ProductosLocalStorageService) { }

  ngOnInit(): void {
    debugger
    this.productos = this.productosLocalStorage.productosEnLocalStorage;
    debugger
  }

}
