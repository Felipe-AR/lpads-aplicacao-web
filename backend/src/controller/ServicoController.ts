import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Servico } from "../entity"

class ServicoController {
    async find(_request: Request, response: Response) {
        const servico = await getRepository(Servico).find()
        return response.json(servico)
    }
    async findAll(request: Request, response: Response) {
        const { id } = request.params
        const servico = await getRepository(Servico).findOne(id)
        return response.json(servico)
    }
    async save(request: Request, response: Response) {
        const servico = await getRepository(Servico).save(request.body)
        return response.json(servico)
    }
    async update(request: Request, response: Response) {
        const { id } = request.params
        const servico = await getRepository(Servico).update(id, request.body)
        return response.json(servico)
    }
    async delete(request: Request, response: Response) {
        const { id } = request.params
        const servico = await getRepository(Servico).findOne(id)
        const servicoDeleted = await getRepository(Servico).delete(id)
        if (servicoDeleted.affected === 1) {
            return response.json(servico)
        }
    }
}

export default new ServicoController()