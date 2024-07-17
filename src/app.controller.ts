import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //faz parte da URL para realizar a requisicao
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello(); // chama a classe serviço para executar a função de retorno
  }



}
