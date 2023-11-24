import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './products.model';
import { ProductDto } from './dto/product.dto';

@Injectable()
export class ProductsService {
    products: Product[] = []

    insertProduct(createProductsDTO: ProductDto) {
        const {title, desc, price} = createProductsDTO
        const prodID = Math.random().toString();
        const newProduct = new Product(prodID, title, desc, price);
        this.products.push(newProduct);
        return newProduct;
    }

    getProducts() {
        return [...this.products]
    }

    getProductByID(prodID: string) {
        const product = this.products.find((prod) => prod.id === prodID)
        if (!product) {
            throw new NotFoundException("Not found data ok");
        }
        return { ...product }
    }

    updateProduct(createProductsDTO: ProductDto) {
        const { id, title, desc, price } = createProductsDTO;
        const productIndex = this.products.findIndex((prod) => prod.id === id)
        const product = this.products[productIndex];
        if (!product) {
            throw new NotFoundException("Could not find product.");
        }

        const updateProduct = { ...product }

        if (title) {
            updateProduct.title = title;
        }

        if (desc) {
            updateProduct.description = desc;
        }

        if (price) {
            updateProduct.price = price;
        }


        this.products[productIndex] = updateProduct;


    }

}