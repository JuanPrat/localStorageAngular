import { PedidoDetalle } from './pedidoDetalle';

export interface Pedido{
    id:number,
    clienteId:number,
    nombreCliente:string,
    total:number,
    pedidoDetalle:Array<PedidoDetalle>
}