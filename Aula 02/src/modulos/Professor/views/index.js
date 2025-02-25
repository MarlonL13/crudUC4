import prompt from "prompt-sync";
import { ProfessorController } from "../controllers/index.js";

const professorController = new ProfessorController();
const input = prompt();
export class ProfessorView {
    listarProfessores() {
        console.log("\nLista de professores:");
        professorController.listarTodos()
    }
    criarProfessor() {
        const matricula = input("Digite a matrícula: ");
        const nome = input("Digite o nome: ");
        const telefone = input("Digite o telefone: ");
        const email = input("Digite o email: ");
        const senha = input("Digite a senha: ");
        const turma = input("Digite a turma: ");
        const disciplina = input("Digite a disciplina: ");
        professorController.criar(nome, telefone, email, senha, matricula, turma, disciplina);
    }
    editarProfessor() {
        const matriculaEditar = input("Digite a matrícula do professor: ");
        const novoNome =
            input("Novo nome (deixe em branco para manter o mesmo): ") || null;
        const novoEmail =
            input("Novo email (deixe em branco para manter o mesmo): ") || null;
        const novaSenha =
            input("Nova senha (deixe em branco para manter a mesma): ") || null;
        const novaTurma =
            input("Nova turma (deixe em branco para manter a mesma): ") || null;
        const novaDisciplina =
            input("Nova disciplina (deixe em branco para manter a mesma): ") || null;
        const novoTelefone =
            input("Novo telefone (deixe em branco para manter o mesmo): ") || null;

        professorController.editar(matriculaEditar, novoNome, novoEmail, novaSenha, novaTurma, novaDisciplina, novoTelefone);
    }
    excluirPorMatricula() {
        const matriculaDeletar = input(
            "Digite a matrícula do professor a ser deletado: ");
        professorController.deletarPorMatricula(matriculaDeletar);
    }
    excluirTodos(){
        professorController.deletarTodos()
    }
}
