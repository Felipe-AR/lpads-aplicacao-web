import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Usuario } from "./Usuario"

@Entity()
export class Perfil {

    @PrimaryGeneratedColumn()
    id: string

    @Column({ length: 30, nullable: false })
    descricaon: string

    @CreateDateColumn()
    created_at: Date

    @UpdateDateColumn()
    updated_at: Date

    @OneToMany(() => Usuario, usuario => usuario.perfil)
    usuario: Usuario[]
}
