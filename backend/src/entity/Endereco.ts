import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Cliente } from "./Cliente"

@Entity()
export class Endereco {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 9, type: "char", unique: true })
    cep: string

    @Column({ length: 50, default: ""})
    complemento: string

    @Column({ length: 100, nullable: false })
    bairro: string

    @Column({ length: 100, nullable: false })
    localidade: string

    @Column({ length: 2, type: "char"})
    uf: string

    @OneToMany(() => Cliente, cliente => cliente.endereco)
    cliente: Cliente[]
}