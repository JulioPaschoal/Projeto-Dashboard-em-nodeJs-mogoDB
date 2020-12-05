const express = require('express');
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const routes = require("./routes/Routes");
const path = require("path");
const mongoose = require('mongoose');


//////////////// CONFIGURAÇÕES \\\\\\\\\\\\\\\\

//////////////// BODYPARSER \\\\\\\\\\\\\\\\
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//////////////// HANDLEBARS \\\\\\\\\\\\\\\\
app.engine('handlebars', handlebars({ defaultLayout: "main" }));
app.set("view engine", 'handlebars');

//////////////// CONEXAO COM BANCO DE DADOS \\\\\\\\\\\\\\\\
mongoose.connect('mongodb://localhost/dbDashboard', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Conexão com MongoDB realizada com sucesso...");
}).catch((erro) => {
    console.log("Erro: Conexão com MongoDB Não foi realizada..." + erro);
});

//////////////// CARREGANDO ARQUIVOS ESTATICOS \\\\\\\\\\\\\\\\
app.use(express.static(path.join(__dirname, "public")));

//////////////// UTILIZANDO ROTAS  \\\\\\\\\\\\\\\\
app.use('/', routes);

//////////////// INICIAR O SERVIDOR \\\\\\\\\\\\\\\\
const PORT = 3000;
app.listen(PORT, () => {
    console.log("SERVIDOR ONLINE");
});