import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { DbModule } from './db/db.module';
import { PrismaService } from './db/prisma.service';


// Define um módulo com o decorador `@Module`.
@Module({
  // A propriedade `imports` é usada para importar outros módulos que este módulo depende. 
  // Neste caso, está vazio, o que significa que não há dependências de outros módulos.
  imports: [UsuarioModule, DbModule],
  
  // A propriedade `controllers` é usada para definir os controladores deste módulo.
  // Aqui, estamos definindo `AppController` como o controlador.
  controllers: [AppController],
  
  // A propriedade `providers` é usada para definir os provedores de serviços deste módulo.
  // Aqui, estamos definindo `AppService` como o provedor de serviço.
  providers: [AppService, PrismaService],
})

// Exporta a classe `AppModule`, que é a classe do módulo principal do aplicativo.
export class AppModule {}
