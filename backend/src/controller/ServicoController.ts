import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Servico } from "../entity"

export const getServicos = async (request: Request, response: Response) => {
    const servico = await getRepository(Servico).find()
    return response.json(servico)
}

export const getServico = async (request: Request, response: Response) => {
    const { id } = request.params
    const servico = await getRepository(Servico).findOne(id)
    return response.json(servico)
}

export const saveServico = async (request: Request, response: Response) => {
    const servico = await getRepository(Servico).save(request.body)
    return response.json(servico)
}

export const updateServico = async (request: Request, response: Response) => {
    const { id } = request.params
    const servico = await getRepository(Servico).update(id, request.body)
    return response.json(servico)
}

export const deleteServico = async (request: Request, response: Response) => {
    const { id } = request.params
    const servico = await getRepository(Servico).findOne(id)
    const servicoDeleted = await getRepository(Servico).delete(id)
    if (servicoDeleted.affected === 1) {
        return response.json(servico)
    }
}