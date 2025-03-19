

const filmes = [
  { id: 1, titulo: "Rio Branco", categoria: "comedia" },
  { id: 2, titulo: "Maceió", categoria: "risadas" },

];

exports.get = (req, res, next) => {
  res.status(200).send(filmes);
};

exports.post = (req, res, next) => {
  filmes.push(req.body);
  res.status(200).json({ message: "Previsão adicionada!", dados: filmes });
};

exports.getById = (req, res) => {
  let categoria = (req.params.categoria);
  const filmesCategoria = filmes.find(f => f.categoria === categoria);

  if (filmesCategoria) {
    res.json({
      categoria: filmesCategoria.categoria
    })
  } else {
    res.json("NÃO ENCONTRADO")
  }
}

exports.delete = (req, res) => {
  let id = parseInt(req.params.id);
  const index = filmes.findIndex(f => f.id === id);

  if (index !== -1){
    filmes.splice(index, 1);
    res.json({
      message: "Filme excluido",
      id: id
    })
  } else {
    res.status(404).json({message: "NÃO ENCONTRADO"})
  }
};

exports.put = (req, res) => {
  let id = parseInt(req.params.id);
  body = req.body
  const index = filmes.findIndex(f => f.id === id);

  if (index !== -1){
    
    const novoFilme = {
      id: id,
      categoria: body.categoria,
      titulo: body.titulo

    } 

    filmes[index] = novoFilme
    res.json(filmes[index])
  } else {
    res.status(404).json({message: "NÃO FUNCIONOU"})
  }
};

