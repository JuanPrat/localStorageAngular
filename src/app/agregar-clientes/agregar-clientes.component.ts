import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from 'src/models/clientes';
import { LocalStorageService } from 'src/services/local-storage.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agregar-clientes',
  templateUrl: './agregar-clientes.component.html',
  styleUrls: ['./agregar-clientes.component.scss']
})
export class AgregarClientesComponent implements OnInit {
  formulario:FormGroup;
  clientesLocalHost:Array<Cliente>;
  editarClienteFlag:boolean = false;

  constructor(private fb:FormBuilder,
     private localStorageService: LocalStorageService,
      private rutaActiva: ActivatedRoute) {
    this.clientesLocalHost = localStorageService.clientesEnLocalStorage == null ?
    new Array<Cliente>():localStorageService.clientesEnLocalStorage;
   }

  ngOnInit(): void {
    this.crearFormulario();
    this.llenarFormularioActualizar();
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      identificacion:['', Validators.required],
      nombre:['', Validators.required],
      apellido:['', Validators.required],
      direccion:['',Validators.required]
    })
    
  }

  llenarFormularioActualizar(){
    let parametro = this.rutaActiva.snapshot.params['parametro'];
    if(parametro !== 'new'){
      let cliente:Cliente = this.localStorageService.obtenerClienteId(parametro)
      this.editarClienteFlag = true;
      this.formulario.controls["identificacion"].setValue(cliente.id);
      this.formulario.controls["identificacion"].disable({onlySelf: true});
      this.formulario.controls['nombre'].setValue(cliente.nombre);
      this.formulario.controls['apellido'].setValue(cliente.apellido);
      this.formulario.controls['direccion'].setValue(cliente.direccion);
    }
  }

  agregarCliente(){
    if(this.formulario.valid){
    let clienteNuevo:Cliente = {
      id:this.formulario.controls["identificacion"].value,
      nombre:this.formulario.controls["nombre"].value,
      apellido:this.formulario.controls["apellido"].value,
      direccion:this.formulario.controls["direccion"].value
    }
    this.localStorageService.guardarClienteNuevoEnLocalStorage(clienteNuevo);
    this.formulario.reset();
  }
  }

  editarCliente(){
    
  }

}
