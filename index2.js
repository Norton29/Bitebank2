import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";


const diretor = new Diretor("Rodrigo", 10000, 12346598754);
diretor.cadastrarSenha("123");
const gererente= new Gerente("Alceu", 5000, 12345678966);

const estalogado = SistemaAutenticacao.login(diretor, "123")

console.log(estalogado);
