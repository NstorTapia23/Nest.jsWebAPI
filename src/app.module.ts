import { Module } from '@nestjs/common';
import { HolamundoController } from './holamundo.controller';
@Module({
  imports: [],
  controllers: [HolamundoController],
  providers: [],
})
export class AppModule {}
