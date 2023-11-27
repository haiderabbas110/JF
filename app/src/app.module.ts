import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product } from './products/typeorm/entities/Product';
import { config } from './config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductModule,
    TypeOrmModule.forRoot({
      ...config,
      entities: [product],
      synchronize: true,
    }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

  constructor() {
    console.log(
      { ...config }
    )
  }
}
