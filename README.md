# CRUD Básico em Node.js

Este é um projeto básico de CRUD (Create, Read, Update, Delete) utilizando Node.js. Os dados são armazenados em um array em memória, sem uso de banco de dados.

## 📂 Estrutura do Projeto

```
crud_basico/
├── server.js
├── routes/
│   └── items.js
├── controllers/
│   └── itemsController.js
└── data/
    └── items.js
```

- **`server.js`**: Arquivo principal que inicia o servidor.
- **`routes/items.js`**: Define as rotas para as operações CRUD.
- **`controllers/itemsController.js`**: Contém a lógica das operações CRUD.
- **`data/items.js`**: Armazena os dados em um array.

## 🚀 Como Rodar

1. **Clone o repositório e entre na pasta do projeto:**
   ```bash
   git clone https://github.com/Fsp30/Projetos-com-Node-backend-.git
   cd Projetos-com-Node-backend-/crud_basico
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor:**
   ```bash
   node server.js
   ```

4. O servidor estará rodando em [http://localhost:3000](http://localhost:3000).

## 🔧 Funcionalidades

- **Criar um item**: `POST /items`
- **Listar todos os itens**: `GET /items`
- **Atualizar um item pelo ID**: `PUT /items/:id`
- **Deletar um item pelo ID**: `DELETE /items/:id`

## 🛠 Tecnologias Utilizadas

- Node.js
- Express.js
- UUID (para gerar IDs únicos)

---

## 📜 Licença

Este projeto é de uso livre. Sinta-se à vontade para usar e modificar conforme necessário.

