import { Pessoa } from "./Pessoa.js";

class Professor extends Pessoa {
  constructor(nome, telefone, email, senha, matricula, turma, disciplina) {
    super(matricula, nome, telefone, email, senha);
    this.disciplina = disciplina;
    this.turma = turma;
  }
}

export { Professor };
