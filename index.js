import{Cliente} from "./Cliente.js";
import{ContaCorrente} from "./Conta/ContaCorrente.js";
import { ContaPoupanca} from "./Conta/ContaPoupança.js";
import {Gerente} from "./Funcionarios/Gerente.js";

import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 12346598754);

const gererente= new Gerente("Alceu", 5000, 12345678966);

const estalogado = SistemaAutenticacao.login(diretor, "123")

console.log(estalogado);











    const cliente1 = new Cliente("Ricardo", 11122233309); 
    const cliente2 = new Cliente("Alice", 145465463309); 
    const cliente3 = new Cliente("Bruno", 77777777779); 


    const contaCorrenteRicardo = new ContaCorrente(0, cliente1, 1001);
    const contaCorrenteAlice = new ContaCorrente(0, cliente2, 1002);
    const contaPoupancaBruno = new ContaPoupanca(0, cliente3, 1003);
   
  contaCorrenteRicardo.depositar(100);
  contaCorrenteAlice.depositar(200);
contaCorrenteAlice.transferir(50, contaPoupancaBruno);
  



   











