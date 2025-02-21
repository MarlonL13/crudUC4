import { turmas } from "../../../config/database.js";
import { TurmaModel } from "../models/index.js";

export class TurmaController {
  // Criar nova turma
  criar(cod, nome, sala, capacidade) {
    try {
      const novaTurma = new TurmaModel(cod, nome, sala, capacidade);
      turmas.push(novaTurma);
      console.table(novaTurma);
    } catch (error) {
      console.error("Erro ao tentar criar turma", error.message);
    }
  }

  // Editar dados de uma turma
  editar(cod, novoNome, novaSala, novaCapacidade) {
    try {
      const turma = turmas.find((turma) => turma.getCod === cod);
      if (!turma) {
        return console.log("Turma não encontrada!");
      }
      turma.nome = novoNome || turma.nome;
      turma.sala = novaSala || turma.sala;
      turma.capacidade = novaCapacidade || turma.capacidade;
    } catch (error) {
      console.error("Erro ao tentar atualizar a turma", error.message);
    }
  }

  // Deletar uma turma pelo código
  deletarPorCod(cod) {
    try {
      const index = turmas.findIndex((turma) => turma.getCod === cod);
      if (index === -1) {
        return console.log("Turma não encontrada");
      }
      turmas.splice(index, 1);
      console.log("Turma excluída com sucesso!");
    } catch (error) {
      console.error("Erro ao tentar excluir a turma", error.message);
    }
  }

  // Deletar todas as turmas
  deletarTodos() {
    try {
      turmas.length = 0;
      console.log("Todas as turmas excluídas!");
    } catch (error) {
      console.error("Erro ao tentar excluir todas as turmas", error.message);
    }
  }

  // Listar uma turma pelo código
  listaPorCod(cod) {
    try {
      const turma = turmas.find((turma) => turma.getCod === cod);
      if (!turma) {
        return console.log("Turma não encontrada");
      }
      console.table(turma);
    } catch (error) {
      console.error("Erro ao tentar exibir a turma", error.message);
    }
  }

  // Listar todas as turmas
  listarTodos() {
    try {
      if (turmas.length === 0) {
        return console.log("Não existem turmas para exibir!");
      }
      console.table(turmas);
    } catch (error) {
      console.error("Erro ao tentar exibir as turmas", error.message);
    }
  }
}
