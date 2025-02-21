import { alunos } from "../../../config/database.js";
import { AlunoModel } from "../models/index.js";

export class AlunoController {
  criar(matricula, nome, email, senha) {
    try {
      const novoAluno = new AlunoModel(matricula, nome, email, senha);
      alunos.push(novoAluno);
      console.table(novoAluno);
    } catch (error) {
      console.error("Erro ao tentar criar aluno", error.message);
    }
  }

  editar(matricula, novoNome, novoEmail, novaSenha) {
    try {
      const aluno = alunos.find((aluno) => aluno.getMatricula === matricula);
      if (!aluno) {
        return console.log("Aluno não encontrado!");
      }
      aluno.nome = novoNome || aluno.nome;
      aluno.email = novoEmail || aluno.email;
      aluno.senha = novaSenha || aluno.senha;
    } catch (error) {
      console.error("Erro ao tentar atualizar o aluno", error.message);
    }
  }

  deletarPorMatricula(matricula) {
    try {
      const index = alunos.findIndex((aluno) => aluno.getMatricula === matricula);
      if (index === -1) {
        return console.log("Aluno não encontrado");
      }
      alunos.splice(index, 1);
      console.log("Aluno excluido com sucesso!");
    } catch (error) {
      console.error("Erro ao tentar excluir o aluno", error.message);
    }
  }
    deletarTodos() {
    try {
      alunos.length = 0;
      console.log("Todos os alunos excluidos!");
    } catch (error) {
      console.error("Erro ao tentar excluir todos os alunos", error.message);
    }
  }

  listaPorMatricula(matricula) {
    try {
      const aluno = alunos.find((aluno) => aluno.getMatricula === matricula);
      if (!aluno) {
        return console.log("Aluno não encontrado");
      }
      console.table(aluno);
    } catch (error) {
      console.error("Erro ao tentar exibir o aluno", error.message);
    }
  }
  
  listarTodos() {
    try {
      if (alunos.length === 0) {
        return console.log("Não existe alunos a serem exibidos!");
      }
      console.table(alunos);
    } catch (error) {
      console.error("Erro ao tentar exibir os alunos", error.message);
    }
  }
}
