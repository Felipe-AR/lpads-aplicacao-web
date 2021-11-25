import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Orcamento } from "../entity"

export const getOrcamentos = async (request: Request, response: Response) => {
    const orcamentoGet = await getRepository(Orcamento).find({ relations: ["cliente", "servicos"] })
    return response.json(orcamentoGet)
}

export const getOrcamento = async (request: Request, response: Response) => {
    const { id } = request.params
    const orcamento = await getRepository(Orcamento).findOne(id, { relations: ["cliente", "servicos"] })
    return response.json(orcamento)
}

export const saveOrcamento = async (request: Request, response: Response) => {
    const orcamento = await getRepository(Orcamento).save(request.body)
    return response.json(orcamento)
}

export const updateOrcamento = async (request: Request, response: Response) => {
    const { id } = request.params
    const orcamento = await getRepository(Orcamento).update(id, request.body)
    if (orcamento.affected === 1) {
        const orcamentoUpdated = await getRepository(Orcamento).findOne(id, { relations: ["cliente"] })
        return response.json(orcamentoUpdated)
    }
}

export const deleteOrcamento = async (request: Request, response: Response) => {
    const { id } = request.params
    const orcamento = await getRepository(Orcamento).findOne(id, { relations: ["cliente"] })
    const orcamentoDeleted = await getRepository(Orcamento).delete(id)
    if (orcamentoDeleted.affected === 1) {
        return response.json({ orcamento, message: "O orcamento foi excluido com sucesso." })
    }
}