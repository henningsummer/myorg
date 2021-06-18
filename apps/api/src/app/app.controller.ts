import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('todos')
  getData() {
    return this.appService.getData();
  }

  @Post('addTodo') //Tem que ser o mesmo criado no service, nomes iguais
  addTodo(){
    return this.appService.addTodo();
  }
}
