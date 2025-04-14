import { Heroi } from "../models/Heroi.js"
import { Vilao } from "../models/Vilao.js"
import { Batalha } from "../models/Batalha.js"


const criarHeroi = async (req, res) => {
    try {
        // Criar dados
        const { nome, pontosDePoder } = req.body
        if (!nome || !pontosDePoder) {
            return res.status(404).send({ mensagem: 'Dados incompletos' })
        }
        const novoHeroi = { nome, pontosDePoder }
        const heroiCriado = await Heroi.create(novoHeroi)
        res.status(201).send({ heroiCriado })
    } catch (erro) {
        res.status(500).send({ erro: 'Erro ao criar heroi' })
        console.log(erro)
    }
}

const criarVilao = async (req, res) => {
    try {
        const { nome, pontosDePoder } = req.body
        if (!nome || !pontosDePoder) {
            return res.status(404).send({ mensagem: 'Dados incompletos' })
        }
        const novoVilao = { nome, pontosDePoder }
        const dadoCriado = await Vilao.create(novoVilao)
        res.status(201).send({ mensagem: 'Vilao criado', vilao: dadoCriado })
    } catch(erro) {
        res.status(500).send({ erro: 'Erro ao criar vilao' })
        console.log(erro)
    }
}

const batalhar = async (req, res) => {
    try {
        const { id_vilao, id_heroi } = req.body
        const vilaoEncontrado = await Vilao.findByPk(id_vilao)
        const heroiEncontrado = await Heroi.findByPk(id_heroi)

        if(!vilaoEncontrado || !heroiEncontrado){
            res.status(404).send({ erro: 'Vilao ou heroi invalido'})
            return
        } 
        
        let nomeVencedor
        // se chegar aqui, é porque tem vilao e heroi encontrados

        if(vilaoEncontrado.pontosDePoder > heroiEncontrado.pontosDePoder){
            // Vilao sera o vencedor
            nomeVencedor = vilaoEncontrado.nome

            // Aumentar vitorias e derrotas de heroi e vilao
            vilaoEncontrado.vitorias++
            // vilaoEncontrado.vitorias += 1
            // vilaoEncontrado.vitorias = vilaoEncontrado.vitorias + 1
            heroiEncontrado.derrotas++

            // Devolver informação manipulada ao banco de dados (save ou update)
            await vilaoEncontrado.save()
            // await Vilao.update(vilaoEncontrado, { where: { id: id_vilao }})
            await heroiEncontrado.save()
        }

        if(vilaoEncontrado.pontosDePoder < heroiEncontrado.pontosDePoder) {
            // Heroi sera o vencedor
            nomeVencedor = heroiEncontrado.nome
            heroiEncontrado.vitorias++
            vilaoEncontrado.derrotas++
            await heroiEncontrado.save()
            await vilaoEncontrado.save()
        }

        if(vilaoEncontrado.pontosDePoder === heroiEncontrado.pontosDePoder) {
            // Empate
            nomeVencedor = 'empate'
        }

        await Batalha.create({
            id_heroi: id_heroi,
            id_vilao,
            nome_vencedor: nomeVencedor
        })

        // OPERADOR TERNARIO
        // CONDICAO ? 'VALOR SE VERDADEIRO' : 'VALOR SE FOR FALSO'

        res.status(201).send({ mensagem: `Batalha finalizada, ${nomeVencedor == 'empate' ? 'com empate' : 'e o vencedor foi ' + nomeVencedor}`})      
        
    } catch(erro) {
        res.status(500).send({ erro: 'Erro ao criar batalha' })
        console.log(erro)
    }
}

const listarBatalhas = async (req, res) => {
    try {
        const batalhas = await Batalha.findAll() 
        res.status(200).send({ batalhas}) 

    } catch(erro) {
        res.status(500).send({ erro: 'Erro ao criar batalha' })
        console.log(erro)
    }
}

const atualizarHeroi = async (req, res) => {
    try {
        // Atualizar dados
        const { nome, pontosDePoder } = req.body
        const { id } = req.params
        if (!nome || !pontosDePoder || !id) {
            return res.status(404).send({ mensagem: 'Dados incompletos' })
        }
        const heroiAtualizado = { nome, pontosDePoder }
        const heroiCriado = await Heroi.update(heroiAtualizado, { where: { id } })
        res.status(201).send({ heroiCriado })
    } catch (erro) {
        res.status(500).send({ erro: 'Erro ao atualizar herois' })
        console.log(erro)
    }
}

const excluirHeroi = async (req, res) => {
    try {
        // Excluir dados
        const { id } = req.params
        if (!id) {
            return res.status(404).send({ mensagem: 'Dados incompletos' })
        }
        const heroiExcluido = await Heroi.destroy({ where: { id } })
        res.status(200).send({ heroiExcluido })
    } catch (erro) {
        res.status(500).send({ erro: 'Erro ao atualizar herois' })
        console.log(erro)
    }
}

const listarHerois = async (req, res) => {
    try {
        // Listar dados
        const listaHerois = await Heroi.findAll()
        res.status(200).send({ listaHerois })
    } catch (erro) {
        res.status(500).send({ erro: 'Erro ao buscar herois' })
    }
}

export { listarHerois, criarHeroi, atualizarHeroi, excluirHeroi, criarVilao, batalhar, listarBatalhas } 