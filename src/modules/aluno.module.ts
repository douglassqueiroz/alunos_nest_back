import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AlunoController } from 'src/controllers/aluno.controller';
import { Aluno } from 'src/models/aluno.model';

@Module({
  imports: [TypeOrmModule.forFeature([Aluno])],
  controllers: [AlunoController],
})
export class AlunoModule {}
