import { model, Schema, Types } from 'mongoose'

export interface IProduto {
  title: string;
}

export const ProdutoSchema = new Schema<IProduto>(
  {
    title: { type: 'String', required: true },
  },
  { timestamps: true },
)

export const Produto = model<IProduto>('Produto', ProdutoSchema);