import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './products/products.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { product } from './products/typeorm/entities/product';
import { config } from './config/config';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { user } from './users/typeorm/entities/user';

@Module({
  imports: [
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ProductModule,
    TypeOrmModule.forRoot({
      ...config,
      entities: [product, user],
      synchronize: true,
    }),
    UsersModule,],
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
