import jwt from 'jsonwebtoken'
const segredoJwt = process.env.SEGREDO_JWT

const autenticar = (req, res) => {
    const { usuario, senha } = req.body
    // Autenticação apenas para exemplo, ideal usar algo mais robusto
    if (usuario == 'ruan' && senha == '123') {
        // Criar payload do token (sem informações muito sensiveis)
        const corpo = { permissao: 'administrador' }
        // Gerar o token juntando o segredo e o corpo
        const token = jwt.sign(corpo, segredoJwt, { expiresIn: '1h' })
        res.status(201).send({ token })
    } else {
        res.status(500).send({ erro: 'Login inválido' })
    }
}

export { autenticar }