# 🧠 CRUD de Instrutores

Este é um projeto básico de CRUD (Create, Read, Update, Delete) utilizando **Node.js** com **Express**, que gerencia uma lista de instrutores em memória. O objetivo é praticar os fundamentos de APIs RESTful.

## 🚀 Tecnologias

- Node.js
- Express
- Nodemon (para desenvolvimento)
- JavaScript

## 📁 Estrutura do Projeto

```

studynode/
├── src/
│   ├── controllers/
│   │   └── instructors.js
│   ├── database.js
│   ├── routes.js
│   └── server.js
├── package.json

````

## 📦 Instalação

1. Clone o repositório:

```bash
git clone git@github.com:TakeruuDEV/crud-instructors.git
cd crud-instructors
````

2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor:

```bash
npm start
```

> O servidor irá rodar em `http://localhost:3000`

## 📌 Endpoints da API

### 🔍 Listar todos os instrutores

```
GET /instructors
```

### 🔎 Obter um instrutor por ID

```
GET /instructors/:id
```

### ➕ Criar um novo instrutor

```
POST /instructors
```

**Body (JSON):**

```json
{
  "name": "Nome do Instrutor",
  "email": "email@exemplo.com",
  "status": true
}
```

### ✏️ Atualizar todos os dados de um instrutor

```
PUT /instructors/:id
```

**Body (JSON):**

```json
{
  "name": "Novo Nome",
  "email": "novoemail@exemplo.com",
  "status": false
}
```

### 🔃 Atualizar apenas o status de um instrutor

```
PATCH /instructors/:id/status
```

**Body (JSON):**

```json
{
  "status": false
}
```

### 🗑️ Deletar um instrutor

```
DELETE /instructors/:id
```

## 🧪 Exemplo de banco de dados em memória

```js
{
  idInstructor: 4,
  instructors: [
    { id: 1, name: "Fernando", email: "fernando@gmail.com", status: true },
    { id: 2, name: "Luiz", email: "luiz@gmail.com", status: true },
    { id: 3, name: "Dani", email: "dani@gmail.com", status: true }
  ]
}
```

## 🧑‍💻 Autor

Feito por [Fernando](https://github.com/TakeruuDEV) 🚀

---

## 📝 Licença

Este projeto está sob a licença ISC.
