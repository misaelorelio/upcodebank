const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.get('/', (req, res) => {
	res.send("Olá mundo!!");
});

const contaRota = require('./rota/conta.rota')

app.use('/api/v1/contas', contaRota)

const movimentacaoRota = require('./rota/movimentacao.rota')

app.use('/api/v1/movimentacao', movimentacaoRota)

app.listen(port, () => {
	console.log('Servidor está executando na porta ' + port);
});