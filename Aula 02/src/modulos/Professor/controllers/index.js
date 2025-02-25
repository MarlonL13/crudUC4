import { professores } from "../../../config/database.js";
import { Professor } from "../models/index.js";

export class ProfessorController {
    criar(nome, telefone, email, senha, matricula, turma, disciplina) {
        try {
            const novoProfessor = new Professor(
                nome,
                telefone,
                email,
                senha,
                matricula,
                turma,
                disciplina
            );
            professores.push(novoProfessor);
            console.table(novoProfessor);
        } catch (error) {
            console.error("Erro ao tentar criar professor", error.message);
        }
    }

    editar(
        matricula,
        novoNome,
        novoEmail,
        novaSenha,
        novaTurma,
        novaDisciplina,
        novoTelefone
    ) {
        try {
            const professor = professores.find((professor) => professor.getMatricula === matricula);
            if (!professor) {
                return console.log("Professor não encontrado!");
            }
            professor.nome = novoNome || professor.nome;
            professor.email = novoEmail || professor.email;
            professor.senha = novaSenha || professor.senha;
            professor.turma = novaTurma || professor.turma;
            professor.disciplina = novaDisciplina || professor.disciplina;
            professor.telefone = novoTelefone || professor.telefone;
        } catch (error) {
            console.error("Erro ao tentar atualizar o professor", error.message);
        }
    }

    deletarPorMatricula(matricula) {
        try {
            const index = professores.findIndex(
                (professor) => professor.getMatricula === matricula
            );
            if (index === -1) {
                return console.log("Professor não encontrado");
            }
            professores.splice(index, 1);
            console.log("Professor excluido com sucesso!");
        } catch (error) {
            console.error("Erro ao tentar excluir o professor", error.message);
        }
    }
    deletarTodos() {
        try {
            professores.length = 0;
            console.log("Todos os professores excluidos!");
        } catch (error) {
            console.error("Erro ao tentar excluir todos os professores", error.message);
        }
    }

    listaPorMatricula(matricula) {
        try {
            const professor = professores.find((professor) => professor.getMatricula === matricula);
            if (!professor) {
                return console.log("Professor não encontrado");
            }
            console.table(professor);
        } catch (error) {
            console.error("Erro ao tentar exibir o professor", error.message);
        }
    }

    listarTodos() {
        try {
            if (professores.length === 0) {
                return console.log("Não existe professores a serem exibidos!");
            }
            console.table(professores);
        } catch (error) {
            console.error("Erro ao tentar exibir os professores", error.message);
        }
    }
}
