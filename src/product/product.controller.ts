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
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get('list/:id')
  findAll(@Res() response, @Param() params) {
    return params.id >= 3
      ? response.status(200).send('Listando produtos')
      : response.status(500).send('Não pode listar menos que 3 produtos');
  }

  @Get(':id')
  findOne(@Param() params) {
    return `Produto ${params.id}`;
  }

  @Post('create')
  @HttpCode(HttpStatus.NO_CONTENT)
  createProduct(@Body() body) {
    return body;
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
