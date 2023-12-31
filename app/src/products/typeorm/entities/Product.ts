import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class product {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    price: number

    constructor(prod:Partial<product>){
        Object.assign(this,prod);
    }


}