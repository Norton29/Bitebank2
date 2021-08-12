import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0   
    constructor(_saldoInicial, cliente, agencia){
      super(_saldoInicial, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;

    }

    //sobreescrevendo o metodo sacar da classe mãe
    sacar(valor){
        let taxa = 1.1;
        return this._sacar(valor, taxa);
    }
        
}