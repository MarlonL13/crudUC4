import prompt from 'prompt-sync';
import { AlunoView } from './modulos/Aluno/views/index.js';

const alunoView = new AlunoView();

const input = prompt();

function menuInicial() {
    console.log('\n######### MENU #############');
    console.log('1 - Modulo Aluno');
    console.log('2 - Modulo Turma');
    console.log('3 - Modulo Professor');
    console.log('0 - Sair');
    console.log('##############################');
}

function exibirMenu() {
    console.log('\n######### MENU #############');
    console.log('1 - Criar aluno');
    console.log('2 - Listar todos os alunos');
    console.log('3 - Deletar aluno por matrícula');
    console.log('4 - Deletar todos');
    console.log('5 - Editar aluno');
    console.log('0 - Sair');
    console.log('##############################');
}

function main() {
    let controle;
    do {
        exibirMenu();
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
                console.log('Saindo...');
                break;
            default:
                console.log('Opção invalida, digitte um numero do menu!');
        }
    } while (controle !== '0');
}

main();
