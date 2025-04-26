
# Agenda Web App

Uma aplicação web para organizar suas tarefas, atribuir tempos, visualizar sua produtividade e gerenciar eventos em um calendário interativo.

# Funcionalidades

* Criar, editar e excluir tarefas.
* Definir o tempo destinado a cada tarefa.
* Visualizar estatísticas de produtividade.
* Integração com calendário.


# Tecnologias utilizadas

Node.js (Servidor)

Express (Framework web)

MongoDB (Banco de dados)

Mongoose (ODM para MongoDB)

EJS (Motor de templates)

Bootstrap (Frontend responsivo)


# Pré-requisitos

Antes de começar, você precisa ter instalado:

Node.js

MongoDB


# Como rodar o projeto localmente

1. Clone o repositório

git clone https://github.com/AbrahanMaigua/node_agenda.git


2. Acesse o diretório do projeto

cd node_agenda


3. Instale as dependências

npm install


4. Configure as variáveis de ambiente

Crie um arquivo .env na raiz do projeto.

Adicione as seguintes configurações:

PORT=3000
MONGO_URI=sua_url_mongodb



5. Inicie a aplicação

npm start


6. Acesse pelo navegador

Abra: http://localhost:3000

Rodando com Docker

1. Construa e suba os containers:

docker compose up --build


2. Acessar o container da aplicação:

docker exec -it agenda-app bash


3. Acessar o container do MongoDB (se precisar):

docker exec -it agenda-mongo bash



Configurando usuário e senha do MongoDB

O script create_ddbb.js configura o usuário padrão:


db = db.getSiblingDB("my_database");

db.createUser({
  user: "admin",
  pwd: "password",
  roles: [{ role: "readWrite", db: "my_database" }]
});

Se necessário, você pode entrar no container MongoDB e alterar manualmente o usuário e senha.


# Notas

Na pasta mongo/ existe um exemplo de configuração do banco de dados MongoDB.

Certifique-se de atualizar suas credenciais no arquivo .env conforme o usuário e senha configurados.


Scripts disponíveis

npm start — Inicia o app em modo produção.

npm run dev — Inicia o app em modo desenvolvimento (com nodemon).


# Estrutura do projeto

node_agenda/
├── models/         # Modelos do MongoDB
├── public/         # Arquivos estáticos (CSS, JS)
├── routes/         # Rotas da aplicação
├── views/          # Templates EJS
├── app.js          # Arquivo principal da aplicação
├── package.json    # Dependências e scripts
└── README.md       # (Este arquivo)

# Contribuições

Ideias, melhorias ou correções são bem-vindas! Sinta-se livre para fazer um fork e abrir um pull request.

Licença

Este projeto está licenciado sob a MIT License.


