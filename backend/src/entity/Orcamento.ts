import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cliente } from "./Cliente"
import { Servico } from "./Servico"

@Entity()
export class Orcamento {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false, default: false })
    situacao: boolean

    @CreateDateColumn()
    created_at: Date

    @ManyToOne(() => Cliente, cliente => cliente.orcamento, { nullable: false })
    cliente: Cliente

    @ManyToMany(() => Servico, servico => servico.orcamentos)
    @JoinTable()
    servicos: Servico[]
}