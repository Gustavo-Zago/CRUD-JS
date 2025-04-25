class Tabelas {
    init(conexao) {
        this.conexao = conexao;
        this.criarAtendimentos();
    } 

    criarAtendimentos() {
        const sql = `
            CREATE TABLE IF NOT EXISTS Alunos(
            RA varchar(255) primary key NOT NULL,
            Nome varchar(255) NOT NULL
            );`;
        this.conexao.query(sql, (error) => {
            if (error) {
                console.log('Erro ao criar a tabela de atendimentos: ', error);
            } else {
                console.log('Tabela de atendimentos criada com sucesso!');
            }
        });
    }
}
module.exports = new Tabelas();