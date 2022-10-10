import { Column, CreateDateColumn, Double, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({name: 'products'})
export class ProductEntity {
  @PrimaryGeneratedColumn({name: 'id'})
  public id: number

  @Column({name: 'name', unique: false, nullable: false})
  public name: string

  @Column({name:'price', unique: false, nullable: false, type: 'double'})
  public price: Number

  @Column({name:'code', unique: false, nullable: true, type: 'integer'})
  public code: Number

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