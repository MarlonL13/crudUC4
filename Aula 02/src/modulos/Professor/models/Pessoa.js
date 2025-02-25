export class Pessoa {
  #matricula;
  constructor(matricula, nome, telefone, email, senha) {
    this.#matricula = matricula;
    this.nome = nome;
    this.telefone = telefone;
    this.email = email;
    this.senha = senha;
  }
  get getMatricula() {
    return this.#matricula;
  }
}
