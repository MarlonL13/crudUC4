import prompt from 'prompt-sync';
import { AlunoView } from './modulos/Aluno/views/index.js';
import { ProfessorView } from './modulos/Professor/views/index.js';

const alunoView = new AlunoView();
const professorView = new ProfessorView();

const input = prompt();

function menuInicial() {
    console.log('\n######### MENU #############');
    console.log('1 - Modulo Aluno');
    console.log('2 - Modulo Turma');
    console.log('3 - Modulo Professor');
    console.log('0 - Sair');
    console.log('##############################');
}

function exibirMenuAluno() {
    console.log('\n######### MENU ALUNO #############');
    console.log('1 - Criar aluno');
    console.log('2 - Listar todos os alunos');
    console.log('3 - Deletar aluno por matrícula');
    console.log('4 - Deletar todos');
    console.log('5 - Editar aluno');
    console.log('0 - Voltar');
    console.log('##############################');
}

function exibirMenuProfessor() {
    console.log('\n######### MENU PROFESSOR #############');
    console.log('1 - Criar professor');
    console.log('2 - Listar todos os professores');
    console.log('3 - Deletar professor por matrícula');
    console.log('4 - Deletar todos');
    console.log('5 - Editar professor');
    console.log('0 - Voltar');
    console.log('##############################');
}

function menuAluno() {
    let controle;
    do {
        exibirMenuAluno();
        controle = input('Escolha uma opção: ');
        switch (controle) {
            case '1':
                alunoView.criarAluno()
                break;
            case '2':
                alunoView.listarAlunos()
                break;
            case '3':
                alunoView.excluirPorMatricula()
                break;
            case '4':
                alunoView.excluirTodos()
                break;
            case '5':
                alunoView.editarAluno()
                break;
            case '0':
                console.log('Voltando ao menu principal...');
                break;
            default:
                console.log('Opção invalida, digite um numero do menu!');
        }
    } while (controle !== '0');
}

function menuProfessor() {
    let controle;
    do {
        exibirMenuProfessor();
        controle = input('Escolha uma opção: ');
        switch (controle) {
            case '1':
                professorView.criarProfessor()
                break;
            case '2':
                professorView.listarProfessores()
                break;
            case '3':
                professorView.excluirPorMatricula()
                break;
            case '4':
                professorView.excluirTodos()
                break;
            case '5':
                professorView.editarProfessor()
                break;
            case '0':
                console.log('Voltando ao menu principal...');
                break;
            default:
                console.log('Opção invalida, digite um numero do menu!');
        }
    } while (controle !== '0');
}

function main() {
    let controle;
    do {
        menuInicial();
        controle = input('Escolha uma opção: ');
        switch (controle) {
            case '1':
                menuAluno();
                break;
            case '2':
                console.log('Módulo Turma ainda não implementado');
                break;
            case '3':
                menuProfessor();
                break;
            case '0':
                console.log('Saindo...');
                break;
            default:
                console.log('Opção invalida, digite um numero do menu!');
        }
    } while (controle !== '0');
}

main();
