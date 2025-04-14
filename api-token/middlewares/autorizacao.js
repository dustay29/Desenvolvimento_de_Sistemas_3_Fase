import jwt from 'jsonwebtoken'
const segredoJwt = process.env.SEGREDO_JWT

const verificarToken = (req, res, next) => {
    try {
        const { token } = req.body
        // Validar token
        const validacao = jwt.verify(token, segredoJwt)
        // Token valido
        // Verificar nivel de permissao
        console.log('validacao', validacao)  
        if(validacao.permissao == 'administrador') {
            // É administrador, então pode ir pro controller (next)
            next()
        } else {
            res.status(401).send({ mensagem: 'token valido, mas sem permissoes' })
        }
    } catch(erro) {
        // Token invalido
        console.log('erro', erro)
        // 401 - unauthorized
        res.status(401).send({ mensagem: 'token invalido' })
    } 
}

export { verificarToken }