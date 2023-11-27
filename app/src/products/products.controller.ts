import { Controller, Post, Body, Get, Param, Patch, Delete, NotFoundException } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { ProductDto } from "./dto/product.dto";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Post()

    addProduct(@Body() createProductsDTO: ProductDto) {
        const generatedID = this.productsService.insertProduct(createProductsDTO);
        return { id: generatedID }
    }

    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }

    @Get(':id')
    async getProductByID(@Param('id') id: number) {
        return this.productsService.getProductByID(id);
    }

    @Patch(":id")
    async updateProduct(@Param('id') prodID: number, @Body() createProductsDTO: ProductDto) {
        this.productsService.updateProduct(prodID, createProductsDTO);
        return null;
    }

    @Delete(":id")
    async deleteProduct(@Param('id') prodID: number) {
        const prod = await this.productsService.getProductByID(prodID);

        if (!prod) {
            throw new NotFoundException("Not found product you searching.")
        }
        return this.productsService.deleteProduct(prodID);

    }

}