export class TurmaModel {
  #cod;
  constructor(cod, nome, sala, capacidade, aluno, professor) {
    this.#cod = cod;
    this.nome = nome;
    this.sala = sala;
    this.capacidade = capacidade;
    this.aluno = aluno;
    this.professor = professor;
  }
  get getCod() {
    return this.#cod;
  }
}
