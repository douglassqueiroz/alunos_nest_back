import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  ParseIntPipe,
  Post,
  Put
} from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm';
import { Aluno } from 'src/models/aluno.model';
import { AlunoSchema } from 'src/schemas/aluno.schema';
import { Repository } from 'typeorm';

@Controller('/aluno')
export class AlunoController {
  constructor(
    @InjectRepository(Aluno) private model: Repository<Aluno>,
  ) {}

  @Post()
  public async create(@Body() body: AlunoSchema): Promise<Aluno> {
    return this.model.save(body);
  }

  @Get(':id')
  public async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Aluno> {
    const aluno = await this.model.findOne({ where: { id } });

    if (!aluno) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    return aluno;
  }

  @Get()
  public async getAll(): Promise<Aluno[]> {
    return this.model.find();
  }

  @Put(':id')
  public async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: AlunoSchema,
  ): Promise<Aluno> {
    const aluno = await this.model.findOne({ where: { id } });

    if (!aluno) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.model.update({ id }, body);

    return this.model.findOne({ where: { id } });
  }

  @Delete(':id')
  public async delete(@Param('id', ParseIntPipe) id: number): Promise<string> {
    const aluno = await this.model.findOne({ where: { id } });

    if (!aluno) {
      throw new NotFoundException(`Não achei uma pessoa com o id ${id}`);
    }

    await this.model.delete(id);

    return `A pessoa com id ${id} foi deletada com sucesso`;
  }
}
