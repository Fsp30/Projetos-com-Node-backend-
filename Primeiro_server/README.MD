# Meu Primeiro Servidor com Express

Este projeto é um exemplo simples de um servidor criado com o framework **Express.js**. Ele demonstra como configurar um servidor básico e responder a requisições HTTP.

## Tecnologias Utilizadas

- Node.js
- Express.js

## Como Executar o Projeto

1. Certifique-se de ter o **Node.js** instalado em sua máquina.
   
2. Instale as dependências do projeto:
   ```bash
   npm install express
   ```

3. Execute o servidor:
   ```bash
   npm run dev
   ```

4. O servidor estará rodando em:
   ```
   http://localhost:3000
   ```

## Funcionalidade Principal

- **Rota GET /**: Retorna uma mensagem de texto indicando que o servidor está funcionando.

## Código do Servidor

```javascript
import express from 'express';
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  return 'Primeiro servidor do projeto 😁';
});

app.listen(3000, () => {
  console.log('Servidor na porta http://localhost:3000');
});
```

---

