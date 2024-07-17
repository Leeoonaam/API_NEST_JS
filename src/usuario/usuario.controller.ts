import { Body, Controller, Get, Param, Post, Delete, Patch } from '@nestjs/common';
import Usuario from './usuario.entity';
import { UsuarioRepository } from './usuario.repository';

@Controller('usuario')
export class UsuarioController {

    constructor(private repo: UsuarioRepository){}

    @Post()
    async criar(@Body() usuario: Usuario){
        const novousuario = await this.repo.Criar(usuario);
        return novousuario
    }

    @Get()
    async ObterTodos(){
        const usuarios = await this.repo.ObterTodos();
        return usuarios;
    }

    @Get(':id')
    async ObterUsuarioId(@Param('id') id: string){
        try {
            const usuarios = await this.repo.ObterPorId(+id); // como recebe por string o + converte para int
            return usuarios;
        }
        catch(error){
            console.error(error)
        }
    }

    @Delete(':id')
    async deletar(@Param('id') id:string){
        await this.repo.Deletar(+id);
    }

    @Patch(':id')
    async Atualizar(@Param('id') id:string, @Body() usuario: Usuario){
        const result = await this.repo.Atualizar({...usuario, id: +id});
        return result;
    }


}
