import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import Usuario from './usuario.entity';


@Injectable()
export class UsuarioRepository {

    constructor(private prismaService: PrismaService){}
    //operações basicas
    async ObterTodos(){
        return this.prismaService.usuario.findMany();
    }

    async ObterPorId(id:number){
        return this.prismaService.usuario.findUnique({
            where:{
                id,
            },
        });
    }

    async Criar(usuario: Usuario){
        return this.prismaService.usuario.create({
            data: usuario as any,
        });
    }

    async Atualizar(usuario: Usuario){

        if(!usuario.id) throw new Error('Usuario sem ID')

        return this.prismaService.usuario.update({
            where:{
                id: usuario.id,
            },
            data: usuario as any,
        });
    }

    async Deletar(id: number){
        return this.prismaService.usuario.delete({
            where:{
                id,
            },
        });
    }
}

