import { model, Schema, Types } from 'mongoose'

export interface ICliente {
  RazaoSocial: string;
  contato
  telefone: string;
  email: string;
  endereço: string;
  incricaoMunicipal: string;
  CEP: string;
  UF: string;
}

export const ClienteSchema = new Schema<ICliente & Document>(
  {
    RazaoSocial: { type: 'String', required: true,unique:true },
    incricaoMunicipal: { type: 'String', required: false},
    telefone: { type: 'String', required: false },
    email: { type: 'String', required: false, unique:false},
    endereço: { type: 'String', required: false },
    UF: { type: 'String', required: false },
    CEP: { type: 'String', required: false },
  },
  
)


export const Cliente = model<ICliente & Document>('Cliente', ClienteSchema);
