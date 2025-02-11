import  {AlunoController}  from './modulos/Aluno/controllers/index.js'


const aluno = new AlunoController()

aluno.criar("a9111","Irineu","ireneu@edum.senac.br","@123")
aluno.criar("a9222","Borges","borges@edum.senac.br","@123")

aluno.listarTodos()

aluno.deletarPorMatricula("a9111")
aluno.listarTodos()

aluno.editar('a9222',null,"borgeseditado@edum.senac.br",null)
aluno.listarTodos()
