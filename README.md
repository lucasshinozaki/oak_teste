### Sistema de Gestão de Produtos

Este é um sistema de gestão de produtos desenvolvido com Node.js e Express, utilizando Handlebars como template engine e Body Parser para processamento de formulários.

#### Requisitos de Instalação

Certifique-se de ter o Node.js instalado na sua máquina. Em seguida, execute o seguinte comando na pasta raiz do projeto para instalar as dependências necessárias listadas no `package.json`:

```bash
npm install body-parser express express-handlebars handlebars
```

#### Funcionalidades Implementadas

1. **Cadastro de Produto** - **Rota**: `/`
2. **Adição de Produto** - **Rota**: `/adiciona`
3. **Listagem de Produtos**- **Rota**: `/lista`
4. **Edição de Produto**- **Rota**: `/editar/:id`
5. **Atualização de Produto**- **Rota**: `/editar/:id`
6. **Exclusão de Produto**- **Rota**: `/deletar`

#### Como Executar o Projeto

1. **Instalação de Dependências**

   - Execute `npm install` para instalar todas as dependências necessárias listadas no `package.json`.

2. **Execução da Aplicação**

   - Execute `node app.js` para iniciar o servidor.
   - Acesse a aplicação através do navegador no endereço `http://localhost:8000`.

#### Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript server-side.
- **Express**: Framework web para Node.js.
- **Handlebars**: Template engine para renderização de HTML.
- **Body Parser**: Middleware para parsear corpos de requisição HTTP.
