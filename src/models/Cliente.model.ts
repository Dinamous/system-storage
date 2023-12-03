import { model, Schema, Types } from 'mongoose'

export interface ICliente {
  nome: string;
  telefone: string;
  email: string;
  endereço: string;
}

export const ClienteSchema = new Schema<ICliente & Document>(
  {
    nome: { type: 'String', required: true,unique:true },
    telefone: { type: 'String', required: false },
    email: { type: 'String', required: false},
    endereço: { type: 'String', required: false },
  },
  
)


export const Cliente = model<ICliente & Document>('Cliente', ClienteSchema);
