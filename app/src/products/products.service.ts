import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
import { ProductDto } from './dto/product.dto';
import { product } from './typeorm/entities/product';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
    constructor(
        @InjectRepository(product)
        private readonly productRepository: Repository<product>,
        private readonly entityManger: EntityManager) {


    }

    async insertProduct(createProductsDTO: ProductDto) {
        const item = new product(createProductsDTO);
        await this.entityManger.save(item);
    }

    async getProducts() {
        return this.productRepository.find();

    }

    async getProductByID(id: number) {
        const product = this.productRepository.findOneBy({ id })
        return product
    }

    async updateProduct(id: number, prod: Partial<product>): Promise<product> {
        await this.productRepository.update(id, prod);
        return this.productRepository.findOne({ where: { id } });

    }

    async deleteProduct(id: number) {
        await this.productRepository.delete(id);
    }

}