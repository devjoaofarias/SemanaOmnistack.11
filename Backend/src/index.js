const express = require('express');
const cours = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * Rota / Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar/Listar uma informação do backend
 * POST: Adicionar uma informação no backend
 * PUT: Alterar uma informação no backend
 * DELETE: Deletar uma informação do backend
 */

 /**
  * Tipos de parametros:
  * 
  * Query: Parametros nomeados na rota após "?"
  * Route params: Parametros utilizados para identificar recursos
  * Request body: Corpo da requisição utilizado para criar ou alterar recursos 
  */



app.listen(3333);  