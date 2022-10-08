import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ProductEntity } from './product.entity';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('')
  async findAll() {
    return await this.productService.findAll();
  }

  @Get('list/:id')
  findOne(@Param() params) {
    return ;
  }

  @Post('create')
  async createProduct(@Body() body) {
    const data: ProductEntity = await this.productService.createProduct(body)
    return data;
  }

  @Patch(':id')
  updateProduct(@Param('id') id: string, @Body() body) {
    return `Atualizando produto: ${id} - ${body.name}`;
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string, @Body() body) {
    return `Excluindo produto ${id} - ${body.name}`;
  }
}
