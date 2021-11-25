import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Orcamento } from "."

@Entity()
export class Servico {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 50, nullable: false })
    descricao: string

    @Column({length: 50})
    tipo: string

    @Column({nullable: false, type: "float"})
    valor: number

    @ManyToMany(() => Orcamento, orcamento => orcamento.servicos)
    orcamentos: Orcamento[]
}