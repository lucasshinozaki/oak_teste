const express = require('express')
const bodyParser = require('body-parser')
const handlebars = require('express-handlebars')
const app = express()

const PORT = 8000
const produtos = []


//Handlebars
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars');

//Body Parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

//Rotas
app.get('/', (req, res) => {
    res.render('index')
})


app.post('/adiciona', (req, res) => {
    const {nome_produto, descricao_produto, valor_produto, status_produto } = req.body;
    const produto = {
        nome_produto,
        descricao_produto,
        valor_produto: parseFloat(valor_produto),
        status_produto
    }

    produtos.push(produto)
    produtos.sort((a, b) => a.valor_produto - b.valor_produto)
    res.redirect('/lista')

})

app.get('/lista', (req, res) => {
    res.render('lista', {produtos})
})

app.post('/deletar', (req, res) => {
    const id = parseInt(req.body.id); 
    if (isNaN(id) || id < 0 || id >= produtos.length) {
        return res.status(400).json({ error: 'ID inválido' });
    }
    produtos.splice(id, 1);
    res.redirect('/lista')
});

app.get('/editar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= produtos.length) {
        return res.status(404).send('Produto não encontrado');
    }
    const produto = produtos[id];
    res.render('editar', { produto, id });
});

app.post('/editar/:id', (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id) || id < 0 || id >= produtos.length) {
        return res.status(404).send('Produto não encontrado');
    }

    const { nome_produto, descricao_produto, valor_produto, status_produto } = req.body;
    produtos[id] = {
        id,
        nome_produto,
        descricao_produto,
        valor_produto,
        status_produto
    };

    produtos.sort((a, b) => a.valor_produto - b.valor_produto);

    res.redirect('/lista');
});


// Servidor
app.listen(PORT, () => {
    console.log(`Servido está rodando na porta:${PORT}`)
})