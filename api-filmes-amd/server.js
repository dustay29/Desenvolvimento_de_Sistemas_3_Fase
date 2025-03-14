const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Serve os arquivos estáticos (como HTML, JS, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
