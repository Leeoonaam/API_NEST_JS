import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { DbModule } from 'src/db/db.module';
import { UsuarioRepository } from './usuario.repository';

@Module({
  imports: [DbModule], //precisa desse modulo para funcionar
  controllers: [UsuarioController],
  providers: [UsuarioRepository]
})
export class UsuarioModule {}
