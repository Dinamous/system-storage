import { model, Schema, Types } from 'mongoose'
import { Produto } from './Produto.model.js';

export interface ItemPedido {
    produto: Types.ObjectId;
    quantidade: number;
  }

export interface IPedido {
    cliente: Types.ObjectId;
    itens: ItemPedido[];
    total: number;
}

export const PedidoSchema = new Schema<IPedido & Document>(
  {
    cliente: { type: Schema.Types.ObjectId, ref: 'Cliente' },
    itens: [
        {
          produto: { type: Schema.Types.ObjectId, ref: 'Produto' },
          quantidade: Number,
        },
      ],
    total: Number,
  }
)

PedidoSchema.pre<IPedido & Document>('save', async function (next) {
    try {
      let total = 0;
  
      for (const item of this.itens) {
        const produto = await Produto.findById(item.produto);
  
        if (produto) {
          total += produto.valor * item.quantidade;
        } else {
          throw new Error(`Produto com ID ${item.produto} não encontrado.`);
        }
      }
  
      this.total = total;
      next();
    } catch (error) {
      next(error);
    }
  });
  

export const Pedido = model<IPedido & Document>('Pedido', PedidoSchema);