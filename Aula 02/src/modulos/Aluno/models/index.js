
export class AlunoModel extends Pessoa {
    #matricula
    constructor(matricula, nome, email, senha) {
        this.#matricula = matricula
        super(nome, email, senha)
    }
    // modificadores de acesso
    get getMatricula(){
        return this.#matricula
    }
}