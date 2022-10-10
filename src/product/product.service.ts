import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>
  ){}

  public async createProduct(product): Promise<ProductEntity>{
    try{
      return await this.productRepository.save(product)
    } catch{
      throw new Error("Erro ao criar o produto!");
      
    }
  }

  public async findAll(){
    return await this.productRepository.findAndCount();
  }

  public async editProduct(product){
    return await this.productRepository.createQueryBuilder('products').update('products').set(product)
    .where("id = :id", {id: product.id}).execute()
  }
}
