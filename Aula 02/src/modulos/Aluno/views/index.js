import prompt from "prompt-sync";
import { AlunoController } from "../controllers/index";

const alunoController = new AlunoController();
const input = prompt();

export class AlunoView {
  listarAlunos() {
    console.log("\nLista de alunos:");
    alunoController.listarTodos()
  }
  criarAluno() {
    const matricula = input("Digite a matrícula: ");
    const nome = input("Digite o nome: ");
    const email = input("Digite o email: ");
    const senha = input("Digite a senha: ");
    alunoController.criar(matricula, nome, email, senha);
  }
  editarAluno() {
    const matriculaEditar = input("Digite a matrícula do aluno: ");
    const novoNome =
      input("Novo nome (deixe em branco para manter o mesmo): ") || null;
    const novoEmail =
      input("Novo email (deixe em branco para manter o mesmo): ") || null;
    const novaSenha =
      input("Nova senha (deixe em branco para manter a mesma): ") || null;
    alunoController.editar(matriculaEditar, novoNome, novoEmail, novaSenha);
  }
  excluirPorMatricula() {
    const matriculaDeletar = input(
      "Digite a matrícula do aluno a ser deletado: ");
    alunoController.deletarPorMatricula(matriculaDeletar);
  }
  excluirTodos(){
    alunoController.deletarTodos()
  }
}
