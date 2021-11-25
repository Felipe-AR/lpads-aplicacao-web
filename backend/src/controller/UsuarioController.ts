import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Usuario } from "../entity/Usuario"
import * as crypto from "crypto"

export const registerUsuario = async (request: Request, response: Response) => {
    const { nome, sobrenome, email, senha } = request.body
    const usuarios = await getRepository(Usuario).count({ email })

    if (usuarios === 1) { return response.status(401).json({ error: "O e-mail já está sendo utilizado." }) }

    await getRepository(Usuario).save({
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        senha: crypto.createHash("sha512").update(senha).digest("hex")
    })

    response.json({ message: "O usuário foi cadastrado com sucesso."})
}

export const getUsuario = async (request: Request, response: Response) => {
    const { id } = request.params
    const usuario = await getRepository(Usuario).findOne(id)
    delete usuario.senha
    return response.status(200).json(usuario)
}