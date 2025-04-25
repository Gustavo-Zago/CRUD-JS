const conexao = require('../infraestrutura/conexao.js');

class AlunoModel {
    executarQuery(sql, params) {
        return new Promise((resolve, reject) => {
            conexao.query(sql, params, (erro, resultado) => {
                if (erro) {
                    console.log("Erro ao executar query: " + erro);
                    reject(erro);
                } else {
                    resolve(resultado);
                }
            });
        });
    }

    listaAlunos() {
        const sql = 'SELECT * FROM Alunos';
        return this.executarQuery(sql);
    }

    cadastroAluno(novoAluno) {
        const sql = 'INSERT INTO Alunos SET ?';
        return this.executarQuery(sql, novoAluno);
    }

    atualizarAluno(RA, alunoAtualizado) {
        const sql = 'UPDATE Alunos SET ? WHERE RA = ?';
        return this.executarQuery(sql, [alunoAtualizado, RA]);
    }

    excluirAluno(RA) {
        const sql = 'DELETE FROM Alunos WHERE RA = ?';
        return this.executarQuery(sql, [RA]);
    }
}

module.exports = AlunoModel;
