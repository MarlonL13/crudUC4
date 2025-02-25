import { Pessoa } from "../../Professor/models/Pessoa.js";

export class AlunoModel extends Pessoa {
  constructor(matricula, nome, email, senha, telefone) {
    super(matricula, nome, email, senha, telefone);
  }
}
