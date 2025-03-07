const database = require('../database');

exports.getByName = (req, res) => {
    let nome = (req.params.id);
    const query = "SELECT * FROM cervejaria WHERE LOWER(nome) LIKE LOWER($1) ORDER BY abv DESC";

    const values = [`%${nome}%`];

    database.query(query, values)
        .then((resultado) => {
            if (resultado.rows.length > 0) {
                res.status(200).json({ mensagem: "Evento encontrado!", evento: resultado.rows });
            } else {
                res.status(404).json({ mensagem: "Evento não encontrado!" });
            }
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

exports.getByNacionalidade = (req, res) => {
    let nacionalidade = (req.params.id);
    const query = "SELECT * FROM cervejaria WHERE LOWER(nacionalidade) LIKE LOWER($1) ORDER BY abv DESC";

    const values = [`%${nacionalidade}%`];

    database.query(query, values)
        .then((resultado) => {
            if (resultado.rows.length > 0) {
                res.status(200).json({ mensagem: "Evento encontrado!", evento: resultado.rows });
            } else {
                res.status(404).json({ mensagem: "Evento não encontrado!" });
            }
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

exports.getByTipo = (req, res) => {
    let tipo = (req.params.id);
    const query = "SELECT * FROM cervejaria WHERE LOWER(tipo) LIKE LOWER($1) ORDER BY abv DESC";

    const values = [`%${tipo}%`];

    database.query(query, values)
        .then((resultado) => {
            if (resultado.rows.length > 0) {
                res.status(200).json({ mensagem: "Evento encontrado!", evento: resultado.rows });
            } else {
                res.status(404).json({ mensagem: "Evento não encontrado!" });
            }
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};

exports.getByABV = (req, res) => {
    database.query("SELECT * FROM cervejaria ORDER BY abv DESC")
        .then((resultado) => {
            if (resultado.rows.length > 0) {
                res.status(200).json({ mensagem: "Evento encontrado!", evento: resultado.rows });
            } else {
                res.status(404).json({ mensagem: "Evento não encontrado!" });
            }
        })
        .catch((erro) => {
            res.status(500).send({ erro: erro });
        });
};
