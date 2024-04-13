import { contaBase } from "./contaBase";

export class contaFisica extends contaBase {
  saldo: number;

  constructor(nome: string, numeroConta: number, mode: boolean) {
    super(nome, numeroConta, mode);
    this.saldo = 0;
  }

  verSaldo = (): void => {
    console.log(this.saldo);
  };

  deposito = (num: number) => {
    this.saldo = num;
    if (this.validarConta()) {
      console.log("voce depositou");
      console.log(this.saldo);
    }
  };

  retirada = (num: number, status: boolean) => {
    if (num - this.saldo && status === false) {
      console.log("Seu saldo é insuficiente para saque");
      throw new Error("Saldo insuficiente para saque");
    } else console.log("voce efetuou uma retirada");
  };
}
