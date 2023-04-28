<h1 align="center"> Sistema de Estoque </h1>

<p align="center">Um sistema de uma loja aonde existe um sistema de login, O cadastro de um produtos que esta relacionado a uma categoria e a criação de uma entrada e saída vinculado a um usuário.</p>

| :placard: Vitrine.Dev |                                                         |
| --------------------- | ------------------------------------------------------- |
| :sparkles: Nome       | **Sistema de Estoque**                                  |
| :label: Tecnologias   | NodeJS, Express, Bcryptjs, Mongoose, Zod                |
| :rocket: URL          | https://github.com/diovanealves/Stock-Management-System |
| :fire: Repositorio    | https://github.com/diovanealves/Stock-Management-System |

<p align="center">
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- NodeJS
- Express
- Bcryptjs
- Mongoose
- Zod
- Git e Github
- Figma

## 🚀 Etapas para rodar o projeto

Ao clonar para funcionar a aplicação deve criar um arquivo .env na raiz do projeto com os seguintes dados

```sh
PORT=" Escolha uma Porta "
MONGOOSE_URL=" A URL do MongoDB "
NODEMAILER_USER=" E-mail da conta Google "
NODEMAILER_PASS=" Senha App da conta Google "
```

Para iniciar o projeto, siga estas etapas:

```bash
$ git clone https://github.com/diovanealves/Stock-Management-System

$ cd Stock-Management-System

$ npm install

$ npm run dev
```

```
# Rota Usuário
POST     /user                Criar um usuário
GET      /user                Pegar as contas
POST     /authenticate        Authenticação do usuário
POST     /forgotPassword      Enviar um E-mail com o token de alterar a senha
POST     /resetPassword       Trocar a senha com o token

# Rota Categoria
GET      /categories                            Buscar categorias
POST     /categories                            Criar Categoria
DELETE   /categories/:categoryId                Deletar Categoria
GET      /categories/:categoryId/products       Buscar produtos por categoria

# Rota Produtos
GET      /products                  Buscar produtos
POST     /products                  Criar produto com Nome, Quantidade, Preço e Categoria
DELETE   /products/:productId       Deletar o produto criado

# Rota Entrada
GET        /entryOrder                  Buscar ordem de entrada
PUT        /entryOrder                  Criar uma nova ordem de entrada
DELETE     /entryOrder/:purchaseId      Deletar uma ordem de entrada

# Rota Saída
GET        /exitOrder                  Buscar ordem de saída
PUT        /exitOrder                  Criar uma nova ordem de saída
DELETE     /exitOrder/:deleteSale      Deletar uma ordem de saída

```

<h2 align="center">🤝 Colaboradores</h2>
<table>
  <tr>
    <td>
        <img src="https://avatars.githubusercontent.com/u/87160050?v=4" width="100px;" alt="Foto do Diovane Alves no GitHub"/>
            <a href="https://github.com/diovanealves" style="color:#4f46e5" align="center">
                <p>Github</p>
            </a>
            <a href="https://www.linkedin.com/in/diovane-alves-de-oliveira-5320a0217/" style="color:#4f46e5" align="center">
                <p>Linkedin</p>
            </a>
            <a href="https://twitter.com/deluxyfps" style="color:#4f46e5" align="center">
                <p>Twitter</p>
            </a>
    </td>
  </tr>
</table>

## 📝 Licença

Esse projeto está sob a licença MIT.
