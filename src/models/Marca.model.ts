import { model, Schema, Types } from 'mongoose'

export interface IMarca {
  nome: string;
  CNPJ: string;
}

export const MarcaSchema = new Schema<IMarca & Document>(
  {
    nome: { type: 'String', required: true, unique:true },
    CNPJ: { type: 'String', required: true },
  }
)

export const Marca = model<IMarca & Document>('Marca', MarcaSchema);