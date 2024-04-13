export abstract class contaBase {
  private nome: string;
  private numeroConta: number;
  status: boolean = true;

  constructor(nome: string, numeroConta: number, status: boolean) {
    this.nome = nome;
    this.numeroConta = numeroConta;
    this.status = this.status;
  }

  deposito = (num: number): void => {
    if (this.validarConta()) {
      console.log("voce depositou");
    }

    console.log("voce depositou");
  };

  retirada = (num: number, status: boolean): void => {};

  //função de verificar status da conta

  validarConta = (): boolean => {
    if (this.status) {
      return this.status;
    } else throw new Error("Conta invalida");
  };
}
