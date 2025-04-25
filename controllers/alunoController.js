const AlunoModel = require("../models/alunoModel.js");
const alunoModel = new AlunoModel();

class AlunosController {
    buscar() {
        return alunoModel.listaAlunos();
    }
    cadastrar(novoAluno) {
        return alunoModel.cadastroAluno(novoAluno);
    } 
    atualizar(RA, alunoAtualizado) {
        return alunoModel.atualizarAluno(RA, alunoAtualizado);
    }
    excluir(RA) {
        return alunoModel.excluirAluno(RA);
    }
    
}

module.exports = new AlunosController();
