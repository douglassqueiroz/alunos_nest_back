import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Aluno } from './models/aluno.model';
import { AlunoModule } from './modules/aluno.module';

@Module({
  imports: [AlunoModule, TypeOrmModule.forRoot({
    type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'alunoback',
      entities: [Aluno],
      synchronize: true,
      logging: true,
  })],
})
export class AppModule {}
