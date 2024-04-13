import { contaFisica } from "./class/contaFisica";
import { contaBase } from "./class/contaBase";
import { contaJuridica } from "./class/contaJuridica";

const novaConta: contaFisica = new contaFisica("Alan", 1, false);
console.log(novaConta.saldo);
novaConta.deposito(50);

const contaPj: contaJuridica = new contaJuridica("jessica aj", 2, true);
contaPj.pegarEmprestimo(2000);
console.log(contaPj);
