import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, UpdateDateColumn } from "typeorm"
import { Perfil } from "./Perfil"

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 50, nullable: false})
    nome: string

    @Column({ length: 50, nullable: false })
    sobrenome: string

    @Column({ length: 100, nullable: false, unique: true })
    email: string

    @Column({ length: 256, nullable: false })
    senha: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @ManyToOne(() => Perfil, perfil => perfil.usuario)
    perfil: Perfil

}
