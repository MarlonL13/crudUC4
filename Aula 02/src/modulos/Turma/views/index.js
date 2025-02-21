import prompt from "prompt-sync";
import { TurmaController } from "../controllers/TurmaController.js";

const input = prompt();
const controller = new TurmaController();

export class TurmaView {
  // Mostrar todas as turmas
  exibirTodasTurmas() {
    console.log("Exibindo todas as turmas:");
    controller.listarTodos();
  }

  // Exibir turma por código
  exibirTurmaPorCod() {
    const cod = input("Digite o código da turma para exibir: ");
    console.log(`Exibindo turma com código: ${cod}`);
    controller.listaPorCod(cod);
  }

  // Criar nova turma
  criarTurma() {
    const cod = input("Digite o código da nova turma: ");
    const nome = input("Digite o nome da nova turma: ");
    const sala = input("Digite a sala da nova turma: ");
    const capacidade = input("Digite a capacidade da turma: ");

    console.log("Criando nova turma...");
    controller.criar(cod, nome, sala, parseInt(capacidade));
  }

  // Editar uma turma existente
  editarTurma() {
    const cod = input("Digite o código da turma para editar: ");
    const novoNome = input("Digite o novo nome da turma (deixe em branco para não alterar): ");
    const novaSala = input("Digite a nova sala da turma (deixe em branco para não alterar): ");
    const novaCapacidade = input("Digite a nova capacidade da turma (deixe em branco para não alterar): ");

    console.log(`Editando turma com código: ${cod}`);
    controller.editar(
      cod,
      novoNome || undefined,
      novaSala || undefined,
      novaCapacidade ? parseInt(novaCapacidade) : undefined
    );
  }

  // Deletar uma turma pelo código
  deletarTurma() {
    const cod = input("Digite o código da turma para deletar: ");
    console.log(`Deletando turma com código: ${cod}`);
    controller.deletarPorCod(cod);
  }

  // Deletar todas as turmas
  deletarTodasTurmas() {
    const confirmacao = input("Tem certeza que deseja deletar todas as turmas? (sim/não): ");
    if (confirmacao.toLowerCase() === "sim") {
      console.log("Deletando todas as turmas...");
      controller.deletarTodos();
    } else {
      console.log("Operação cancelada.");
    }
  }
}
