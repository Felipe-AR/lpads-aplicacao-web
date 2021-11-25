import { Request, Response } from "express"
import { getRepository } from "typeorm"
import { Orcamento } from "../entity"

class OrcamentoController {
    async find(request: Request, response: Response) {
        const orcamentoGet = await getRepository(Orcamento).find({ relations: ["cliente", "servicos"] })
        return response.json(orcamentoGet)
    }
    async findAll(request: Request, response: Response) {
        const { id } = request.params
        const orcamento = await getRepository(Orcamento).findOne(id, { relations: ["cliente", "servicos"] })
        return response.json(orcamento)
    }
    async save(request: Request, response: Response) {
        const orcamento = await getRepository(Orcamento).save(request.body)
        return response.json(orcamento)
    }
    async update(request: Request, response: Response) {
        const { id } = request.params
        const orcamento = await getRepository(Orcamento).update(id, request.body)
        if (orcamento.affected === 1) {
            const orcamentoUpdated = await getRepository(Orcamento).findOne(id, { relations: ["cliente"] })
            return response.json(orcamentoUpdated)
        }
    }
    async delete(request: Request, response: Response) {
        const { id } = request.params
        const orcamento = await getRepository(Orcamento).findOne(id, { relations: ["cliente"] })
        const orcamentoDeleted = await getRepository(Orcamento).delete(id)
        if (orcamentoDeleted.affected === 1) {
            return response.json({ orcamento, message: "O orcamento foi excluido com sucesso." })
        }
    }
}

export default new OrcamentoController()