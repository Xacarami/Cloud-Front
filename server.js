const express = require('express');
const path = require('path');
const db = require('./db');

const app = express();
app.use(express.json());
app.use(express.static('public'));

app.post('/chamado', async (req, res) => {
  const { nome, descricao } = req.body;
  await db.query("INSERT INTO chamados (nome, descricao) VALUES (?, ?)", [nome, descricao]);
  res.send({ sucesso: true });
});

app.get('/chamados', async (req, res) => {
  const [rows] = await db.query("SELECT * FROM chamados");
  res.json(rows);
});

app.listen(process.env.PORT || 3000);
