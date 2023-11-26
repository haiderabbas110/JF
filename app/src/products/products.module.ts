import { Module } from "@nestjs/common";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { product } from "./typeorm/entities/Product";


@Module({
    imports:[TypeOrmModule.forFeature([product])],
    controllers: [ProductsController],
    providers:[ProductsService]
})
export class ProductModule{

}