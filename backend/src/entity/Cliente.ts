import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Endereco, Orcamento } from "./index"

@Entity()
export class Cliente {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 100, nullable: false})
    nome: string

    @Column({ nullable: false })
    idade: number

    @Column({nullable: false})
    numero: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => Endereco, endereco => endereco.cliente)
    endereco: Endereco

    @OneToMany(() => Orcamento, orcamento => orcamento.cliente)
    orcamento: Orcamento[]
}