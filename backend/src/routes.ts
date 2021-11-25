import { Router } from "express"

import ClienteController from "./controller/ClienteController"
import OrcamentoController from "./controller/OrcamentoController"
import ServicoController from "./controller/ServicoController"

import { registerUsuario } from "./controller/UsuarioController"

const routes = Router()

// Rota para registro de usuários
routes.post("/register/", registerUsuario)

// Rota para a manipulação de clientes
routes.get("/cliente/", ClienteController.find)
routes.get("/cliente/:id", ClienteController.findAll)
routes.post("/cliente/", ClienteController.save)
routes.put("/cliente/:id", ClienteController.update)
routes.patch("/cliente/:id", ClienteController.update)
routes.delete("/cliente/:id", ClienteController.delete)

// Rota para a manipulação dos orcamentos
routes.get("/orcamento/", OrcamentoController.find)
routes.get("/orcamento/:id", OrcamentoController.findAll)
routes.post("/orcamento/", OrcamentoController.save)
routes.put("/orcamento/:id", OrcamentoController.update)
routes.patch("/orcamento/:id", OrcamentoController.update)
routes.delete("/orcamento/:id", OrcamentoController.delete)

// Rota para a manipulação dos serviços
routes.get("/servico/", ServicoController.find)
routes.get("/servico/:id", ServicoController.findAll)
routes.post("/servico/", ServicoController.save)
routes.put("/servico/:id", ServicoController.update)
routes.patch("/servico/:id", ServicoController.update)
routes.delete("/servico/:id", ServicoController.delete)

export default routes
