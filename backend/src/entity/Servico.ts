import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Servico {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 50, nullable: false })
    descricao: string

    @Column({nullable: false, type: "float"})
    valor: number

}