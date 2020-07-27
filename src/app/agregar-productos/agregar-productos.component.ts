import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductosLocalStorageService } from 'src/services/productos-local-storage.service';

@Component({
  selector: 'app-agregar-productos',
  templateUrl: './agregar-productos.component.html',
  styleUrls: ['./agregar-productos.component.scss']
})
export class AgregarProductosComponent implements OnInit {
  formulario:FormGroup;

  constructor(private productosLocalStorage: ProductosLocalStorageService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre:['', Validators.required],
      codigo:['', Validators.required],
      descripcion:['', Validators.required],
      precio:['', Validators.required]
    })
  }

  agregarProducto(){
    this.productosLocalStorage.guardarProductoNuevoEnLocalStorage(this.formulario.value);
    this.formulario.reset;
  }

}
