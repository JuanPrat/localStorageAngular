import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/models/pedido';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let pedido:Pedido;
    pedido.id = 1;
    pedido.clienteId = 1;
    pedido.nombreCliente = "Juan"
    pedido.total = 1500
    pedido.pedidoDetalle.push({
      cantidad:15,
      nombreProducto:"agua",
      precio:12,
      productoId:1,
      total:20
    })

  }

}
