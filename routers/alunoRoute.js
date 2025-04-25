const { Router } = require("express");
const router = Router();
const AlunoController = require("../controllers/alunoController");

router.get("/alunos", (req, res) => {
    const listaalunos = AlunoController.buscar();
    listaalunos
        .then((resposta) => {
            res.status(200).json(resposta);
        })
        .catch((erro) => {
            console.log("Erro ao listar alunos: " + erro);
            res.status(400).send("Erro ao listar alunos: " + erro);
        });
});

router.post("/alunos", (req, res) => {
    const novoAluno = req.body;
    const cadastroAluno = AlunoController.cadastrar(novoAluno);
    cadastroAluno
        .then((resposta) => {
            res.status(201).json({
                success: true,
                mensagem: "Aluno cadastrado com sucesso!"
            });
        })
        .catch((erro) => {
            console.log("Erro ao cadastrar aluno: " + erro);
            res.status(400).json({
                success: false,
                mensagem: "Erro ao cadastrar aluno: " + erro
            });
        });
});

router.put("/aluno/:RA", async (req, res) => {
    const { RA } = req.params;
    const alunoAtualizado = req.body;
    const atualizarAluno = AlunoController.atualizar(RA, alunoAtualizado);
    atualizarAluno
    .then((resposta) => {
        res.status(201).json(resposta);
    })
    .catch((erro) => {
        console.log("Erro ao atualizar aluno: " + erro);
        res.status(400).send("Erro ao atualizar aluno: " + erro);
    });
});

router.delete("/aluno/:RA", (req, res) => {
    const { RA } = req.params;

    AlunoController.excluir(RA)
        .then((resposta) => {
            res.status(200).json(resposta);
        })
        .catch((erro) => {
            console.log("Erro ao excluir aluno: " + erro);
            res.status(400).send("Erro ao excluir aluno: " + erro);
        });
});

module.exports = router;
