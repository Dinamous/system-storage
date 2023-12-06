import { model, Schema, Types } from 'mongoose'
export interface IProduto {
  nome: string;
  marca: Types.ObjectId;
  valor: number;
}

export const ProdutoSchema = new Schema<IProduto & Document>(
  {
    nome: { type: 'String', required: true, unique:true },
    marca: { type: Schema.Types.ObjectId, ref: 'Marca' },
    valor: { type: 'Number', required: true },
  }
)


export const Produto = model<IProduto & Document>('Produto', ProdutoSchema);