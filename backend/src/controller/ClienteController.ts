import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Cliente, Endereco } from "../entity"

export const getClientes = async (request: Request, response: Response) => {
    const cliente = await getRepository(Cliente).find({ relations: ["endereco"] })
    return response.json(cliente)
}

export const getCliente = async (request: Request, response: Response) => {
    const { id } = request.params
    const cliente = await getRepository(Cliente).findOne(id, { relations: ["endereco"] })
    return response.json(cliente)
}

export const saveCliente = async (request: Request, response: Response) => {
    const { endereco, ...body } = request.body

    const enderecos = await getRepository(Endereco).find(endereco)
    if (enderecos.length === 1) {
        body.endereco = enderecos[0]
    } else {
        body.endereco = endereco
        await getRepository(Endereco).save(endereco)
    }

    const cliente = await getRepository(Cliente).save(request.body)
    return response.json(cliente)
}

export const updateCliente = async (request: Request, response: Response) => {
    const { id } = request.params
    const { endereco, ...body } = request.body

    if (endereco !== undefined) {
        const enderecos = await getRepository(Endereco).find(endereco)
        if (enderecos.length === 1) {
            body.endereco = enderecos[0]
        } else {
            body.endereco = endereco
            await getRepository(Endereco).save(endereco)
        }
    }

    const cliente = await getRepository(Cliente).update(id, body)
    if (cliente.affected === 1) {
        const clienteUpdated = await getRepository(Cliente).findOne(id, { relations: ["endereco"] })
        return response.json(clienteUpdated)
    }
}

export const deleteCliente = async (request: Request, response: Response) => {
    const { id } = request.params
    const cliente = await getRepository(Cliente).findOne(id)
    const clienteDeleted = await getRepository(Cliente).delete(id)
    if (clienteDeleted.affected === 1) {
        return response.json({ cliente, message: "O cliente foi removido com sucesso." })
    }
}