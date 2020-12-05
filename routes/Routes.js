const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
require("../models/CatPagament");
const CatPagamento = mongoose.model('catpagamento');

//////////////// MINHAS ROTAS  \\\\\\\\\\\\\\\\

router.get('/', (req, res) => {
    //res.send("Página Incial do Administrativo");
    res.render("admin/index");
});

//////////////// ROTA DE PAGAMENTO  \\\\\\\\\\\\\\\\
router.get('/pagamentos', (req, res) => {
    res.send("Página de pagamento")
});

//////////////// ROTA DE LISTAR CATEGORIA DE  PAGAMENTO \\\\\\\\\\\\\\\\
router.get('/cat-pagamentos', (req, res) => {
    res.render("admin/cat-pagamentos")
});

//////////////// ROTA DE CADASTRAR CATEGORIA PAGAMENTO NO BANCO  \\\\\\\\\\\\\\\\
router.post('/add-cat-pagamento', (req, res) => {
    const addCatPagamento = {
        nome: req.body.nome
    }
    new CatPagamento(addCatPagamento).save()
        .then(() => {
            console.log("Categoria de Pagamente cadastrada com sucesso!")
        }).catch((error) => {
            console.log("Erro: Ao categoria a categoria" + error)
        })
});

//////////////// RATA DE CADASTRAR PAGAMENTO  \\\\\\\\\\\\\\\\
router.get('/cad-cat-pagamento', (req, res) => {
    res.render("admin/cad-cat-pagamento")
})


//////////////// EXPORTANDO O MODULO DE ROTAS  \\\\\\\\\\\\\\\\
module.exports = router; 