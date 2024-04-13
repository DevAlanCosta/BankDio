import { contaBase } from "./contaBase";

export class contaJuridica extends contaBase {
  emprestimo: number = 0;

  constructor(nome: string, numeroConta: number, status: boolean) {
    super(nome, numeroConta, status);
    this.nome = nome;
    this.numeroConta = numeroConta;
    this.status = status;
  }

  pegarEmprestimo = (num: number): void => {
    if (this.status === true) {
      this.emprestimo = num;
      console.log("A empresa efetuou um emprestimo.");
    } else "Conta invalida";
  };
}
