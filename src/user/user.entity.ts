import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'users'})
export class UserEntity {
  @PrimaryGeneratedColumn({name: 'id'})
  public id: number

  @Column({name: 'name', unique: false, nullable: false})
  public name: string

  @Column({name: 'email', unique: true, nullable: false})
  public email: string

  @Column({name: 'birth_date', unique: false, nullable: false})
  public birthDate: string

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp',
    unique: false,
    nullable: false
  })
  public createdAt: string

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp',
    unique: false,
    nullable: false
  })
  public updatedAt: string
}