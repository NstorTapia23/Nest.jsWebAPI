import { Controller, Get } from '@nestjs/common';
@Controller()
export class HolamundoController {
  @Get()
  holamundo(): string {
    return 'Hola Mundo desde NestJS';
  }
}
