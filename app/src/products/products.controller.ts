import { Controller, Post, Body, Get, Param, Patch } from "@nestjs/common";
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
    getProductByID(@Param('id') ProdId: string) {
        return this.productsService.getProductByID(ProdId);
    }

    @Patch(":id")
    updateProduct(@Param('id') prodID: string, @Body() createProductsDTO: ProductDto){
        createProductsDTO.id =  prodID;
        this.productsService.updateProduct(createProductsDTO);
        return null;
    }

}