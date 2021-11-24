import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cliente } from "./Cliente"
import { Servico } from "./Servico"

@Entity()
export class Orcamento {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    situacao: boolean

    @ManyToOne(() => Cliente, cliente => cliente.orcamento, { nullable: false })
    cliente: Cliente

    @ManyToMany(() => Servico)
    @JoinTable()
    servicos: Servico[]
}