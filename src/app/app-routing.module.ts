import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProductosComponent } from './productos/productos.component';
import { AgregarClientesComponent } from './agregar-clientes/agregar-clientes.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'clientes', component: ClientesComponent
  },
  {
    path: 'pedidos', component: PedidosComponent
  },
  {
    path: 'productos', component: ProductosComponent
  },
  {
    path: 'agregarClientes/:parametro', component: AgregarClientesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
