import { Column, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class user {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column()
    first_name: string

    @Column()
    last_name: string

    @Column()
    username: string

    @Column()
    email: string

    @Column()
    password: string

    @Column()
    reset_token:string

    @Column()
    reset_token_expiry: string

    @Column()
    is_active: boolean

    @Column("int")
    role: number


    constructor(prod: Partial<user>) {
        Object.assign(this, prod);
    }
}